'use client';
import { OneColumnPageLayout } from '@components/layouts/one-column-page-layout';
import {
  Section,
  SectionDescription,
  SectionHeader,
  SectionHeaderText,
  SectionTitle,
} from '@components/layouts/sections-header';
import { type PropsWithChildren } from 'react';

import VerticalNav from './_common/components/SideNav';
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <OneColumnPageLayout
      sidebar={
        <Section>
          <SectionHeader>
            <SectionHeaderText>
              <SectionTitle>Settings</SectionTitle>
              <SectionDescription>
                Manage your company settings and preferences.
              </SectionDescription>
            </SectionHeaderText>
          </SectionHeader>
          <VerticalNav />
        </Section>
      }
      sidebarPosition='left'
      sidebarWidth={280}
    >
      {children}
    </OneColumnPageLayout>
  );
};

export default Layout;
