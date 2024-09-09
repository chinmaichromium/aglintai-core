/**
 *
 * Hooks with Atomic selectors + Separate Action Hook with no selector
 *
 * @link https://tkdodo.eu/blog/working-with-zustand
 *
 */

import { createContextStoreSelector } from '@/hooks/createContextStoreSelector';
import { JobDashboardStoreContext } from '@/job/contexts/jobDashboardStoreContext';

export const useJobDashboardStore = createContextStoreSelector(
  JobDashboardStoreContext,
);
