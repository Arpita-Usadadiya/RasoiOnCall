import React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import AOS from "aos";  
import "aos/dist/aos.css";  
import Home from './Components/home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import NotificationBanner from "./Components/Header/NotificationBanner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ChefConnection from "./Components/ChefConnections/ChefConnection";
import Month from "./Components/CookForAmonth/Month";
import OneTime from "./Components/OneTimeCook/OneTime";
import Party from "./Components/PartyChef/Party";  

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cooks-near-me" element={<h1 className="p-10">Cooks Near Me</h1>} />
        <Route path="/join-chef" element={<ChefConnection />} />        
        <Route path="/cook-for-month" element={<Month />} />        
        <Route path="/one-time-cook" element={<OneTime />} />        
        <Route path="/chef-for-party" element={<Party />} />        

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
