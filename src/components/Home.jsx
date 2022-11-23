import React from 'react'
import {Hero, About, Contact, Projects,ScrollToTop} from "../components"

function Home() {
  return (
    <div id="home">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <ScrollToTop smooth component={<i className="fa-solid fa-caret-up" style={{color: "hsl(12, 88%, 59%)"}} ></i>} />
    </div>
  )
}

export default Home