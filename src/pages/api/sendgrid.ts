// import { isEnvProd } from '@/src/components/JobsDashboard/JobPostCreateUpdate/utils';

import { isEnvProd } from '@/src/components/JobsDashboard/JobPostCreateUpdate/utils';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export type BodyParmsSendgrid = {
  fromEmail: string;
  fromName: string;
  subject: string;
  text: string;
  email: string;
};

export default async function handler(req, res) {
  let details = req.body as BodyParmsSendgrid;

  try {
    const msg: any = {
      to: details.email, // Change to your recipient
      from: {
        email: details.fromEmail ?? 'admin@aglinthq.com',
        name: details.fromName ?? 'Aglint Admin',
      }, // Change to your verified sender
      subject: details.subject,
      html: details.text,
    };
    if (
      !details.email.toLowerCase().includes('@aglinthq.com') &&
      !isEnvProd()
    ) {
      msg.to = [
        'dileep@aglinthq.com',
        'chinmai@aglinthq.com',
        'ravi@aglinthq.com',
      ];
    }

    await sgMail
      .send({
        ...msg,
      })
      .then(() => {
        return res.status(200).json({ data: 'Email sent' });
      })
      .catch((error) => {
        return res.status(200).json({ data: { error } });
      });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
