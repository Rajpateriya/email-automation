import dotenv from 'dotenv';
import { emailQueue } from './src/scheduler/bullmq';

const start = async () => {
  emailQueue.add('processEmails', {});
};

start();
