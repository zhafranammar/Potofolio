import { useState } from "react"
import React, { useEffect } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import Skilss from "./components/Skills"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Experiences from "./components/Experiences"

import "./tailwind.css"
import "./Font.css"
import "aos/dist/aos.css"
import AOS from "aos"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam milidetik
    })
  }, [])
  return (
    <>
      <Header />
      <AboutMe />
      <Skilss />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
