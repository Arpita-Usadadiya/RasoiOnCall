import React from 'react';
import FaqOneTime from './FaqOneTime';
import LowerBanner from './LowerBanner';
import LowerBanner1 from './LowerBanner1';
import Testimonials1 from './Testimonials1';
import HearFromIt from './HearFromIt';
import Work1 from './Work1';
import StartBanner from './StartBanner';
import Carousel3 from './Carousel3';

const OneTime = () => {
  return (
    <div>
      <Carousel3 />
      <StartBanner />
      <Work1 />
      <HearFromIt />
      <Testimonials1 />
      <LowerBanner1 />
      <LowerBanner />
      <FaqOneTime />
    </div>
  )
}

export default OneTime
