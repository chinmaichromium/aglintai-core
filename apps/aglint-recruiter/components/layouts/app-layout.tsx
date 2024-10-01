import React from 'react';

interface AdminAppLayoutProps {
  children: React.ReactNode;
  topbar?: React.ReactNode;
  sidebar?: React.ReactNode;
  className?: string;
}

export function AdminAppLayout({
  children,
  topbar,
  sidebar,
}: AdminAppLayoutProps) {
  return (
    <>
      {topbar && <nav>{topbar}</nav>}
      <div className='flex w-full'>
        {sidebar && <nav>{sidebar}</nav>}
        <main className='flex w-full flex-row'>{children}</main>
      </div>
    </>
  );
}