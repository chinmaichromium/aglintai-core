import {
  Section,
  SectionHeader,
  SectionHeaderText,
  SectionTitle,
} from '@components/layouts/sections-header';

export function CandidateCalender({
  slotDayColumn,
  textMonth,
}: {
  slotDayColumn: React.ReactNode;
  textMonth: string;
}) {
  return (
    <Section>
      <SectionHeader>
        <SectionHeaderText>
          <SectionTitle>
            <span className='font-medium'>{textMonth}</span>
          </SectionTitle>
        </SectionHeaderText>
      </SectionHeader>
      <div className='flex w-full flex-row gap-2'>{slotDayColumn}</div>
    </Section>
  );
}
