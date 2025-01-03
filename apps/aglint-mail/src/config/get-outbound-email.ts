import { get } from '@vercel/edge-config';

export const getOutboundEmail = async (email: string) => {
  let allowed_outbound_emails = await get<string[]>('allowlist-candidates');
  allowed_outbound_emails = (allowed_outbound_emails ?? []).map((e) =>
    e.toLocaleLowerCase(),
  );
  // console.log(allowed_outbound_emails);
  if (allowed_outbound_emails.includes(email.toLowerCase())) {
    return email;
  }
  const sudo_cand_email = await get<string>('sudo-candidate');
  return sudo_cand_email;
};
