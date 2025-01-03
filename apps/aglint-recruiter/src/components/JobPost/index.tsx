import { useToast } from '@components/hooks/use-toast';
import { Avatar, AvatarFallback, AvatarImage } from '@components/ui/avatar';
import { Button } from '@components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Input } from '@components/ui/input';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Building, CheckCircle, MapPin, Users } from 'lucide-react';
import React, { useState } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

import { Loader } from '@/common/Loader';
import { useRouterPro } from '@/hooks/useRouterPro';
import { type PublicJobAPI } from '@/pages/api/jobpost/read';
import { supabase } from '@/utils/supabase/client';

import Footer from '../Common/Footer';
import UploadDB from './UploadDB';

type JobsListProps = Pick<PublicJobAPI, 'jobs' | 'post' | 'recruiter'>;

const JobPostPublic: React.FC<JobsListProps> = ({ post, recruiter, jobs }) => {
  const { toast } = useToast();
  const router = useRouterPro();
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [thank, setThank] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [application, setApplication] = useState<any>();
  const [candidate, setCandidate] = useState<any[]>([]);

  const editorDescription = useEditor({
    editable: false,
    content: post?.description,
    extensions: [StarterKit],
  });

  const editorOverview = useEditor({
    editable: false,
    content: recruiter?.company_overview,
    extensions: [StarterKit],
  });

  const notifyMe = () => {
    if (email) {
      supabase
        .from('notify_me')
        .select('*')
        .eq('email', email)
        .then(async ({ data, error }) => {
          if (!error && data.length == 0) {
            await supabase
              .from('notify_me')
              .insert({
                email: email,
                job_id: post.id,
                job_title: post.job_title,
              })
              .select();
            setEmail('');
            toast({
              description:
                'Thank you for subscribing! You will be notified via email.',
            });
          } else {
            toast({
              description:
                'Thank you for subscribing! You will be notified via email.',
            });
          }
        });
    } else {
      setError(true);
    }
  };

  const filteredJobs = jobs
    .filter((job) => job.id !== post.id)
    .filter((job: any) => job.status === 'published');

  return (
    <div className='container relative min-h-screen bg-gray-100'>
      {thank && (
        <div className='absolute inset-0 z-50 flex flex-col bg-gray-100 p-4'>
          <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
            <CheckCircle className='mb-4 h-16 w-16 text-green-500' />
            <h2 className='text-2xl font-bold'>
              Application submitted successfully.
            </h2>
            <p className='text-center'>
              Thank you {candidate[0]?.first_name} for taking the time to apply
              for this role. We will be in touch with you soon. If you have any
              questions, please
              <Button
                variant='link'
                onClick={() =>
                  application?.id &&
                  window.open(
                    `${process.env.NEXT_PUBLIC_HOST_NAME}/support/create?id=${application?.id}`,
                    '_blank',
                  )
                }
              >
                contact support
              </Button>
            </p>
            <Avatar className='h-20 w-20'>
              <AvatarImage
                src={recruiter?.logo ?? null!}
                alt={recruiter?.name}
              />
              <AvatarFallback>
                <Building className='h-12 w-12' />
              </AvatarFallback>
            </Avatar>
            <h3 className='text-xl font-semibold'>{recruiter?.name}</h3>
            <p>
              {[
                recruiter?.office_locations[0]?.city,
                recruiter?.office_locations[0]?.region,
                recruiter?.office_locations[0]?.country,
              ]
                .filter(Boolean)
                .join(', ')}
            </p>
          </div>
          <Footer brand={true} />
        </div>
      )}

      {loading && <Loader />}

      <div
        className={`min-h-screen ${thank || loading ? 'overflow-hidden' : 'overflow-auto'}`}
      >
        <Card className='m-4'>
          <CardHeader>
            <div className='flex items-center space-x-4'>
              <Avatar className='h-20 w-20'>
                <AvatarImage
                  src={recruiter?.logo ?? null!}
                  alt={recruiter?.name}
                />
                <AvatarFallback>
                  <Building className='h-12 w-12' />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{post?.job_title}</CardTitle>
                <p className='text-sm text-muted-foreground'>
                  {recruiter?.name}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {recruiter?.industry}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className='space-y-6'>
              <div>
                <h3 className='mb-2 text-lg font-semibold'>Job Description</h3>
                <EditorContent editor={editorDescription} />
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold'>
                  About the Company
                </h3>
                <EditorContent editor={editorOverview} />
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold'>Company Details</h3>
                <div className='grid grid-cols-2 gap-2'>
                  <div className='flex items-center space-x-2'>
                    <MapPin className='h-5 w-5 text-muted-foreground' />
                    <span>Location: --</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Users className='h-5 w-5 text-muted-foreground' />
                    <span>Employees: {recruiter?.employee_size || '--'}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold'>
                  Apply for this Job
                </h3>
                <UploadDB
                  post={post}
                  setThank={setThank}
                  setLoading={setLoading}
                  setApplication={setApplication}
                  recruiter={recruiter}
                  setCandidate={setCandidate}
                />
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold'>
                  Other Open Positions
                </h3>
                {filteredJobs.length > 0 ? (
                  <div className='space-y-4'>
                    {filteredJobs.map((job: any, ind) => (
                      <Card key={ind}>
                        <CardContent className='p-4'>
                          <div className='flex items-start justify-between'>
                            <div>
                              <h4 className='font-semibold'>
                                {job.job_title || '--'}
                              </h4>
                              <p className='text-sm text-muted-foreground'>
                                {job.departments?.name || '--'}
                              </p>
                              <p className='text-sm text-muted-foreground'>
                                Location: --
                              </p>
                              <p className='text-sm text-muted-foreground'>
                                {job.job_type || '--'}
                              </p>
                            </div>
                            <Button
                              onClick={() => {
                                document
                                  .getElementById('topAvatar')
                                  ?.scrollIntoView({ behavior: 'smooth' });
                                router.push(job.id);
                              }}
                            >
                              Apply Now
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <p className='text-center text-muted-foreground'>
                    No jobs found.
                  </p>
                )}
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold'>Get Notified</h3>
                <div className='flex space-x-2'>
                  <Input
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button onClick={notifyMe}>Notify Me</Button>
                </div>
                {error && (
                  <p className='mt-1 text-sm text-destructive'>
                    Email is required
                  </p>
                )}
              </div>

              <div>
                <h3 className='mb-2 text-lg font-semibold'>Share</h3>
                <div className='flex space-x-2'>
                  <LinkedinShareButton
                    url={window.location.href}
                    title={`Job Post - ${post.job_title}`}
                  >
                    <Avatar>
                      <AvatarImage
                        src='/images/social/linkedin.svg'
                        alt='LinkedIn'
                      />
                    </Avatar>
                  </LinkedinShareButton>
                  <TwitterShareButton
                    url={window.location.href}
                    title={`Job Post - ${post.job_title}`}
                  >
                    <Avatar>
                      <AvatarImage
                        src='/images/social/twitter.svg'
                        alt='Twitter'
                      />
                    </Avatar>
                  </TwitterShareButton>
                  <FacebookShareButton url={window.location.href}>
                    <Avatar>
                      <AvatarImage
                        src='/images/social/facebook.svg'
                        alt='Facebook'
                      />
                    </Avatar>
                  </FacebookShareButton>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Footer brand={true} />
      </div>
    </div>
  );
};

export default JobPostPublic;
