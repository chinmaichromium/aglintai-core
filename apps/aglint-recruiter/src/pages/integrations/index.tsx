import { ButtonGhost } from '@devlink/ButtonGhost';
import { PageLayout } from '@devlink2/PageLayout';
import { useState } from 'react';

import Seo from '@/components/Common/Seo';
import Integrations from '@/components/Integrations';
import RequestNew from '@/components/Integrations/RequestNewPopUp';

function IntegrationsPage() {
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <Seo
        title={`Integrations | Aglint AI`}
        description='AI for People Products'
      />
      <PageLayout
        slotTopbarLeft={'Integrations'}
        slotTopbarRight={
          <ButtonGhost
            size='2'
            isRightIcon={false}
            onClickButton={{
              onClick: () => {
                setIsOpen(true);
              },
            }}
            isLeftIcon={true}
            iconName={'mail'}
            textButton={'Request Integration'}
          />
        }
        slotBody={<Integrations />}
      />
      <RequestNew close={close} isOpen={isOpen} />
    </>
  );
}

export default IntegrationsPage;
