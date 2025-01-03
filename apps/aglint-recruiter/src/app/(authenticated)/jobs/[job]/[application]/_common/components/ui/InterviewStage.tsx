'use client';

import React from 'react';

interface InterviewStageProps {
  slotPipelineTab?: React.ReactNode;
  slotInterviewStage?: React.ReactNode;
}

export function InterviewStage({
  slotPipelineTab,
  slotInterviewStage,
}: InterviewStageProps) {
  return (
    <div className='grid grid-cols-[0.4fr_1fr] gap-4 px-4 pt-2'>
      <div className='relative z-[1] flex flex-col gap-2.5'>
        {slotPipelineTab}
      </div>
      <div className='rounded-md p-0'>{slotInterviewStage}</div>
    </div>
  );
}
