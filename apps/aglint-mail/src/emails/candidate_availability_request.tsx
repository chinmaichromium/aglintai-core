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
  meetingDetails: {
    type?: string;
    platform?: string;
    duration?: string;
    link?: string;
  };
}

// export dummy
export const dummy: InterviewBookingConfirmationType = {
  body: '<p>You have selected for the Interview at [companyName]</p><p>Hi [firstName], Choose a time slot that suits you best and take the first step towards joining our team. We look forward to meeting you!</p><h4>[scheduleName]</h4><p>[pickYourSlotLink]</p><p>Best regards,</p><p>[companyName] Recruitment Team</p>',
  companyLogo:
    'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/temp/aglint-black.png',
  meetingDetails: {
    type: '<strong>Personality and cultural fit</strong>',
    platform: 'Google meet',
    duration: '45 minutes',
    link: 'https://example.com',
  },
};

// export get subject
export const getSubject = (companyName: any) => `${companyName}`;

export function InterviewBookingConfirmation({
  body = dummy.body,
  meetingDetails = dummy.meetingDetails,
  companyLogo = dummy.companyLogo,
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

              <Text className="">{htmlParser.parse(body)}</Text>

              <Container
                style={{
                  border: '1px solid #E9EBED',
                  padding: '10px 20px',
                }}
                className="my-8 rounded-md "
              >
                <Text className="m-0 flex gap-1 item-center my-1">
                  <Img
                    src="https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/temp/booking_confirmation_personality_logo.png"
                    className="inline "
                  />
                  {htmlParser.parse(meetingDetails.type)}
                </Text>
                <Text className="m-0 flex gap-1 items-center ">
                  <Img src="https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/temp/booking_confirmation_gmeet_logo.png" />
                  {htmlParser.parse(meetingDetails.platform)}&nbsp;&nbsp;
                  <Img
                    src="https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/temp/booking_confirmation_duration_logo.png"
                    className="w-[13px] h-[13px]"
                  />
                  {htmlParser.parse(meetingDetails.duration)}
                </Text>
              </Container>
              <Button
                href={meetingDetails.link}
                className="px-3 py-2 bg-[#337FBD] text-white br rounded-md text-[14px]"
              >
                Pick your slot
              </Button>
              <Text className="text-[#999999] text-[10px] mt-10 leading-4">
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
            <Text className="flex items-center text-[10px]  mx-auto w-fit text-gray-500">
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
