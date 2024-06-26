import { gmail_v1, google } from 'googleapis';
import { oauth2Client } from '../config/oauth';

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

export const fetchGmailEmails = async () => {
  const res = await gmail.users.messages.list({ userId: 'me', q: 'is:unread' });
  return res.data.messages || [];
};

export const getGmailEmail = async (id: string) => {
  const res = await gmail.users.messages.get({ userId: 'me', id });
  return res.data;
};
