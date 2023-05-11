import { useState } from 'react'
import Hero from './Components/Hero'
import './App.css'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'

function App() {
  

  return (
    <>
    <BrowserRouter>
   <Navbar/>
   <Hero/>
   <About/>
   <Project/>
   <Skills/>
   <Contact/>
    
    </BrowserRouter>
    

    </>
  )
}

export default App
