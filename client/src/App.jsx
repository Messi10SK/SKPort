import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'


function App() {


  return (

  
    <main className='bg-black'>
      
      <BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/projects" element={<Projects/>} />


   </Routes>
   
   </BrowserRouter>
      
    </main>
  )
}

export default App
