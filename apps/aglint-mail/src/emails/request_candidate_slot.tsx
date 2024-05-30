import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import { Parser } from 'html-to-react';
import * as React from 'react';

interface InterviewBookingConfirmationType {
  subject?: string;
  body?: string;
  companyLogo?: string;
}

// export dummy
export const dummy: InterviewBookingConfirmationType = {
  subject: 'Availability for [jobTitle] Interview',
  body: '<p>Hi [firstName],</p><p>We hope you are doing well. We would like to schedule an interview for the [jobTitle] position.</p><p>Please let us know your availability by clicking on the following link: [availabilityLink]</p><p>Looking forward to hearing from you.</p><p>Best regards,<br>[companyName] Recruitment Team</p>',
  companyLogo:
    'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/temp/aglint-black.png',
};

const companyLogo =
  'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/temp/aglint-black.png';

export const getSubject = (companyName: any) => `${companyName}`;

export function InterviewBookingConfirmation({
  subject = dummy.subject,
  body = dummy.body,
}: InterviewBookingConfirmationType) {
  const htmlParser = Parser();
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Interview Booking Confirmation</Preview>
        <Body className="bg-[#f0f0f0] font-sans  p-[20px]">
          <Container className="px-[3px] mx-auto">
            <Container className="p-[20px] pt-[40px] bg-white">
              <Img
                src={companyLogo}
                className="w-[120px] mb-[10px]"
                alt="Company logo"
              />
              <Heading className="text-[24px]  mb-[0px] text-[#2F3941]">
                {htmlParser.parse(subject)}
              </Heading>

              <Text className="">{htmlParser.parse(body)}</Text>

              <Text className="text-[#999999] text-[10px] leading-4 mt-10 ">
                If you have any queries please &nbsp;
                <Link
                  href="https://notion.so"
                  target="_blank"
                  className="text-[#337FBD] underline"
                >
                  contact support
                </Link>
                <br />
                If you’d like to unsubscribe and stop receiving emails &nbsp;
                <Link
                  href="https://notion.so"
                  target="_blank"
                  className="text-[#337FBD] underline"
                >
                  click here
                </Link>
              </Text>
            </Container>
            <Text className="flex items-center text-[10px] mx-auto w-fit text-gray-500">
              Powered By
              <Img
                src={`https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/temp/aglint-black.png`}
                className="w-[70px] mx-2 inline "
                alt="Notion's Logo"
              />
              @ 2023 Aglint Inc. All Right Reserved
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
export default InterviewBookingConfirmation;
