import { NextResponse } from 'next/server';
import {
  ClientError,
  MailArgValidationError,
} from '../../../utils/apiUtils/customErrors';
import * as v from 'valibot';
import { sendSelfScheduleRequest_email_applicant } from '@aglint/shared-types/src/aglint-mail/api_schema';
import { dbUtil } from './fetch-util';
import { getEmails } from '../../../utils/apiUtils/get-emails';
import { renderEmailTemplate } from '../../../utils/apiUtils/renderEmailTemplate';
import sendMail from '../../../config/sendgrid';

export async function POST(req: Request) {
  const { meta } = await req.json();

  try {
    const req_body = v.parse(sendSelfScheduleRequest_email_applicant, meta);
    const { filled_comp_template, react_email_placeholders, recipient_email } =
      await dbUtil(req_body);
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
    });
    return NextResponse.json('success', {
      status: 200,
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(
      {
        error: `${e.name}: mail_type:self_scheduling_request_remainder,  ${e.message}`,
      },
      {
        status: 500,
      },
    );
  }
}

// {
//     "meeting_id": "8daab34c-9c19-445b-aa96-3b4735307414",
//     "filter_id": "71b8859d-b6c6-425e-8b1a-e97ae8bb9498"
// }
