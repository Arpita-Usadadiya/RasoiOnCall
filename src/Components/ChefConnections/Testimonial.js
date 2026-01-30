import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const testimonialsData = [
    {
      img: "https://dummyimage.com/302x302",
      text: "ટેક્નોલોજી અને સપોર્ટ બંને એકસાથે મળવું દુર્લભ છે. RasoiOnCall સાથે કામ કરીને મને માત્ર આવક જ નહીં, પરંતુ આત્મવિશ્વાસ અને સ્થિરતા પણ મળી છે.",
      name: "નિતિન શર્મા",
    },
    {
      img: "https://dummyimage.com/300x300",
      text: "RasoiOnCall એ મને મારા રસોઈ કૌશલ્યને પ્રોફેશનલ કારકિર્દીમાં બદલવાની તક આપી. તેમની ટીમ હંમેશા માર્ગદર્શન અને સહાય માટે તૈયાર રહે છે.",
      name: "આલ્પર કામુ",
    },
    {
      img: "https://dummyimage.com/305x305",
      text: "હું હંમેશા એવી પ્લેટફોર્મની શોધમાં હતો જ્યાં માનવીય મૂલ્યોને મહત્વ આપવામાં આવે. RasoiOnCall એ વિશ્વાસ સાચો સાબિત કર્યો.",
      name: "હેનરી લેથમ",
    },
    {
      img: "https://dummyimage.com/302x302",
      text: "ટેક્નોલોજી અને સપોર્ટ બંને એકસાથે મળવું દુર્લભ છે. RasoiOnCall સાથે કામ કરીને મને માત્ર આવક જ નહીં, પરંતુ આત્મવિશ્વાસ અને સ્થિરતા પણ મળી છે.",
      name: "નિતિન શર્મા",
    },
    {
      img: "https://dummyimage.com/300x300",
      text: "RasoiOnCall એ મને મારા રસોઈ કૌશલ્યને પ્રોફેશનલ કારકિર્દીમાં બદલવાની તક આપી. તેમની ટીમ હંમેશા માર્ગદર્શન અને સહાય માટે તૈયાર રહે છે.",
      name: "આલ્પર કામુ",
    },
    {
      img: "https://dummyimage.com/305x305",
      text: "હું હંમેશા એવી પ્લેટફોર્મની શોધમાં હતો જ્યાં માનવીય મૂલ્યોને મહત્વ આપવામાં આવે. RasoiOnCall એ વિશ્વાસ સાચો સાબિત કર્યો.",
      name: "હેનરી લેથમ",
    },
    {
      img: "https://dummyimage.com/302x302",
      text: "ટેક્નોલોજી અને સપોર્ટ બંને એકસાથે મળવું દુર્લભ છે. RasoiOnCall સાથે કામ કરીને મને માત્ર આવક જ નહીં, પરંતુ આત્મવિશ્વાસ અને સ્થિરતા પણ મળી છે.",
      name: "નિતિન શર્મા",
    },
    {
      img: "https://dummyimage.com/300x300",
      text: "RasoiOnCall એ મને મારા રસોઈ કૌશલ્યને પ્રોફેશનલ કારકિર્દીમાં બદલવાની તક આપી. તેમની ટીમ હંમેશા માર્ગદર્શન અને સહાય માટે તૈયાર રહે છે.",
      name: "આલ્પર કામુ",
    },
    {
      img: "https://dummyimage.com/305x305",
      text: "હું હંમેશા એવી પ્લેટફોર્મની શોધમાં હતો જ્યાં માનવીય મૂલ્યોને મહત્વ આપવામાં આવે. RasoiOnCall એ વિશ્વાસ સાચો સાબિત કર્યો.",
      name: "હેનરી લેથમ",
    },
  ];

  //Slider settings
  const settings = {
    dots: true, //Show dots for navigations
    infinite: true, //Infinite Scrolling
    speed: 500, //Transition speed in ms
    slidesToShow: 3, //Number of testimonials visible at atime
    slidesToScroll: 1, //Number of testimonials to scroll per swipe
    autoplay: true, //Enable auto-slide
    autoplaySpeed: 3000, //Auto-slide interval in ms
    pauseOnHover: true, //Pause auto-slide when hovering
    swipe: true, //Enable mouse and touch swipe
    responsive: [
      {
        breakpoint: 1024, //Below 1024px
        settings: {
          slidesToShow: 2, //Show 2 testimonials
        },
      },
      {
        breakpoint: 640, //Below 640px
        settings: {
          slidesToShow: 1, //Show 1 testimonials
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Testimonials</h1>

      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
            <div className="bg-green-800 hover:bg-white rounded-lg p-6 text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-4 object-cover object-center rounded-full border-2 border-gray-200 bg-gray-100 mx-auto"
                src={testimonial.image}
              />

              <p className="leading-relaxed hover:text-black text-white">
                {testimonial.text}
              </p>

              <div className="flex justify-center gap-1 mb-4 mt-5 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>

              <h2 className="text-white font-medium title-font tracking-wider text-sm">
                {testimonial.name}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
