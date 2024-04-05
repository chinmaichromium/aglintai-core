import React from 'react';

import Login from '@/src/components/Login';

function SignInPage() {
  return (
    <>
      <Login />
    </>
  );
}

export default SignInPage;

SignInPage.getLayout = (page) => {
  return <>{page}</>;
};
