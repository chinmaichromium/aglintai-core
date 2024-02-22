import { NextApiRequest, NextApiResponse } from 'next';

import { findAvailableTimeSlots } from '@/src/utils/schedule-utils/findAvailableSlots';
import {
  getBlockedSlots,
  getGroupTimeSlots,
  getRecruiterAuthTokens,
  getUserTimeZone,
} from '@/src/utils/schedule-utils/utils';

export type BodyParams = {
  recruiterId: string;
  startDate: string;
  endDate: string;
  timeDuration: number;
  working_hours: {
    startTime: string;
    endTime: string;
  };
};

//get availability of particular time slot for an interviewer
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let { recruiterId, endDate, startDate, timeDuration, working_hours } =
    req.body as BodyParams;

  if (!recruiterId || !endDate || !startDate || !timeDuration || !working_hours)
    return res.status(400).send('Missing required fields');

  try {
    let tokenInfo = await getRecruiterAuthTokens(recruiterId);

    let userEvents = {
      userId: recruiterId,
      blockedTimings: await getBlockedSlots(
        tokenInfo.access_token,
        tokenInfo.refresh_token,
        startDate,
        endDate,
      ),
    };

    const availableSlots = findAvailableTimeSlots(
      userEvents.blockedTimings,
      timeDuration,
      new Date(startDate),
      new Date(endDate),
      working_hours,
    );
    const timeZone = await getUserTimeZone(
      tokenInfo.access_token,
      tokenInfo.refresh_token,
    );
    const groupedSlots = getGroupTimeSlots(availableSlots);
    return res.status(200).json({ timeZone, groupedSlots });
  } catch (error) {
    // console.log(error);
    res.status(500).send(error.message);
  }
};

export default handler;
