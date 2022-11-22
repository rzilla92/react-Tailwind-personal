// import { useState } from 'react'
import {Nav, Hero, About, Contact, Projects,ScrollToTop} from "./components"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTop smooth component={<i className="fa-solid fa-caret-up" style={{color: "hsl(12, 88%, 59%)"}} ></i>} />
    </div>

  )
}

export default App