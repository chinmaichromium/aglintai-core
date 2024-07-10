import { Dialog } from '@mui/material';

import { DeletePopup as DeletePopupDev } from '@/devlink3/DeletePopup';
import { WorkflowLanding } from '@/devlink3/WorkflowLanding';
import Seo from '@/src/components/Common/Seo';
import { useWorkflows } from '@/src/context/Workflows';
import { useWorkflowStore } from '@/src/context/Workflows/store';

import Content from './content';
import Filters from './filters';

const Body = () => {
  return (
    <>
      <Seo title='Workflow | Aglint AI' description='AI for People Products' />
      <WorkflowLanding
        slotSearchAndFilter={<Filters />}
        slotWorkflowCard={<Content />}
      />
      <DeletePopup />
    </>
  );
};

export default Body;

const DeletePopup = () => {
  const { handleDeleteWorkflow } = useWorkflows();
  const { deletion, closeDeletion } = useWorkflowStore(
    ({ deletion, closeDeletion }) => ({
      deletion,
      closeDeletion,
    }),
  );
  const count = deletion?.workflow?.jobs?.length ?? 0;
  return (
    <Dialog open={deletion.open}>
      <DeletePopupDev
        buttonText={count === 0 ? 'Delete' : 'Unlink and Delete'}
        textDescription={
          count === 0
            ? ' Are you sure you want to delete this workflow?'
            : `This workflow is being used in ${count} job${count === 1 ? '' : 's'}. Are you sure you want to unlink and Delete this workflow?`
        }
        onClickCancel={{ onClick: () => closeDeletion() }}
        onClickDelete={{
          onClick: () => {
            handleDeleteWorkflow({ id: deletion.workflow?.id });
            closeDeletion();
          },
        }}
        textTitle={'Delete workflow'}
      />
    </Dialog>
  );
};
