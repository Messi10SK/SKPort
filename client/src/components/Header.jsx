import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {


  return (
    <main className='bg-black'>
       <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
       <nav className="flex w-full screen-max-width">
         
   
      <span className='my-2'>
      <Link to={"/"} className='font-bold text-white text-xl mx-10 font-mont '>
      Satyam Kanojiya
      </Link>
      </span>


      <div className="flex flex-1  justify-center max-sm:hidden">
      <div class="bg-gray-900 rounded-lg p-3 pr-0 pl-14  flex justify-around mr-20 items-center shadow-md">
      <ul className="flex font-semibold justify-between mr-16 mt-2 ">
              
       <li className="px-5 text-lg cursor-pointer text-white font-mont  hover:text-gray transition-all"> <a href="/">Home</a></li>
       <li className="px-5 text-lg cursor-pointer text-white font-mont hover:text-gray transition-all"> <a href="/projects">Projects</a></li>
       <li className="px-5 text-lg cursor-pointer text-white font-mont hover:text-gray transition-all" ><a href="/about">About</a></li>

     </ul>

     </div>
      </div>


      <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
         <Button class="text-white bg-black hover:bg-[#050708]/90 focus:ring-4 focus:outline-none  font-mont font-bold text-xl focus:ring-[#050708]/50  rounded-lg  px-1 py-1 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2 hover:text-white hover:border-2 hover:border-white transition-all-smooth">
        <Link to='/contact' >
        Connect With Me
        </Link>
      
         </Button>
      </div>

      </nav>




       </header>

      
    </main>
  )
}









































































































































































// import React from 'react';
// // import { Link, useLocation } from 'react-router-dom';

// export default function Header() {
// //   const location = useLocation();
// //   const path = location.pathname;

// //   return (

// //     <header className='padding-x py-8 absolute z-10 w-full'>
// //     <Nav className='flex justify-between items-center max-container'>
    
// //       <Link to="/" >
// //         Satyam Kanojiya
// //       </Link>
   
// //  <div className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>

// //  <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>





// //  <Link active={path === '/'} as="div"  className='font-montserrat leading-normal text-lg text-slate-gray'>
// //         <Link to='/'>Home</Link>
// //       </Link>

// //       <Link active={path === '/about'} as="div"  className='font-montserrat leading-normal text-lg text-slate-gray'>
// //         <Link to='/about'>About</Link>
// //       </Link>

// //       <Link active={path === '/projects'} as="div"  className='font-montserrat leading-normal text-lg text-slate-gray'>
// //         <Link to='/projects'>Projects</Link>
// //       </Link>

// //       <Link active={path === '/contact'} as="div"  className='font-montserrat leading-normal text-lg text-slate-gray'>
// //         <Link to='/contact'>Contact</Link>
// //       </Link>


// //  </ul>
   
// //  </div>
 

     

// //     </Nav>
// //     </header>
// return (
// <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
// <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
// <ul className='hidden md:flex'>
//   <li className='p-4'>Home</li>
//   <li className='p-4'>Company</li>
//   <li className='p-4'>Resources</li>
//   <li className='p-4'>About</li>
//   <li className='p-4'>Contact</li>
// </ul>
// <div onClick={handleNav} className='block md:hidden'>
//     {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
// </div>
// <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
//   <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
//     <li className='p-4 border-b border-gray-600'>Home</li>
//     <li className='p-4 border-b border-gray-600'>Company</li>
//     <li className='p-4 border-b border-gray-600'>Resources</li>
//     <li className='p-4 border-b border-gray-600'>About</li>
//     <li className='p-4'>Contact</li>
// </ul>
// </div>

// );
// };


// import React from 'react'

// export default function Header() {
//   return (
//     <nav class="bg-white-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
//     <div class="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
    
//       <div class="text-indigo-500 md:order-1">
    
//         <span className='w-10 h-10 '>Satyam Kanojiya</span>
//       </div>
//       <div class="text-gray-500 order-3 w-full md:w-auto md:order-2">
//         <ul class="flex font-semibold justify-between">
              
//           <li class="md:px-4 md:py-2 text-indigo-500"><a href="/">Home</a></li>
//           <li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/projects">Projects</a></li>
//           <li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/about">About</a></li>
//           <li class="md:px-4 md:py-2 hover:text-indigo-400"><a href="/contact">Contact</a></li>
//         </ul>
//       </div>
//       <div class="order-2 md:order-3">
//       </div>
//     </div>
//   </nav>
//   )
// }

