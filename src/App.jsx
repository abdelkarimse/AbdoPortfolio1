import React from 'react'
import Navbar from "./component/Navbar/Navbar"
import Header from './component/header/Header'
import Project from './component/Project/Project'
import Contact from './component/Contact/Contact'
import About from './component/About/About'
import Skills from './component/Skills/Skills'
import Gallery from './component/Gallery/Gallery'
const App = () => {
  return (
    <div  className='app'>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Gallery />
      <Contact />
    </div>
  )
}

export default App
