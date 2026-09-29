export interface ZohoRecord {
  [key: string]: any;
}

export class ZohoClient {
  private accessToken: string | null = null;
  private tokenExpiresAt: number = 0;

  async getAccessToken(): Promise<string> {
    if (this.accessToken && Date.now() < this.tokenExpiresAt - 60000) {
      return this.accessToken;
    }

    const domain = process.env.ZOHO_ACCOUNTS_DOMAIN || 'accounts.zoho.com';
    const url = `https://${domain}/oauth/v2/token`;
    
    const params = new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      grant_type: 'refresh_token',
    });

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Failed to refresh Zoho token: ${errorText}`);
    }

    const data = await res.json();
    this.accessToken = data.access_token;
    // expires_in is usually 3600 seconds
    this.tokenExpiresAt = Date.now() + (data.expires_in * 1000);
    return this.accessToken!;
  }

  async createRecord(module: string, data: ZohoRecord): Promise<any> {
    const token = await this.getAccessToken();
    const domain = process.env.ZOHO_API_DOMAIN || 'www.zohoapis.com';
    const url = `https://${domain}/crm/v2/${module}`;

    const payload = { data: [data] };

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    
    if (!res.ok) {
      throw new Error(`Zoho API Error: ${JSON.stringify(result)}`);
    }

    return result.data[0];
  }

  async updateRecord(module: string, id: string, data: ZohoRecord): Promise<any> {
    const token = await this.getAccessToken();
    const domain = process.env.ZOHO_API_DOMAIN || 'www.zohoapis.com';
    const url = `https://${domain}/crm/v2/${module}/${id}`;

    const payload = { data: [data] };

    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Zoho-oauthtoken ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    
    if (!res.ok) {
      throw new Error(`Zoho API Error: ${JSON.stringify(result)}`);
    }

    return result.data[0];
  }

  async searchRecords(module: string, criteria: string): Promise<any[]> {
    const token = await this.getAccessToken();
    const domain = process.env.ZOHO_API_DOMAIN || 'www.zohoapis.com';
    const url = `https://${domain}/crm/v2/${module}/search?criteria=${encodeURIComponent(criteria)}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Zoho-oauthtoken ${token}`
      }
    });

    if (res.status === 204) return [];

    const result = await res.json();
    if (!res.ok) {
      throw new Error(`Zoho API Error: ${JSON.stringify(result)}`);
    }

    return result.data || [];
  }
}

export const zohoClient = new ZohoClient();
