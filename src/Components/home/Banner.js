import React from 'react'

const LowerSection = () => {
  return (
    <div className="relative h-[350px] bg-center" style={{ background: "URL('https://thechefkart.com/_next/image?url=%2Fsample.png&w=1080&q=75')"}} >
        <div className="absolute inset-0"></div>

        <div className="relative 7-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">What's Better Than Your Favourite Food</h1>
            <p className="text-6xl font-bold text-orange-500 mt-4">
                Getting it cooked in <br/> your kitchen.
            </p>
        </div>
    </div>
  );
}

export default LowerSection;
