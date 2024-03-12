/* eslint-disable no-unused-vars */
import { Stack } from '@mui/material';
import axios from 'axios';
import dayjs from 'dayjs';
import React, { useState } from 'react';

import AUIButton from '../components/Common/AUIButton';
import { InterviewPlanScheduleDbType } from '../components/JobInterviewPlan/types';

var utc = require('dayjs/plugin/utc');
var timezone = require('dayjs/plugin/timezone');
dayjs.extend(utc);
dayjs.extend(timezone);
const Page = () => {
  return (
    <>
      <Comp />
    </>
  );
};

const Comp = () => {
  const [isFinding, setIsFinding] = useState(false);
  const [data, setData] = useState<InterviewPlanScheduleDbType[]>([]);

  const handlSubmit = async () => {
    try {
      setIsFinding(true);

      const { data: r } = await axios.post(
        '/api/scheduling/v2/find_availability',
        {
          job_id: '9a29abfd-1307-4ef6-8ec9-1144714578e8',
          company_id: 'ce4f1b5c-431d-47cc-9826-ca376a8d031b',
          start_date: '2024-03-11T14:59:55.247Z',
          end_date: '2024-03-13T14:59:55.247Z'
        }
      );
      setData(r);
      setIsFinding(false);
    } catch (err) {
      setIsFinding(false);
      // console.log(err);
    }
  };

  const test = async () => {
    try {
      // const payload = {
      //   schedule_id: 'XfDhm0F8ZFxikCcA-8GLq',
      //   plan: [
      //     {
      //       module_id: '1fb5bf26-7973-4071-a840-7a1aa199712d',
      //       isBreak: false,
      //       attended_inters: [
      //         {
      //           id: 'b791abe8-6734-4c62-ac83-7b3b1378d80b',
      //           email: 'dileepwert@gmail.com',
      //           profile_img: '',
      //           name: 'dileep int'
      //         }
      //       ],
      //       duration: 30,
      //       start_time: '2024-03-11T05:00:55.247Z',
      //       end_time: '2024-03-11T05:30:55.247Z',
      //       module_name: 'Node JS Developer'
      //     },
      //     {
      //       isBreak: true,
      //       duration: 30,
      //       attended_inters: [],
      //       start_time: '2024-03-11T05:30:55.247Z',
      //       end_time: '2024-03-11T06:00:55.247Z',
      //       module_id: '',
      //       module_name: ''
      //     },
      //     {
      //       module_id: '7c6048d7-4877-4b34-9e86-ee6bac97d14f',
      //       isBreak: false,
      //       start_time: '2024-03-11T06:00:55.247Z',
      //       end_time: '2024-03-11T06:30:55.247Z',
      //       attended_inters: [
      //         {
      //           id: '65637e54-eb52-4001-a88e-95aff389c7c6',
      //           email: 'chinmai+scheduler@aglinthq.com',
      //           profile_img: '',
      //           name: 'Chinmai'
      //         },
      //         {
      //           id: '4756e58b-88c1-42b7-833a-10bc2282a6cd',
      //           email: 'ogyen+scheduler@aglinthq.com',
      //           profile_img: '',
      //           name: 'Ogyen'
      //         }
      //       ],
      //       duration: 30,
      //       module_name: 'testing module'
      //     }
      //   ]
      // };
      // const { data } = await axios.post(
      //   '/api/scheduling/v2/book_schedule_plan',
      //   {
      //     plan: payload,
      //     candidate_email: 'ogyen@aglinthq.com',
      //     schedule_id: '5db59175-c60b-4b49-9192-223f98db9ee2'
      //   }
      // );

      const { data } = await axios.post(
        '/api/scheduling/v2/cancel_calender_event',
        {
          calender_event: {
            id: '4k51rbd4p5q16b9ns7etddt36s',
            end: {
              dateTime: '2024-03-11T11:00:55+05:30',
              timeZone: 'Asia/Kolkata'
            },
            etag: '"3420481039798000"',
            kind: 'calendar#event',
            start: {
              dateTime: '2024-03-11T10:30:55+05:30',
              timeZone: 'Asia/Kolkata'
            },
            status: 'confirmed',
            created: '2024-03-12T10:48:40.000Z',
            creator: {
              self: true,
              email: 'dileepwert@gmail.com'
            },
            iCalUID: '4k51rbd4p5q16b9ns7etddt36s@google.com',
            summary: 'Node JS Developer',
            updated: '2024-03-12T10:48:39.899Z',
            htmlLink:
              'https://www.google.com/calendar/event?eid=NGs1MXJiZDRwNXExNmI5bnM3ZXRkZHQzNnMgZGlsZWVwd2VydEBt',
            sequence: 0,
            attendees: [
              {
                email: 'ogyen@aglinthq.com',
                responseStatus: 'needsAction'
              }
            ],
            eventType: 'default',
            organizer: {
              self: true,
              email: 'dileepwert@gmail.com'
            },
            reminders: {
              overrides: [
                {
                  method: 'email',
                  minutes: 1440
                },
                {
                  method: 'popup',
                  minutes: 10
                }
              ],
              useDefault: false
            },
            hangoutLink: 'https://meet.google.com/jzx-vaxn-vrd',
            conferenceData: {
              entryPoints: [
                {
                  uri: 'https://meet.google.com/jzx-vaxn-vrd',
                  label: 'meet.google.com/jzx-vaxn-vrd',
                  entryPointType: 'video'
                }
              ],
              conferenceId: 'jzx-vaxn-vrd',
              createRequest: {
                status: {
                  statusCode: 'success'
                },
                requestId: '1d2b07b1-2fa1-4f63-9fc2-8654045fddbf',
                conferenceSolutionKey: {
                  type: 'hangoutsMeet'
                }
              },
              conferenceSolution: {
                key: {
                  type: 'hangoutsMeet'
                },
                name: 'Google Meet',
                iconUri:
                  'https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png'
              }
            }
          }
        }
      );
    } catch (error) {
      // eslint-disable-next-line no-console
    }
  };

  return (
    <Stack direction={'column'} display={'flex'} height={'600px'} px={'20px'}>
      <AUIButton onClick={handlSubmit}>
        {`${isFinding ? 'finding' : 'Find'}${
          data && `       (${data.length} combinations)`
        }`}
      </AUIButton>
      <AUIButton onClick={test}>Test</AUIButton>
      <p>
        {data.map((schedule) => {
          return (
            <div key={schedule.schedule_id} style={{ marginBottom: '20px' }}>
              <h5>ScheduleId {schedule.schedule_id}</h5>
              <p>
                {schedule.plan.map((m) => {
                  if (m.isBreak) {
                    return (
                      <p key={m.module_id} style={{ marginBottom: '10px' }}>
                        {dayjs(m.start_time).format('HH:mm')} -{' '}
                        {m.isBreak && '--------BREAK-------'}
                        {dayjs(m.end_time).format('HH:mm')}
                      </p>
                    );
                  } else
                    return (
                      <p key={m.module_id} style={{ marginBottom: '10px' }}>
                        <h6>
                          module name {m.module_name}
                          {'      '}
                          {dayjs(m.start_time).format('HH:mm')} -{' '}
                          {dayjs(m.end_time).format('HH:mm')} -{' '}
                        </h6>

                        <p>
                          Interviewers{' '}
                          {m.attended_inters.map((int) => int.email).join(' ')}
                        </p>
                      </p>
                    );
                })}
              </p>
            </div>
          );
        })}
      </p>
    </Stack>
  );
};

// Page.getLayout = ({ page }) => {
//   return <>{page}</>;
// };

export default Page;
