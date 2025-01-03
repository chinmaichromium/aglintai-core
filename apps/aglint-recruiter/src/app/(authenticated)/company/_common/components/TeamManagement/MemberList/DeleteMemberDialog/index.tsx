/* eslint-disable security/detect-object-injection */
/* eslint-disable no-unused-vars */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@components/ui/alert-dialog';
import { ScrollArea } from '@components/ui/scroll-area';
import { useState } from 'react';

import { JobCoordinator } from '@/jobs/create/components/form';

function DeleteMemberDialog({
  name,
  reason,
  role,
  action,
  warning,
  close,
}: {
  name: string;
  reason: 'cancel_invite' | 'delete' | 'suspend';
  role?: string;
  action:
    | (({ interviewTypes }: { interviewTypes: string }) => void)
    | (() => void);
  warning?: string;
  close: () => void;
}) {
  // const { status } = useCompanyMembers();
  const [form, setForm] = useState<{
    values: { interviewTypes: string | undefined };
    error: { interviewTypes: boolean };
  }>({
    values: {
      interviewTypes: undefined,
    },
    error: {
      interviewTypes: false,
    },
  });
  function handelFormUpdate(val: Partial<(typeof form)['values']>) {
    const temp = structuredClone(form);
    for (const tempItem in val) {
      const item = tempItem as keyof typeof val;
      if (val[item]?.length) {
        temp.values[item] = val[item];
        temp.error[item] = false;
      } else {
        temp.error[item] = true;
      }
    }
    setForm(temp);
  }
  const isInterviewTypesRequire = (
    [
      'recruiter',
      'recruiting_coordinator',
      'sourcer',
      'hiring_manager',
    ] as const
  ).find((item) =>
    item.replace('_', '').includes(role?.replace(' ', '') || ''),
  )!;
  function validateForm() {
    const temp = structuredClone(form);
    let flag = true;

    if (isInterviewTypesRequire && !form.values.interviewTypes?.length) {
      temp.error.interviewTypes = true;
      flag = false;
    }

    setForm(temp);
    return flag;
  }

  const title =
    reason === 'delete'
      ? `Delete the member: ${name}`
      : reason === 'cancel_invite'
        ? `Cancel invitation to: ${name}`
        : reason === 'suspend'
          ? `Suspend ${name}`
          : '';

  const button_text =
    reason === 'delete'
      ? 'Delete'
      : reason === 'cancel_invite'
        ? 'Cancel Invite'
        : reason === 'suspend'
          ? 'Suspend'
          : '';

  const description =
    reason === 'delete' ? (
      <div className='space-y-4'>
        <p className='text-base'>
          By clicking delete the member will be permanently deleted.
        </p>
        {warning && (
          <p className='text-base text-red-700'>Warning: {warning}</p>
        )}
      </div>
    ) : reason === 'cancel_invite' ? (
      <p className='text-base'>
        By clicking cancel invitation will be canceled and removed from the
        members list.
      </p>
    ) : reason === 'suspend' ? (
      <div className='space-y-4'>
        <p className='font-medium'>
          You are about to suspend {name} from the system.
        </p>
        <ul className='list-disc space-y-2 pl-5 text-sm'>
          <li> Once suspended, {name} will not have login access.</li>
          <li>
            The user will be removed from interview types, so no new interviews
            will be scheduled.
          </li>
          <li>
            However, they can still attend and complete current interviews.
          </li>
          <li>
            To suspend the user, you must Assign their job roles to another
            user.
          </li>
        </ul>

        <div className='space-y-4'>
          {isInterviewTypesRequire && (
            <div className='space-y-1'>
              <p>Reassign current Interview Types to:</p>
              <JobCoordinator
                name={isInterviewTypesRequire}
                value={{
                  required: true,
                  error: {
                    helper: '',
                    value: form.error.interviewTypes,
                  },
                  value: form.values.interviewTypes!,
                }}
                label={false}
                onChange={(_, val) => handelFormUpdate({ interviewTypes: val })}
              />
            </div>
          )}
        </div>
      </div>
    ) : (
      <></>
    );

  const onClick = () => {
    switch (reason) {
      case 'delete':
      case 'cancel_invite':
        // @ts-ignore
        action();
        break;
      case 'suspend':
        if (validateForm()) {
          action({
            interviewTypes: form.values.interviewTypes!,
          });
        }
        break;
    }
    // reason === 'delete'
    //   ? action
    //   : reason === 'cancel_invite'
    //     ? action
    //     : reason === 'suspend'
    //       ? () => {
    //           console.log(
    //             'form.values.interviewTypes',
    //             form.values.interviewTypes,
    //           );
    //           if (validateForm()) {
    //             action({
    //               interviewTypes: form.values.interviewTypes!,
    //             });
    //           }
    //         }
    //       : null;
  };
  return (
    <AlertDialog open={Boolean(reason)} onOpenChange={close}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            <ScrollArea className='h-64'>{description}</ScrollArea>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={close}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onClick}>{button_text}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteMemberDialog;
