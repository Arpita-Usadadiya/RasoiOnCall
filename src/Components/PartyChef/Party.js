import React from 'react'
import LowerSection from './LowerSection'
import FloatingBanner1 from './FloatingBanner1'
import FaqSection from './FaqSection'
import LowerBannerChefit from './LowerBannerChefit'
import LowerBannerChefit2 from './LowerBannerChefit2'
import Carousel3 from './Carousel3'
import WorkParty from './WorkParty'
import GalleryWithState from './Galle'
import GalleryAutoSlideZoom from './Gal'
import AboveBanner2 from './BannerDown'
import SafetyVideoBanner from './SafetyVideoBanner'
import PricingFactors from './PricingFactors '

const Party = () => {
  return (
    <div>
      <Carousel3 />
      <AboveBanner2 />
      <WorkParty />
      <PricingFactors />
      <SafetyVideoBanner />
      <GalleryWithState/>
      <GalleryAutoSlideZoom/>
      <LowerBannerChefit2 />
      <LowerBannerChefit />
      <FaqSection />
      <LowerSection />
      <FloatingBanner1 />
    </div>
  )
}

export default Party
