"use client"

import { useState, useEffect } from "react"
import HeroSection from "./sections/hero"
import AboutMe from "./sections/aboutMe"
import Skills from "./sections/skills"
import Projects from "./sections/projects"
import Education from "./sections/education"
import Certification from "./sections/certifications"
import ContactMe from "./sections/contactme.jsx"
import ThemeToggle from "./components/theme-toggle.jsx"

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark"
    }
    return "dark"
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement
      root.classList.remove("light", "dark")
      root.classList.add(theme)
      localStorage.setItem("theme", theme)
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
  }

  return (
    <div className="w-full overflow-x-hidden bg-gradient">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <Certification />
      <ContactMe />
    </div>
  )
}

export default App

