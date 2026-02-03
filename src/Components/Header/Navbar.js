import { useState } from "react";
import logo from "../../assets/logo.png";
import {
  FaHamburger,
  FaChevronDown,
  FaChevronUp,
  FaChevronRight,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* MAIN FLEX */}
        <div className="flex items-center justify-between">

          {/* LEFT — LOGO */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold text-orange-500">
                RasoiOnCall
              </span>
            </Link>
          </div>

          {/* CENTER — NAV LINKS (DESKTOP) */}
          <nav className="hidden md:flex items-center gap-10 text-lg">

            {/* SERVICES DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 hover:text-orange-500"
              >
                Our Services
                {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isDropdownOpen && (
                <div className="absolute top-10 left-0 w-64 bg-white rounded-md shadow-xl overflow-hidden">
                  <Link
                    to="/cook-for-month"
                    className="flex justify-between items-center px-5 py-3 font-semibold hover:bg-gray-100"
                  >
                    Cook for a Month
                    <FaChevronRight />
                  </Link>

                  <Link
                    to="/one-time-cook"
                    className="flex justify-between items-center px-5 py-3 font-semibold hover:bg-gray-100"
                  >
                    One-Time Cook
                    <FaChevronRight />
                  </Link>

                  <Link
                    to="/chef-for-party"
                    className="flex justify-between items-center px-5 py-3 font-semibold hover:bg-gray-100"
                  >
                    Chef for Party
                    <FaChevronRight />
                  </Link>
                </div>
              )}
            </div>

            {/* SMART MATCH */}
            <Link
              to="/recommendations"
              className="relative flex items-center gap-2 hover:text-orange-500 font-semibold"
            >
              Smart Match
              <span className="absolute -top-2 -right-6 text-[10px] bg-green-500 text-white px-2 py-[2px] rounded-full">
                AI
              </span>
            </Link>

            <Link to="/join-chef" className="hover:text-orange-500">
              Join as Chef
            </Link>

            <Link to="/chef-search" className="hover:text-orange-500">
              Cooks Near Me
            </Link>

            <Link
              to="/contact"
              className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600"
            >
              Contact Us
            </Link>
          </nav>

          {/* RIGHT — BURGER (DESKTOP + MOBILE) */}
          <div>
            <button onClick={() => setIsMenuOpen(true)}>
              <FaHamburger className="w-8 h-8" />
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE / SIDE MENU */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-[40%] bg-white z-50 shadow-2xl">
          <div className="flex justify-end p-5">
            <button onClick={() => setIsMenuOpen(false)}>
              <GiTireIronCross className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col px-6 gap-5 text-lg font-semibold">

            <Link
              to="/recommendations"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between"
            >
              Smart Match
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
                AI
              </span>
            </Link>

            <hr />

            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <hr />
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <hr />
            <Link to="/investor" onClick={() => setIsMenuOpen(false)}>Investor</Link>
            <hr />
            <Link to="/career" onClick={() => setIsMenuOpen(false)}>Careers</Link>
            <hr />
            <Link to="/testimonial" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>

            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-orange-500 font-bold px-6 py-3 mt-10 rounded-lg border-2 border-orange-400 hover:bg-orange-50 transition"
          >
              Contact Us
          </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


