import { fetchGmailEmails, getGmailEmail } from './gmailService';
// import { fetchOutlookEmails, getOutlookEmail } from './outlookService';
import { analyzeEmailContent } from './geminiService';

export const processEmails = async () => {
  const gmailEmails = await fetchGmailEmails();
//   const outlookEmails = await fetchOutlookEmails();

  const emailDetails = [];

  for (const email of gmailEmails) {
    const emailData = await getGmailEmail(email.id);
    const label = await analyzeEmailContent(emailData.snippet);
    emailDetails.push({ ...emailData, label });
  }

//   for (const email of outlookEmails) {
//     const emailData = await getOutlookEmail(email.id);
//     const label = await analyzeEmailContent(emailData.body.content);
//     emailDetails.push({ ...emailData, label });
//   }

  return emailDetails;
};
