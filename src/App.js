import React from "react"
import Header from "./components/Head/Header"
import Features from "./components/Features/Features" 
import Home from "./components/Hero/Home"
import Portfolio from "./components/Portfolio/Portfolio"
import Resume from "./components/Resume/Resume"
import Testimonial from "./components/Testimonial/Testimonial"
import Contact from "./components/Contact/Contact"

import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Contact />
      
    </>
  )
}

export default App
