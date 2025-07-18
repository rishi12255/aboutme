import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Footer from './Pages/Footer'
import Tech from './Pages/Tech'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen font-sans">
        <Home/>
     <About/>
     <Tech/>
     <Projects/> 
     <Contact/>
     <Footer/>
      </div>
    

    </>
  )
}

export default App
