import { NextResponse } from 'next/server';
import * as v from 'valibot';
import { onRShadowCompleteEmailTraineeSchema } from '@aglint/shared-types/src/aglint-mail/api_schema';
import {
  ClientError,
  MailArgValidationError,
} from '../../../utils/apiUtils/customErrors';
import { sendMailFun } from '../../../utils/apiUtils/sendMail';
import { fetchUtil } from './fetch-util';

export async function POST(req: Request) {
  const req_body = await req.json();

  try {
    const parsed_body = v.parse(onRShadowCompleteEmailTraineeSchema, req_body);
    const mail_details = await fetchUtil(parsed_body);
    for (const {
      comp_email_placeholder,
      company_id,
      react_email_placeholders,
      recipient_email,
    } of mail_details) {
      // eslint-disable-next-line no-await-in-loop
      await sendMailFun({
        comp_email_placeholder,
        company_id,
        react_email_placeholders,
        recipient_email,
        api_target: 'interviewEnd_email_rShadowTraineeForMeetingAttendence',
      });
    }

    return NextResponse.json('success', {
      status: 200,
    });
  } catch (e: any) {
    console.error(e);
    if (e instanceof ClientError) {
      return NextResponse.json(
        {
          error: `${e.name} : ${e.message}`,
        },
        {
          status: e.status,
        },
      );
    }
    if (e instanceof MailArgValidationError) {
      return NextResponse.json(
        {
          error: `${e.name}: mail_type:rejection,  ${e.message}`,
        },
        {
          status: 400,
        },
      );
    }
    if (e) {
      return NextResponse.json(
        {
          error: `${e.name}: mail_type:rejection,  ${e.message}`,
        },
        {
          status: 500,
        },
      );
    }
  }
}
