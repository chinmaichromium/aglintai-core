import { EmptyState } from '@components/empty-state';
import {
  Section,
  SectionHeaderText,
  SectionTitle,
} from '@components/layouts/sections-header';
import { useApplicantRequests } from '@requests/hooks/useApplicantRequests';
import { LayoutList } from 'lucide-react';
import { useParams } from 'next/navigation';
import RequestCard from 'src/app/_common/components/Requests/RequestCard';

import { Loader } from '@/components/Common/Loader';

function RecentRequests() {
  const params = useParams();
  const requestId = params?.request as string;
  const { data: requestList, status } = useApplicantRequests({
    request_id: requestId,
  });
  const recentRequests =
    status === 'success'
      ? requestList.filter((item) => item.id !== requestId)
      : [];
  if (status === 'pending') {
    return (
      <Section>
        <SectionHeaderText>
          <SectionTitle>Recent Requests</SectionTitle>
        </SectionHeaderText>
        <Loader />
      </Section>
    );
  } else
    return (
      <Section>
        <SectionHeaderText>
          <SectionTitle>Recent Requests</SectionTitle>
        </SectionHeaderText>
        <div className='mt-2 flex flex-col gap-3'>
          {recentRequests.length === 0 ? (
            <EmptyState
              variant='inline'
              icon={LayoutList}
              description='Recent requests not found'
            />
          ) : (
            recentRequests.map((request, index) => {
              return <RequestCard key={index} request={request} />;
            })
          )}
        </div>
      </Section>
    );
}

export default RecentRequests;
