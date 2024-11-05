import { type Locator, type Page } from '@playwright/test';

export const createJobDetailsPageFixture = (page: Page) => {
  const dashboard_url = process.env.NEXT_PUBLIC_HOST_NAME + '/jobs';
  const jobTableHeader = page.getByTestId('application-header');

  return {
    goto: async (job_id: string) => {
      await page.goto(dashboard_url + '/' + job_id, {
        timeout: 5000, // Increase timeout to 30 seconds
        waitUntil: 'networkidle', // Wait until network is idle
      });
    },
    isReady: async () => {
      return jobTableHeader.isVisible();
    },
    getAllApplicationRows: async () => {
      const applications = await page.getByTestId('application-row');
      const allApplicationRows = await applications.all();
      return allApplicationRows;
    },
    moveApplicationsToInterview: async (rows: Locator[]) => {
      console.log('app rows', rows);
    },
    //
  };
};
