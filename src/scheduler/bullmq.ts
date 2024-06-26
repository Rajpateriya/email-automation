import { Queue, Worker } from 'bullmq';
import { processEmails } from '../services/emailProcessor';
import { sendGmailReply ,sendOutlookReply} from '../services/emailResponder';

const emailQueue = new Queue('emailQueue');

emailQueue.add('processEmails', {});

const emailWorker = new Worker('emailQueue', async (job) => {
  const emails = await processEmails();
  for (const email of emails) {
    if (email.label === 'Interested' || email.label === 'More Information') {
      await sendGmailReply(email.id, email.snippet);
      await sendOutlookReply(email.id, email.body.content);
    }
  }
});

export { emailQueue, emailWorker };
