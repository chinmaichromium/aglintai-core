import { NextResponse } from 'next/server';
import * as v from 'valibot';
import { interviewStartEmailInterviewersSchema } from '@aglint/shared-types/src/aglint-mail/api_schema';
import { ClientError } from '../../../utils/apiUtils/customErrors';
import { getEmails } from '../../../utils/apiUtils/get-emails';
import { renderEmailTemplate } from '../../../utils/apiUtils/renderEmailTemplate';
import sendMail from '../../../config/sendgrid';
import { fetchUtil } from './fetch-util';

export async function POST(req: Request) {
  const { meta } = await req.json();

  try {
    const req_body = v.parse(interviewStartEmailInterviewersSchema, meta);

    const { filled_comp_template, react_email_placeholders, recipient_email } =
      await fetchUtil(req_body);

    const { emails } = await getEmails();
    const emailIdx = emails.findIndex((e) => e === filled_comp_template.type);

    if (emailIdx === -1)
      throw new ClientError(
        `${filled_comp_template.type} does not match any mail_type`,
        400,
      );

    const { html, subject } = await renderEmailTemplate(
      filled_comp_template.type,
      react_email_placeholders,
    );

    await sendMail({
      email: recipient_email,
      html,
      subject,
      text: html,
      fromName: filled_comp_template.from_name,
    });

    return NextResponse.json('success', {
      status: 200,
    });
  } catch (e: any) {
    console.error(e);
    if (e) {
      return NextResponse.json(
        {
          error: `${e.name}:  ${e.message}`,
        },
        {
          status: 500,
        },
      );
    }
  }
}

// {
//   "meta":{
//       "application_id":"13c0fff9-5d10-41f8-b077-ea0884977ab2",
//       "meeting_id":"5f5d9cfc-4b85-4d69-8d50-a334d342b4e8",
//       "recruiter_user_id":"3521d240-eb11-4ae5-ac27-d4f4e2ac5ea5"
//   }
// }
