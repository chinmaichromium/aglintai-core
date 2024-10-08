import { z } from 'zod';

export const createCandidateRequestSchema = z.object({
  session_ids: z.array(z.string()),
  application_id: z.string(),
  type: z.enum(['reschedule', 'declined']),
  dates: z
    .object({
      start: z.string(),
      end: z.string(),
    })
    .optional(),
  reason: z.string(),
  other_details: z.any(),
});

export const createInterviewerRequestSchema = z.object({
  session_id: z.string(),
  session_relation_id: z.string(),
  declined_place: z.enum(['slack', 'calender']),
});
