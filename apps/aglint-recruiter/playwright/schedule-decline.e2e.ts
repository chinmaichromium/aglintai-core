import { getRandomNumInRange } from '@aglint/shared-utils';
import { expect } from '@playwright/test';

import { test } from './lib/fixtures';
import {
  getConfirmedMeetings,
  getDeclineRequests,
  getMeetingInterviewers,
} from './utils/dbfetch';
import { getCandidateSelfSchedulingLink } from './utils/dbfetch';
import { getRequestForScheduleE2e } from './utils/getRequest';

test.describe.parallel('Test Self Scheduling Flow ', () => {
  let singleDayRequestId: string;
  let multiDayRequestId: string;
  test.beforeAll(async () => {
    const { singleDayRequests, multiDayRequests } =
      await getRequestForScheduleE2e();
    singleDayRequestId = singleDayRequests[0].id;
    multiDayRequestId = multiDayRequests[0].id;
  });
  test('Single Day Self Scheduling', async ({
    loginPage,
    requestDetailsPage,
    candidateSelfBookingPage,
  }) => {
    await test.step('Login', async () => {
      await loginPage.goto();
      await loginPage.login(
        process.env.E2E_TEST_EMAIL,
        process.env.E2E_TEST_PASSWORD,
      );
    });
    await test.step('Navigate to request details', async () => {
      await requestDetailsPage.goto(singleDayRequestId);
    });
    await test.step('Open Self Scheduling Dialog', async () => {
      await requestDetailsPage.openSelfSchedulingDialog();
    });
    await test.step('Test Self Scheduling Mail Preview', async () => {
      await requestDetailsPage.selectSelfScheduleDaySlots();
      await requestDetailsPage.checkSelfScheduleMailPreview();
    });
    await test.step('Send Self Scheduling Link to Candidate', async () => {
      await requestDetailsPage.sendSelfSchedulingRequestLinkToCandidate();
    });
    await test.step('Go to Self Booking Page', async () => {
      const selfScheduleLink =
        await getCandidateSelfSchedulingLink(singleDayRequestId);
      await candidateSelfBookingPage.goto(selfScheduleLink);
    });
    await test.step('Test select slot and book', async () => {
      await candidateSelfBookingPage.singleDayBook();
    });
  });
  test('Multi Day Self Scheduling', async ({
    loginPage,
    requestDetailsPage,
    candidateSelfBookingPage,
  }) => {
    await test.step('Login', async () => {
      await loginPage.goto();
      await loginPage.login(
        process.env.E2E_TEST_EMAIL,
        process.env.E2E_TEST_PASSWORD,
      );
    });
    await test.step('Navigate to request details', async () => {
      await requestDetailsPage.goto(multiDayRequestId);
    });
    await test.step('Open Self Scheduling Dialog', async () => {
      await requestDetailsPage.openSelfSchedulingDialog();
    });
    await test.step('Test Self Scheduling Mail Preview', async () => {
      await requestDetailsPage.selectSelfScheduleDaySlots();
      await requestDetailsPage.checkSelfScheduleMailPreview();
    });
    await test.step('Send Self Scheduling Link to Candidate', async () => {
      await requestDetailsPage.sendSelfSchedulingRequestLinkToCandidate();
    });
    await test.step('Go to Self Booking Page', async () => {
      const selfScheduleLink =
        await getCandidateSelfSchedulingLink(multiDayRequestId);
      await candidateSelfBookingPage.goto(selfScheduleLink);
    });
    await test.step('Test select slot and book', async () => {
      await candidateSelfBookingPage.multiDayBook();
    });
  });
});

test.describe('Post Scheduling Scenario', () => {
  let declineMeetingDetails: Awaited<
    ReturnType<typeof getConfirmedMeetings>
  >[number];

  test.beforeAll(async () => {
    const meetings = await getConfirmedMeetings();
    declineMeetingDetails = meetings[0];
  });
  test('interviewer Decline Request', async ({
    loginPage,
    page,
    logout,
    requestDetailsPage,
  }) => {
    const meetingInterviewers = await getMeetingInterviewers(
      declineMeetingDetails.id,
    );
    const dec_interviewer = meetingInterviewers[0];
    await test.step('create decline request', async () => {
      await loginPage.goto();
      await loginPage.login(
        dec_interviewer.email,
        process.env.E2E_TEST_PASSWORD,
      );
      await page.goto(
        `${process.env.NEXT_PUBLIC_HOST_NAME}/interviews/view?meeting_id=${declineMeetingDetails.id}&tab=job_details`,
      );
      await page.waitForSelector('[data-testid="interviewer-banners"]');
      await page.click('[data-testid="decline-button"]');
      await page.waitForSelector('[data-testid="popup-decline-radio"]');
      const radioBtns = await page.getByTestId('popup-decline-radio');

      await radioBtns
        .nth(getRandomNumInRange(0, (await radioBtns.count()) - 1))
        .click();
      await page.getByTestId('popup-primary-button').click();
      await page.waitForResponse(async (req) => {
        return (
          (await req.url().includes('/api/request/interviewer-request')) &&
          req.status() === 200
        );
      });
      expect(async () => {
        expect(
          (await page.getByTestId('interviewer-banners')).isVisible(),
        ).toBeFalsy();
      }).toPass({
        intervals: [2000, 4000],
      });
    });
    await test.step('Process decline Request', async () => {
      const request = await getDeclineRequests(
        dec_interviewer.session_relation_id,
      );
      expect(await logout.isReady()).toBeTruthy();
      await logout.logout();
      await page.waitForTimeout(3000); // Fake wait for 3 seconds
      expect(async () => {
        expect(await loginPage.isReady()).toBeTruthy();
      }).toPass({
        intervals: [2000, 4000],
      });
      await loginPage.login(
        process.env.E2E_TEST_EMAIL,
        process.env.E2E_TEST_PASSWORD,
      );
      await requestDetailsPage.goto(request.id);
      await page.waitForSelector('[data-testid="change-interviewer-button"]');
      await page.click('[data-testid="change-interviewer-button"]');
      await page.waitForSelector('[data-testid="interviewer-list-container"]');
      const alternativeInters = await page.getByTestId(
        'alternative-interviewer-item',
      );
      await alternativeInters
        .nth(getRandomNumInRange(0, (await alternativeInters.count()) - 1))
        .click();
      await page.getByTestId('dialog-primary-button').click();
      await page.waitForResponse(async (res) => {
        return (
          (await res
            .url()
            .includes('/api/scheduling/v1/update-meeting-interviewers')) &&
          res.status() === 200
        );
      });
      await page.reload();
      await page.waitForSelector(
        '[data-testid="request-details-status-completed"]',
      );
      await page.waitForSelector('[data-testid="request-progress"]');
    });
  });
});
