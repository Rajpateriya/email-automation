import { Client } from '@microsoft/microsoft-graph-client';
import { msalClient } from '../config/oauth';

let accessToken: string | null = null;

const getToken = async () => {
  if (!accessToken) {
    const authResult = await msalClient.acquireTokenByClientCredential({
      scopes: ['https://graph.microsoft.com/.default'],
    });
    accessToken = authResult.accessToken;
  }
  return accessToken;
};

const client = Client.init({
  authProvider: async (done) => {
    const token = await getToken();
    done(null, token);
  },
});

export const fetchOutlookEmails = async () => {
  const res = await client.api('/me/mailFolders/inbox/messages').filter('isRead eq false').get();
  return res.value || [];
};

export const getOutlookEmail = async (id: string) => {
  const res = await client.api(`/me/messages/${id}`).get();
  return res;
};
