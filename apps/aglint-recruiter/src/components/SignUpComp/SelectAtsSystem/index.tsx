import { SocialsType } from '@aglint/shared-types';
import { Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import {
  BackButton,
  LoginAtsInfo,
  RcCheckbox,
  RcFormRadio,
  RcGoalsBlock,
  RecCompanyDetails,
} from '@/devlink2';
import { useSignupDetails } from '@/src/context/SingupContext/SignupContext';
import { YTransform } from '@/src/utils/framer-motions/Animation';
import { supabase } from '@/src/utils/supabase/client';

import AUIButton from '../../Common/AUIButton';
import UITextField from '../../Common/UITextField';
import UITypography from '../../Common/UITypography';
import { stepObj } from '../SlideSignup/utils';

function SelectAtsSystem() {
  const { setStep, recruiter, setRecruiter } = useSignupDetails();

  const router = useRouter();

  const [selectedObject, setSelectedObject] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [textCheck, setTextCheck] = useState(false);
  const inputRef = useRef(null);

  async function handleContinue(ang) {
    if (selectedObject === 'Other' && inputRef.current.value === '') {
      setTextCheck(true);
    }

    if (
      (selectedObject !== null && selectedObject !== 'Other') ||
      (selectedObject === 'Other' && inputRef.current.value !== '')
    ) {
      setTextCheck(false);

      const { data, error } = await supabase
        .from('recruiter')
        .update({
          ats_familiar:
            selectedObject === 'Other'
              ? inputRef.current.value
              : selectedObject,
          use_of_purpose: ang === 'skip' ? [] : selectedOptions,
        })
        .eq('id', recruiter.id)
        .select();
      if (!error) {
        setRecruiter({ ...data[0], socials: data[0].socials as SocialsType });
        router.push(`?step=${stepObj.allSet}`, undefined, {
          shallow: true,
        });
        setStep(stepObj.allSet);
      }
    }
  }

  useEffect(() => {
    if (recruiter?.use_of_purpose) {
      setSelectedObject(recruiter.ats_familiar as any);
      setSelectedOptions(recruiter.use_of_purpose as any);
    }
  }, [recruiter]);

  return (
    <Stack>
      <RecCompanyDetails
        slotMain={
          <Stack direction={'column'} spacing={'20px'}>
            <LoginAtsInfo
              slotRadioButtons={
                <>
                  {object
                    .filter((ele) => ele.image)
                    .map((ele, i) => {
                      return (
                        <RcFormRadio
                          isClicked={selectedObject === ele.name}
                          onclickRadio={{
                            onClick: () => {
                              setSelectedObject(ele.name);
                            },
                          }}
                          key={i}
                          isImageAvailabe={ele.image ? true : false}
                          text={ele.name}
                          isTextVisible={ele.image ? false : true}
                          slotLogo={ele.image}
                        />
                      );
                    })}
                </>
              }
              slotOthers={
                <>
                  {object
                    .filter((ele) => !ele.image)
                    .map((ele, i) => {
                      return (
                        <RcFormRadio
                          isClicked={selectedObject === ele.name}
                          onclickRadio={{
                            onClick: () => {
                              setSelectedObject(ele.name);
                            },
                          }}
                          key={i}
                          isImageAvailabe={ele.image ? true : false}
                          text={ele.name}
                          isTextVisible={ele.image ? false : true}
                          slotLogo={ele.image}
                        />
                      );
                    })}
                </>
              }
              slotAdditionalInfo={
                <>
                  {selectedObject === 'Other' && (
                    <>
                      <YTransform uniqueKey={selectedObject}>
                        <Stack spacing={'13px'}>
                          <UITypography variant='body1' type='small'>
                            Enter ATS Name.
                          </UITypography>
                          <UITextField
                            InputProps={{ autoFocus: true }}
                            ref={inputRef}
                            //   onChange={(ele) => {
                            //     console.log('error');
                            //     setSelectedObject((pre) => {
                            //       pre.name = ele.target.value;
                            //       return pre;
                            //     });
                            //   }}
                            placeholder='Ex. Indeed'
                            error={textCheck}
                            helperText='Please fill this field'
                          />
                        </Stack>
                      </YTransform>
                    </>
                  )}
                </>
              }
            />

            <RcGoalsBlock
              slotCheckboxes={objectData.map((ele, i) => {
                return (
                  <RcCheckbox
                    onclickCheck={{
                      onClick: () => {
                        if (ele === 'All of it') {
                          if (selectedOptions.some((e) => e === ele)) {
                            setSelectedOptions([]);
                            return;
                          }
                          setSelectedOptions(objectData);
                          return;
                        }
                        setSelectedOptions((pre) => {
                          if (pre.some((e) => e === 'All of it')) {
                            setSelectedOptions([ele]);
                          }
                          if (pre.some((e) => e === ele)) {
                            const filtered = pre.filter((data) => data != ele);
                            return [...filtered];
                          }
                          return [...pre, ele];
                        });
                      },
                    }}
                    isChecked={selectedOptions.some((e) => e === ele)}
                    text={ele}
                    key={i}
                  />
                );
              })}
            />

            <Stack
              justifyContent={'space-between'}
              direction={'row'}
              mt={'13px'}
            >
              <BackButton
                onclickProps={{
                  onClick: () => router.back(),
                }}
              />

              <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
                <AUIButton
                  onClick={() => {
                    router.push(`?step=${stepObj.allSet}`, undefined, {
                      shallow: true,
                    });
                    setStep(stepObj.allSet);
                  }}
                  variant='text'
                >
                  Skip
                </AUIButton>
                <AUIButton
                  disabled={selectedObject === null}
                  onClick={() => handleContinue('continue')}
                >
                  Continue
                </AUIButton>
              </Stack>
            </Stack>
          </Stack>
        }
      />
    </Stack>
  );
}

export default SelectAtsSystem;

const object = [
  {
    name: 'Lever',
    image: <LeverImage />,
  },
  {
    name: 'Ashby',
    image: <AshbyImage />,
  },
  {
    name: 'Greenhouse',
    image: <GreenHouseImage />,
  },
  {
    name: 'Other',
    image: null,
  },
  {
    name: 'I do not use any ATS system',
    image: null,
  },
];
const objectData = [
  'Applicant tracking system (ATS)',
  'Filtering candidates',
  'Sourcing  candidates',
  'Candidate screening',
  'Scheduling',
  'All of it',
];

function LeverImage() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='80'
      height='24'
      viewBox='0 0 80 24'
      fill='none'
    >
      <g clip-path='url(#clip0_6847_17962)'>
        <path
          d='M22.5102 21.8784L18.2328 17.6002C18.0977 17.4677 17.9161 17.3936 17.7269 17.3936C17.5377 17.3936 17.3561 17.4677 17.221 17.6002L12.9436 21.8784C12.8416 21.9757 12.7716 22.1017 12.743 22.2397C12.7144 22.3777 12.7284 22.5212 12.7833 22.651C12.8382 22.7808 12.9313 22.8909 13.0503 22.9665C13.1692 23.0421 13.3084 23.0796 13.4492 23.0742H22.0046C22.1447 23.0777 22.2825 23.039 22.4002 22.963C22.5179 22.8871 22.61 22.7775 22.6646 22.6485C22.7191 22.5195 22.7336 22.377 22.706 22.2397C22.6785 22.1023 22.6103 21.9765 22.5102 21.8784Z'
          fill='#C3C6CC'
        />
        <path
          d='M22.6515 6.51188L21.3116 2.53399C21.2512 2.3541 21.1548 2.18837 21.0283 2.04688L0.164062 22.9112C0.286506 23.0208 0.446447 23.0791 0.610687 23.0739H6.53681C6.70243 23.0747 6.86659 23.0428 7.01987 22.98C7.17315 22.9173 7.31254 22.8249 7.43005 22.7082L22.3675 7.77014C22.5298 7.6093 22.6428 7.4054 22.6931 7.18247C22.7435 6.95954 22.729 6.72687 22.6515 6.51188Z'
          fill='#E1E3E6'
        />
        <path
          d='M20.5408 1.76184L16.5631 0.422628C16.3481 0.345112 16.1155 0.330663 15.8925 0.380986C15.6696 0.431309 15.4657 0.544306 15.3049 0.706661L0.366756 15.6447C0.131768 15.8824 0.0005399 16.2036 0.00178733 16.5379V22.4643C-0.00342891 22.6285 0.0548001 22.7885 0.164389 22.9109L21.0286 2.04661C20.887 1.9197 20.721 1.82283 20.5408 1.76184Z'
          fill='#C3C6CC'
        />
        <path
          d='M77.5935 11.3931C77.6068 11.6241 77.552 11.854 77.4359 12.0541C77.3337 12.2099 77.1891 12.3331 77.0191 12.4092C76.8324 12.4911 76.6326 12.539 76.429 12.5505C76.2082 12.5668 75.9878 12.5749 75.7679 12.5746H74.9968V10.2278H75.8468C76.0517 10.2279 76.2564 10.2383 76.4603 10.2591C76.6563 10.2763 76.8479 10.327 77.0269 10.4089C77.1935 10.4863 77.3352 10.6088 77.4359 10.7625C77.5495 10.9525 77.6043 11.1719 77.5935 11.3931ZM77.8768 17.394H80.0015L78.8368 15.677C78.6373 15.383 78.4354 15.0997 78.2311 14.827C78.0259 14.5536 77.8553 14.3278 77.7192 14.1496C77.6211 13.9897 77.4928 13.8506 77.3414 13.7399C77.9166 13.6929 78.4531 13.4316 78.8446 13.0078C79.2476 12.5566 79.4592 11.9663 79.4347 11.3618C79.4424 11.0003 79.367 10.6418 79.2142 10.3141C79.0614 9.98631 78.8354 9.69806 78.5535 9.47157C78.2605 9.24156 77.9184 9.08238 77.5537 9.00647C77.0803 8.90979 76.5976 8.86502 76.1145 8.87297H73.2501V17.394H74.9968V13.8499C75.1684 13.8423 75.3383 13.8863 75.4846 13.9763C75.612 14.0614 75.7284 14.1618 75.8311 14.2753C75.9854 14.4646 76.1297 14.6618 76.2636 14.8661C76.4368 15.1231 76.6913 15.5089 77.0269 16.0235L77.8768 17.394ZM63.0778 17.394H68.5545V15.9134H64.8565V13.6454H67.6257V12.2437H64.8402V10.2747H68.1768L68.4281 8.87297H63.0778V17.394ZM56.2074 17.3933L59.5276 8.87297H57.6864L56.0029 13.2989C55.9215 13.4998 55.8506 13.7048 55.7906 13.9131C55.7224 14.1439 55.662 14.3617 55.6095 14.5664C55.5569 14.7716 55.5148 14.9423 55.4831 15.0784L55.4362 15.2836L55.373 15.0784C55.3418 14.9314 55.2999 14.7558 55.2474 14.5515C55.1948 14.3463 55.1345 14.1283 55.0663 13.8975C54.9981 13.666 54.9326 13.4613 54.8696 13.2833L53.3118 8.87297H51.3605L54.6182 17.3933H56.2074ZM42.3684 17.394H47.8443V15.9134H44.1464V13.6454H46.9163V12.2437H44.1307V10.2747H47.4666L47.7186 8.87297H42.3684V17.394ZM37.5734 17.394L37.9043 15.9447H34.442V8.87297H32.6641V17.394H37.5734Z'
          fill='#262933'
        />
      </g>
      <defs>
        <clipPath id='clip0_6847_17962'>
          <rect
            width='80'
            height='22.7227'
            fill='white'
            transform='translate(0 0.352539)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function AshbyImage() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='17'
      viewBox='0 0 50 17'
      fill='none'
    >
      <g clip-path='url(#clip0_6847_17973)'>
        <path
          d='M11.2215 12.3271C11.369 12.6885 11.5272 12.96 11.6975 13.141C11.8785 13.3107 12.0538 13.4005 12.2234 13.4126V13.7518C11.1939 13.7142 10.1637 13.6973 9.13354 13.7012C7.84367 13.7012 6.89304 13.7176 6.28165 13.7518V13.4126C6.71203 13.3898 7.01709 13.3391 7.1981 13.2594C7.37911 13.1695 7.47025 13.0164 7.47025 12.8018C7.47025 12.598 7.4019 12.3271 7.26582 11.9872L6.26456 9.20497H2.83544L2.54684 9.96889C2.17342 10.9296 1.98608 11.6651 1.98608 12.174C1.98608 12.6379 2.11646 12.9543 2.37658 13.124C2.63734 13.2936 3.02215 13.3898 3.53101 13.4126V13.7518C2.79007 13.7204 2.04857 13.7035 1.30696 13.7012C0.775316 13.7012 0.339241 13.7176 0 13.7518V13.4126C0.282911 13.367 0.548734 13.1917 0.797468 12.8866C1.04684 12.5809 1.30127 12.0948 1.56203 11.4277L5.33101 1.74105C5.63041 1.76106 5.93033 1.77225 6.23038 1.77459C6.45696 1.77459 6.75127 1.7632 7.11329 1.74105L11.2215 12.3271ZM6.14557 8.86509L4.60127 4.62459L2.97089 8.86509H6.14557ZM16.0329 4.7094C16.4741 4.7094 16.8873 4.76003 17.2722 4.86193C17.6684 4.95244 17.9684 5.05434 18.1722 5.16763C18.2962 5.23535 18.3981 5.26889 18.4778 5.26889C18.7152 5.26889 18.857 5.08851 18.9019 4.72649H19.2418C19.1962 5.3151 19.1734 6.33218 19.1734 7.78028H18.8342C18.7437 7.03345 18.5285 6.40623 18.1886 5.89737C17.8608 5.37712 17.3797 5.11699 16.7456 5.11699C16.4627 5.11699 16.2253 5.2018 16.0329 5.37142C15.8405 5.54104 15.7443 5.77269 15.7443 6.06699C15.7443 6.44041 15.869 6.77332 16.1177 7.06763C16.3665 7.35054 16.757 7.70054 17.2886 8.11952C17.312 8.13092 17.4759 8.26066 17.7816 8.5094C18.4152 9.02965 18.8791 9.49357 19.1741 9.90054C19.4677 10.2967 19.6152 10.7885 19.6152 11.3765C19.6174 11.8674 19.4559 12.3451 19.1563 12.7341C18.8513 13.1296 18.4323 13.4404 17.9 13.667C17.3797 13.8822 16.8082 13.9898 16.1854 13.9898C15.4728 13.9898 14.8899 13.848 14.4367 13.5651C14.2835 13.4811 14.1249 13.4073 13.962 13.3442C13.8425 13.2999 13.7161 13.277 13.5886 13.2765C13.3734 13.2765 13.2152 13.4746 13.1127 13.8702H12.7734C12.8184 13.2259 12.8411 12.0948 12.8411 10.4778H13.181C13.2823 11.405 13.5316 12.1512 13.9278 12.717C14.3241 13.2822 14.8215 13.5651 15.4215 13.5651C15.7044 13.5651 15.9367 13.486 16.1177 13.3277C16.3101 13.1695 16.4063 12.9372 16.4063 12.6315C16.4063 12.3151 16.3386 12.0328 16.2025 11.7834C16.0809 11.5387 15.9204 11.3154 15.7272 11.1221C15.5462 10.9183 15.2462 10.6303 14.8272 10.2569C14.4555 9.91634 14.0934 9.56558 13.7411 9.20497C13.4858 8.93635 13.2686 8.63395 13.0956 8.30623C12.9237 7.94612 12.8367 7.55142 12.8411 7.15244C12.8411 6.66636 12.988 6.23661 13.2823 5.8632C13.5766 5.48978 13.9671 5.20687 14.4538 5.0151C14.9544 4.80866 15.4914 4.70472 16.0329 4.7094ZM24.431 5.98218C24.9405 5.13408 25.8399 4.71003 27.1304 4.71003C28.0354 4.71003 28.6747 4.93598 29.0487 5.38788C29.2184 5.59168 29.343 5.86889 29.4222 6.21953C29.5013 6.55877 29.5411 7.01066 29.5411 7.57649V12.174C29.5411 12.6379 29.6089 12.96 29.7449 13.141C29.8918 13.3107 30.1411 13.3955 30.4918 13.3955V13.7518C29.2696 13.7062 28.4772 13.6841 28.1152 13.6841C27.7304 13.6841 26.9266 13.7062 25.7038 13.7518V13.3955C25.9987 13.3955 26.2025 13.3107 26.3152 13.141C26.4291 12.96 26.4854 12.6379 26.4854 12.174V6.66066C26.4854 6.29864 26.4171 6.03282 26.2816 5.8632C26.157 5.68218 25.9475 5.59168 25.6532 5.59168C25.3253 5.59168 25.0367 5.71066 24.7873 5.94801C24.55 6.17396 24.431 6.46256 24.431 6.8132V12.174C24.431 12.6379 24.488 12.96 24.6006 13.141C24.7139 13.3107 24.9171 13.3955 25.212 13.3955V13.7518C24.0804 13.7062 23.3329 13.6841 22.9715 13.6841C22.5861 13.6841 21.7373 13.7062 20.4247 13.7518V13.3955C20.7753 13.3955 21.0184 13.3107 21.1544 13.141C21.3019 12.96 21.3753 12.6379 21.3753 12.174V2.52079C21.3753 2.00054 21.3013 1.62206 21.1544 1.38472C21.0184 1.14674 20.7747 1.02839 20.4247 1.02839V0.67206C20.7753 0.705605 21.1259 0.722693 21.4772 0.722693C22.6544 0.722693 23.6386 0.643579 24.4304 0.485352V5.98218H24.431ZM37.3861 4.7094C38.2684 4.7094 38.981 5.07142 39.5253 5.79548C40.0677 6.51889 40.3399 7.57649 40.3399 8.96763C40.3399 10.7657 39.9772 12.055 39.2532 12.8353C38.5285 13.6043 37.5722 13.9891 36.3842 13.9891C36.0215 13.9891 35.7165 13.9777 35.4671 13.9556C35.2386 13.9351 35.015 13.8776 34.8051 13.7853C34.3901 13.6165 33.9461 13.53 33.4981 13.5309C33.1582 13.5309 32.8411 13.5765 32.5475 13.667C32.2532 13.7575 32.0266 13.8758 31.8684 14.0233L31.6304 13.8537C31.7095 13.6157 31.7494 13.305 31.7494 12.9202V2.52143C31.7494 2.00054 31.6759 1.62206 31.5285 1.38472C31.393 1.14674 31.1494 1.02839 30.7987 1.02839V0.67206C31.1494 0.705605 31.5 0.722693 31.8513 0.722693C33.0285 0.722693 34.0127 0.643579 34.8051 0.485352V5.98218C35.326 5.13408 36.1861 4.71003 37.3854 4.71003L37.3861 4.7094ZM35.6025 13.6499C36.6437 13.6499 37.1646 12.2195 37.1646 9.35813C37.1646 7.96699 37.0627 6.99421 36.8589 6.44041C36.6551 5.87459 36.3778 5.59168 36.0266 5.59168C35.6987 5.59168 35.4101 5.71066 35.1608 5.94801C34.9234 6.17396 34.8044 6.46256 34.8044 6.8132V13.4461C35.0646 13.5822 35.3316 13.6499 35.6025 13.6499ZM48.2165 5.0151C48.862 5.0151 49.2975 4.99231 49.5234 4.94674V5.30307C49.2861 5.38218 49.0652 5.54674 48.8614 5.79548C48.669 6.04421 48.488 6.42839 48.3184 6.94864L46.1962 13.2594L45.4829 15.3126C45.2791 15.9005 45.0304 16.3075 44.7361 16.5341C44.3854 16.8056 43.8589 16.941 43.157 16.941C42.6044 16.9444 42.0605 16.8042 41.5785 16.5341C41.0911 16.274 40.8481 15.8777 40.8481 15.3461C40.8481 14.9505 41.0013 14.6341 41.307 14.3967C41.612 14.1588 42.0139 14.0398 42.512 14.0398C42.9873 14.0398 43.3608 14.1474 43.6323 14.3626C43.9044 14.5777 44.0399 14.8879 44.0399 15.2955C44.0399 15.567 43.9437 15.8208 43.7513 16.0588C43.5703 16.3075 43.2987 16.4891 42.9367 16.6018C43.0494 16.6246 43.2424 16.6353 43.5139 16.6353C44.2949 16.6353 44.8323 16.1834 45.1266 15.2784L45.2114 14.9898L41.2557 6.25307C41.0861 5.86889 40.9165 5.61383 40.7462 5.48978C40.588 5.36573 40.4297 5.30307 40.2715 5.30307V4.94737C41.1766 5.01573 42.0987 5.04927 43.0386 5.04927C43.774 5.04927 44.5943 5.01573 45.5 4.94801V5.3037C45.1715 5.3037 44.9177 5.32649 44.7361 5.37206C44.5665 5.41699 44.4816 5.51889 44.4816 5.67712C44.4816 5.76763 44.5038 5.85813 44.5494 5.94864L46.638 10.9195L47.3506 8.748C47.5658 8.09168 47.6734 7.51509 47.6734 7.01763C47.6734 6.48598 47.5595 6.07269 47.3335 5.77902C47.2286 5.63755 47.0933 5.52146 46.9375 5.4393C46.7818 5.35714 46.6095 5.31102 46.4335 5.30434V4.94737C46.8525 4.99294 47.4462 5.0151 48.2165 5.0151Z'
          fill='#483ACE'
        />
      </g>
      <defs>
        <clipPath id='clip0_6847_17973'>
          <rect
            width='50'
            height='16.4557'
            fill='white'
            transform='translate(0 0.486328)'
          />
        </clipPath>
      </defs>
    </svg>
  );
}

function GreenHouseImage() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='120'
      height='27'
      viewBox='0 0 120 27'
      fill='none'
    >
      <path
        d='M10.1508 9.78903C10.1508 10.965 9.65363 12.0047 8.83935 12.8182C7.93506 13.7225 6.62363 13.9496 6.62363 14.7176C6.62363 15.7573 8.29678 15.441 9.90221 17.0465C10.9651 18.1093 11.6199 19.5107 11.6199 21.1385C11.6199 24.3485 9.04249 26.9036 5.8102 26.9036C2.57706 26.9027 -0.000366211 24.351 -0.000366211 21.1393C-0.000366211 19.5116 0.655348 18.1102 1.71821 17.0473C3.32278 15.4427 4.99592 15.759 4.99592 14.7193C4.99592 13.9505 3.68449 13.7242 2.78021 12.8199C1.96592 12.0056 1.46878 10.9659 1.46878 9.74531C1.46878 7.39417 3.39049 5.49474 5.74163 5.49474C6.19421 5.49474 6.60135 5.56331 6.93992 5.56331C7.55106 5.56331 7.86735 5.2916 7.86735 4.86217C7.86735 4.6136 7.75421 4.29646 7.75421 3.95789C7.75421 3.18903 8.40992 2.5556 9.20106 2.5556C9.9922 2.5556 10.6256 3.21131 10.6256 4.00246C10.6256 4.83903 9.96992 5.22389 9.47278 5.40474C9.06563 5.54017 8.74849 5.72103 8.74849 6.12817C8.74849 6.89446 10.1508 7.64103 10.1508 9.78903ZM9.6982 21.1402C9.6982 18.903 8.04821 17.0936 5.8102 17.0936C3.57135 17.0936 1.92135 18.9022 1.92135 21.1402C1.92135 23.3559 3.57135 25.1876 5.8102 25.1876C8.04735 25.1876 9.6982 23.3533 9.6982 21.1402ZM8.36535 9.7436C8.36535 8.31989 7.21249 7.14389 5.81106 7.14389C4.40878 7.14389 3.25678 8.31989 3.25678 9.7436C3.25678 11.1682 4.40878 12.3442 5.81106 12.3442C7.21249 12.3442 8.36535 11.1682 8.36535 9.7436ZM18.2885 5.71931C19.0119 5.71931 19.5545 6.26189 19.5545 6.93989C19.5545 7.61789 19.0342 8.16046 18.3116 8.16046C17.5651 8.16046 17.1579 7.68646 16.4122 7.68646C15.6888 7.68646 15.1231 8.20589 15.1231 9.08789V16.209C15.1231 16.4639 15.0218 16.7083 14.8416 16.8885C14.6614 17.0687 14.417 17.1699 14.1622 17.1699C13.9074 17.1699 13.663 17.0687 13.4828 16.8885C13.3026 16.7083 13.2013 16.4639 13.2013 16.209V6.6236C13.1998 6.49739 13.2231 6.3721 13.27 6.25491C13.3169 6.13772 13.3864 6.03092 13.4746 5.94064C13.5628 5.85036 13.668 5.77836 13.7841 5.72876C13.9001 5.67916 14.0248 5.65294 14.1511 5.6516C15.1231 5.6516 14.9422 6.57817 15.9142 6.57817C16.8416 6.57817 17.1802 5.71931 18.2885 5.71931ZM20.3919 11.4167C20.3919 8.00274 22.7431 5.53846 25.9762 5.53846C28.9376 5.53846 31.2888 7.70874 31.2888 10.671C31.2888 11.3713 30.8371 11.8462 30.1814 11.8462H22.8339C22.5168 11.8462 22.4036 11.9593 22.4036 12.2079C22.4036 12.7736 22.8562 13.8133 23.5351 14.4913C24.2122 15.1693 25.1396 15.5765 26.4511 15.5765C27.4231 15.5765 28.2819 15.2147 28.9376 14.7399C29.1408 14.5822 29.3671 14.4913 29.5933 14.4913C30.0682 14.4913 30.4522 14.9207 30.4522 15.3733C30.4522 15.6442 30.3622 15.8705 30.1359 16.0736C29.1862 16.8656 27.8525 17.295 26.4056 17.295C22.9016 17.295 20.3919 14.763 20.3919 11.4167ZM28.3951 8.16131C27.7616 7.52789 26.9482 7.2116 25.9762 7.2116C25.0042 7.2116 24.0991 7.59646 23.4442 8.25131C22.9239 8.7716 22.5622 9.4496 22.5622 9.90217C22.5622 10.1285 22.6976 10.2193 22.9916 10.2193H28.8699C29.1408 10.2193 29.2771 10.1285 29.2771 9.90217C29.2771 9.3596 28.8476 8.61303 28.3951 8.16131ZM33.2336 11.4167C33.2336 8.00274 35.5839 5.53846 38.8171 5.53846C41.7793 5.53846 44.1305 7.70874 44.1305 10.671C44.1305 11.3713 43.6779 11.8462 43.0222 11.8462H35.6748C35.3576 11.8462 35.2453 11.9593 35.2453 12.2079C35.2453 12.7736 35.6971 13.8133 36.3759 14.4913C37.0539 15.1693 37.9805 15.5765 39.2919 15.5765C40.2639 15.5765 41.1236 15.2147 41.7785 14.7399C41.9825 14.5822 42.2088 14.4913 42.4342 14.4913C42.9091 14.4913 43.2939 14.9207 43.2939 15.3733C43.2939 15.6442 43.2031 15.8705 42.9768 16.0736C42.0279 16.8656 40.6942 17.295 39.2465 17.295C35.7425 17.295 33.2336 14.763 33.2336 11.4167ZM41.2359 8.16131C40.6033 7.52789 39.7891 7.2116 38.8171 7.2116C37.8451 7.2116 36.9408 7.59646 36.2851 8.25131C35.7656 8.7716 35.4031 9.4496 35.4031 9.90217C35.4031 10.1285 35.5393 10.2193 35.8333 10.2193H41.7108C41.9825 10.2193 42.1179 10.1285 42.1179 9.90217C42.1179 9.3596 41.6885 8.61303 41.2359 8.16131ZM55.4568 17.1819C55.3288 17.1829 55.2019 17.1585 55.0835 17.11C54.965 17.0615 54.8574 16.99 54.7669 16.8995C54.6763 16.8091 54.6047 16.7015 54.5561 16.5831C54.5076 16.4647 54.483 16.3379 54.4839 16.2099V10.0607C54.4839 8.45531 53.2179 7.23474 51.5902 7.23474C49.9402 7.23474 48.6742 8.4776 48.6742 10.0607V16.2099C48.6742 16.4647 48.573 16.7091 48.3928 16.8893C48.2126 17.0695 47.9682 17.1707 47.7133 17.1707C47.4585 17.1707 47.2141 17.0695 47.0339 16.8893C46.8537 16.7091 46.7525 16.4647 46.7525 16.2099V6.60131C46.7525 6.08103 47.1819 5.6516 47.6791 5.6516C48.6288 5.6516 48.5834 6.51131 49.0813 6.51131C49.5785 6.51131 50.2565 5.53846 52.0196 5.53846C54.4839 5.53846 56.4056 7.5956 56.4056 10.0607V16.2099C56.4072 16.336 56.3839 16.4612 56.3371 16.5784C56.2902 16.6955 56.2208 16.8023 56.1327 16.8925C56.0445 16.9828 55.9395 17.0548 55.8235 17.1045C55.7075 17.1541 55.5829 17.1804 55.4568 17.1819ZM68.4339 17.1819C68.3059 17.1829 68.1791 17.1585 68.0606 17.11C67.9422 17.0615 67.8346 16.99 67.744 16.8995C67.6535 16.8091 67.5818 16.7015 67.5333 16.5831C67.4847 16.4647 67.4602 16.3379 67.4611 16.2099V10.0599C67.4611 8.45531 66.1951 7.23389 64.5674 7.23389C62.9174 7.23389 61.6514 8.47674 61.6514 10.0599V16.2099C61.6514 16.4647 61.5501 16.7091 61.3699 16.8893C61.1897 17.0695 60.9453 17.1707 60.6905 17.1707C60.4357 17.1707 60.1913 17.0695 60.0111 16.8893C59.8309 16.7091 59.7296 16.4647 59.7296 16.2099V0.971599C59.7296 0.716764 59.8309 0.472366 60.0111 0.292171C60.1913 0.111975 60.4357 0.0107422 60.6905 0.0107422C60.9453 0.0107422 61.1897 0.111975 61.3699 0.292171C61.5501 0.472366 61.6514 0.716764 61.6514 0.971599V5.96874C61.6514 6.2396 61.7636 6.39731 62.0576 6.39731C62.5548 6.39731 63.2336 5.53846 64.9976 5.53846C67.4611 5.53846 69.3828 7.5956 69.3828 10.0599V16.2099C69.3844 16.3361 69.361 16.4614 69.3141 16.5786C69.2673 16.6958 69.1977 16.8026 69.1095 16.8928C69.0213 16.9831 68.9161 17.0551 68.8001 17.1047C68.684 17.1543 68.5601 17.1805 68.4339 17.1819ZM72.0253 11.4167C72.0253 8.13903 74.6482 5.53846 77.9482 5.53846C81.2499 5.53846 83.8719 8.13903 83.8719 11.4167C83.8719 14.6953 81.2491 17.295 77.9491 17.295C74.6499 17.295 72.0253 14.6953 72.0253 11.4167ZM81.9528 11.4167C81.9528 9.13331 80.2573 7.25703 77.9508 7.25703C75.6674 7.25703 73.9719 9.13417 73.9719 11.4167C73.9719 13.7002 75.6674 15.5765 77.9508 15.5765C80.2565 15.5765 81.9528 13.7002 81.9528 11.4167ZM87.4668 5.6516C88.0093 5.6516 88.4388 6.08017 88.4388 6.6236V12.7727C88.4388 14.3782 89.7048 15.5987 91.3334 15.5987C92.9833 15.5987 94.2494 14.3559 94.2494 12.7727V6.6236C94.2494 6.36876 94.3506 6.12437 94.5308 5.94417C94.711 5.76398 94.9554 5.66274 95.2102 5.66274C95.465 5.66274 95.7094 5.76398 95.8896 5.94417C96.0698 6.12437 96.1711 6.36876 96.1711 6.6236V16.2322C96.1711 16.7516 95.7416 17.181 95.2445 17.181C94.2948 17.181 94.3402 16.3222 93.8422 16.3222C93.3451 16.3222 92.6671 17.2942 90.9031 17.2942C88.4388 17.2942 86.5179 15.237 86.5179 12.7727V6.6236C86.5196 6.08103 86.9473 5.6516 87.4668 5.6516ZM99.5842 16.4585C99.1548 16.1867 98.8608 15.9159 98.8608 15.3956C98.8608 14.8985 99.2448 14.5145 99.7196 14.5145C100.285 14.5145 100.534 14.853 101.009 15.1016C101.596 15.441 102.275 15.6219 103.111 15.6219C104.648 15.6219 105.417 14.9207 105.417 14.0619C105.417 12.8413 104.286 12.615 102.75 12.2079C100.85 11.7107 99.0193 11.145 99.0193 8.95246C99.0193 7.00846 100.511 5.53846 103.156 5.53846C104.196 5.53846 105.168 5.81017 105.937 6.28417C106.208 6.44274 106.48 6.78217 106.48 7.16703C106.48 7.66417 106.073 8.09274 105.552 8.09274C105.213 8.09274 104.942 7.86731 104.603 7.64103C104.264 7.4156 103.766 7.21246 103.088 7.21246C101.574 7.21246 100.918 7.86731 100.918 8.74932C100.918 9.90217 102.026 10.173 103.608 10.5579C105.462 11.0096 107.293 11.5976 107.293 13.8356C107.293 15.7805 105.846 17.295 103.066 17.295C101.709 17.295 100.488 17.0233 99.5842 16.4585ZM109.103 11.4167C109.103 8.00274 111.454 5.53846 114.687 5.53846C117.648 5.53846 120 7.70874 120 10.671C120 11.3713 119.548 11.8462 118.892 11.8462H111.545C111.228 11.8462 111.115 11.9593 111.115 12.2079C111.115 12.7736 111.567 13.8133 112.245 14.4913C112.924 15.1693 113.85 15.5765 115.162 15.5765C116.134 15.5765 116.993 15.2147 117.648 14.7399C117.852 14.5822 118.078 14.4913 118.304 14.4913C118.779 14.4913 119.163 14.9207 119.163 15.3733C119.163 15.6442 119.073 15.8705 118.847 16.0736C117.897 16.8656 116.563 17.295 115.116 17.295C111.614 17.295 109.103 14.763 109.103 11.4167ZM117.108 8.16131C116.475 7.52789 115.662 7.2116 114.69 7.2116C113.717 7.2116 112.812 7.59646 112.157 8.25131C111.637 8.7716 111.276 9.4496 111.276 9.90217C111.276 10.1285 111.411 10.2193 111.705 10.2193H117.583C117.854 10.2193 117.99 10.1285 117.99 9.90217C117.99 9.3596 117.56 8.61303 117.108 8.16131Z'
        fill='#008561'
        // style='fill:#008561;fill:color(display-p3 0.0000 0.5216 0.3804);fill-opacity:1;'
      />
    </svg>
  );
}

// function IndeedImage() {
//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       width='60'
//       height='17'
//       viewBox='0 0 60 17'
//       fill='none'
//     >
//       <g clip-path='url(#clip0_6847_17985)'>
//         <path
//           fill-rule='evenodd'
//           clip-rule='evenodd'
//           d='M59.69 3.34437C59.5807 3.22043 59.4447 3.12293 59.2922 3.05922C59.1397 2.99551 58.9748 2.96725 58.8098 2.97659C58.6415 2.96653 58.4733 2.99774 58.3198 3.0675C58.1663 3.13727 58.0322 3.24347 57.9291 3.37687C57.726 3.63732 57.6197 4.02855 57.6197 4.54242V8.25984C57.2079 7.79046 56.7134 7.40073 56.1608 7.11007C55.8188 6.94428 55.4526 6.83416 55.076 6.78384C54.8277 6.75018 54.5773 6.73369 54.3267 6.73447C53.0793 6.73447 52.0684 7.17481 51.2941 8.05548C50.5278 8.93636 50.1445 10.1616 50.1443 11.7313C50.1385 12.4326 50.2373 13.1308 50.4374 13.8029C50.6137 14.4053 50.9014 14.9693 51.2856 15.4656C51.6465 15.9229 52.1029 16.2958 52.6229 16.5582C53.1428 16.8134 53.715 16.9443 54.2942 16.9404C54.5565 16.942 54.8184 16.9178 55.076 16.868C55.2365 16.842 55.3948 16.8035 55.5494 16.7529C55.9311 16.6231 56.291 16.4365 56.6171 16.1995C56.985 15.9219 57.3212 15.6046 57.6197 15.2535V15.4983C57.5957 15.8832 57.7146 16.2634 57.9536 16.566C58.0631 16.6828 58.1951 16.7762 58.3416 16.8405C58.4882 16.9049 58.6463 16.9388 58.8063 16.9403C58.9664 16.9418 59.1251 16.9109 59.2728 16.8494C59.4206 16.7878 59.5543 16.697 59.666 16.5823C59.8853 16.3376 60 15.9793 60 15.4983V4.41212C60 3.94668 59.8933 3.58858 59.69 3.34437ZM57.1549 13.5992C56.9716 14.0263 56.6688 14.3914 56.2831 14.6507C55.9217 14.8776 55.5028 14.9963 55.076 14.9925H55.0688C54.6398 14.9943 54.2197 14.8697 53.8611 14.6343C53.4738 14.3661 53.1713 13.9927 52.9894 13.5581C52.5713 12.4505 52.5656 11.2294 52.9732 10.1178C53.14 9.67036 53.4315 9.27999 53.8131 8.99292C54.1716 8.7295 54.6072 8.59196 55.0519 8.60169H55.076C55.5055 8.60214 55.9244 8.73589 56.2747 8.98448C56.6629 9.26436 56.9673 9.64503 57.1549 10.0853C57.3861 10.6314 57.4974 11.2206 57.4811 11.8134C57.5026 12.4252 57.3913 13.0345 57.1549 13.5992ZM49.3695 13.7053C49.1944 13.5583 48.9704 13.4826 48.7421 13.4931C48.5468 13.4822 48.3538 13.5397 48.1963 13.6557C47.8781 13.9495 47.6254 14.1851 47.4295 14.357C47.222 14.5299 47.0043 14.6904 46.7777 14.8375C46.5571 14.9828 46.3153 15.0931 46.0609 15.1642C45.7928 15.2382 45.5156 15.2737 45.2375 15.2697C45.1749 15.2713 45.1122 15.2685 45.05 15.2614C44.6806 15.2409 44.3221 15.1288 44.0068 14.9352C43.6229 14.7021 43.312 14.3662 43.1091 13.9656C42.8818 13.4928 42.7649 12.9746 42.7672 12.45H47.6828C48.3423 12.45 48.856 12.3516 49.2153 12.1721C49.5825 11.9768 49.7615 11.5692 49.7615 10.9415C49.7549 10.2369 49.5727 9.54509 49.2316 8.92855C48.8653 8.25561 48.3174 7.69909 47.6503 7.3224C46.9485 6.9068 46.1091 6.70244 45.1228 6.70244H45.0499C44.3708 6.70297 43.6973 6.8245 43.0609 7.06132C42.467 7.29109 41.93 7.6469 41.4868 8.10423C41.0581 8.57922 40.731 9.13685 40.5257 9.74287C40.2995 10.4095 40.1865 11.1094 40.1913 11.8134C40.1913 13.3953 40.6397 14.6343 41.5367 15.555C42.384 16.4279 43.5584 16.8843 45.0499 16.9327C45.1313 16.9404 45.2206 16.9404 45.3109 16.9404C45.9466 16.9519 46.5799 16.8586 47.1853 16.6643C47.6713 16.508 48.1286 16.2739 48.5394 15.9709C48.8589 15.7286 49.1319 15.4303 49.345 15.0907C49.5024 14.8551 49.5953 14.5823 49.6144 14.2996C49.6207 14.1885 49.6019 14.0775 49.5596 13.9746C49.5172 13.8718 49.4523 13.7797 49.3697 13.7053H49.3695ZM43.5004 9.09901C43.6958 8.88703 43.9346 8.71976 44.2005 8.60863C44.4665 8.4975 44.7533 8.44515 45.0414 8.45514H45.0499C45.3434 8.44315 45.6362 8.49358 45.9088 8.60312C46.1814 8.71266 46.4277 8.8788 46.6313 9.09057C47.031 9.51507 47.2672 10.1589 47.3241 11.0229H42.7672C42.8481 10.1752 43.0934 9.53085 43.5004 9.09901ZM38.6833 13.4931C38.4853 13.4809 38.2893 13.5385 38.1293 13.6557C37.8783 13.8943 37.6228 14.1281 37.3629 14.357C37.1578 14.5298 36.9426 14.6903 36.7184 14.8375C36.4949 14.9831 36.2503 15.0933 35.9932 15.1642C35.7251 15.2387 35.4478 15.2743 35.1696 15.2697C35.1072 15.2713 35.0447 15.2685 34.9826 15.2614C34.6129 15.2408 34.2542 15.1287 33.9385 14.9352C33.5577 14.7015 33.2502 14.3656 33.051 13.9656C32.8163 13.4951 32.6959 12.9758 32.6995 12.45H37.6235C38.1487 12.4721 38.6721 12.3772 39.1561 12.1721C39.5146 11.9768 39.6943 11.5692 39.6943 10.9415C39.6906 10.2375 39.5111 9.54561 39.1722 8.92855C38.8039 8.25733 38.2567 7.70135 37.5915 7.3224C36.8207 6.8912 35.9475 6.67695 35.0646 6.70244H34.9826C34.3037 6.7037 33.6303 6.8252 32.9937 7.06132C32.4011 7.28893 31.8664 7.64511 31.428 8.10423C30.9934 8.57629 30.6631 9.13463 30.4586 9.74287C30.2319 10.4094 30.1188 11.1093 30.1239 11.8134C30.1239 13.3953 30.5809 14.6343 31.4774 15.555C32.3252 16.4279 33.4913 16.8843 34.9826 16.9327C35.0725 16.9404 35.1532 16.9404 35.2432 16.9404C35.879 16.9526 36.5124 16.8593 37.1176 16.6643C37.6034 16.5083 38.0606 16.2741 38.471 15.9709C38.793 15.7308 39.0669 15.4322 39.2784 15.0907C39.4355 14.8549 39.5284 14.5822 39.5478 14.2996C39.5534 14.1893 39.5352 14.0791 39.4943 13.9765C39.4535 13.8739 39.3909 13.7814 39.3109 13.7053C39.1343 13.5609 38.9113 13.4856 38.6833 13.4931ZM33.4332 9.09901C33.6285 8.88694 33.8673 8.71961 34.1333 8.60848C34.3993 8.49735 34.6862 8.44504 34.9743 8.45514H34.9826C35.2762 8.44315 35.569 8.49359 35.8416 8.60313C36.1143 8.71266 36.3605 8.8788 36.5642 9.09057C36.9712 9.51507 37.1996 10.1589 37.2648 11.0229H32.6995C32.7901 10.1752 33.0348 9.53085 33.4332 9.09901ZM5.23682 15.2697V9.2704C5.40759 9.28603 5.57086 9.29431 5.7421 9.29431C6.52843 9.29725 7.3007 9.08595 7.976 8.68309V15.2697C7.976 15.8323 7.8457 16.2478 7.59243 16.5256C7.4666 16.6625 7.31255 16.7705 7.14091 16.8421C6.96927 16.9138 6.78414 16.9473 6.59829 16.9404C6.41413 16.946 6.231 16.911 6.06189 16.8378C5.89278 16.7647 5.74184 16.6553 5.61977 16.5173C5.36713 16.2398 5.23682 15.8239 5.23682 15.2697ZM28.9176 3.34437C28.8088 3.22186 28.674 3.12524 28.5231 3.0616C28.3721 2.99796 28.2088 2.96891 28.0452 2.97659C27.8768 2.96648 27.7086 2.99766 27.5551 3.06743C27.4015 3.13719 27.2674 3.24342 27.1643 3.37687C26.9534 3.63732 26.8543 4.02855 26.8543 4.54242V8.25984C26.4428 7.7902 25.9482 7.40043 25.3954 7.11007C25.0533 6.94521 24.6876 6.83513 24.3114 6.78384C24.063 6.75013 23.8127 6.73363 23.562 6.73447C22.3146 6.73447 21.2957 7.17507 20.5295 8.05548C19.7632 8.93636 19.3799 10.1616 19.3795 11.7313C19.3752 12.4319 19.4712 13.1296 19.6648 13.8029C19.8438 14.4059 20.1344 14.9699 20.5215 15.4656C20.8821 15.9231 21.3386 16.2961 21.8589 16.5582C22.3786 16.8134 22.9506 16.9442 23.5296 16.9404C23.7919 16.9413 24.0537 16.9171 24.3114 16.868C24.4719 16.8421 24.6302 16.8036 24.7848 16.7529C25.1665 16.6231 25.5264 16.4365 25.8525 16.1995C26.2186 15.9199 26.5544 15.6029 26.8545 15.2535V15.4983C26.8309 15.8832 26.95 16.2633 27.189 16.566C27.2976 16.6828 27.4289 16.7762 27.5749 16.8405C27.7208 16.9049 27.8783 16.9388 28.0378 16.9404C28.1972 16.9419 28.3554 16.9109 28.5025 16.8494C28.6496 16.7878 28.7827 16.6969 28.8935 16.5823C29.1129 16.3376 29.219 15.9793 29.219 15.4983V4.41212C29.219 3.94668 29.122 3.58858 28.9176 3.34437ZM26.3901 13.5992C26.2067 14.0286 25.9007 14.3943 25.5105 14.6507C25.152 14.8775 24.7356 14.9962 24.3114 14.9925H24.3036C23.8749 14.9942 23.4553 14.8696 23.0971 14.6343C22.7074 14.3685 22.4041 13.9944 22.2248 13.5581C21.9991 13.0048 21.8909 12.4107 21.907 11.8134C21.8952 11.2346 21.9949 10.6589 22.2007 10.1178C22.3703 9.66976 22.6644 9.27947 23.0483 8.99292C23.404 8.72953 23.8371 8.5919 24.2795 8.60169H24.3114C24.7386 8.60103 25.1552 8.73496 25.5021 8.98448C25.8949 9.26147 26.2025 9.64277 26.3901 10.0853C26.6174 10.6325 26.7285 11.221 26.7163 11.8134C26.7337 12.4249 26.6226 13.0333 26.3901 13.5992ZM11.9948 8.10423V8.41483C12.3791 7.88514 12.8741 7.44545 13.4454 7.12632C14.0102 6.84747 14.6334 6.70751 15.2631 6.71806C15.8827 6.70904 16.4944 6.85804 17.0405 7.15101C17.549 7.42452 17.9572 7.85276 18.206 8.37374C18.3765 8.68467 18.4873 9.02478 18.5326 9.37649C18.5871 9.82793 18.6115 10.2825 18.6055 10.7372V15.4091C18.6055 15.9144 18.4832 16.2965 18.2546 16.5496C18.1436 16.6772 18.0055 16.7785 17.8504 16.8461C17.6954 16.9136 17.5272 16.9458 17.3581 16.9402C17.1858 16.9462 17.0144 16.9135 16.8565 16.8444C16.6985 16.7754 16.558 16.6718 16.4454 16.5413C16.2085 16.2804 16.0951 15.8979 16.0951 15.4091V11.2261C16.0951 10.3953 15.9807 9.75964 15.752 9.31915C15.5242 8.87949 15.0594 8.65888 14.3751 8.65888C13.9353 8.65887 13.5069 8.79867 13.1517 9.05807C12.7742 9.33676 12.49 9.72338 12.3366 10.1669C12.2143 10.5419 12.1569 11.2345 12.1569 12.2704V15.4091C12.1569 15.9222 12.0357 16.2965 11.7988 16.5582C11.6828 16.6834 11.5413 16.7823 11.3839 16.8482C11.2265 16.9142 11.0567 16.9456 10.8861 16.9404C10.7162 16.9455 10.5473 16.9122 10.392 16.8432C10.2366 16.7741 10.0989 16.6709 9.98882 16.5413C9.75259 16.2804 9.63807 15.8979 9.63807 15.4091V8.14532C9.63807 7.66472 9.74415 7.306 9.95632 7.07742C10.0631 6.95733 10.1954 6.86271 10.3436 6.80052C10.4918 6.73833 10.652 6.71016 10.8125 6.71806C11.0214 6.7141 11.2273 6.76801 11.4075 6.87384C11.5948 6.98552 11.7451 7.14982 11.8398 7.34631C11.9496 7.58349 12.0026 7.84298 11.9948 8.10423ZM5.25245 0.890469C6.94857 0.279102 8.88078 0.311599 10.3315 1.56699C10.601 1.81963 10.9102 2.13726 11.0325 2.51224C11.179 2.98502 10.5196 2.46287 10.4291 2.3985C9.9716 2.08617 9.47579 1.83406 8.9539 1.64839C6.10082 0.767976 3.40227 2.35803 1.72302 4.8274C1.04675 5.91635 0.530622 7.09691 0.190474 8.3328C0.159375 8.48462 0.110228 8.63217 0.0440787 8.77231C-0.0295096 8.91214 0.0112686 8.39843 0.0112686 8.38155C0.0717963 7.86444 0.169966 7.35244 0.304997 6.84962C1.07932 4.15901 2.79169 1.91728 5.25276 0.890625L5.25245 0.890469Z'
//           fill='#0071CE'
//         />
//         <path
//           fill-rule='evenodd'
//           clip-rule='evenodd'
//           d='M7.46209 7.56454C7.09773 7.74997 6.68656 7.82319 6.28059 7.77494C5.87461 7.72668 5.49207 7.55912 5.18132 7.29345C4.87058 7.02777 4.6456 6.67591 4.53483 6.28236C4.42406 5.88882 4.43249 5.47127 4.55903 5.08251C4.68558 4.69375 4.92457 4.35125 5.24577 4.09832C5.56698 3.84539 5.95597 3.6934 6.36357 3.66155C6.77116 3.62971 7.17904 3.71945 7.53562 3.91943C7.89221 4.11941 8.18149 4.42064 8.36687 4.78503C8.49075 5.02679 8.56561 5.29065 8.58716 5.56144C8.6087 5.83223 8.57651 6.10461 8.49243 6.36292C8.40834 6.62122 8.27403 6.86036 8.09721 7.06658C7.92039 7.27279 7.70454 7.44203 7.46209 7.56454Z'
//           fill='#0071CE'
//         />
//       </g>
//       <defs>
//         <clipPath id='clip0_6847_17985'>
//           <rect
//             width='60'
//             height='16.4385'
//             fill='white'
//             transform='translate(0 0.495117)'
//           />
//         </clipPath>
//       </defs>
//     </svg>
//   );
// }
