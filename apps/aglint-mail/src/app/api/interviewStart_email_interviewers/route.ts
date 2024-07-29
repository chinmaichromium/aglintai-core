import { NextResponse } from 'next/server';
import * as v from 'valibot';
import { interviewStartEmailInterviewersSchema } from '@aglint/shared-types/src/aglint-mail/api_schema';
import { sendMailFun } from '../../../utils/apiUtils/sendMail';
import { fetchUtil } from './fetch-util';

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const req_body = v.parse(interviewStartEmailInterviewersSchema, body);

    const { filled_comp_template, react_email_placeholders, recipient_email } =
      await fetchUtil(req_body);

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
