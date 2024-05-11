import { getFullName } from '@/src/utils/jsonResume';
import { capitalizeAll } from '@/src/utils/text/textUtils';

import { ScheduleListType } from '../Common/ModuleSchedules/hooks';
import { FilterOptionsType } from './types';

export const filterOptions = [
  { name: 'status' as FilterOptionsType['name'], Icon: <FilterStatusIcon /> },
  { name: 'member' as FilterOptionsType['name'], Icon: <FilterMemberIcon /> },
  { name: 'job' as FilterOptionsType['name'], Icon: <FilterJobIcon /> },
  {
    name: 'schedule_type' as FilterOptionsType['name'],
    Icon: <FilterInterviewTypeIcon />,
  },
  {
    name: 'date_range' as FilterOptionsType['name'],
    Icon: <FilterDateRangeIcon />,
  },
] as FilterOptionsType[];

export function getListItems({
  allSchedules,
  filterType,
}: {
  allSchedules: ScheduleListType;
  filterType: FilterOptionsType;
}) {
  let itemList: { label: string; id: string }[] = [];
  if (filterType.name === 'status') {
    [
      ...new Set(
        allSchedules.map((schedule) => schedule.interview_meeting.status),
      ),
    ].forEach((status) => {
      itemList.push({
        id: status,
        label: capitalizeAll(status),
      });
    });
  }
  if (filterType.name === 'job') {
    itemList = allSchedules
      .map((schedule) => ({
        id: schedule.interview_meeting.job_id,
        label: schedule.interview_meeting.job_title,
      }))
      .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
  }
  if (filterType.name === 'member') {
    const allMembers = allSchedules.map((ele) => [...ele.users]).flat();
    itemList = allMembers
      .map((member) => ({
        id: member.id,
        label: getFullName(member.first_name, member.last_name),
      }))
      .filter(
        (value1, i, a) =>
          a.findIndex((value2) => value2.id === value1.id) === i,
      );
  }
  if (filterType.name === 'schedule_type') {
    itemList = allSchedules
      .map((schedule) => ({
        id: schedule.interview_meeting.schedule_type,
        label: schedule.interview_meeting.schedule_type,
      }))
      .filter((v, i, a) => a.findIndex((v2) => v2.id === v.id) === i);
  }

  return itemList;
}

export function FilterStatusIcon() {
  return (
    <svg
      width='15'
      height='16'
      viewBox='0 0 15 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M1.94531 7.4375C1.69531 7.40625 1.57031 7.26562 1.57031 7.01562C1.74219 6.07812 2.09375 5.24219 2.625 4.50781C2.79688 4.32031 2.97656 4.30469 3.16406 4.46094C3.30469 4.61719 3.32031 4.78906 3.21094 4.97656C2.75781 5.60156 2.46094 6.3125 2.32031 7.10938C2.27344 7.3125 2.14844 7.42188 1.94531 7.4375ZM4.47656 3.71094C4.28906 3.82031 4.11719 3.80469 3.96094 3.66406C3.80469 3.47656 3.82031 3.29687 4.00781 3.125C4.74219 2.59375 5.58594 2.24219 6.53906 2.07031C6.77344 2.07031 6.90625 2.19531 6.9375 2.44531C6.92188 2.64844 6.8125 2.77344 6.60938 2.82031C5.8125 2.96094 5.10156 3.25781 4.47656 3.71094ZM8.0625 13.5547C8.07812 13.3516 8.1875 13.2266 8.39062 13.1797C9.1875 13.0391 9.89844 12.7422 10.5234 12.2891C10.6953 12.1797 10.8672 12.1953 11.0391 12.3359C11.1953 12.5234 11.1797 12.7031 10.9922 12.875C10.2578 13.4062 9.42188 13.7578 8.48438 13.9297C8.23438 13.9297 8.09375 13.8047 8.0625 13.5547ZM11.7891 11.0234C12.2422 10.3984 12.5391 9.6875 12.6797 8.89062C12.7266 8.6875 12.8516 8.57812 13.0547 8.5625C13.3047 8.59375 13.4297 8.73438 13.4297 8.98438C13.2578 9.92188 12.9062 10.7578 12.375 11.4922C12.2031 11.6797 12.0234 11.6953 11.8359 11.5391C11.6953 11.3828 11.6797 11.2109 11.7891 11.0234ZM3.96094 12.3359C4.11719 12.1953 4.28906 12.1797 4.47656 12.2891C5.10156 12.7422 5.8125 13.0391 6.60938 13.1797C6.8125 13.2266 6.92188 13.3516 6.9375 13.5547C6.90625 13.8047 6.76562 13.9297 6.51562 13.9297C5.57812 13.7578 4.74219 13.4062 4.00781 12.875C3.82031 12.7031 3.80469 12.5234 3.96094 12.3359ZM2.625 11.4922C2.09375 10.7578 1.74219 9.92188 1.57031 8.98438C1.57031 8.73438 1.69531 8.59375 1.94531 8.5625C2.14844 8.57812 2.27344 8.6875 2.32031 8.89062C2.46094 9.6875 2.75781 10.3984 3.21094 11.0234C3.32031 11.2109 3.30469 11.3828 3.16406 11.5391C2.97656 11.6953 2.79688 11.6797 2.625 11.4922ZM11.0391 3.66406C10.8828 3.80469 10.7109 3.82031 10.5234 3.71094C9.89844 3.25781 9.1875 2.96094 8.39062 2.82031C8.1875 2.77344 8.07812 2.64844 8.0625 2.44531C8.09375 2.19531 8.23438 2.07031 8.48438 2.07031C9.42188 2.24219 10.2578 2.59375 10.9922 3.125C11.1797 3.29687 11.1953 3.47656 11.0391 3.66406ZM11.7891 4.97656C11.6797 4.78906 11.6953 4.61719 11.8359 4.46094C12.0234 4.30469 12.2031 4.32031 12.375 4.50781C12.9062 5.24219 13.2578 6.07812 13.4297 7.01562C13.4297 7.26562 13.3047 7.40625 13.0547 7.4375C12.8516 7.42188 12.7266 7.3125 12.6797 7.10938C12.5391 6.3125 12.2422 5.60156 11.7891 4.97656Z'
        fill='#0F3554'
      />
    </svg>
  );
}

export function FilterMemberIcon() {
  return (
    <svg
      width='15'
      height='16'
      viewBox='0 0 15 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.5 2.75C7.09375 2.75 6.71875 2.85156 6.375 3.05469C6.03125 3.25781 5.75781 3.53125 5.55469 3.875C5.35156 4.23438 5.25 4.60938 5.25 5C5.25 5.39062 5.35156 5.76562 5.55469 6.125C5.75781 6.46875 6.03125 6.74219 6.375 6.94531C6.71875 7.14844 7.09375 7.25 7.5 7.25C7.90625 7.25 8.28125 7.14844 8.625 6.94531C8.96875 6.74219 9.24219 6.46875 9.44531 6.125C9.64844 5.76562 9.75 5.39062 9.75 5C9.75 4.60938 9.64844 4.23438 9.44531 3.875C9.24219 3.53125 8.96875 3.25781 8.625 3.05469C8.28125 2.85156 7.90625 2.75 7.5 2.75ZM4.5 5C4.5 4.45312 4.63281 3.95312 4.89844 3.5C5.16406 3.04688 5.53125 2.67969 6 2.39844C6.46875 2.13281 6.96875 2 7.5 2C8.03125 2 8.53125 2.13281 9 2.39844C9.46875 2.67969 9.83594 3.04688 10.1016 3.5C10.3672 3.95312 10.5 4.45312 10.5 5C10.5 5.54688 10.3672 6.04688 10.1016 6.5C9.83594 6.95312 9.46875 7.32031 9 7.60156C8.53125 7.86719 8.03125 8 7.5 8C6.96875 8 6.46875 7.86719 6 7.60156C5.53125 7.32031 5.16406 6.95312 4.89844 6.5C4.63281 6.04688 4.5 5.54688 4.5 5ZM6.75 9.125H7.5H8.25C8.48438 9.14062 8.60938 9.26562 8.625 9.5C8.60938 9.73438 8.48438 9.85938 8.25 9.875H8.01562L8.53125 11.3984L9.28125 9.75781C9.35938 9.60156 9.48438 9.53906 9.65625 9.57031C10.5625 9.74219 11.2969 10.1719 11.8594 10.8594C12.4375 11.5312 12.7344 12.3359 12.75 13.2734C12.75 13.4766 12.6797 13.6484 12.5391 13.7891C12.3984 13.9297 12.2266 14 12.0234 14H2.97656C2.77344 14 2.60156 13.9297 2.46094 13.7891C2.32031 13.6484 2.25 13.4766 2.25 13.2734C2.26562 12.3359 2.5625 11.5312 3.14062 10.8594C3.70312 10.1719 4.4375 9.74219 5.34375 9.57031C5.51562 9.53906 5.64062 9.60938 5.71875 9.78125L6.46875 11.3984L6.98438 9.875H6.75C6.51562 9.85938 6.39062 9.73438 6.375 9.5C6.39062 9.26562 6.51562 9.14062 6.75 9.125ZM7.17188 12.8984C7.25 13.0391 7.35938 13.1094 7.5 13.1094C7.65625 13.1094 7.77344 13.0391 7.85156 12.8984L8.0625 12.3828L7.5 10.6953L6.9375 12.3828L7.17188 12.8984ZM6.46875 13.2031L5.17969 10.3672C4.53906 10.5703 4.02344 10.9297 3.63281 11.4453C3.22656 11.9609 3.01562 12.5625 3 13.25H6.49219C6.49219 13.2344 6.49219 13.2266 6.49219 13.2266C6.49219 13.2109 6.48438 13.2031 6.46875 13.2031ZM12 13.25C11.9844 12.5625 11.7734 11.9609 11.3672 11.4453C10.9766 10.9297 10.4609 10.5703 9.82031 10.3672L8.53125 13.2031C8.51562 13.2031 8.50781 13.2109 8.50781 13.2266C8.50781 13.2266 8.50781 13.2344 8.50781 13.25H12Z'
        fill='#0F3554'
      />
    </svg>
  );
}

export function FilterCandidateIcon() {
  return (
    <svg
      width='15'
      height='16'
      viewBox='0 0 15 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.75 5C9.75 4.59375 9.64844 4.21875 9.44531 3.875C9.24219 3.53125 8.96875 3.25781 8.625 3.05469C8.26562 2.85156 7.89062 2.75 7.5 2.75C7.10938 2.75 6.73438 2.85156 6.375 3.05469C6.03125 3.25781 5.75781 3.53125 5.55469 3.875C5.35156 4.21875 5.25 4.59375 5.25 5C5.25 5.40625 5.35156 5.78125 5.55469 6.125C5.75781 6.46875 6.03125 6.74219 6.375 6.94531C6.73438 7.14844 7.10938 7.25 7.5 7.25C7.89062 7.25 8.26562 7.14844 8.625 6.94531C8.96875 6.74219 9.24219 6.46875 9.44531 6.125C9.64844 5.78125 9.75 5.40625 9.75 5ZM4.5 5C4.5 4.45312 4.63281 3.95312 4.89844 3.5C5.16406 3.04688 5.53125 2.67969 6 2.39844C6.46875 2.13281 6.96875 2 7.5 2C8.03125 2 8.53125 2.13281 9 2.39844C9.46875 2.67969 9.83594 3.04688 10.1016 3.5C10.3672 3.95312 10.5 4.45312 10.5 5C10.5 5.54688 10.3672 6.04688 10.1016 6.5C9.83594 6.95312 9.46875 7.32031 9 7.60156C8.53125 7.86719 8.03125 8 7.5 8C6.96875 8 6.46875 7.86719 6 7.60156C5.53125 7.32031 5.16406 6.95312 4.89844 6.5C4.63281 6.04688 4.5 5.54688 4.5 5ZM3 13.25H12C11.9688 12.2969 11.625 11.5 10.9688 10.8594C10.3281 10.2344 9.53125 9.90625 8.57812 9.875H6.42188C5.46875 9.90625 4.67188 10.2344 4.03125 10.8594C3.375 11.5 3.03125 12.2969 3 13.25ZM2.25 13.2969C2.28125 12.125 2.6875 11.1406 3.46875 10.3438C4.26562 9.5625 5.25 9.15625 6.42188 9.125H8.57812C9.75 9.15625 10.7344 9.5625 11.5312 10.3438C12.3125 11.1406 12.7188 12.125 12.75 13.2969C12.75 13.5 12.6797 13.6641 12.5391 13.7891C12.4141 13.9297 12.25 14 12.0469 14H2.95312C2.75 14 2.58594 13.9297 2.46094 13.7891C2.32031 13.6641 2.25 13.5 2.25 13.2969Z'
        fill='#0F3554'
      />
    </svg>
  );
}

export function FilterDateRangeIcon() {
  return (
    <svg
      width='15'
      height='16'
      viewBox='0 0 15 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.875 2C5.10938 2.01563 5.23438 2.14062 5.25 2.375V3.5H9.75V2.375C9.76562 2.14062 9.89062 2.01563 10.125 2C10.3594 2.01563 10.4844 2.14062 10.5 2.375V3.5H11.25C11.6719 3.51563 12.0234 3.66406 12.3047 3.94531C12.5859 4.22656 12.7344 4.57812 12.75 5V5.75V6.5V12.5C12.7344 12.9219 12.5859 13.2734 12.3047 13.5547C12.0234 13.8359 11.6719 13.9844 11.25 14H3.75C3.32812 13.9844 2.97656 13.8359 2.69531 13.5547C2.41406 13.2734 2.26562 12.9219 2.25 12.5V6.5V5.75V5C2.26562 4.57812 2.41406 4.22656 2.69531 3.94531C2.97656 3.66406 3.32812 3.51563 3.75 3.5H4.5V2.375C4.51562 2.14062 4.64062 2.01563 4.875 2ZM12 6.5H3V12.5C3 12.7188 3.07031 12.8984 3.21094 13.0391C3.35156 13.1797 3.53125 13.25 3.75 13.25H11.25C11.4688 13.25 11.6484 13.1797 11.7891 13.0391C11.9297 12.8984 12 12.7188 12 12.5V6.5ZM11.25 4.25H3.75C3.53125 4.25 3.35156 4.32031 3.21094 4.46094C3.07031 4.60156 3 4.78125 3 5V5.75H12V5C12 4.78125 11.9297 4.60156 11.7891 4.46094C11.6484 4.32031 11.4688 4.25 11.25 4.25Z'
        fill='#0F3554'
      />
    </svg>
  );
}

export function FilterInterviewTypeIcon() {
  return (
    <svg
      width='15'
      height='16'
      viewBox='0 0 15 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.75 2.75H2.25C2.03125 2.75 1.85156 2.82031 1.71094 2.96094C1.57031 3.10156 1.5 3.28125 1.5 3.5V7.39062C1.21875 7.48438 0.96875 7.63281 0.75 7.83594V3.5C0.765625 3.07812 0.914062 2.72656 1.19531 2.44531C1.47656 2.16406 1.82812 2.01563 2.25 2H12.75C13.1719 2.01563 13.5234 2.16406 13.8047 2.44531C14.0859 2.72656 14.2344 3.07812 14.25 3.5V7.8125C14.0312 7.625 13.7812 7.47656 13.5 7.36719V3.5C13.5 3.28125 13.4297 3.10156 13.2891 2.96094C13.1484 2.82031 12.9688 2.75 12.75 2.75ZM2.25 10.25C2.46875 10.25 2.64844 10.1797 2.78906 10.0391C2.92969 9.89844 3 9.71875 3 9.5C3 9.28125 2.92969 9.10156 2.78906 8.96094C2.64844 8.82031 2.46875 8.75 2.25 8.75C2.03125 8.75 1.85156 8.82031 1.71094 8.96094C1.57031 9.10156 1.5 9.28125 1.5 9.5C1.5 9.71875 1.57031 9.89844 1.71094 10.0391C1.85156 10.1797 2.03125 10.25 2.25 10.25ZM2.25 8C2.8125 8.01562 3.24219 8.26562 3.53906 8.75C3.82031 9.25 3.82031 9.75 3.53906 10.25C3.24219 10.7344 2.8125 10.9844 2.25 11C1.6875 10.9844 1.25781 10.7344 0.960938 10.25C0.679688 9.75 0.679688 9.25 0.960938 8.75C1.25781 8.26562 1.6875 8.01562 2.25 8ZM7.5 10.25C7.71875 10.25 7.89844 10.1797 8.03906 10.0391C8.17969 9.89844 8.25 9.71875 8.25 9.5C8.25 9.28125 8.17969 9.10156 8.03906 8.96094C7.89844 8.82031 7.71875 8.75 7.5 8.75C7.28125 8.75 7.10156 8.82031 6.96094 8.96094C6.82031 9.10156 6.75 9.28125 6.75 9.5C6.75 9.71875 6.82031 9.89844 6.96094 10.0391C7.10156 10.1797 7.28125 10.25 7.5 10.25ZM7.5 8C8.0625 8.01562 8.49219 8.26562 8.78906 8.75C9.07031 9.25 9.07031 9.75 8.78906 10.25C8.49219 10.7344 8.0625 10.9844 7.5 11C6.9375 10.9844 6.50781 10.7344 6.21094 10.25C5.92969 9.75 5.92969 9.25 6.21094 8.75C6.50781 8.26562 6.9375 8.01562 7.5 8ZM13.5 9.5C13.5 9.28125 13.4297 9.10156 13.2891 8.96094C13.1484 8.82031 12.9688 8.75 12.75 8.75C12.5312 8.75 12.3516 8.82031 12.2109 8.96094C12.0703 9.10156 12 9.28125 12 9.5C12 9.71875 12.0703 9.89844 12.2109 10.0391C12.3516 10.1797 12.5312 10.25 12.75 10.25C12.9688 10.25 13.1484 10.1797 13.2891 10.0391C13.4297 9.89844 13.5 9.71875 13.5 9.5ZM11.25 9.5C11.2656 8.9375 11.5156 8.50781 12 8.21094C12.5 7.92969 13 7.92969 13.5 8.21094C13.9844 8.50781 14.2344 8.9375 14.25 9.5C14.2344 10.0625 13.9844 10.4922 13.5 10.7891C13 11.0703 12.5 11.0703 12 10.7891C11.5156 10.4922 11.2656 10.0625 11.25 9.5ZM0.75 13.25V13.625C0.734375 13.8594 0.609375 13.9844 0.375 14C0.140625 13.9844 0.015625 13.8594 0 13.625V13.25C0.015625 12.8281 0.164062 12.4766 0.445312 12.1953C0.726562 11.9141 1.07812 11.7656 1.5 11.75H3C3.42188 11.7656 3.77344 11.9141 4.05469 12.1953C4.33594 12.4766 4.48438 12.8281 4.5 13.25V13.625C4.48438 13.8594 4.35938 13.9844 4.125 14C3.89062 13.9844 3.76562 13.8594 3.75 13.625V13.25C3.75 13.0312 3.67969 12.8516 3.53906 12.7109C3.39844 12.5703 3.21875 12.5 3 12.5H1.5C1.28125 12.5 1.10156 12.5703 0.960938 12.7109C0.820312 12.8516 0.75 13.0312 0.75 13.25ZM6.75 12.5C6.53125 12.5 6.35156 12.5703 6.21094 12.7109C6.07031 12.8516 6 13.0312 6 13.25V13.625C5.98438 13.8594 5.85938 13.9844 5.625 14C5.39062 13.9844 5.26562 13.8594 5.25 13.625V13.25C5.26562 12.8281 5.41406 12.4766 5.69531 12.1953C5.97656 11.9141 6.32812 11.7656 6.75 11.75H8.25C8.67188 11.7656 9.02344 11.9141 9.30469 12.1953C9.58594 12.4766 9.73438 12.8281 9.75 13.25V13.625C9.73438 13.8594 9.60938 13.9844 9.375 14C9.14062 13.9844 9.01562 13.8594 9 13.625V13.25C9 13.0312 8.92969 12.8516 8.78906 12.7109C8.64844 12.5703 8.46875 12.5 8.25 12.5H6.75ZM11.25 13.25V13.625C11.2344 13.8594 11.1094 13.9844 10.875 14C10.6406 13.9844 10.5156 13.8594 10.5 13.625V13.25C10.5156 12.8281 10.6641 12.4766 10.9453 12.1953C11.2266 11.9141 11.5781 11.7656 12 11.75H13.5C13.9219 11.7656 14.2734 11.9141 14.5547 12.1953C14.8359 12.4766 14.9844 12.8281 15 13.25V13.625C14.9844 13.8594 14.8594 13.9844 14.625 14C14.3906 13.9844 14.2656 13.8594 14.25 13.625V13.25C14.25 13.0312 14.1797 12.8516 14.0391 12.7109C13.8984 12.5703 13.7188 12.5 13.5 12.5H12C11.7812 12.5 11.6016 12.5703 11.4609 12.7109C11.3203 12.8516 11.25 13.0312 11.25 13.25Z'
        fill='#0F3554'
      />
    </svg>
  );
}

export function FilterJobIcon() {
  return (
    <svg
      width='15'
      height='16'
      viewBox='0 0 15 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.25 3.125V4.25H9.75V3.125C9.73438 2.89062 9.60938 2.76563 9.375 2.75H5.625C5.39062 2.76563 5.26562 2.89062 5.25 3.125ZM4.5 4.25V3.125C4.51562 2.8125 4.625 2.54687 4.82812 2.32812C5.04688 2.125 5.3125 2.01563 5.625 2H9.375C9.6875 2.01563 9.95312 2.125 10.1719 2.32812C10.375 2.54687 10.4844 2.8125 10.5 3.125V4.25H12C12.4219 4.26562 12.7734 4.41406 13.0547 4.69531C13.3359 4.97656 13.4844 5.32812 13.5 5.75V11.75C13.4844 12.1719 13.3359 12.5234 13.0547 12.8047C12.7734 13.0859 12.4219 13.2344 12 13.25H3C2.57812 13.2344 2.22656 13.0859 1.94531 12.8047C1.66406 12.5234 1.51562 12.1719 1.5 11.75V5.75C1.51562 5.32812 1.66406 4.97656 1.94531 4.69531C2.22656 4.41406 2.57812 4.26562 3 4.25H4.5ZM10.125 5H4.875H3C2.78125 5 2.60156 5.07031 2.46094 5.21094C2.32031 5.35156 2.25 5.53125 2.25 5.75V8H5.625H6.375H8.625H9.375H12.75V5.75C12.75 5.53125 12.6797 5.35156 12.5391 5.21094C12.3984 5.07031 12.2188 5 12 5H10.125ZM12.75 8.75H9.375V9.875C9.375 10.0938 9.30469 10.2734 9.16406 10.4141C9.02344 10.5547 8.84375 10.625 8.625 10.625H6.375C6.15625 10.625 5.97656 10.5547 5.83594 10.4141C5.69531 10.2734 5.625 10.0938 5.625 9.875V8.75H2.25V11.75C2.25 11.9688 2.32031 12.1484 2.46094 12.2891C2.60156 12.4297 2.78125 12.5 3 12.5H12C12.2188 12.5 12.3984 12.4297 12.5391 12.2891C12.6797 12.1484 12.75 11.9688 12.75 11.75V8.75ZM6.375 8.75V9.875H8.625V8.75H6.375Z'
        fill='#0F3554'
      />
    </svg>
  );
}
