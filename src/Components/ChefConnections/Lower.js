import React from "react";

const Lower = () => {
  return (
    <section className="bg-[#FFF4EA] py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="pr-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-[3.8rem] text-gray-900">
            RasoiOnCall ના{" "}
            <span className="text-orange-500">4500 થી વધુ કૂક્સનો</span>{" "}
            ભાગ બનો
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="pt-2">
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
            આજે જ સાઇન અપ કરો અને તમારા રસોડાને નવી ઊંચાઈઓ પર લઈ જાઓ!
            હજારો ઘર અને પરિવાર સાથે જોડાઓ. RasoiOnCall ની ટ્રેનિંગ અને
            સહાયથી તમારા રસોઈ કૌશલ્યને એક નવી ઊંચાઈ અને મજબૂત આવકના
            મોડલમાં બદલો.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Lower;