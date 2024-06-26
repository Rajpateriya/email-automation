import { google } from 'googleapis';
import { ConfidentialClientApplication } from '@azure/msal-node';

// Google OAuth setup
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// // Microsoft OAuth setup
// const msalConfig = {
//   auth: {
//     clientId: process.env.MICROSOFT_CLIENT_ID,
//     authority: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}`,
//     clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
//   },
// };

// const msalClient = new ConfidentialClientApplication(msalConfig);

export { oauth2Client };
