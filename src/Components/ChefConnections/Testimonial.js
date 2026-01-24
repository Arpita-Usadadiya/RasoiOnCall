import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    img: "https://dummyimage.com/302x302",
    text:
      "ટેક્નોલોજી અને સપોર્ટ બંને એકસાથે મળવું દુર્લભ છે. RasoiOnCall સાથે કામ કરીને મને માત્ર આવક જ નહીં, પરંતુ આત્મવિશ્વાસ અને સ્થિરતા પણ મળી છે.",
    name: "નિતિન શર્મા",
  },
  {
    img: "https://dummyimage.com/300x300",
    text:
      "RasoiOnCall એ મને મારા રસોઈ કૌશલ્યને પ્રોફેશનલ કારકિર્દીમાં બદલવાની તક આપી. તેમની ટીમ હંમેશા માર્ગદર્શન અને સહાય માટે તૈયાર રહે છે.",
    name: "આલ્પર કામુ",
  },
  {
    img: "https://dummyimage.com/305x305",
    text:
      "હું હંમેશા એવી પ્લેટફોર્મની શોધમાં હતો જ્યાં માનવીય મૂલ્યોને મહત્વ આપવામાં આવે. RasoiOnCall એ વિશ્વાસ સાચો સાબિત કર્યો.",
    name: "હેનરી લેથમ",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-14">
          અમારા ગ્રાહકો શું કહે છે
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                group rounded-xl p-8
                flex flex-col items-center
                bg-[#2f4a3c]
                shadow-md
                transition-all duration-300 ease-out
                hover:bg-white hover:scale-105 hover:shadow-xl
              "
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mb-5 border-2 border-gray-200"
              />

              <div className="flex gap-1 mb-4 text-orange-400 group-hover:text-orange-500 transition">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="leading-relaxed mb-6 text-white group-hover:text-gray-700 transition">
                “{item.text}”
              </p>

              <span className="w-10 h-1 bg-orange-400 group-hover:bg-orange-500 rounded mb-4 transition"></span>

              <h3 className="font-semibold text-white group-hover:text-gray-900 transition">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;



/* import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    img: "https://dummyimage.com/302x302",
    text:
      "ટેક્નોલોજી અને સપોર્ટ બંને એકસાથે મળવું દુર્લભ છે. RasoiOnCall સાથે કામ કરીને મને માત્ર આવક જ નહીં, પરંતુ આત્મવિશ્વાસ અને સ્થિરતા પણ મળી છે.",
    name: "નિતિન શર્મા",
    
  },
  {
    img: "https://dummyimage.com/300x300",
    text:
      "RasoiOnCall એ મને મારા રસોઈ કૌશલ્યને પ્રોફેશનલ કારકિર્દીમાં બદલવાની તક આપી. તેમની ટીમ હંમેશા માર્ગદર્શન અને સહાય માટે તૈયાર રહે છે.",
    name: "આલ્પર કામુ",  
  },
  {
    img: "https://dummyimage.com/305x305",
    text:
      "હું હંમેશા એવી પ્લેટફોર્મની શોધમાં હતો જ્યાં માનવીય મૂલ્યોને મહત્વ આપવામાં આવે. RasoiOnCall એ વિશ્વાસ સાચો સાબિત કર્યો.",
    name: "હેનરી લેથમ",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold text-gray-900 mb-14"
          data-aos="fade-up"
        >
          અમારા ગ્રાહકો શું કહે છે
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-gray-50 rounded-xl p-8 flex flex-col items-center shadow-sm hover:shadow-lg transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mb-5 border-2 border-gray-200"
              />

              <div className="flex gap-1 mb-4 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                “{item.text}”
              </p>

              <span className="w-10 h-1 bg-orange-500 rounded mb-4"></span>

              <h3 className="text-gray-900 font-semibold">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
*/

