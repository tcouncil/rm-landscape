import { useState } from 'react'
import { Landing } from './common/Landing'
import Navbar from './common/Navbar'
import About from './common/About'
import Contact from './common/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Contact />
    </>
  )
}

export default App
