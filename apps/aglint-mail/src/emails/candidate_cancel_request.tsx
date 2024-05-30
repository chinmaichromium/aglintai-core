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
  body?: string;
  companyLogo?: string;
  meetingDetails: {
    dateTime?: string;
    type?: string;
    platform?: string;
    duration?: string;
    link?: string;
  };
}

// export dummy
export const dummy: InterviewBookingConfirmationType = {
  subject: 'Meeting Cancle Request From Candidate',
  body: '<p>Dear [recruiterName],</p><p>[firstName] is requesting to cancle interview stating reason : [rescheduleReason]</p><p>Additional Notes from [firstName] : [additionalRescheduleNotes]</p><p>Thank you</p>',
  companyLogo:
    'https://plionpfmgvenmdwwjzac.supabase.co/storage/v1/object/public/temp/aglint-black.png',
  meetingDetails: {
    dateTime: '<strong>Fri, May 12, 2024</strong> 09:00 AM - 09:30 PM PST',
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
                <Text className="m-0">
                  {htmlParser.parse(meetingDetails.dateTime)}
                </Text>
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
                className="px-3 py-2 bg-[#D93F4C] text-white br rounded-md text-[14px]"
              >
                Cancel Schedule
              </Button>
              <Text className="bm-0">Thank You</Text>
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
