import React from 'react'
import FoodBanner from './Banner'
import FaqMonth from './FaqMonth'
import Low1 from './Low1'
import LowerCook from './lowerCook'
import BannerDown from './BannerDown'
import Carousel2 from './Carousel2'
import Work from './Work'
import FloatingBanner from './FloatingBanner'

const Month = () => {
  return (
    <div>
      <Carousel2 />
      <BannerDown />
      <Work />
      <Low1 />
      <LowerCook />
      <FaqMonth />
      <FoodBanner />
      <FloatingBanner />
    </div>
  )
}

export default Month
