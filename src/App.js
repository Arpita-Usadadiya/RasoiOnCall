import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./index.css";
import Home from './Components/home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import NotificationBanner from './Components/Header/NotificationBanner'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Header/Navbar'


const App = () => {
  return (
    <div>
      <NotificationBanner />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
