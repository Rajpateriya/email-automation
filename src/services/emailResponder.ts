import { google } from 'googleapis';
import { oauth2Client } from '../config/oauth';
import { Client } from '@microsoft/microsoft-graph-client';
// import { msalClient } from '../config/oauth';
import { generateEmailReply } from './geminiService';

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
// const outlookClient = Client.init({
//   authProvider: async (done) => {
//     const token = await msalClient.acquireTokenByClientCredential({
//       scopes: ['https://graph.microsoft.com/.default'],
//     });
//     done(null, token);
//   },
// });

export const sendGmailReply = async (emailId: string, content: string) => {
  const reply = await generateEmailReply(content);

  await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: Buffer.from(reply).toString('base64'),
      threadId: emailId,
    },
  });
};

// export const sendOutlookReply = async (emailId: string, content: string) => {
//   const reply = await generateEmailReply(content);

//   await outlookClient.api(`/me/messages/${emailId}/reply`).post({ comment: reply });
// };
