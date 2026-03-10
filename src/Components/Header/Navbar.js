// import { useState } from "react";
// import logo from "../../assets/logo.png";
// import {
//   FaHamburger,
//   FaChevronDown,
//   FaChevronUp,
//   FaChevronRight,
//   FaUserCircle,
// } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { GiTireIronCross } from "react-icons/gi";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md border-b">
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={logo}
//               alt="Logo"
//               className="w-11 h-11 rounded-full shadow-md"
//             />
//             <span className="text-2xl font-extrabold text-orange-500 tracking-wide">
//               RasoiOnCall
//             </span>
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden lg:flex items-center gap-8 text-[17px] font-medium">
//             {/* SERVICES */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center gap-2 hover:text-orange-500 transition"
//               >
//                 Our Services
//                 {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute top-12 left-0 w-60 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border">
//                   <Link to="/cook-for-month" className="dropdown-item">
//                     Cook for a Month <FaChevronRight />
//                   </Link>
//                   <Link to="/one-time-cook" className="dropdown-item">
//                     One-Time Cook <FaChevronRight />
//                   </Link>
//                   <Link to="/chef-for-party" className="dropdown-item">
//                     Chef for Party <FaChevronRight />
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/recommendations"
//               className="hover:text-orange-500 transition"
//             >
//               Smart Match
//             </Link>

//             <Link
//               to="/chef-search"
//               className="hover:text-orange-500 transition"
//             >
//               Cooks Near Me
//             </Link>

//             <Link
//               to="/testimonial"
//               className="hover:text-orange-500 transition"
//             >
//               Testimonials
//             </Link>

//             <Link
//               to="/contact"
//               className="bg-orange-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-orange-600 transition"
//             >
//               Contact
//             </Link>

//             {/* USER MENU */}
//             {token && role === "user" && (
//               <div className="relative">
//                 <button
//                   onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
//                   className="flex items-center gap-2 hover:text-orange-500 transition"
//                 >
//                   <FaUserCircle size={20} />
//                   My Account
//                   <FaChevronDown size={12} />
//                 </button>

//                 {isUserMenuOpen && (
//                   <div className="absolute right-0 top-12 w-52 bg-white rounded-xl shadow-2xl border">
//                     <Link to="/profile" className="dropdown-item">
//                       My Profile
//                     </Link>
//                     <Link to="/my-bookings" className="dropdown-item">
//                       My Bookings
//                     </Link>
//                     <Link to="/my-orders" className="dropdown-item">
//                       My Orders
//                     </Link>
//                     <button
//                       onClick={handleLogout}
//                       className="dropdown-item text-red-500 w-full text-left"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}

//             {token && role === "chef" && (
//               <>
//                 <Link
//                   to="/chef-dashboard"
//                   className="hover:text-orange-500 font-semibold"
//                 >
//                   Chef Dashboard
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="text-red-500 font-semibold"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}

//             {token && role === "admin" && (
//               <>
//                 <Link
//                   to="/admin-dashboard"
//                   className="hover:text-orange-500 font-semibold"
//                 >
//                   Admin Dashboard
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="text-red-500 font-semibold"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}

//             {!token && (
//               <>
//                 <Link to="/login" className="hover:text-orange-500">
//                   Login
//                 </Link>
//                 <Link to="/signup" className="hover:text-orange-500">
//                   Signup
//                 </Link>
//               </>
//             )}
//           </nav>

//           {/* HAMBURGER (VISIBLE ON ALL SCREENS) */}
//           <button
//             onClick={() => setIsMenuOpen(true)}
//             className="text-orange-500 hover:text-orange-600 transition"
//           >
//             <FaHamburger className="w-7 h-7" />
//           </button>
//         </div>
//       </div>

//       {/* MOBILE / SIDE MENU */}
//       {/* OVERLAY */}
//       {isMenuOpen && (
//         <>
//           {/* SIDE MENU (NO ANIMATION) */}
//           <div className="fixed top-0 right-0 h-full w-[40%]  z-50  ">
//             {/* CLOSE BUTTON */}
//             <div className="flex justify-end p-5 border-b">
//               <button onClick={() => setIsMenuOpen(false)}>
//                 <GiTireIronCross className="w-6 h-6 text-gray-600 hover:text-red-500" />
//               </button>
//             </div>

//             {/* MENU ITEMS */}
//             <div className="flex flex-col px-6 gap-5 text-lg font-semibold">
//               <Link
//                 to="/"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="hover:text-orange-500"
//               >
//                 Home
//               </Link>

//               <Link
//                 to="/about"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="hover:text-orange-500"
//               >
//                 About
//               </Link>

//               <Link
//                 to="/blog"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="hover:text-orange-500"
//               >
//                 Blog
//               </Link>

//               <Link
//                 to="/investor"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="hover:text-orange-500"
//               >
//                 Investor
//               </Link>

//               <Link
//                 to="/career"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="hover:text-orange-500"
//               >
//                 Careers
//               </Link>

//               <Link
//                 to="/testimonial"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="hover:text-orange-500"
//               >
//                 Testimonials
//               </Link>

//               <hr />

//               <Link
//                 to="/recommendations"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="hover:text-orange-500"
//               >
//                 Smart Match
//               </Link>

//               <Link
//                 to="/chef-search"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="hover:text-orange-500"
//               >
//                 Cooks Near Me
//               </Link>

//               <hr />

//               {!token && (
//                 <>
//                   <Link
//                     to="/login"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="hover:text-orange-500"
//                   >
//                     Login
//                   </Link>
//                   <Link
//                     to="/signup"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="hover:text-orange-500"
//                   >
//                     Signup
//                   </Link>
//                 </>
//               )}

//               {token && (
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setIsMenuOpen(false);
//                   }}
//                   className="text-red-500 font-semibold text-left"
//                 >
//                   Logout
//                 </button>
//               )}
//             </div>

//             {/* CONTACT BUTTON */}
//             <div className="p-6 border-t">
//               <button
//                 onClick={() => {
//                   navigate("/contact");
//                   setIsMenuOpen(false);
//                 }}
//                 className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </header>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import logo from "../../assets/logo.png";
// import {
//   FaHamburger,
//   FaChevronDown,
//   FaChevronUp,
//   FaChevronRight,
// } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import { GiTireIronCross } from "react-icons/gi";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // 🔐 AUTH INFO
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 bg-white text-black shadow-lg">
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">

//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3">
//             <img src={logo} alt="Logo" className="w-12 h-12" />
//             <span className="text-2xl font-bold text-orange-500">
//               RasoiOnCall
//             </span>
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden md:flex items-center gap-8 text-lg">

//             {/* SERVICES DROPDOWN */}
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="flex items-center gap-2 hover:text-orange-500"
//               >
//                 Our Services
//                 {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
//               </button>

//               {isDropdownOpen && (
//                 <div className="absolute top-10 left-0 w-64 bg-white rounded-md shadow-xl overflow-hidden">
//                   <Link to="/cook-for-month" className="dropdown-item">
//                     Cook for a Month <FaChevronRight />
//                   </Link>
//                   <Link to="/one-time-cook" className="dropdown-item">
//                     One-Time Cook <FaChevronRight />
//                   </Link>
//                   <Link to="/chef-for-party" className="dropdown-item">
//                     Chef for Party <FaChevronRight />
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/recommendations" className="relative font-semibold hover:text-orange-500">
//               Smart Match
//               <span className="absolute -top-2 -right-6 text-[10px] bg-green-500 text-white px-2 py-[2px] rounded-full">
//                 AI
//               </span>
//             </Link>

//             <Link to="/chef-search" className="hover:text-orange-500">
//               Cooks Near Me
//             </Link>

//             <Link
//               to="/contact"
//               className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600"
//             >
//               Contact Us
//             </Link>

//             {/* 🔐 AUTH BUTTONS */}
//             {!token && (
//               <>
//                 <Link to="/login" className="hover:text-orange-500">Login</Link>
//                 <Link to="/signup" className="hover:text-orange-500">Signup</Link>
//               </>
//             )}

//             {token && role === "chef" && (
//               <Link to="/chef/dashboard" className="hover:text-orange-500">
//                 Chef Dashboard
//               </Link>
//             )}

//             {token && role === "admin" && (
//               <Link to="/admin/dashboard" className="hover:text-orange-500">
//                 Admin Dashboard
//               </Link>
//             )}

//             {token && (
//               <button
//                 onClick={handleLogout}
//                 className="text-red-500 font-semibold"
//               >
//                 Logout
//               </button>
//             )}
//           </nav>

//           {/* BURGER */}
//           <button onClick={() => setIsMenuOpen(true)}>
//             <FaHamburger className="w-8 h-8" />
//           </button>
//         </div>
//       </div>

//       {/* ✅ MOBILE MENU — SAME FOR ALL ROLES */}
//       {isMenuOpen && (
//         <div className="fixed top-0 right-0 h-full w-[40%] bg-white z-50 shadow-2xl">
//           <div className="flex justify-end p-5">
//             <button onClick={() => setIsMenuOpen(false)}>
//               <GiTireIronCross className="w-8 h-8" />
//             </button>
//           </div>

//           <div className="flex flex-col px-6 gap-5 text-lg font-semibold">

//             {/* COMMON LINKS */}
//             <Link
//               to="/recommendations"
//               onClick={() => setIsMenuOpen(false)}
//               className="flex items-center justify-between"
//             >
//               Smart Match
//               <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">
//                 AI
//               </span>
//             </Link>

//             <hr />
//             <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
//             <hr />
//             <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
//             <hr />
//             <Link to="/investor" onClick={() => setIsMenuOpen(false)}>Investor</Link>
//             <hr />
//             <Link to="/career" onClick={() => setIsMenuOpen(false)}>Careers</Link>
//             <hr />
//             <Link to="/testimonial" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>

//             {/* AUTH LINKS */}
//             {!token && (
//               <>
//                 <hr />
//                 <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
//                 <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Signup</Link>
//               </>
//             )}

//             {token && role === "chef" && (
//               <>
//                 <hr />
//                 <Link to="/chef/dashboard" onClick={() => setIsMenuOpen(false)}>
//                   Chef Dashboard
//                 </Link>
//               </>
//             )}

//             {token && role === "admin" && (
//               <>
//                 <hr />
//                 <Link to="/admin/dashboard" onClick={() => setIsMenuOpen(false)}>
//                   Admin Dashboard
//                 </Link>
//               </>
//             )}

//             {token && (
//               <>
//                 <hr />
//                 <button
//                   onClick={() => {
//                     handleLogout();
//                     setIsMenuOpen(false);
//                   }}
//                   className="text-red-500 text-left"
//                 >
//                   Logout
//                 </button>
//               </>
//             )}

//             {/* CONTACT */}
//             <button
//               onClick={() => {
//                 navigate("/contact");
//                 setIsMenuOpen(false);
//               }}
//               className="bg-white text-orange-500 font-bold px-6 py-3 mt-10 rounded-lg border-2 border-orange-400 hover:bg-orange-50 transition"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import {
  FaUserCircle,
  FaHamburger,
  FaChevronDown,
  FaChevronUp,
  FaChevronRight,
  FaBell,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi";
import API from "../../api";

const Navbar = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  // 🔔 Fetch chef notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        if (role === "chef") {
          const res = await API.get("/booking/chef-notifications");
          setNotifications(res.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotifications();

    const interval = setInterval(fetchNotifications, 5000);

    return () => clearInterval(interval);
  }, [role]);

  return (
    <header className="fixed top-0 w-full z-50 bg-white text-black shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* MAIN FLEX */}
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <span className="text-2xl font-bold text-orange-500">
                RasoiOnCall
              </span>
            </Link>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-lg">
            {/* SERVICES */}
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

            {/* USER MENU */}
            {token && role === "user" && (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 hover:text-orange-500"
                >
                  <FaUserCircle size={20} />
                  My Account
                  <FaChevronDown size={12} />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 top-12 w-52 bg-white rounded-xl shadow-2xl border">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>

                    <Link
                      to="/my-bookings"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Bookings
                    </Link>

                    <Link
                      to="/my-orders"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      My Orders
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-red-500 w-full text-left hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* CHEF MENU */}
            {token && role === "chef" && (
              <>
                {/* 🔔 Notification Bell */}
                <div className="relative">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative"
                  >
                    <FaBell size={20} />

                    {notifications.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                        {notifications.length}
                      </span>
                    )}
                  </button>

                  {showNotifications && (
                    <div className="absolute right-0 top-10 w-64 bg-white shadow-xl rounded-lg">
                      {notifications.length === 0 ? (
                        <p className="p-4 text-gray-500">No new bookings</p>
                      ) : (
                        notifications.map((n) => (
                          <div
                            key={n._id}
                            className="p-3 border-b hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              navigate("/chef-dashboard");
                              setShowNotifications(false);
                            }}
                          >
                            <p className="font-semibold text-sm">New Booking</p>

                            <p className="text-xs text-gray-600">
                              User: {n.userId?.name}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>

                <Link
                  to="/chef-dashboard"
                  className="hover:text-orange-500 font-semibold"
                >
                  Chef Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-red-500 font-semibold"
                >
                  Logout
                </button>
              </>
            )}

            {/* ADMIN MENU */}
            {token && role === "admin" && (
              <>
                <Link
                  to="/admin-dashboard"
                  className="hover:text-orange-500 font-semibold"
                >
                  Admin Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-red-500 font-semibold"
                >
                  Logout
                </button>
              </>
            )}

            {/* GUEST */}
            {!token && (
              <>
                <Link to="/login" className="hover:text-orange-500">
                  Login
                </Link>

                <Link to="/signup" className="hover:text-orange-500">
                  Signup
                </Link>
              </>
            )}
          </nav>

          {/* BURGER */}
          <div>
            <button onClick={() => setIsMenuOpen(true)}>
              <FaHamburger className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}

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

            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <hr />
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <hr />
            <Link to="/investor" onClick={() => setIsMenuOpen(false)}>
              Investor
            </Link>
            <hr />
            <Link to="/career" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>
            <hr />
            <Link to="/testimonial" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>

            {!token && (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>

                <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
                  Signup
                </Link>
              </>
            )}

            {token && (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="text-red-500 font-semibold text-left"
              >
                Logout
              </button>
            )}

            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-orange-500 font-bold px-6 py-3 mt-10 rounded-lg border-2 border-orange-400 hover:bg-orange-50"
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
