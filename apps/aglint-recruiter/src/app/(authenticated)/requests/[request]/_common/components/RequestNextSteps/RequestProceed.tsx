import { useRequest } from '@request/hooks';
import { useRequests } from '@requests/hooks';
import axios from 'axios';
import React from 'react';

import { UIButton } from '@/common/UIButton';

const RequestProceed = () => {
  const [isProceeding, setIsProceeding] = React.useState(false);

  const { handleAsyncUpdateRequest } = useRequests();
  const { requestDetails } = useRequest();
  return (
    <div>
      <UIButton
        data-testid='request-proceed-btn'
        disabled={isProceeding}
        onClick={async () => {
          setIsProceeding(true);
          await axios.post('/api/request/execute-workflow', {
            request_id: requestDetails.id,
          });

          setTimeout(async () => {
            await handleAsyncUpdateRequest({
              payload: {
                requestId: requestDetails.id,
                requestPayload: { status: 'in_progress' },
              },
            });
            setIsProceeding(false);
          }, 2000);
        }}
      >
        {isProceeding ? 'Proceeding...' : 'Proceed with AI'}
      </UIButton>
    </div>
  );
};

export default RequestProceed;
