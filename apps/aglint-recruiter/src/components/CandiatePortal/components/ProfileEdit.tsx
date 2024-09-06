import { Button } from '@components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@components/ui/dialog';
import { useRouter, useSearchParams } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import CandidateForm from '../Profile/CandidateForm';

export function ProfileEdit() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('dialog'); // Remove the query param
    router.push(`${pathname}?${params.toString()}`);
    setIsDialogOpen(false);
  };

  const openDialog = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('dialog', 'edit'); // Add the query param
    router.push(`${pathname}?${params.toString()}`);
    setIsDialogOpen(true);
  };

  // Keep the dialog open based on the query param
  useEffect(() => {
    if (searchParams.get('dialog') === 'edit') {
      setIsDialogOpen(true);
    } else {
      setIsDialogOpen(false);
    }
  }, [searchParams]);

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={isDialogOpen ? closeDialog : null}
    >
      <DialogTrigger asChild>
        <Button variant='outline' onClick={() => openDialog()}>
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[500px] p-0'>
        <CandidateForm closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  );
}
