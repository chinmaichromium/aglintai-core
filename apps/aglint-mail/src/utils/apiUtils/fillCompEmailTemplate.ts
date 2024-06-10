import {
  DatabaseEnums,
  DatabaseTable,
  EmailTemplateAPi,
} from '@aglint/shared-types';

// TODO: fix this
export const fillCompEmailTemplate = <T extends DatabaseEnums['email_types']>(
  dynamic_fields: EmailTemplateAPi<T>['comp_email_placeholders'],
  email_template: DatabaseTable['company_email_template'],
) => {
  const updated_template = { ...email_template };

  for (const key of Object.keys(dynamic_fields)) {
    updated_template.subject = updated_template.subject.replaceAll(
      key,
      dynamic_fields[String(key)],
    );
    updated_template.body = updated_template.body.replaceAll(
      key,
      dynamic_fields[String(key)],
    );
  }

  return updated_template;
};
