import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const FloatingBanner = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gray-100 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Text */}
        <p className="text-gray-700 text-sm md:text-base font-medium">
          Hosting a party? Book your Chefit now and delight your guests with an
          in-home cooked meal!!
        </p>

        {/* Button */}
        <button
              onClick={() => navigate("/booking")}
              className="bg-white text-orange-500 font-bold px-6 py-3 mt-10 rounded-lg border-2 border-orange-400 hover:bg-orange-50 transition"
          >
              Book Now
          </button>

      </div>
    </div>
  );
};

export default FloatingBanner;