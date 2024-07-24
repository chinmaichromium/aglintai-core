import { NextResponse } from 'next/server';
import * as v from 'valibot';
import { onShadowCompleteEmailTraineeSchema } from '@aglint/shared-types/src/aglint-mail/api_schema';
import {
  ClientError,
  MailArgValidationError,
} from '../../../utils/apiUtils/customErrors';
import { sendMailFun } from '../../../utils/apiUtils/sendMail';
import { fetchUtil } from './fetch-util';

export async function POST(req: Request) {
  const req_body = await req.json();

  try {
    const parsed_body = v.parse(
      onShadowCompleteEmailTraineeSchema,
      req_body.meta,
    );
    const mail_details = await fetchUtil(parsed_body);

    for (let {
      filled_comp_template,
      react_email_placeholders,
      recipient_email,
    } of mail_details) {
      await sendMailFun({
        filled_comp_template,
        react_email_placeholders,
        recipient_email,
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

// {
//   "meta": {
//       "application_id": "13c0fff9-5d10-41f8-b077-ea0884977ab2"
//   }
// }
