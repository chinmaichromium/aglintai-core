import { NextResponse } from 'next/server';
import { getSupabaseServer } from '../../../supabase/supabaseAdmin';
import { FetchUtilType } from '../../../types/emailfetchUtil';
import { DatabaseEnums, TargetApiSchema } from '@aglint/shared-types';
import { sendMailFun } from '../../../utils/apiUtils/sendMail';
import * as v from 'valibot';
export async function POST(req: Request) {
  const { target_api, payload } = await req.json();

  const supabaseAdmin = getSupabaseServer();

  try {
    const schema =
      TargetApiSchema[target_api as DatabaseEnums['email_slack_types']];
    if (!schema) {
      throw new Error(`Invalid target_api: ${target_api}`);
    }
    const parsed_body = v.parse(schema, payload);

    const { fetchUtil } = (await import(
      `../../../email-utils/${target_api}/fetch-util`
    )) as {
      fetchUtil: FetchUtilType<any>;
    };

    const fetched_data = await fetchUtil(supabaseAdmin, parsed_body);
    if (!Array.isArray(fetched_data.mail_data)) {
      const {
        comp_email_placeholder,
        company_id,
        job_id,
        react_email_placeholders,
        recipient_email,
        mail_attachments,
      } = fetched_data.mail_data;
      const { html, subject } = await sendMailFun({
        supabaseAdmin,
        comp_email_placeholder,
        react_email_placeholders,
        recipient_email,
        company_id,
        job_id,
        api_target: target_api,
        overridedMailSubBody: parsed_body.overridedMailSubBody,
        is_preview: parsed_body.is_preview,
        attachments: mail_attachments,
      });
      if (parsed_body.is_preview) {
        return NextResponse.json(
          { html, subject },
          {
            status: 200,
          },
        );
      }
    } else {
      for (const {
        company_id,
        comp_email_placeholder,
        react_email_placeholders,
        recipient_email,
        job_id,
        mail_attachments,
      } of fetched_data.mail_data) {
        await sendMailFun({
          supabaseAdmin,
          comp_email_placeholder,
          company_id,
          react_email_placeholders,
          recipient_email,
          api_target: 'debrief_email_interviewer',
          overridedMailSubBody: parsed_body.overridedMailSubBody,
        });
      }
    }

    return NextResponse.json('OK');
  } catch (e: any) {
    console.error(e);

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
