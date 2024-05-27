import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'


function App() {


  return (

  
    <main className='bg-black'>
      
      <BrowserRouter>
   
   <Routes>
    <Route path="/" element={<Home/>} />
  
    <Route path="/contact" element={<Contact/>} />
  


   </Routes>
   
   </BrowserRouter>
      
    </main>
  )
}

export default App
