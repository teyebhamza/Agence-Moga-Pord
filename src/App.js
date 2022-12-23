import React from "react"
import Header from "./components/Head/Header"
import Features from "./components/Features/Features" 
import Home from "./components/Hero/Home"
import Portfolio from "./components/Portfolio/Portfolio"

import Testimonial from "./components/Testimonial/Testimonial"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      
      <Testimonial />
      <Contact />
      <Footer/>
      
    </>
  )
}

export default App
