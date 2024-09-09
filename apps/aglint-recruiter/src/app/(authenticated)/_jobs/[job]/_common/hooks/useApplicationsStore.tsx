/**
 *
 * Hooks with Atomic selectors + Separate Action Hook with no selector
 *
 * @link https://tkdodo.eu/blog/working-with-zustand
 *
 */

import { createContextStoreSelector } from '@/hooks/createContextStoreSelector';
import { ApplicationsStoreContext } from '@/job/contexts/applicationsStoreContext';

export const useApplicationsStore = createContextStoreSelector(
  ApplicationsStoreContext,
);
