import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';
import { zohoClient } from '@/lib/zoho-client';

export async function GET(request: Request) {
  // Optional: verify cron authorization header here

  try {
    const pendingSnapshot = await db.collection('crmSubmissions')
      .where('status', '==', 'pending')
      .where('retryCount', '<', 5)
      .limit(10)
      .get();

    if (pendingSnapshot.empty) {
      return NextResponse.json({ success: true, message: 'No pending submissions' });
    }

    const results = [];

    for (const doc of pendingSnapshot.docs) {
      const data = doc.data();
      const { name, email, phone, businessName, topic, message, priority, riderCount, branchCount, referenceNumber } = data;

      try {
        let zohoModule = 'Leads';
        let zohoRecordId = null;

        if (topic === 'Request a demo' || topic === 'Pricing question' || topic === 'Partnership' || topic === 'General enquiry') {
          zohoModule = 'Leads';
          const existingLeads = await zohoClient.searchRecords('Leads', `(Email:equals:${email})`);
          
          if (existingLeads.length > 0) {
            zohoRecordId = existingLeads[0].id;
            await zohoClient.createRecord('Notes', {
              Parent_Id: zohoRecordId,
              se_module: 'Leads',
              Note_Title: `New Website Enquiry: ${topic}`,
              Note_Content: `Reference: ${referenceNumber}\nMessage: ${message}`
            });
          } else {
            const newLead = await zohoClient.createRecord('Leads', {
              Last_Name: name,
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
          const existingContacts = await zohoClient.searchRecords('Contacts', `(Email:equals:${email})`);
          let contactId = existingContacts.length > 0 ? existingContacts[0].id : null;

          if (!contactId) {
            const newContact = await zohoClient.createRecord('Contacts', {
              Last_Name: name,
              Email: email,
              Phone: phone
            });
            contactId = newContact.details.id;
          }

          const newCase = await zohoClient.createRecord('Cases', {
            Subject: `${topic} - ${businessName || name}`,
            Case_Origin: 'Web',
            Type: topic === 'Complaint' ? 'Complaint' : 'Query',
            Priority: priority,
            Related_To: contactId,
            Description: `Reference: ${referenceNumber}\nMessage: ${message}`,
            Reference_Number: referenceNumber
          });
          zohoRecordId = newCase.details.id;
        }

        await doc.ref.update({
          status: 'synced',
          zohoModule,
          zohoRecordId,
          syncedAt: new Date().toISOString()
        });

        results.push({ id: doc.id, status: 'success' });

      } catch (error: any) {
        await doc.ref.update({
          retryCount: (data.retryCount || 0) + 1,
          lastError: error.message,
          lastAttempt: new Date().toISOString()
        });
        results.push({ id: doc.id, status: 'failed', error: error.message });
      }
    }

    return NextResponse.json({ success: true, processed: results.length, results });
  } catch (error: any) {
    console.error('Retry cron error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
