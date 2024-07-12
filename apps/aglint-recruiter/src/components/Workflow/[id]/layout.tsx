import { useRouter } from 'next/router';
import type React from 'react';

import { ButtonSoft } from '@/devlink/ButtonSoft';
import { Breadcrum } from '@/devlink2/Breadcrum';
import { PageLayout } from '@/devlink2/PageLayout';
import { useWorkflow } from '@/src/context/Workflows/[id]';
import { useWorkflowStore } from '@/src/context/Workflows/store';
import ROUTES from '@/src/utils/routing/routes';
import { capitalizeSentence } from '@/src/utils/text/textUtils';

import { WithPermission } from '../../withPermission';

type LayoutProps = React.PropsWithChildren;
const Layout = (props: LayoutProps) => {
  return (
    <PageLayout
      slotTopbarLeft={<BreadCrumbs />}
      slotBody={props.children}
      slotTopbarRight={<Edit />}
    />
  );
};

export default Layout;

const BreadCrumbs = () => {
  const { push } = useRouter();
  const { workflow } = useWorkflow();
  return (
    <>
      <Breadcrum
        isLink
        onClickLink={{ onClick: () => push(ROUTES['/workflows']()) }}
        textName={'Workflows'}
      />
      <Breadcrum
        showArrow
        textName={workflow ? `${capitalizeSentence(workflow.title)}` : '---'}
      />
    </>
  );
};

const Edit = () => {
  const setPopup = useWorkflowStore(({ setPopup }) => setPopup);
  return (
    <WithPermission permission={['workflow_update']}>
      <ButtonSoft
        size={'2'}
        iconName={'bolt'}
        isLeftIcon={true}
        textButton={'Edit Workflow'}
        onClickButton={{ onClick: () => setPopup({ open: true }) }}
      />
    </WithPermission>
  );
};
