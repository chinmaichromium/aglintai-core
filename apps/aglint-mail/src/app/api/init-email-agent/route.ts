import { NextResponse } from 'next/server';
import InitEmailAgent from '../../../utils/email/init_email_agent/fetch';

interface ReqPayload {
  filter_id: string;
  meeting_id: string;
}

export async function POST(req: Request) {
  const { filter_id, meeting_id }: ReqPayload = await req.json();

  try {
    // if(!api_key)  throw new ClientError("api_key not found",401)
    // if( api_key !== API_KEY)  throw new ClientError("invalid api Key",401)

    const data = await InitEmailAgent(filter_id, meeting_id);
    return NextResponse.json(
      { message: 'success', data },
      {
        status: 200,
      },
    );
  } catch (e: any) {
    return NextResponse.json(
      {
        error: `${e.name}: mail_type:candidate_availability_request,  ${e.message}`,
      },
      {
        status: 400,
      },
    );
  }
}
