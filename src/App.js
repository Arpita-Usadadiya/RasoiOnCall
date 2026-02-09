import React, { useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import NotificationBanner from "./Components/Header/NotificationBanner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ChatBot from "./Components/chatbot/ChatBot";
import ProtectedRoute from "./Components/ProtectedRoute";

// Lazy Loaded Pages (NO NAME CHANGES)
const Home = lazy(() => import("./Components/home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const ChefConnection = lazy(() =>
  import("./Components/ChefConnections/ChefConnection")
);
const TrendingCooks = lazy(() =>
  import("./Components/Cooks/TrendingCook")
);

const Booking = lazy(() => import("./Components/Booking/BookingPage"));
const Month = lazy(() => import("./Components/CookForAmonth/Month"));
const OneTime = lazy(() => import("./Components/OneTimeCook/OneTime"));
const Party = lazy(() => import("./Components/PartyChef/Party"));
const Career = lazy(() => import("./Components/Career/Career"));
const Invest = lazy(() => import("./Components/Investor/Invest"));
const Testi = lazy(() => import("./Components/Testimonial/Testi"));
const Blog = lazy(() => import("./Components/Blog/Blog"));
const Recommendations = lazy(() =>
  import("./Components/Recommendation/Recommendations")
);

// Auth pages (add if not already)
const Login = lazy(() => import("./Components/Auth/Login"));
const Signup = lazy(() => import("./Components/Auth/Signup"));

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      <NotificationBanner />
      <Navbar />
      <ChatBot />

      <Suspense fallback={<div className="text-center text-xl p-10">Loading...</div>}>
        <Routes>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/testimonial" element={<Testi />} />
          <Route path="/investor" element={<Invest />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chef-search" element={<TrendingCooks />} />
          <Route path="/join-chef" element={<ChefConnection />} />
          <Route path="/cook-for-month" element={<Month />} />
          <Route path="/one-time-cook" element={<OneTime />} />
          <Route path="/chef-for-party" element={<Party />} />

          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* 🔒 PROTECTED BOOKING ROUTE */}
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;


// import React, { useEffect, Suspense, lazy } from "react";
// import { Route, Routes } from "react-router-dom";
// import "./index.css";
// import AOS from "aos";
// import "aos/dist/aos.css";


// import NotificationBanner from "./Components/Header/NotificationBanner";
// import Footer from "./Components/Footer/Footer";
// import Navbar from "./Components/Header/Navbar";
// import ChatBot from "./Components/chatbot/ChatBot";

// // Lazy Loaded Pages (NO NAME CHANGES)
// const Home = lazy(() => import("./Components/home/Home"));
// const About = lazy(() => import("./Components/About/About"));
// const Contact = lazy(() => import("./Components/Contact/Contact"));
// const ChefConnection = lazy(() =>
//   import("./Components/ChefConnections/ChefConnection")
// );
// const TrendingCooks = lazy(() =>
//   import("./Components/Cooks/TrendingCook")
// );

// const Booking = lazy(() => import("./Components/Booking/BookingPage"));
// const Month = lazy(() => import("./Components/CookForAmonth/Month"));
// const OneTime = lazy(() => import("./Components/OneTimeCook/OneTime"));
// const Party = lazy(() => import("./Components/PartyChef/Party"));
// const Career = lazy(() => import("./Components/Career/Career"));
// const Invest = lazy(() => import("./Components/Investor/Invest"));
// const Testi = lazy(() => import("./Components/Testimonial/Testi"));
// const Blog = lazy(() => import("./Components/Blog/Blog"));
// const Recommendations = lazy(() =>
//   import("./Components/Recommendation/Recommendations")
// );

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   const routes = [
//     { path: "/", element: <Home /> },
//     { path: "/about", element: <About /> },
//     { path: "/blog", element: <Blog /> },
//     { path: "/career", element: <Career /> },
//     { path: "/testimonial", element: <Testi /> },
    
//     { path: "/investor", element: <Invest /> },
//     { path: "/recommendations", element: <Recommendations /> },
//     { path: "/contact", element: <Contact /> },
//     { path: "/booking", element: <Booking /> },
//     {
//   path: "/chef-search",
//   element: <TrendingCooks />,
// },


//     { path: "/join-chef", element: <ChefConnection /> },
//     { path: "/cook-for-month", element: <Month /> },
//     { path: "/one-time-cook", element: <OneTime /> },
//     { path: "/chef-for-party", element: <Party /> },
//   ];

//   return (
//     <div>
//       <NotificationBanner />
//       <Navbar />
//       <ChatBot />

//       <Suspense fallback={<div className="text-center text-xl p-10">Loading...</div>}>
//         <Routes>
//           {routes.map(({ path, element }) => (
//             <Route key={path} path={path} element={element} />
//           ))}
//         </Routes>
//       </Suspense>

//       <Footer />
//     </div>
//   );
// };

// export default App;
