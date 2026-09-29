import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';
import { zohoClient } from '@/lib/zoho-client';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Basic Validation
    const { name, email, phone, businessName, topic, message, priority, riderCount, branchCount } = body;
    
    if (!name || !email || !topic) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Generate Reference Number
    const prefix = topic === 'Complaint' ? 'TRX-C' : 'TRX';
    const randomId = Math.floor(100000 + Math.random() * 900000);
    const referenceNumber = `${prefix}-${randomId}`;

    // 3. Write to Firestore as Pending
    const submissionRef = db.collection('crmSubmissions').doc();
    const submissionData = {
      referenceNumber,
      name,
      email,
      phone: phone || null,
      businessName: businessName || null,
      topic,
      message: message || '',
      priority: priority || 'Medium',
      riderCount: riderCount || null,
      branchCount: branchCount || null,
      status: 'pending',
      createdAt: new Date().toISOString(),
      retryCount: 0,
    };

    await submissionRef.set(submissionData);

    // 4. Try pushing to Zoho immediately
    try {
      let zohoModule = 'Leads';
      let zohoRecordId = null;

      if (topic === 'Request a demo' || topic === 'Pricing question' || topic === 'Partnership' || topic === 'General enquiry') {
        zohoModule = 'Leads';
        
        // Deduplicate: Search Leads by email
        const existingLeads = await zohoClient.searchRecords('Leads', `(Email:equals:${email})`);
        
        if (existingLeads.length > 0) {
          zohoRecordId = existingLeads[0].id;
          // Just add a Note to existing Lead
          await zohoClient.createRecord('Notes', {
            Parent_Id: zohoRecordId,
            se_module: 'Leads',
            Note_Title: `New Website Enquiry: ${topic}`,
            Note_Content: `Reference: ${referenceNumber}\nMessage: ${message}\nRider Count: ${riderCount}`
          });
        } else {
          // Create new Lead
          const newLead = await zohoClient.createRecord('Leads', {
            Last_Name: name, // Zoho requires Last Name
            Email: email,
            Phone: phone,
            Company: businessName || 'Unknown Company',
            Lead_Source: 'Website',
            Submission_Topic: topic,
            Description: `Reference: ${referenceNumber}\nMessage: ${message}`,
            Rider_Count: riderCount,
            Branch_Count: branchCount
          });
          zohoRecordId = newLead.details.id;
        }

      } else if (topic === 'Existing account support' || topic === 'Complaint') {
        zohoModule = 'Cases';
        
        // Find existing Contact by email
        const existingContacts = await zohoClient.searchRecords('Contacts', `(Email:equals:${email})`);
        let contactId = existingContacts.length > 0 ? existingContacts[0].id : null;

        if (!contactId) {
          // Create Contact if not found
          const newContact = await zohoClient.createRecord('Contacts', {
            Last_Name: name,
            Email: email,
            Phone: phone
          });
          contactId = newContact.details.id;
        }

        // Create Case linked to Contact
        const newCase = await zohoClient.createRecord('Cases', {
          Subject: `${topic} - ${businessName || name}`,
          Case_Origin: 'Web',
          Type: topic === 'Complaint' ? 'Complaint' : 'Query',
          Priority: priority,
          Related_To: contactId, // Link to Contact
          Description: `Reference: ${referenceNumber}\nMessage: ${message}`,
          Reference_Number: referenceNumber
        });
        zohoRecordId = newCase.details.id;
      }

      // Update Firestore to Synced
      await submissionRef.update({
        status: 'synced',
        zohoModule,
        zohoRecordId,
        syncedAt: new Date().toISOString()
      });

    } catch (zohoError: any) {
      console.error('Zoho Sync Failed on initial submission, will retry later:', zohoError.message);
      // Status remains 'pending', retry cron will pick it up
    }

    // Return success to client immediately, even if Zoho failed
    return NextResponse.json({ 
      success: true, 
      referenceNumber,
      message: 'Submission received'
    });

  } catch (error: any) {
    console.error('Submission error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
