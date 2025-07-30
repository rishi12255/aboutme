import { useState } from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Footer from './Pages/Footer'
import Tech from './Pages/Tech'
import Contact from './Pages/Contact'
import Navbar from './Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen font-sans">
        <Navbar /> 
        
        <section id="home"><Home/></section>
        <section id="about"><About/></section>
        <section id="tech"><Tech/></section>
        <section id="projects"><Projects/></section>
        <section id="contact"><Contact/></section>
        <section id="footer"><Footer/></section>
    
      </div>
    

    </>
  )
}

export default App
