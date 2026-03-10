
import React, { useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ProtectedRoute from "./Components/ProtectedRoute"

import NotificationBanner from "./Components/Header/NotificationBanner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ChatBot from "./Components/chatbot/ChatBot";
import BookingForm from "./Components/Booking/BookingForm";

// Lazy Loaded Pages (NO NAME CHANGES)
const Login = lazy(() => import("./Components/Booking/login"));
const Signup = lazy(() => import("./Components/Booking/SignUp"));
const Home = lazy(() => import("./Components/home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const UserDashboard = lazy(() =>
  import("./Components/pages/User/MyBookings")
);
const ChefDashboard = lazy(() =>
  import("./Components/pages/Chef/ChefDashboard")
);
const AdminDashboard = lazy(() =>
  import("./Components/pages/Admin/AdminDashboard")
);

const ChefConnection = lazy(() =>
  import("./Components/ChefConnections/ChefConnection")
);
const TrendingCooks = lazy(() =>
  import("./Components/Cooks/TrendingCook")
);
const PaymentSuccess = lazy(() => 
  import("./Components/pages/User/PaymentSuccess")
)

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
const ChefDetails = lazy(() =>
  import("./Components/Chef/ChefDetails")
);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const routes = [
   { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },

  { path: "/", element: <Home /> },

  {
    path: "/chef-dashboard",
    element: (
      <ProtectedRoute allowedRoles={["chef"]}>
        <ChefDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/my-bookings",
    element: (
      <ProtectedRoute allowedRoles={["user"]}>
        <UserDashboard />
      </ProtectedRoute>
    ),
  },

  {
    path: "/admin-dashboard",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blog /> },
    { path: "/career", element: <Career /> },
    { path: "/testimonial", element: <Testi /> },
    
    { path: "/investor", element: <Invest /> },
    { path: "/recommendations", element: <Recommendations /> },
    { path:"/chef/:id", element:<ChefDetails /> },
    { path: "/contact", element: <Contact /> },
    { path: "/booking", element: <Booking /> },
    { path: "/book/:chefId", element: <BookingForm /> },
    { path: "/payment-success", element: <PaymentSuccess /> },

    {
  path: "/chef-search",
  element: <TrendingCooks />,
},


    { path: "/join-chef", element: <ChefConnection /> },
    { path: "/cook-for-month", element: <Month /> },
    { path: "/one-time-cook", element: <OneTime /> },
    { path: "/chef-for-party", element: <Party /> },
  ];

  return (
    <div>
      <NotificationBanner />
      <Navbar />
      <ChatBot />

      <Suspense fallback={<div className="text-center text-xl p-10">Loading...</div>}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
};

export default App;
