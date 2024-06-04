import { NextResponse } from 'next/server';
import {
  ClientError,
  MailArgValidationError,
} from '../../../utils/apiUtils/customErrors';
import { getEmails } from '../../../utils/apiUtils/get-emails';
import { renderEmailTemplate } from '../../../utils/apiUtils/renderEmailTemplate';
import { sendMail } from '../../../config/sendgrid';
import fetchTemplate from '../../../utils/apiUtils/get-template';
import CandidateInviteConfirmation from '../../../utils/email/candidate-invite-confirmation/fetch';
import type {
  FilledPayload,
  MeetingDetails,
} from '../../../utils/types/apiTypes';

interface ReqPayload {
  session_id: string[];
  application_id: string;
  schedule_id: string;
  filter_id: string;
}
interface DataPayload {
  recipient_email: string;
  mail_type: string;
  recruiter_id: string;
  companyLogo: string;
  payload: {
    '[companyName]': string;
    '[firstName]': string;
    '[jobTitle]': string;
    'meetingLink': string;
    'meetingDetails': MeetingDetails[];
  };
}

export async function POST(req: Request) {
  const { session_id, application_id, schedule_id, filter_id }: ReqPayload =
    await req.json();

  try {
    // if(!api_key)  throw new ClientError("api_key not found",401)
    // if( api_key !== API_KEY)  throw new ClientError("invalid api Key",401)

    if (!session_id) {
      throw new ClientError('session_id attribute missing', 400);
    }

    if (!application_id) {
      throw new ClientError('application_id attribute missing', 400);
    }
    if (!filter_id) {
      throw new ClientError('filter_id is missing', 400);
    }

    if (!schedule_id) {
      throw new ClientError('schedule_id is missing', 400);
    }

    const data: DataPayload = await CandidateInviteConfirmation(
      session_id,
      application_id,
      schedule_id,
      filter_id,
    );

    const filled_body: FilledPayload = await fetchTemplate(
      data.recruiter_id,
      data.mail_type,
      data.payload,
    );
    filled_body.meetingDetails = data.payload.meetingDetails;
    filled_body.meetingLink = data.payload.meetingLink;
    filled_body.companyLogo = data.companyLogo;
    const { emails } = await getEmails();

    const emailIdx = emails.findIndex((e) => e === data.mail_type);

    if (emailIdx === -1)
      throw new ClientError(
        `${data.mail_type} does not match any mail_type`,
        400,
      );

    const { html, subject } = await renderEmailTemplate(
      emails[emailIdx],
      filled_body,
    );
    await sendMail({ email: data.recipient_email, html, subject });
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
          error: `${e.name}: mail_type:candidate_invite_confirmation,  ${e.message}`,
        },
        {
          status: 400,
        },
      );
    }
    if (e) {
      return NextResponse.json(
        {
          error: `${e.name}: mail_type:candidate_invite_confirmation,  ${e.message}`,
        },
        {
          status: 500,
        },
      );
    }
  }
}

// {
//   "session_id": [
//     "5e7953c5-3e56-4d89-9857-29c34b55ce9d",
//     "f5053399-1998-4b43-8ba5-801db1018e27"
//   ],
//   "application_id": "0ab5542d-ae98-4255-bb60-358a9c8e0637",
//   "schedule_id":"74559de0-2bc8-4028-a748-a7eae2f68182",
//   "filter_id":"6e76d21f-7b7f-49c9-9398-b74dde1cedf1"
// }
