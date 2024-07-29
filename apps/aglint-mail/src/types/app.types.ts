import type { DatabaseEnums, EmailTemplateAPi } from '@aglint/shared-types';

export type ReactTempPayload<T extends DatabaseEnums['email_slack_types']> =
  EmailTemplateAPi<T>['react_email_placeholders'] & {
    emailBody: string;
    subject: string;
  };
export interface MailPayloadType {
  body: string;
  subject: string;
}
