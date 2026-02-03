import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FloatingBanner = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleScroll = useCallback(() => {
    setShow(window.scrollY > 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {show && (
        <div
          onClick={() => navigate("/booking")}
          className="fixed bottom-0 left-0 w-full bg-orange-500 text-white p-4 
                     text-center z-50 cursor-pointer 
                     hover:bg-orange-600 transition"
        >
          <span className="font-semibold">
            Book your cook now 🍳
          </span>
        </div>
      )}
    </>
  );
};

export default FloatingBanner;
