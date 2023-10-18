import Lottie from 'lottie-react';
import React, { useRef } from 'react';

import { complete_lottie } from './complete-lottie';

function CompleteLottie() {
  const lottieRef = useRef();
  return (
    <div>
      <Lottie
        lottieRef={lottieRef}
        animationData={complete_lottie}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}

export default CompleteLottie;
