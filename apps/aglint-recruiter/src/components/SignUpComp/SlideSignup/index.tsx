// code has to rewritten not understandable and not maintainable
'use client';
import { RecruiterType, RecruiterUserType } from '@aglint/shared-types';
import { IconButton, InputAdornment, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { SignupSlider } from '@/devlink/SignupSlider';
import { WelcomeSlider3 } from '@/devlink/WelcomeSlider3';
import { useSignupDetails } from '@/src/context/SingupContext/SignupContext';
import { ApiBodyParamsSignup } from '@/src/pages/api/signup';
import { errorMessages } from '@/src/utils/errorMessages';
import ROUTES from '@/src/utils/routing/routes';
import { supabase } from '@/src/utils/supabase/client';
import toast from '@/src/utils/toast';

import Loader from '../../Common/Lotties/Loader';
import { Details, SignUpError } from './types';
import { handleEmail, handlePassword, stepObj } from './utils';

const SlideTwoSignUp = () => {
  const router = useRouter();
  const {
    setStep,
    flow,
    setRecruiterUser,
    setRecruiter,
    setUserDetails,
    recruiterUser,
    recruiter,
    userDetails,
  } = useSignupDetails();

  const [details, setDetails] = useState<Details>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const [checked, setChecked] = useState<boolean>(true);
  const [signUpError, setSignUpError] = useState<SignUpError>({
    first_name: {
      error: false,
      msg: '',
    },
    email: {
      error: false,
      msg: '',
    },
    password: {
      error: false,
      msg: '',
    },
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formValidation = async () => {
    let isValid = true;
    if (!details.first_name) {
      isValid = false;
      setSignUpError((prevError) => ({
        ...prevError,
        first_name: {
          error: true,
          msg: errorMessages.nameRequired,
        },
      }));
    } else {
      setSignUpError((prevError) => ({
        ...prevError,
        first_name: {
          error: false,
          msg: '',
        },
      }));
    }
    const email = handleEmail(details.email);

    if (email.error) {
      isValid = false;
      setSignUpError((prevError) => ({
        ...prevError,
        email: email,
      }));
    } else {
      setSignUpError((prevError) => ({
        ...prevError,
        email: email,
      }));
    }
    const password = handlePassword(details.password);

    if (password.error) {
      isValid = false;
      setSignUpError((prevError) => ({
        ...prevError,
        password: password,
      }));
    } else {
      setSignUpError((prevError) => ({
        ...prevError,
        password: password,
      }));
    }
    return isValid;
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handelSignUp = async () => {
    try {
      if (!(await formValidation())) return null;
      const authdata = await supabase.auth.signUp({
        email: details.email,
        password: details.password,
      });
      if (!authdata.error) {
        const res = (await axios.post('/api/signup', {
          email: details.email,
          user_id: authdata.data.user.id,
          first_name: details.first_name,
          last_name: details.last_name,
          role: 'admin',
          flow: flow,
        } as ApiBodyParamsSignup)) as {
          data: { recruiter_user: RecruiterUserType; recruiter: RecruiterType };
          status: number;
        };

        if (res.status === 200) {
          router.push(`?step=${stepObj.type}`, undefined, {
            shallow: true,
          });
          setRecruiterUser(res.data.recruiter_user);
          setUserDetails(authdata.data.session);
          setRecruiter(res.data.recruiter);
          setStep(stepObj.type);
        } else {
          toast.error('Something went wrong. Please try again.');
        }
      } else {
        if (
          authdata.error.message === errorMessages.passwordRequired ||
          authdata.error.message === 'Signup requires a valid password'
        ) {
          setSignUpError({
            ...signUpError,
            password: {
              error: false,
              msg: 'Signup requires a valid password',
            },
          });
        } else if (authdata.error.message === errorMessages.userRegistered) {
          setSignUpError({
            ...signUpError,
            email: {
              error: true,
              msg: authdata.error.message,
            },
          });
        }
      }
    } catch (err) {
      toast.error(err.message);
      router.push(ROUTES['/signup']());
    }
  };

  const oauthHandler = async (provider) => {
    if (typeof window !== 'undefined')
      try {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: provider,
          options: {
            redirectTo: `${process.env.NEXT_PUBLIC_HOST_NAME}/loading`,
          },
        });
        if (error) {
          toast.error(error.message);
        }
      } catch (err) {
        toast.error(err.message);
      }
  };

  const [routeChacker, setRouteCheker] = useState(true);

  useEffect(() => {
    setRouteCheker(true);
    if (
      router.isReady &&
      router.asPath == `${ROUTES['/signup']()}` &&
      recruiterUser?.role
    ) {
      if (recruiterUser.role === 'interviewer') {
        router.push('/interviewer');
        return;
      } else {
        if (userDetails?.user && recruiter?.industry) {
          router.push(ROUTES['/jobs']());
          return;
        }
        if (userDetails?.user && !userDetails?.user.user_metadata?.role) {
          router.push(`?step=${stepObj.type}`, undefined, {
            shallow: true,
          });
          return;
        } else if (userDetails?.user && !recruiter?.industry) {
          router.push(`?step=${stepObj.detailsOne}`, undefined, {
            shallow: true,
          });
          return;
        }
      }
    }

    setTimeout(() => {
      setRouteCheker(false);
    }, 1000);
  }, [router, recruiter, userDetails]);

  if (routeChacker) {
    return (
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        height={'100vh'}
        width={'100vw'}
      >
        <Loader />
      </Stack>
    );
  } else
    return (
      <>
        <SignupSlider
          slotRightSlider={
            <WelcomeSlider3
              isSignUpButtonVisible={
                !details.first_name || !details.email || !details.password
              }
              onClickRegisterWithGoogle={{
                onClick: () => {
                  oauthHandler('google');
                },
              }}
              onClickBack={{
                onClick: () => {
                  router.push(`${ROUTES['/signup']()}?step=${stepObj.type}`);
                  setStep(stepObj.type);
                },
              }}
              onClickCheck={{
                onClick: () => {
                  setChecked(!checked);
                },
              }}
              onClickSignUp={{
                onClick: () => {
                  handelSignUp();
                },
              }}
              isTermsChecked={checked}
              onClickSignIn={{
                onClick: () => {
                  router.push(ROUTES['/login']());
                  setStep(stepObj.signin);
                },
              }}
              slotSignUpForm={
                <Stack spacing={'var(--space-5)'} p={'var(--space-1)'}>
                  <Stack direction={'row'} spacing={'var(--space-2)'}>
                    <TextField
                      margin='none'
                      required
                      fullWidth
                      id='name'
                      placeholder='First Name'
                      value={details.first_name}
                      onChange={(e) => {
                        setDetails({ ...details, first_name: e.target.value });
                      }}
                      error={signUpError.first_name.error}
                      helperText={
                        signUpError.first_name.error
                          ? signUpError.first_name.msg
                          : ''
                      }
                      inputProps={{
                        autoCapitalize: 'true',
                        style: {
                          fontSize: '14px',
                        },
                      }}
                    />
                    <TextField
                      margin='none'
                      fullWidth
                      id='name'
                      placeholder='Last Name'
                      value={details.last_name}
                      onChange={(e) => {
                        setDetails({ ...details, last_name: e.target.value });
                      }}
                      inputProps={{
                        autoCapitalize: 'true',
                        style: {
                          fontSize: '14px',
                        },
                      }}
                    />
                  </Stack>
                  <TextField
                    margin='none'
                    required
                    fullWidth
                    id='email'
                    placeholder='Work Email'
                    name='email'
                    autoComplete='email'
                    value={details.email}
                    onChange={(e) => {
                      setDetails({ ...details, email: e.target.value });
                    }}
                    onBlur={() => {
                      const email = handleEmail(details.email);
                      setSignUpError((prevError) => ({
                        ...prevError,
                        email: email,
                      }));
                    }}
                    error={signUpError.email.error}
                    helperText={
                      signUpError.email.error ? signUpError.email.msg : ''
                    }
                    inputProps={{
                      autoCapitalize: 'true',
                      style: {
                        fontSize: '14px',
                      },
                    }}
                  />
                  <TextField
                    required
                    margin='none'
                    fullWidth
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder={'Create Password'}
                    autoComplete='current-password'
                    id='password'
                    error={
                      signUpError?.password?.error
                        ? signUpError?.password?.error
                        : false
                    }
                    helperText={
                      signUpError.password.error ? signUpError.password.msg : ''
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            <svg
                              width='15'
                              height='15'
                              viewBox='0 0 15 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              {showPassword ? (
                                <path
                                  d='M3.49219 4.6875C2.99219 5.17188 2.57031 5.66406 2.22656 6.16406C1.89844 6.66406 1.65625 7.10938 1.5 7.5C1.65625 7.89062 1.89844 8.33594 2.22656 8.83594C2.57031 9.33594 2.99219 9.82812 3.49219 10.3125C4.00781 10.7969 4.59375 11.1953 5.25 11.5078C5.92188 11.8203 6.67188 11.9844 7.5 12C8.32812 11.9844 9.07812 11.8203 9.75 11.5078C10.4062 11.1953 10.9922 10.7969 11.5078 10.3125C12.0078 9.82812 12.4297 9.33594 12.7734 8.83594C13.1016 8.33594 13.3438 7.89062 13.5 7.5C13.3438 7.10938 13.1016 6.66406 12.7734 6.16406C12.4297 5.66406 12.0078 5.17188 11.5078 4.6875C10.9922 4.20312 10.4062 3.80469 9.75 3.49219C9.07812 3.17969 8.32812 3.01563 7.5 3C6.67188 3.01563 5.92188 3.17969 5.25 3.49219C4.59375 3.80469 4.00781 4.20312 3.49219 4.6875ZM7.5 2.25C8.45312 2.26563 9.30469 2.45313 10.0547 2.8125C10.8047 3.17187 11.4609 3.61719 12.0234 4.14844C12.5703 4.66406 13.0234 5.19531 13.3828 5.74219C13.7422 6.28906 14.0156 6.78125 14.2031 7.21875C14.2812 7.40625 14.2812 7.59375 14.2031 7.78125C14.0156 8.21875 13.7422 8.71094 13.3828 9.25781C13.0234 9.80469 12.5703 10.3359 12.0234 10.8516C11.4609 11.3828 10.8047 11.8281 10.0547 12.1875C9.30469 12.5469 8.45312 12.7344 7.5 12.75C6.54688 12.7344 5.69531 12.5469 4.94531 12.1875C4.19531 11.8281 3.53906 11.3828 2.97656 10.8516C2.42969 10.3359 1.97656 9.80469 1.61719 9.25781C1.25781 8.71094 0.992188 8.21875 0.820312 7.78125C0.742188 7.59375 0.742188 7.40625 0.820312 7.21875C0.992188 6.78125 1.25781 6.28906 1.61719 5.74219C1.97656 5.19531 2.42969 4.66406 2.97656 4.14844C3.53906 3.61719 4.19531 3.17187 4.94531 2.8125C5.69531 2.45313 6.54688 2.26563 7.5 2.25ZM5.25 7.5C5.25 7.90625 5.35156 8.28125 5.55469 8.625C5.75781 8.96875 6.03125 9.24219 6.375 9.44531C6.73438 9.64844 7.10938 9.75 7.5 9.75C7.89062 9.75 8.26562 9.64844 8.625 9.44531C8.96875 9.24219 9.24219 8.96875 9.44531 8.625C9.64844 8.28125 9.75 7.90625 9.75 7.5C9.75 7.09375 9.64844 6.71875 9.44531 6.375C9.24219 6.03125 8.96875 5.75781 8.625 5.55469C8.26562 5.35156 7.89062 5.25 7.5 5.25C7.10938 5.25 6.73438 5.35156 6.375 5.55469C6.03125 5.75781 5.75781 6.03125 5.55469 6.375C5.35156 6.71875 5.25 7.09375 5.25 7.5ZM10.5 7.5C10.5 8.04688 10.3672 8.54688 10.1016 9C9.83594 9.45312 9.46875 9.82031 9 10.1016C8.53125 10.3672 8.03125 10.5 7.5 10.5C6.96875 10.5 6.46875 10.3672 6 10.1016C5.53125 9.82031 5.16406 9.45312 4.89844 9C4.63281 8.54688 4.5 8.04688 4.5 7.5C4.5 6.95312 4.63281 6.45312 4.89844 6C5.16406 5.54688 5.53125 5.17969 6 4.89844C6.46875 4.63281 6.96875 4.5 7.5 4.5C8.03125 4.5 8.53125 4.63281 9 4.89844C9.46875 5.17969 9.83594 5.54688 10.1016 6C10.3672 6.45312 10.5 6.95312 10.5 7.5Z'
                                  fill='#2F3941'
                                />
                              ) : (
                                <path
                                  d='M1.60938 1.57031L15.8594 12.8438C16.0312 13 16.0547 13.1719 15.9297 13.3594C15.7578 13.5312 15.5781 13.5547 15.3906 13.4297L1.14062 2.17969C0.96875 2.00781 0.945312 1.82812 1.07031 1.64062C1.24219 1.48437 1.42188 1.46094 1.60938 1.57031ZM15.2031 7.78125C14.9531 8.39062 14.5312 9.08594 13.9375 9.86719L13.3516 9.42188C13.8984 8.6875 14.2812 8.04688 14.5 7.5C14.3438 7.10938 14.1016 6.66406 13.7734 6.16406C13.4297 5.66406 13.0078 5.17188 12.5078 4.6875C11.9922 4.20312 11.4062 3.80469 10.75 3.49219C10.0781 3.17969 9.32812 3.01563 8.5 3C7.5625 3.01563 6.72656 3.21875 5.99219 3.60938L5.35938 3.11719C6.25 2.57031 7.29688 2.28125 8.5 2.25C9.45312 2.26563 10.3047 2.45313 11.0547 2.8125C11.8047 3.17187 12.4609 3.61719 13.0234 4.14844C13.5703 4.66406 14.0234 5.19531 14.3828 5.74219C14.7422 6.28906 15.0156 6.78125 15.2031 7.21875C15.2656 7.40625 15.2656 7.59375 15.2031 7.78125ZM3.0625 5.13281L3.67188 5.60156C3.10938 6.32031 2.71875 6.95312 2.5 7.5C2.65625 7.89062 2.89844 8.33594 3.22656 8.83594C3.57031 9.33594 3.99219 9.82812 4.49219 10.3125C5.00781 10.7969 5.59375 11.1953 6.25 11.5078C6.92188 11.8203 7.67188 11.9844 8.5 12C9.4375 11.9844 10.2734 11.7812 11.0078 11.3906L11.6406 11.8828C10.75 12.4297 9.70312 12.7188 8.5 12.75C7.54688 12.7344 6.69531 12.5469 5.94531 12.1875C5.19531 11.8281 4.54688 11.3828 4 10.8516C3.4375 10.3359 2.97656 9.80469 2.61719 9.25781C2.25781 8.71094 1.99219 8.21875 1.82031 7.78125C1.74219 7.59375 1.74219 7.40625 1.82031 7.21875C2.05469 6.60938 2.46875 5.91406 3.0625 5.13281ZM8.5 10.5C7.65625 10.4844 6.94531 10.1875 6.36719 9.60938C5.80469 9.04688 5.51562 8.34375 5.5 7.5C5.5 7.34375 5.50781 7.19531 5.52344 7.05469L6.25 7.64062C6.29688 8.23438 6.53125 8.73438 6.95312 9.14062C7.375 9.53125 7.89062 9.73438 8.5 9.75C8.625 9.75 8.75781 9.74219 8.89844 9.72656L9.60156 10.2891C9.25781 10.4297 8.89062 10.5 8.5 10.5ZM11.5 7.5C11.5 7.65625 11.4922 7.80469 11.4766 7.94531L10.75 7.35938C10.7031 6.76562 10.4688 6.26562 10.0469 5.85938C9.625 5.46875 9.10938 5.26562 8.5 5.25C8.375 5.25 8.25 5.26562 8.125 5.29688L7.39844 4.71094C7.74219 4.57031 8.10938 4.5 8.5 4.5C9.34375 4.51562 10.0547 4.80469 10.6328 5.36719C11.1953 5.94531 11.4844 6.65625 11.5 7.5Z'
                                  fill='#2F3941'
                                />
                              )}
                            </svg>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        handelSignUp();
                      }
                    }}
                    onBlur={() => {
                      const password = handlePassword(details.password);
                      setSignUpError((prevError) => ({
                        ...prevError,
                        password: password,
                      }));
                    }}
                    value={details.password}
                    onChange={(e) => {
                      setDetails({ ...details, password: e.target.value });
                    }}
                    inputProps={{
                      autoCapitalize: 'true',
                      style: {
                        fontSize: '14px',
                      },
                    }}
                  />
                </Stack>
              }
            />
          }
        />
      </>
    );
};

export default SlideTwoSignUp;
