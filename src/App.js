import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
// import Home from './Components/home/Home'
// import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import NotificationBanner from "./Components/Header/NotificationBanner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";

const App = () => {
  return (
    <div>
      <NotificationBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 className="p-10">Home</h1>} />
        <Route
          path="/cooks-near-me"
          element={<h1 className="p-10">Cooks Near Me</h1>}
        />
        <Route
          path="/join-chef"
          element={<h1 className="p-10">Join as Chef</h1>}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
