import { toast } from '@components/hooks/use-toast';
import { useState } from 'react';

import Instructions from '@/components/Scheduling/ScheduleDetails/Instructions';
import { api } from '@/trpc/client';
import { supabase } from '@/utils/supabase/client';

import { useModuleAndUsers } from '../../../hooks/useModuleAndUsers';

function InstructionsComp() {
  const { data: editModule } = useModuleAndUsers();
  const [textValue, setTextValue] = useState(null);
  const utils = api.useUtils();

  async function updateInstruction() {
    if (textValue) {
      const { data } = await supabase
        .from('interview_module')
        .update({ instructions: textValue })
        .eq('id', editModule?.id)
        .select();
      if (data) {
        toast({
          title: 'Instructions updated successfully.',
        });
        utils.interview_pool.module_and_users.invalidate({
          module_id: editModule?.id,
        });
      }
    }
  }

  return (
    <div>
      <Instructions
        isWidth={true}
        isMinWidth={false}
        instruction={editModule?.instructions}
        setTextValue={setTextValue}
        showEditButton={true}
        updateInstruction={updateInstruction}
        isBorder={true}
        isPadding={true}
      />
    </div>
  );
}

export default InstructionsComp;
