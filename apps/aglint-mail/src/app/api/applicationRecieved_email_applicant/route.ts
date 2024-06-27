import { NextResponse } from 'next/server';
import * as v from 'valibot';
import { applicationRecievedEmailApplicantSchema } from '@aglint/shared-types/src/aglint-mail/api_schema';
import { sendMailFun } from '../../../utils/apiUtils/sendMail';
import { fetchUtil } from './fetch-util';

export async function POST(req: Request) {
  const req_body = await req.json();

  try {
    const parsed_body = v.parse(
      applicationRecievedEmailApplicantSchema,
      req_body.meta,
    );
    const { filled_comp_template, react_email_placeholders, recipient_email } =
      await fetchUtil(parsed_body);

    await sendMailFun({
      filled_comp_template,
      react_email_placeholders,
      recipient_email,
    });

    return NextResponse.json('success', {
      status: 200,
    });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json(
      {
        error: `${e.name}: mail_type:application received,  ${e.message}`,
      },
      {
        status: 500,
      },
    );
  }
}

// {
//   "meta": {
//       "application_id": "13c0fff9-5d10-41f8-b077-ea0884977ab2",
//       "session_ids": [
//           "b8c7b858-8101-4282-9d2c-49bb7c4cc1ad"
//       ]
//   }
// }
