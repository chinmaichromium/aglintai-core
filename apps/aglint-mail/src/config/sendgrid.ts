import { MailSenderError } from '../utils/apiUtils/customErrors';

const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY =
  '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';
sgMail.setApiKey(SENDGRID_API_KEY);

type SendMailProps = {
  email: string;
  subject: string;
  html: string;
  text?: string;
};

export const sendMail = async ({
  email,
  html,
  subject,
  text,
}: SendMailProps) => {
  if (!email || !subject || !html) {
    throw new MailSenderError('invalid email or html or subject');
  }
  const msg = {
    to: email,
    from: {
      email: 'admin@aglinthq.com',
      name: 'Aglint Admin',
    },
    subject: subject,
    text: text || undefined,
    html: html,
  };

  try {
    const resp = await sgMail.send(msg);
    const Response = resp[0];

    if (Response.statusCode >= 200 && Response.statusCode < 300) {
      return;
    } else {
      throw new MailSenderError(`mail failed to send`);
    }
  } catch (e: any) {
    console.log(e);
    throw new MailSenderError(e.message);
  }
};
