import React from 'react'
import HeroSection from "./sections/hero"
import AboutMe from "./sections/aboutMe"
import Skills from "./sections/skills"
import Projects from "./sections/projects"
import Education from "./sections/education"
import Certification from "./sections/certifications"
import ContactMe from "./sections/contactme.jsx"

const App = () => {
  return (
    <div>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Education/>
      <Certification/>
      <ContactMe/>
    </div>  
  )
}

export default App