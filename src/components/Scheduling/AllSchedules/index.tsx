import { Stack } from '@mui/material';
import axios from 'axios';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { AllInterview, CandidatesListPagination } from '@/devlink2';
import { useAuthDetails } from '@/src/context/AuthContext/AuthContext';
import { pageRoutes } from '@/src/utils/pageRouting';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import AllList from './AllList';
import CreateDialog from './CreateDialog';
import DeleteScheduleDialog from './DeleteDialog';
import AllFilters from './Filters';
import DateFilter from './Filters/DateFilter';
import AddFilterComp from './Filters/FilterMenu';
import RescheduleDialog from './RescheduleDialog';
import SidePanel from './SidePanel';
import {
  ApplicationList,
  setApplicationList,
  setFetching,
  setIsCancelOpen,
  setIsCreateScheduleOpen,
  setIsRescheduleOpen,
  setPagination,
  setSelectedApplication,
  useInterviewSchedulingStore
} from './store';
import { getPaginationDB } from './utils';

function AllSchedules() {
  const router = useRouter();
  const { recruiter } = useAuthDetails();
  const [pageLoad, setPageLoad] = useState(true);
  const applicationList = useInterviewSchedulingStore(
    (state) => state.applicationList
  );
  const filter = useInterviewSchedulingStore((state) => state.filter);
  const pagination = useInterviewSchedulingStore((state) => state.pagination);
  const initialLoading = useInterviewSchedulingStore(
    (state) => state.initialLoading
  );
  const fetching = useInterviewSchedulingStore((state) => state.fetching);
  const selectedApplication = useInterviewSchedulingStore(
    (state) => state.selectedApplication
  );

  // separate useeffect for filter except text search because no need to debounce
  useEffect(() => {
    if (!initialLoading && router.isReady && !pageLoad) {
      if (
        filter.status ||
        filter.status == null ||
        filter.job_ids ||
        filter.panel_ids ||
        filter.dateRange == null ||
        filter.dateRange ||
        filter.sortBy ||
        filter.scheduleType
      ) {
        setSelectedApplication(null);
        router.push(`${pageRoutes.SCHEDULING}?tab=allSchedules`, undefined, {
          shallow: true
        });
        fetchInterviewData({ page: 1 });
      }
    }
  }, [
    filter.status,
    filter.job_ids,
    filter.panel_ids,
    filter.dateRange,
    filter.sortBy,
    filter.scheduleType
  ]);
  // separate useeffect for filter except text search because no need to debounce

  useEffect(() => {
    if (!initialLoading && router.isReady && !pageLoad) {
      fetchInterviewData({ page: pagination.page });
    }
  }, [pagination.page]);

  useEffect(() => {
    const debouncedTextSearchFetch = debounce(() => {
      setSelectedApplication(null);
      router.push(`${pageRoutes.SCHEDULING}?tab=allSchedules`, undefined, {
        shallow: true
      });
      fetchInterviewData({ page: 1 });
    }, 1000);

    if (!initialLoading && router.isReady && !pageLoad) {
      debouncedTextSearchFetch();
    }
    return () => {
      debouncedTextSearchFetch.cancel();
    };
  }, [filter.textSearch]);

  //to avoid other useeffects on initial load
  useEffect(() => {
    if (pageLoad) {
      setPageLoad(false);
    }
  }, []);

  const fetchInterviewData = async ({ page = 1 }: { page: number }) => {
    try {
      setPagination({ page });
      setFetching(true);
      getPagination();
      const { data: appNew, error } = await supabase.rpc(
        'fetch_interview_data',
        {
          rec_id: recruiter.id,
          status_filter: filter.status.length > 0 ? filter.status : null,
          text_search_filter: filter.textSearch,
          sch_type: filter.scheduleType.length > 0 ? filter.scheduleType : null,
          sort_by: filter.sortBy,
          job_id_filter: filter.job_ids.length > 0 ? filter.job_ids : null,
          panel_id_filter:
            filter.panel_ids.length > 0 ? filter.panel_ids : null,
          page_number: page,
          date_range_filter: filter.dateRange ? filter.dateRange : null
        }
      );
      if (error) {
        throw new Error(error.message);
      }
      setApplicationList(appNew as ApplicationList[]);
    } catch (error) {
      toast.error('Error fetching interview data');
    } finally {
      setFetching(false);
    }
  };

  const getPagination = async () => {
    try {
      const totalCount = await getPaginationDB({
        recruiter: { id: recruiter.id },
        filter: {
          status: filter.status,
          textSearch: filter.textSearch,
          scheduleType: filter.scheduleType,
          sortBy: filter.sortBy,
          job_ids: filter.job_ids,
          panel_ids: filter.panel_ids
        }
      });
      setPagination({ total: totalCount });
    } catch (error) {
      toast.error('Error fetching interview data');
    }
  };

  const onClickCancel = async () => {
    try {
      if (selectedApplication.schedule.id) {
        await supabase
          .from('interview_schedule')
          .update({ is_active: false })
          .eq('id', selectedApplication.schedule.id);
        setIsCancelOpen(false);
        setSelectedApplication({ ...selectedApplication, schedule: null });
        applicationList.filter(
          (app) => app.applications.id === selectedApplication.applications.id
        )[0].schedule = null;
        setApplicationList([...applicationList]);
        if ((selectedApplication.schedule.meeting_json as any)?.id) {
          const res = await axios.post(
            '/api/scheduling/update-calender-event-status',
            {
              organizer_id: selectedApplication.schedule.created_by,
              event_id: (selectedApplication.schedule.meeting_json as any).id
            }
          );
          if (res.status !== 200) {
            throw new Error('Error in response');
          }
        }
      }
    } catch {
      //
    }
  };

  const onClickReschedule = async () => {
    await onClickCancel();
    setIsRescheduleOpen(false);
    setIsCreateScheduleOpen(true);
  };

  return (
    <>
      <DeleteScheduleDialog onClickCancel={onClickCancel} />
      <RescheduleDialog onClickReschedule={onClickReschedule} />
      <CreateDialog />
      <AllInterview
        isSchedulerTable={true}
        slotPagination={
          <Stack
            sx={{
              opacity: fetching ? 0.5 : 1,
              pointerEvents: fetching ? 'none' : 'auto',
              zIndex: 3
            }}
          >
            <CandidatesListPagination
              totalCandidatesCount={pagination.total}
              currentCandidatesCount={applicationList.length}
              totalPageCount={Math.ceil(pagination.total / 10)}
              onclickNext={{
                onClick: () => {
                  if (pagination.page < Math.ceil(pagination.total / 10))
                    setPagination({ page: pagination.page + 1 });
                }
              }}
              onclickPrevious={{
                onClick: () => {
                  if (pagination.page > 1)
                    setPagination({ page: pagination.page - 1 });
                }
              }}
              slotPageNumber={pagination.page}
            />
          </Stack>
        }
        slotSidebar={<SidePanel />}
        slotAddFilter={<AddFilterComp />}
        slotFilterButton={<AllFilters />}
        slotDate={<DateFilter />}
        slotAllInterviewCard={<AllList />}
      />
    </>
  );
}

export default AllSchedules;
