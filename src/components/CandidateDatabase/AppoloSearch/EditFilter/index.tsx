import {
  Autocomplete,
  CircularProgress,
  Dialog,
  Paper,
  Stack,
} from '@mui/material';
import axios from 'axios';
import { cloneDeep, set } from 'lodash';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { CdEditQuerry, JobPills } from '@/devlink';
import AUIButton from '@/src/components/Common/AUIButton';
import UITextField from '@/src/components/Common/UITextField';
import { palette } from '@/src/context/Theme/Theme';
import { useBoundStore } from '@/src/store';
import { supabase } from '@/src/utils/supabaseClient';
import toast from '@/src/utils/toast';

import { Candidate, CandidateSearchHistoryType } from '../types';
import { employeeRange, initialQuery, updateCredits } from '../utils';
import FilterInput from '../../Search/FilterInput';

function EditFilter() {
  const router = useRouter();
  const isfilterOpen = useBoundStore((state) => state.isfilterOpen);
  const filters = useBoundStore((state) => state.filters);
  const setFilters = useBoundStore((state) => state.setFilters);
  const isFilterLoading = useBoundStore((state) => state.isFilterLoading);
  const setIsFilterOpen = useBoundStore((state) => state.setIsFilterOpen);
  const setIsFilterLoading = useBoundStore((state) => state.setIsFilterLoading);
  const setSelectedCandidate = useBoundStore(
    (state) => state.setSelectedCandidate,
  );
  const setSelectedCandidates = useBoundStore(
    (state) => state.setSelectedCandidates,
  );
  const candidateHistory = useBoundStore((state) => state.candidateHistory);
  const setCandidateHistory = useBoundStore(
    (state) => state.setCandidateHistory,
  );
  const setCandidates = useBoundStore((state) => state.setCandidates);
  const [value, setValue] = useState([]);

  const handleDelete = (index) => {
    setValue(value.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (filters?.person_seniorities) {
      setValue(
        employeeRange.filter((v) =>
          filters.person_seniorities.includes(v.value),
        ),
      );
    }
  }, [filters?.person_seniorities]);

  const handlePillRemove = (path, index) => {
    const updated = cloneDeep(filters);
    updated[String(path)] = filters[String(path)].filter(
      (s, idx) => idx !== index,
    );
    setFilters(updated);
  };

  const handleUpdatePillInput = (path: string, inputText: string) => {
    if (!inputText) return;
    const inputVals = inputText.split(',').filter((s) => Boolean(s.trim()));
    const updated = cloneDeep(filters);
    set(updated, path, [...filters[String(path)], ...inputVals]);
    setFilters(updated);
  };

  const handleApplyFilters = async () => {
    try {
      if (
        filters.person_locations.length === 0 &&
        filters.person_titles.length === 0 &&
        filters.companies.length === 0
      ) {
        toast.warning('Please add at least one filter');
        return;
      }

      setIsFilterLoading(true);
      setSelectedCandidates([]);
      setSelectedCandidate(null);
      let org_ids = [];
      let credits_company = 0;

      if (filters.companies.length > 0) {
        const { data: dbCompanies, error: errorCompanies } = await supabase
          .from('company_search_cache')
          .select()
          .in(
            'company_name',
            filters.companies.map((c) => c.toLowerCase()),
          );

        if (errorCompanies) {
          toast.error('Something went wrong! Please try again later.');
          setIsFilterLoading(false);
          return;
        }

        const remainingCompanies = filters.companies.filter(
          (c) =>
            !dbCompanies.map((d) => d.company_name).includes(c.toLowerCase()),
        );

        credits_company = remainingCompanies.length;

        org_ids = [
          ...org_ids,
          ...dbCompanies.map((c) => (c.search_result as any).id),
        ];

        await Promise.all(
          remainingCompanies.map(async (company) => {
            const resComp = await axios.post('/api/candidatedb/get-company', {
              name: company,
            });
            if (resComp.data.organizations) {
              const dbCompanies = resComp.data.organizations.map((org) => {
                return {
                  company_name: org.name.toLowerCase(),
                  search_result: org,
                  website_url: org.website_url,
                };
              });
              org_ids = [
                ...org_ids,
                ...resComp.data.organizations.map((c) => c.id),
              ];
              await supabase.from('company_search_cache').insert(dbCompanies);
            }
          }),
        );
      }

      const resCand = await axios.post('/api/candidatedb/search', {
        page: 1,
        per_page: 25,
        person_titles: filters.person_titles,
        person_locations: filters.person_locations,
        organization_ids: org_ids,
        person_seniorities: filters.person_seniorities,
      });

      // update credits for calling both company and people search api
      updateCredits(
        {
          ...candidateHistory.used_credits,
          export_credits:
            candidateHistory.used_credits.export_credits + 1 + credits_company,
        },
        candidateHistory.id,
      );

      if (!resCand.data.people) {
        toast.error('Something went wrong! Please try again later.');
        setIsFilterLoading(false);
      }

      let fetchedCandidates: Candidate[] = resCand.data.people;
      const fetchedIds = fetchedCandidates.map((c) => c.id);

      const { data, error } = await supabase
        .from('candidate_search_history')
        .update({
          query_json: {
            ...filters,
            pagination: resCand.data.pagination,
          },
          candidates: fetchedIds,
          used_credits: {
            export_credits: candidateHistory.used_credits.export_credits + 1,
            ...candidateHistory.used_credits,
          },
        })
        .eq('id', Number(router.query.id))
        .select();

      if (!error) {
        setCandidateHistory(data[0] as unknown as CandidateSearchHistoryType);
        setCandidates(
          fetchedCandidates.map((cand) => ({
            ...cand,
            email_fetch_status: 'not fetched',
          })),
        );
      }
      setIsFilterLoading(false);
      setIsFilterOpen(false);
    } catch (e) {
      toast.error('Something went wrong! Please try again later.');
      setIsFilterLoading(false);
    }
  };

  return (
    <Dialog
      open={isfilterOpen}
      fullWidth={true}
      maxWidth={'md'}
      onClose={() => {
        setIsFilterOpen(false);
      }}
    >
      <Paper></Paper>
      <CdEditQuerry
        onClickResetQuery={{
          onClick: () => {
            setFilters(initialQuery());
          },
        }}
        slotSeniorityInput={
          <>
            <Autocomplete
              multiple
              id='tags-standard'
              options={employeeRange}
              getOptionLabel={(option) => option.display_name}
              value={value}
              onChange={(event, value) => {
                if (value) {
                  setValue(value);
                  setFilters({
                    ...filters,
                    person_seniorities: value.map((v) => v.value),
                  });
                }
              }}
              renderInput={(params) => (
                <UITextField
                  rest={{ ...params }}
                  fullWidth
                  InputProps={{
                    ...params.InputProps,
                  }}
                  placeholder='Choose mutiple seniorities from the list'
                />
              )}
              renderTags={(value) =>
                value.map((option, index) => (
                  <Stack key={index} pl={'4px'}>
                    <JobPills
                      onClickDelete={{
                        onClick: () => {
                          handleDelete(index);
                          setFilters({
                            ...filters,
                            person_seniorities:
                              filters.person_seniorities.filter(
                                (v) => v !== option.value,
                              ),
                          });
                        },
                      }}
                      textJob={option.display_name}
                    />
                  </Stack>
                ))
              }
            />
          </>
        }
        slotPreferredCompanySuggestion={filters.companies.map(
          (title, index) => {
            return (
              <JobPills
                key={index}
                onClickDelete={{
                  onClick: () => {
                    handlePillRemove('companies', index);
                  },
                }}
                textJob={title}
              />
            );
          },
        )}
        slotJobSuggestion={filters.person_titles.map((title, index) => {
          return (
            <JobPills
              key={index}
              onClickDelete={{
                onClick: () => {
                  handlePillRemove('person_titles', index);
                },
              }}
              textJob={title}
            />
          );
        })}
        slotLocationSuggestion={filters.person_locations.map((title, index) => {
          return (
            <JobPills
              key={index}
              onClickDelete={{
                onClick: () => {
                  handlePillRemove('person_locations', index);
                },
              }}
              textJob={title}
            />
          );
        })}
        slotApplyFilterButton={
          <>
            <AUIButton
              variant='primary'
              size='small'
              onClick={() => {
                !isFilterLoading && handleApplyFilters();
              }}
              endIcon={
                isFilterLoading && (
                  <CircularProgress
                    color='inherit'
                    size={'15px'}
                    sx={{ color: palette.grey[400] }}
                  />
                )
              }
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Image
                  width={12}
                  height={12}
                  alt=''
                  src={'/images/svg/graphUp.svg'}
                  style={{ marginRight: '10px' }}
                />
                <p> Apply </p>
              </div>
            </AUIButton>
          </>
        }
        slotPreferredCompaniesInput={
          <FilterInput
            handleAdd={(s) => {
              handleUpdatePillInput('companies', s);
            }}
            path='excludedCompanies'
          />
        }
        slotJobInput={
          <FilterInput
            handleAdd={(s) => {
              handleUpdatePillInput('person_titles', s);
            }}
            path='jobTitles'
          />
        }
        slotLocationInput={
          <FilterInput
            handleAdd={(s) => {
              handleUpdatePillInput('person_locations', s);
            }}
            path='location'
          />
        }
      />
    </Dialog>
  );
}

export default EditFilter;
