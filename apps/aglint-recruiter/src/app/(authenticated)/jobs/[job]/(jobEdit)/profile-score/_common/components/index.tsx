/* eslint-disable security/detect-object-injection */
import { type DatabaseTable } from '@aglint/shared-types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/ui/accordion';
import { Alert, AlertDescription } from '@components/ui/alert';
import { Button } from '@components/ui/button';
import { Card, CardContent } from '@components/ui/card';
import { Input } from '@components/ui/input';
import { Skeleton } from '@components/ui/skeleton';
import { capitalize } from 'lodash';
import {
  Check,
  CircleDot,
  Edit2,
  Lightbulb,
  PlusCircle,
  RefreshCcw,
  X,
} from 'lucide-react';
import { nanoid } from 'nanoid';
import {
  type ChangeEventHandler,
  type FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import ScoreWheel, {
  type ScoreWheelParams,
} from '@/components/Common/ScoreWheel';
import { UIButton } from '@/components/Common/UIButton';
import { useRolesAndPermissions } from '@/context/RolesAndPermissions/RolesAndPermissionsContext';
import { TourProvider, useTour } from '@/context/TourContext';
import { useRouterPro } from '@/hooks/useRouterPro';
// import { Settings } from '@/job/components/SharedTopNav/actions';
import { useJob } from '@/job/hooks';
import { distributeScoreWeights } from '@/job/utils';

type Sections = 'experience' | 'education' | 'skills';

export const JobProfileScoreDashboard = () => {
  const { isScoringEnabled } = useRolesAndPermissions();
  const { jobLoad, job } = useJob();

  return jobLoad ? (
    job && isScoringEnabled && job?.status !== 'closed' ? (
      <TourProvider>
        <ProfileScorePage />
      </TourProvider>
    ) : (
      // TODO: When we move to app router, we should move to separate component
      <div className='flex h-screen items-center justify-center'>
        <div className='text-center'>
          <h1 className='mb-4 text-2xl font-bold'>Job Not Found</h1>
          <p className='text-gray-600'>
            The job you&apos;re looking for doesn&apos;t exist or you don`&apost
            have permission to view it.
          </p>
        </div>
      </div>
    )
  ) : (
    // TODO: When we move to app router, we should move to separate skeleton component
    <div className='container-lg mx-auto flex flex-col space-y-6 px-12'>
      <div className='flex items-center justify-between'>
        <div className='space-y-2'>
          <Skeleton className='h-8 w-64' />
          <Skeleton className='h-4 w-32' />
        </div>
        <div className='flex gap-6'>
          <div className='w-1/4'>
            <Skeleton className='h-[calc(100vh-200px)] w-full' />
          </div>
          <div className='w-3/4 space-y-4'>
            <Skeleton className='h-6 w-48' />
            <Skeleton className='h-4 w-full' />
            <div className='flex gap-6'>
              <div className='flex-1'>
                <Skeleton className='h-64 w-full' />
              </div>
              <div className='w-1/3 space-y-4'>
                <Skeleton className='h-40 w-full' />
                <Skeleton className='h-40 w-full' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileScorePage = () => {
  return (
    <>
      <div className='w-full'>
        <h2 className='mb-2 text-xl font-bold'>Profile Scoring</h2>
        <p className='mb-4 text-sm text-gray-600'>
          Profile scoring helps evaluate candidates objectively, assigning
          numerical values to their qualifications and experience to streamline
          the hiring process and identify the best-fit applicants efficiently.
        </p>
        <div className='flex'>
          <div className='mr-4 flex-1'>
            <ProfileScore />
          </div>
          <div className='w-1/3'>
            <ProfileScoreControls />
            <Tips />
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileScoreControls = () => {
  const { job, handleJobAsyncUpdate } = useJob();
  const initialRef = useRef(false);
  const initialSubmitRef = useRef(false);
  const jd_json = job.draft.jd_json;
  const parameter_weights = job.parameter_weights as ScoreWheelParams;
  const disabled = {
    experience: (jd_json?.rolesResponsibilities ?? []).length === 0,
    skills: (jd_json?.skills ?? []).length === 0,
    education: (jd_json?.educations ?? []).length === 0,
  };
  const allDisabled =
    disabled.education && disabled.skills && disabled.experience;
  const [weights, setWeight] = useState<ScoreWheelParams>(parameter_weights);
  const safeWeights = Object.entries(weights).reduce((acc, [key, value]) => {
    acc[key] = +value;
    return acc;
  }, {} as ScoreWheelParams);
  const sum = Object.values(safeWeights).reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  const hasChanged = Object.entries(safeWeights).reduce((acc, [key, value]) => {
    if (!acc && value !== parameter_weights[key]) return true;
    return acc;
  }, false);
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const entry = e.target.value as any;
    const safeEntry = +entry;
    const newSum = sum - weights[e.target.name] + safeEntry;
    if (entry === null || entry === '')
      setWeight((prev) => ({ ...prev, [e.target.name]: null }));
    else if (safeEntry < 0)
      setWeight((prev) => ({ ...prev, [e.target.name]: 0 }));
    else if (newSum > 100)
      setWeight((prev) => ({
        ...prev,
        [e.target.name]: 100 - newSum + safeEntry,
      }));
    else setWeight((prev) => ({ ...prev, [e.target.name]: safeEntry }));
  };
  const handleReset = () => {
    const obj = distributeScoreWeights(job.draft.jd_json);
    setWeight(obj);
  };
  const handleSubmit = async () => {
    await handleJobAsyncUpdate({ parameter_weights: safeWeights });
  };
  useEffect(() => {
    if (!initialRef.current) {
      initialRef.current = true;
      return;
    }
    handleReset();
  }, Object.values(disabled));
  useEffect(() => {
    if (!initialSubmitRef.current) {
      initialSubmitRef.current = true;
      return;
    }
    if (hasChanged && (sum === 100 || allDisabled)) {
      const timeout = setTimeout(() => handleSubmit(), 400);
      return () => clearTimeout(timeout);
    }
  }, Object.values(safeWeights));
  return (
    <div
      className={`sticky right-0 top-0 p-4 ${
        job.scoring_criteria_loading ? 'pointer-events-none opacity-40' : ''
      }`}
    >
      <div className='space-y-4'>
        <div className='flex justify-center'>
          <div className='flex w-4/5 flex-row items-center justify-center gap-10'>
            <ScoreWheel parameter_weights={weights} />
          </div>
        </div>
        <div className='flex flex-row justify-center space-x-2'>
          <Input
            type='number'
            name='experience'
            value={weights.experience}
            onChange={(e) => handleChange(e)}
            disabled={disabled.experience}
            className='w-20 bg-white'
          />
          <Input
            type='number'
            name='skills'
            value={weights.skills}
            onChange={(e) => handleChange(e)}
            disabled={disabled.skills}
            className='w-20 bg-white'
          />
          <Input
            type='number'
            name='education'
            value={weights.education}
            onChange={(e) => handleChange(e)}
            disabled={disabled.education}
            className='w-20 bg-white'
          />
        </div>
        <div className='flex justify-center'>
          <Button variant='outline' size='sm' onClick={() => handleReset()}>
            <RefreshCcw className='mr-2 h-4 w-4' /> Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProfileScore = () => {
  const { job } = useJob();
  const parameter_weights = job.parameter_weights as ScoreWheelParams;

  return (
    <div className='mr-4 space-y-4'>
      <Banners />
      {job.scoring_criteria_loading ? (
        <div className='space-y-4'>
          <LoaadingSkeleton />
        </div>
      ) : (
        <Card className='w-full'>
          <CardContent className='pt-6'>
            <Accordion type='single' defaultValue='experience' collapsible>
              <AccordionItem value='experience'>
                <AccordionTrigger>
                  <SectionHeader
                    type='experience'
                    weight={parameter_weights.experience}
                    color='#30aabc'
                  />
                </AccordionTrigger>
                <AccordionContent>
                  <SectionContent type='experience' />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='skills'>
                <AccordionTrigger>
                  <SectionHeader
                    type='skills'
                    weight={parameter_weights.skills}
                    color='#886bd8'
                  />
                </AccordionTrigger>
                <AccordionContent>
                  <SectionContent type='skills' />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='education'>
                <AccordionTrigger>
                  <SectionHeader
                    type='education'
                    weight={parameter_weights.education}
                    color='#5d7df5'
                  />
                </AccordionTrigger>
                <AccordionContent>
                  <SectionContent type='education' />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

const SectionHeader: FC<{ type: Sections; weight: number; color: string }> = ({
  type,
  weight,
  color,
}) => {
  return (
    <div className='flex items-center space-x-2'>
      <CircleDot className='h-4 w-4' style={{ color }} />
      <span className='font-medium'>{capitalize(type)}</span>
      <span className='text-sm text-muted-foreground'>({weight}%)</span>
    </div>
  );
};

const SectionContent: FC<{ type: Sections }> = ({ type }) => {
  const {
    job: { draft },
    handleJobUpdate,
  } = useJob();
  const { jd_json } = draft;
  const section: keyof typeof jd_json =
    type === 'experience'
      ? 'rolesResponsibilities'
      : type === 'education'
        ? 'educations'
        : 'skills';

  const [newTags, setNewTags] = useState('');

  const handleAddTags = () => {
    if (newTags.trim() !== '') {
      const tagsArray = newTags
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag !== '');
      const newItems = tagsArray.map((tag) => ({
        id: nanoid(),
        field: tag,
        isMustHave: false,
      }));
      handleJobUpdate({
        draft: {
          ...draft,
          jd_json: {
            ...jd_json,
            [section]: [...jd_json[section], ...newItems],
          },
        },
      });
      setNewTags('');
    }
  };

  const handleTagChange = (index: number, updatedItem: any) => {
    const newSection = jd_json[section].map((item, i) =>
      i === index ? updatedItem : item,
    );
    handleJobUpdate({
      draft: {
        ...draft,
        jd_json: { ...jd_json, [section]: newSection },
      },
    });
  };

  const handleTagDelete = (index: number) => {
    const newSection = jd_json[section].filter((_, i) => i !== index);
    handleJobUpdate({
      draft: {
        ...draft,
        jd_json: { ...jd_json, [section]: newSection },
      },
    });
  };

  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-2'>
        {jd_json[section].map((item, index) => (
          <Tag
            key={item.id}
            item={item}
            onChange={(updatedItem) => handleTagChange(index, updatedItem)}
            onDelete={() => handleTagDelete(index)}
          />
        ))}
      </div>
      <div className='flex items-center pl-2'>
        <Input
          placeholder={`Add new ${type}`}
          value={newTags}
          onChange={(e) => setNewTags(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddTags();
            }
          }}
          className='h-fit flex-grow p-1 pl-3'
        />
        <Button
          size='sm'
          onClick={handleAddTags}
          variant='outline'
          className='ml-2'
        >
          <PlusCircle className='mr-1 h-4 w-4' />
          Add
        </Button>
      </div>
    </div>
  );
};

const Tag: FC<{
  item: DatabaseTable['public_jobs']['jd_json']['rolesResponsibilities'][number];
  // eslint-disable-next-line no-unused-vars
  onChange: (updatedItem: any) => void;
  onDelete: () => void;
}> = ({ item, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(item.field);

  const handleSubmit = () => {
    if (value.trim() !== '') {
      onChange({ ...item, field: value.trim() });
      setIsEditing(false);
    }
  };

  return (
    <div className='group relative inline-block'>
      {isEditing ? (
        <div className='flex items-center overflow-hidden rounded-md border bg-white'>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={handleSubmit}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            className='h-8 w-[200px] border-none p-1 pl-3 text-sm focus:outline-none focus-visible:ring-0'
          />
          <UIButton
            onClick={handleSubmit}
            className='bg-gray-100 px-2 py-1 transition-colors duration-200 hover:bg-gray-200'
            title='Press Enter to save'
            icon={<Check />}
            size='sm'
          />
        </div>
      ) : (
        <div className='inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700'>
          {item.field}
          <button
            onClick={() => setIsEditing(true)}
            className='ml-2 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100'
          >
            <Edit2 className='h-4 w-4' />
          </button>
          <button
            onClick={onDelete}
            className='ml-1 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100'
          >
            <X className='h-4 w-4' />
          </button>
        </div>
      )}
    </div>
  );
};

const Banners = () => {
  const { push } = useRouterPro();
  const { job, handleRegenerateJd, status } = useJob();
  if (status.loading) return <></>;
  if (status.description_error)
    return (
      <Alert variant='error'>
        <AlertDescription>
          <div className='flex items-center justify-between'>
            <p className='mr-4'>Job description is unavailable</p>
            <Button
              size='sm'
              variant='outline'
              onClick={() => push(`/jobs/${job.id}/edit`)}
            >
              View
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    );
  if (status.jd_json_error)
    return (
      <Alert variant='warning'>
        <AlertDescription>
          <div className='flex items-center justify-between'>
            <p className='mr-4'>No profile score criterias set.</p>
            <Button
              size='sm'
              variant='outline'
              onClick={() => handleRegenerateJd(job)}
            >
              Generate
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    );
  if (status.description_changed && !status.scoring_criteria_changed)
    return (
      <Alert variant='warning'>
        <AlertDescription>
          <div className='flex items-center justify-between'>
            <p className='mr-4'>
              Job description has changed. Regenerate to update scoring
              criteria.
            </p>
            <Button
              size='sm'
              variant='outline'
              onClick={() => handleRegenerateJd(job)}
            >
              Regenerate
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    );
  return <></>;
};

const Tips = () => {
  const {
    tour: { data },
    handleCreateTourLog,
  } = useTour();
  const firstVisit = useMemo(
    () => !(data ?? ['profile_score_intro']).includes('profile_score_intro'),
    [data],
  );
  const handleTip = useCallback(() => {
    if (firstVisit) handleCreateTourLog({ type: 'profile_score_intro' });
  }, [handleCreateTourLog, firstVisit]);
  return (
    <>
      {firstVisit && (
        <div className='mx-4 mt-4'>
          <div className='flex items-start space-x-4 rounded-md bg-purple-100 p-4'>
            <Lightbulb className='h-6 w-6 flex-shrink-0 text-purple-500' />
            <div className='flex-grow'>
              <h4 className='mb-1 text-lg font-semibold text-purple-700'>
                Pro Tip
              </h4>
              <p className='text-sm text-purple-600'>
                Tailor the evaluation criteria to match the specific needs of
                the role you are hiring for by adjusting the weightages.
              </p>
            </div>
            <Button
              variant='ghost'
              size='sm'
              onClick={handleTip}
              className='text-purple-500 hover:text-purple-700'
            >
              <X className='h-4 w-4' />
            </Button>
          </div>
        </div>
      )}
      <div className='mx-4 mt-8 flex flex-col gap-1 rounded-md border p-4'>
        <p className='text-sm font-semibold text-info'>How It Works</p>
        <p className='text-sm text-muted-foreground'>
          Adjust the weightage for Experience, Skills, and Education to
          customize the profile score. The total must equal 100%. Use the input
          fields to set percentages. Click &quot;Reset&quot; to restore default
          settings.
        </p>
      </div>
    </>
  );
};

const LoaadingSkeleton = () => {
  return (
    <div className='w-full rounded-lg bg-white p-4 shadow'>
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <Skeleton className='h-4 w-4 rounded-full' />
          <Skeleton className='h-6 w-24' />
        </div>
        <Skeleton className='h-6 w-12' />
      </div>
      <div className='space-y-3'>
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className='h-8 w-full' />
        ))}
      </div>
      <div className='my-4 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <Skeleton className='h-4 w-4 rounded-full' />
          <Skeleton className='h-6 w-24' />
        </div>
        <Skeleton className='h-6 w-12' />
      </div>
      <div className='space-y-3'>
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className='h-8 w-full' />
        ))}
      </div>
      <div className='my-4 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <Skeleton className='h-4 w-4 rounded-full' />
          <Skeleton className='h-6 w-24' />
        </div>
        <Skeleton className='h-6 w-12' />
      </div>
      <div className='space-y-3'>
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className='h-8 w-full' />
        ))}
      </div>
    </div>
  );
};