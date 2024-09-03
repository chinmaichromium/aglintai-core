import {
  type DatabaseTableUpdate,
  type RecruiterType,
} from '@aglint/shared-types';

// import { useToast } from '@/components/hooks/use-toast';
import { supabase } from '@/src/utils/supabase/client';

export async function updateRecruiter(id: string, obj: RecruiterType) {
  const { data, error } = await supabase
    .from('recruiter')
    .update({ ...obj })
    .eq('id', id)
    .select('* , office_locations(*), departments(id,name)')
    .single();
  if (!error) {
    return data;
  }
}

export const updateIntegrations = async (
  int: DatabaseTableUpdate['integrations'],
  rec_id: string,
) => {
  try {
    await supabase
      .from('integrations')
      .update({ ...int })
      .eq('recruiter_id', rec_id)
      .throwOnError();
  } catch {
    // toast({
    //   variant: 'destructive',
    //   title: 'Failed to update integrations',
    // });
  }
};

export function GreenHouseLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='none'
      viewBox='0 0 40 40'
    >
      <rect width='40' height='40' fill='#F9F9F8' rx='4'></rect>
      <path
        fill='#24A57F'
        d='M24.662 14.502c0 1.255-.534 2.366-1.408 3.235-.972.965-2.38 1.207-2.38 2.028 0 1.11 1.797.772 3.52 2.486 1.142 1.134 1.846 2.631 1.846 4.369 0 3.428-2.768 6.155-6.24 6.155-3.472 0-6.24-2.727-6.24-6.153 0-1.74.704-3.237 1.845-4.371 1.724-1.714 3.521-1.376 3.521-2.486 0-.821-1.408-1.063-2.38-2.028-.873-.87-1.408-1.98-1.408-3.283 0-2.51 2.064-4.538 4.59-4.538.485 0 .922.072 1.286.072.656 0 .996-.29.996-.748 0-.266-.122-.603-.122-.966 0-.82.704-1.496 1.554-1.496.85 0 1.53.7 1.53 1.545 0 .893-.704 1.303-1.239 1.496-.436.145-.776.338-.776.773 0 .82 1.505 1.617 1.505 3.91zm-.486 12.12c0-2.39-1.772-4.32-4.176-4.32s-4.176 1.93-4.176 4.32c0 2.366 1.772 4.321 4.176 4.321s4.176-1.957 4.176-4.32zm-1.432-12.168c0-1.52-1.238-2.776-2.744-2.776-1.505 0-2.744 1.255-2.744 2.776 0 1.52 1.239 2.776 2.744 2.776 1.506 0 2.744-1.255 2.744-2.776z'
      ></path>
      <defs>
        <clipPath id='clip0_3437_15585'>
          <path
            fill='#fff'
            d='M0 0H12.48V26H0z'
            transform='translate(13.76 6.778)'
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function LeverLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='none'
      viewBox='0 0 40 40'
    >
      <rect width='40' height='40' fill='#F9F9F8' rx='4'></rect>
      <path
        fill='#C3C6CC'
        d='M33.083 31.937l-5.02-5.02a.83.83 0 00-1.188 0l-5.02 5.02a.8.8 0 00-.022 1.146c.167.167.396.271.625.25H32.5a.801.801 0 00.833-.791.801.801 0 00-.25-.605z'
      ></path>
      <path
        fill='#E1E3E6'
        d='M33.25 13.896l-1.583-4.667a1.551 1.551 0 00-.334-.563L6.854 33.147a.8.8 0 00.521.187h6.958a1.4 1.4 0 001.042-.437l17.542-17.521c.396-.396.52-.959.333-1.48z'
      ></path>
      <path
        fill='#C3C6CC'
        d='M30.77 8.313L26.105 6.75a1.397 1.397 0 00-1.48.333L7.085 24.604c-.272.271-.438.646-.438 1.042v6.958a.8.8 0 00.187.521l24.521-24.48a2.023 2.023 0 00-.583-.332z'
      ></path>
      <defs>
        <clipPath id='clip0_3437_15275'>
          <path
            fill='#fff'
            d='M0 0H26.667V26.667H0z'
            transform='translate(6.667 6.667)'
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function AshbyLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='none'
      viewBox='0 0 40 40'
    >
      <rect width='40' height='40' fill='#F9F9F8' rx='4'></rect>
      <mask
        id='mask0_3437_15575'
        style={{ maskType: 'luminance' }}
        width='22'
        height='22'
        x='9'
        y='9'
        maskUnits='userSpaceOnUse'
      >
        <path fill='#fff' d='M30.296 9.808H9.808v20.384h20.488V9.808z'></path>
      </mask>
      <g mask='url(#mask0_3437_15575)'>
        <path
          fill='#504AD0'
          d='M28.597 27.743c.247.612.512 1.071.797 1.378.304.287.597.439.881.459v.574a127.674 127.674 0 00-5.174-.086c-2.16 0-3.751.028-4.775.086v-.574c.72-.038 1.232-.124 1.535-.26.303-.151.455-.41.455-.773 0-.345-.114-.804-.342-1.379l-1.677-4.707h-5.741l-.483 1.292c-.626 1.626-.94 2.87-.94 3.731 0 .785.219 1.32.655 1.608.436.287 1.08.45 1.932.488v.574a94.18 94.18 0 00-3.724-.086c-.89 0-1.62.028-2.188.086v-.574c.474-.077.919-.374 1.335-.89.418-.517.844-1.34 1.28-2.468l6.311-16.39c.502.033 1.004.052 1.506.056.38 0 .872-.02 1.479-.057l6.878 17.911v.001zm-8.499-5.858l-2.586-7.175-2.73 7.175h5.316z'
        ></path>
      </g>
    </svg>
  );
}

export function GooglLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='none'
      viewBox='0 0 40 40'
    >
      <rect width='40' height='40' fill='#F9F9F8' rx='4'></rect>
      <path
        fill='#4285F4'
        d='M31.733 20.278c0-.867-.078-1.7-.222-2.5H20v4.728h6.578a5.623 5.623 0 01-2.44 3.689v3.066h3.95c2.312-2.128 3.645-5.26 3.645-8.983z'
      ></path>
      <path
        fill='#34A853'
        d='M20 32.222c3.3 0 6.067-1.094 8.089-2.96l-3.95-3.067c-1.095.733-2.495 1.166-4.14 1.166-3.182 0-5.877-2.15-6.838-5.039H9.078v3.167A12.218 12.218 0 0020 32.222z'
      ></path>
      <path
        fill='#FBBC05'
        d='M13.161 22.322A7.348 7.348 0 0112.778 20c0-.805.139-1.589.383-2.322V14.51H9.078a12.217 12.217 0 00-1.3 5.49c0 1.971.472 3.838 1.3 5.488l4.083-3.167z'
      ></path>
      <path
        fill='#EA4335'
        d='M20 12.639c1.794 0 3.405.617 4.672 1.828l3.506-3.506C26.06 8.99 23.294 7.778 20 7.778A12.218 12.218 0 009.078 14.51l4.083 3.167c.961-2.89 3.656-5.04 6.839-5.04z'
      ></path>
    </svg>
  );
}

export function SlackLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='none'
      viewBox='0 0 40 40'
    >
      <rect width='40' height='40' fill='#F9F9F8' rx='4'></rect>
      <path
        fill='#E01E5A'
        d='M12.27 23.518a2.808 2.808 0 01-2.802 2.8 2.808 2.808 0 01-2.801-2.8 2.808 2.808 0 012.8-2.802h2.802v2.802zM13.68 23.518a2.808 2.808 0 012.802-2.802 2.808 2.808 0 012.801 2.802v7.014a2.808 2.808 0 01-2.801 2.801 2.808 2.808 0 01-2.802-2.801v-7.014z'
      ></path>
      <path
        fill='#36C5F0'
        d='M16.482 12.27a2.808 2.808 0 01-2.801-2.802 2.808 2.808 0 012.801-2.801 2.808 2.808 0 012.801 2.8v2.802h-2.801zM16.482 13.68a2.808 2.808 0 012.801 2.802 2.808 2.808 0 01-2.801 2.801H9.468a2.808 2.808 0 01-2.801-2.801 2.808 2.808 0 012.8-2.801h7.015z'
      ></path>
      <path
        fill='#2EB67D'
        d='M27.73 16.482a2.808 2.808 0 012.802-2.801 2.808 2.808 0 012.801 2.801 2.808 2.808 0 01-2.8 2.801H27.73v-2.801zM26.32 16.482a2.808 2.808 0 01-2.802 2.801 2.808 2.808 0 01-2.801-2.801V9.468a2.808 2.808 0 012.8-2.801 2.808 2.808 0 012.802 2.8v7.015z'
      ></path>
      <path
        fill='#ECB22E'
        d='M23.518 27.73a2.808 2.808 0 012.801 2.802 2.808 2.808 0 01-2.801 2.801 2.808 2.808 0 01-2.801-2.801V27.73h2.801zM23.518 26.319a2.808 2.808 0 01-2.801-2.801 2.808 2.808 0 012.8-2.802h7.015a2.808 2.808 0 012.801 2.802 2.808 2.808 0 01-2.801 2.8h-7.014z'
      ></path>
    </svg>
  );
}

export function TeamsLogo() {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 60 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='60' height='60' rx='10' fill='white' />
      <path
        d='M38.6406 26.4844H49.9406C51.0093 26.4844 51.875 27.3469 51.875 28.4125V38.6875C51.8742 39.6199 51.6897 40.543 51.3321 41.4041C50.9746 42.2652 50.4509 43.0474 49.791 43.7061C49.1311 44.3648 48.348 44.8871 47.4863 45.2432C46.6245 45.5992 45.7011 45.7821 44.7687 45.7813H44.7375C43.8051 45.7821 42.8817 45.5992 42.0199 45.2432C41.1582 44.8871 40.3751 44.3648 39.7152 43.7061C39.0553 43.0474 38.5316 42.2652 38.1741 41.4041C37.8165 40.543 37.632 39.6199 37.6312 38.6875V27.4969C37.6312 26.9375 38.0844 26.4844 38.6406 26.4844ZM46.2812 24.4531C48.8062 24.4531 50.8562 22.4063 50.8562 19.8844C50.8562 17.3594 48.8062 15.3125 46.2781 15.3125C43.75 15.3125 41.7 17.3594 41.7 19.8844C41.7 22.4063 43.75 24.4531 46.2781 24.4531H46.2812Z'
        fill='#5059C9'
      />
      <path
        d='M32.0344 24.4531C32.9022 24.4544 33.7617 24.2846 34.5639 23.9535C35.3661 23.6225 36.0952 23.1366 36.7095 22.5237C37.3239 21.9108 37.8115 21.1829 38.1444 20.3815C38.4774 19.5801 38.6492 18.7209 38.65 17.8531C38.6496 16.9848 38.478 16.1251 38.145 15.3231C37.8121 14.5211 37.3243 13.7927 36.7095 13.1794C36.0948 12.5661 35.3652 12.08 34.5624 11.749C33.7597 11.4179 32.8996 11.2484 32.0312 11.25C31.1637 11.2492 30.3045 11.4192 29.5026 11.7505C28.7008 12.0817 27.9721 12.5676 27.3581 13.1805C26.744 13.7934 26.2567 14.5212 25.924 15.3224C25.5912 16.1236 25.4195 16.9825 25.4187 17.85C25.4187 21.4969 28.3781 24.4531 32.0312 24.4531H32.0344ZM40.8531 26.4844H22.1969C21.691 26.4967 21.2106 26.7093 20.8614 27.0755C20.5122 27.4417 20.3226 27.9316 20.3344 28.4375V40.1562C20.2664 43.1936 21.4068 46.1338 23.505 48.331C25.6032 50.5282 28.4877 51.8029 31.525 51.875C34.5628 51.8037 37.4481 50.5294 39.547 48.3321C41.6459 46.1348 42.7866 43.1942 42.7187 40.1562V28.4375C42.7245 28.1867 42.6809 27.9373 42.5903 27.7034C42.4996 27.4695 42.3638 27.2558 42.1906 27.0744C42.0173 26.893 41.81 26.7476 41.5805 26.6463C41.3511 26.5451 41.1039 26.4901 40.8531 26.4844Z'
        fill='#7B83EB'
      />
      <path
        opacity='0.1'
        d='M32.5438 26.4844V42.9063C32.5413 43.3992 32.3442 43.8711 31.9953 44.2194C31.6465 44.5677 31.1742 44.764 30.6813 44.7656H21.2281C20.6367 43.2997 20.3322 41.7339 20.3313 40.1531V28.4375C20.3255 28.1869 20.3691 27.9376 20.4598 27.7039C20.5505 27.4702 20.6863 27.2567 20.8596 27.0755C21.0329 26.8944 21.2402 26.7492 21.4697 26.6483C21.6992 26.5474 21.9463 26.4928 22.1969 26.4875H32.5406L32.5438 26.4844Z'
        fill='black'
      />
      <path
        opacity='0.2'
        d='M31.525 26.4844V43.9219C31.5209 44.4143 31.3233 44.8853 30.9748 45.2332C30.6263 45.5811 30.1549 45.778 29.6625 45.7812H21.7094C21.358 45.1366 21.0782 44.4555 20.875 43.75C20.5196 42.5851 20.3384 41.3741 20.3375 40.1562V28.4312C20.3317 28.1809 20.3752 27.9319 20.4657 27.6984C20.5562 27.4648 20.6918 27.2515 20.8647 27.0704C21.0377 26.8893 21.2446 26.744 21.4737 26.643C21.7029 26.5419 21.9496 26.4869 22.2 26.4812H31.5281L31.525 26.4844Z'
        fill='black'
      />
      <path
        opacity='0.2'
        d='M31.525 26.4844V41.8906C31.5209 42.383 31.3233 42.8541 30.9748 43.202C30.6263 43.5499 30.1549 43.7467 29.6625 43.75H20.875C20.5196 42.5851 20.3384 41.3741 20.3375 40.1562V28.4312C20.3317 28.1809 20.3752 27.9319 20.4657 27.6984C20.5562 27.4648 20.6918 27.2515 20.8647 27.0704C21.0377 26.8893 21.2446 26.744 21.4737 26.643C21.7029 26.5419 21.9496 26.4869 22.2 26.4812H31.5281L31.525 26.4844Z'
        fill='black'
      />
      <path
        opacity='0.2'
        d='M30.5094 26.4844V41.8906C30.5053 42.383 30.3076 42.8541 29.9592 43.202C29.6107 43.5499 29.1393 43.7467 28.6469 43.75H20.8719C20.5164 42.5851 20.3353 41.3741 20.3344 40.1562V28.4312C20.3286 28.1809 20.3721 27.9319 20.4626 27.6984C20.5531 27.4648 20.6887 27.2515 20.8616 27.0704C21.0346 26.8893 21.2415 26.744 21.4706 26.643C21.6997 26.5419 21.9465 26.4869 22.1969 26.4812L30.5094 26.4844Z'
        fill='black'
      />
      <path
        opacity='0.1'
        d='M32.5438 21.2344V24.4344C32.3719 24.4437 32.2094 24.4531 32.0344 24.4531C31.8625 24.4531 31.7 24.4437 31.525 24.4344C30.1294 24.3268 28.8039 23.7789 27.7396 22.8697C26.6754 21.9604 25.9273 20.7367 25.6031 19.375H30.6813C31.1737 19.3766 31.6455 19.5725 31.9942 19.9201C32.343 20.2677 32.5405 20.7389 32.5438 21.2312V21.2344Z'
        fill='black'
      />
      <path
        opacity='0.2'
        d='M31.525 22.25V24.4344C30.3109 24.3415 29.146 23.915 28.159 23.202C27.1719 22.489 26.401 21.5172 25.9313 20.3938H29.6656C30.1575 20.3962 30.6285 20.5925 30.9766 20.94C31.3247 21.2875 31.5217 21.7582 31.525 22.25Z'
        fill='black'
      />
      <path
        opacity='0.2'
        d='M31.525 22.25V24.4344C30.3109 24.3415 29.146 23.915 28.159 23.202C27.1719 22.489 26.401 21.5172 25.9313 20.3938H29.6656C30.1575 20.3962 30.6285 20.5925 30.9766 20.94C31.3247 21.2875 31.5217 21.7582 31.525 22.25Z'
        fill='black'
      />
      <path
        opacity='0.2'
        d='M30.5094 22.25V24.2719C29.4942 24.0321 28.5501 23.5555 27.7544 22.8809C26.9587 22.2063 26.3339 21.353 25.9313 20.3906H28.65C29.1424 20.3931 29.6139 20.5898 29.9621 20.9379C30.3102 21.2861 30.5069 21.7576 30.5094 22.25Z'
        fill='black'
      />
      <path
        d='M9.99063 20.3906H28.6437C29.675 20.3906 30.5094 21.225 30.5094 22.2531V40.8719C30.5094 41.1167 30.4611 41.3592 30.3673 41.5853C30.2735 41.8115 30.136 42.017 29.9628 42.19C29.7895 42.363 29.5838 42.5001 29.3575 42.5935C29.1311 42.6869 28.8886 42.7348 28.6437 42.7344H9.9875C9.74291 42.7344 9.50072 42.6862 9.27475 42.5926C9.04878 42.499 8.84346 42.3618 8.67051 42.1889C8.49756 42.0159 8.36037 41.8106 8.26677 41.5846C8.17318 41.3587 8.125 41.1165 8.125 40.8719V22.2531C8.125 21.2219 8.95937 20.3906 9.99063 20.3906Z'
        fill='url(#paint0_linear_6965_323959)'
      />
      <path
        d='M24.225 27.4781H20.4969V37.6125H18.1219V27.4781H14.4062V25.5094H24.2219L24.225 27.4781Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear_6965_323959'
          x1='12.0125'
          y1='18.9375'
          x2='26.5812'
          y2='44.2125'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#5A62C3' />
          <stop offset='0.5' stop-color='#4D55BD' />
          <stop offset='1' stop-color='#3940AB' />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ZoomLogo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      fill='none'
      viewBox='0 0 40 40'
    >
      <rect width='40' height='40' fill='#F9F9F8' rx='4'></rect>
      <path
        fill='#0E71EB'
        fillRule='evenodd'
        d='M9.355 12.417A2.355 2.355 0 007 14.772v8.102a4.71 4.71 0 004.71 4.71h11.352c1.3 0 2.355-1.055 2.355-2.355v-8.102a4.71 4.71 0 00-4.71-4.71H9.355zM33 14.544v10.912a1.083 1.083 0 01-1.72.876l-3.346-2.433a2.167 2.167 0 01-.892-1.752v-4.294c0-.693.331-1.344.892-1.752l3.345-2.433c.717-.52 1.721-.01 1.721.876z'
        clipRule='evenodd'
      ></path>
    </svg>
  );
}
