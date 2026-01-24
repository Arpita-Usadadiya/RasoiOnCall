import React from 'react';
import { RiBowlFill } from "react-icons/ri";

const NotificationBanner = () => {
  return (
    <div className="w-full bg-[#FDEEE6] border-b border-[#F2D3C2] px-6 py-3 flex items-center justify-center gap-3">
      <RiBowlFill className=" text-[30px] text-black" />
      
      <p className="text-[30px] font-semibold text-black">
        RasoiOnCall service is available only in Gujarat.
      </p>
    </div>
  )
}

export default NotificationBanner
