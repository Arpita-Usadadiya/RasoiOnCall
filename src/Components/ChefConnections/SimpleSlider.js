// import React from "react";
// import Slider from "react-slick";
// import Slider1 from "../../assets/Slider1.png";
// import Slider2 from "../../assets/Slider2.png";
// import Slider3 from "../../assets/Slider3.png";

// export default function SimpleSlider() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false, // better UX on mobile
//   };

//   return (
//     <div className="w-full px-3 md:px-0">
//       {/* Heading */}
//       <h1 className="title-font text-black text-center text-3xl sm:text-4xl md:text-6xl font-bold mt-6 mb-6 md:mb-8">
//         एक प्रमुख पहल
//       </h1>

//       <Slider {...settings}>
//         <div>
//           <img
//             src={Slider1}
//             alt="Home chef booking"
//             className="w-full h-[220px] sm:h-[300px] md:h-[450px] object-cover rounded-xl"
//           />
//         </div>

//         <div>
//           <img
//             src={Slider2}
//             alt="Verified home chefs"
//             className="w-full h-[220px] sm:h-[300px] md:h-[450px] object-cover rounded-xl"
//           />
//         </div>

//         <div>
//           <img
//             src={Slider3}
//             alt="Smart chef recommendation"
//             className="w-full h-[220px] sm:h-[300px] md:h-[450px] object-cover rounded-xl"
//           />
//         </div>
//       </Slider>
//     </div>
//   );
// }

import React from "react";
import Slider from "react-slick";

import thsc from "../../assets/thsc.png";
import skill from "../../assets/skill-india.png";
import ncvet from "../../assets/ncvet.png";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

 const slides = [
  {
    text: `THSC is committed to maintaining quality by providing training based on National Occupational Standards.
Cooks associated with RasoiOnCall can benefit by enhancing their skills through this training.`,
    image: thsc,
  },
  {
    text: `RasoiOnCall collaborates with Skill India to provide professional training to its cooks.
After successful completion, cooks are awarded a certification.`,
    image: skill,
  },
  {
    text: `NCVET regulates the functioning of institutions involved in vocational training
for both short-term and long-term programs and establishes minimum standards
for such institutions.`,
    image: ncvet,
  },
];


  return (
    <section className="w-full py-20 bg-white">
      <Slider {...settings}>
        {slides.map((item, index) => (
          <div key={index}>
            <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">

              {/* LEFT TEXT */}
              <div className="md:w-1/2 text-left">
                <p className="text-xl md:text-3xl font-semibold leading-relaxed text-black">
                  {item.text}
                </p>
              </div>

              {/* RIGHT LOGO */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={item.image}
                  alt="logo"
                  className="w-[220px] md:w-[300px] object-contain"
                />
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SimpleSlider;