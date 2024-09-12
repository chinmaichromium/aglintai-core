'use client';
import { InvalidJob } from '@devlink/InvalidJob';
import InvalidJobPostLottie from '@public/lottie/InvalidJobPostLottie';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

import { SeoPro } from '@/components/Common/SeoPro';
import JobPostPublic from '@/components/JobPost';
import { type PublicJobAPI } from '@/pages/api/jobpost/read';

function JobPost({
  params: { id },
  searchParams: { preview },
}: {
  params: { id: string };
  searchParams: { preview: boolean };
}) {
  const jobId = id;
  const [post, setPost] = useState<PublicJobAPI['post']>();
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(true);
  const [recruiter, setRecruiter] = useState<PublicJobAPI['recruiter']>();
  const [jobs, setJobs] = useState<PublicJobAPI['jobs']>([]);

  useEffect(() => {
    const query = isValidUUID(jobId) ? `id.eq.${jobId}` : `slug.eq.${jobId}`;

    (async () => {
      const response = await axios.post<PublicJobAPI>(
        `${process.env.NEXT_PUBLIC_HOST_NAME}/api/jobpost/read`,
        {
          query: query,
          preview: preview,
        },
      );
      if (response.data) {
        setPost(response.data.post);
        setValid(response.data.isValid);
        setRecruiter(response.data.recruiter);
        setJobs(response.data.jobs);
        setLoading(false);
      }
    })();
  }, []);

  function isValidUUID(uuid) {
    const uuidRegex =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(uuid);
  }

  let validThrough;
  if (post?.created_at) {
    const originalDate = new Date(post?.created_at);
    // Add 30 days
    originalDate?.setDate(originalDate.getDate() + 30);
    // Format the result as a string in ISO 8601 format
    validThrough = originalDate?.toISOString();
  }

  const description = post?.description;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    datePosted: post?.created_at,
    validThrough: validThrough,
    description: description,
    employmentType: 'Full-time',
    experienceRequirements: {
      '@type': 'OccupationalExperienceRequirements',
      // monthsOfExperience: post?.experience_in_months || 0,
    },
    incentiveCompensation:
      'Performance-based annual bonus plan, project-completion bonuses',
    industry: 'Computer Software',

    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        // addressLocality: (post?.location_json as any)?.state || '',
        // addressCountry: (post?.location_json as any)?.country || '',
      },
    },
    hiringOrganization: {
      '@type': 'Organization',
      // name: post?.company || '',
      logo: recruiter?.logo,
    },
    occupationalCategory: '15-1132.00 Software Developers, Application',
    salaryCurrency: 'USD',
    // skills: post?.skills?.join(','),
    title: post?.job_title,
    workHours: '40 hours per week',
  };

  return (
    <div className='min-h-screen'>
      <SeoPro
        jsonLd={jsonLd}
        title={
          post?.job_title
            ? `${post?.job_title} | ${recruiter?.name}`
            : 'Job posting'
        }
        description='AI for People Products'
      />
      {loading ? (
        <div className='flex h-screen items-center justify-center w-full'>
          <Loader2 className='animate-spin' />
        </div>
      ) : valid ? (
        <JobPostPublic post={post} recruiter={recruiter} jobs={jobs} />
      ) : (
        <InvalidJob slotLottie={<InvalidJobPostLottie />} />
      )}
    </div>
  );
}

export default JobPost;

JobPost.publicProvider = (page) => {
  return <>{page}</>;
};
