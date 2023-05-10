import { useState } from 'react'
import Hero from './Components/Hero'
import './App.css'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import {BrowserRouter, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Navbar from './Components/Navbar'

function App() {
  

  return (
    <>
    <BrowserRouter>
   <Navbar/>
    <Hero/>
    <About ele={"dumb"}/>
    <Project/>
    <Skills/>
    </BrowserRouter>
    

    </>
  )
}

export default App
