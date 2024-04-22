import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Navbar className="fixed top-0 z-30 flex w-full items-center justify-center">
    
      <Link to="/" >
        Satyam Kanojiya
      </Link>
   

      <Navbar.Link active={path === '/'} as="div">
        <Link to='/'>Home</Link>
      </Navbar.Link>

      <Navbar.Link active={path === '/about'} as="div">
        <Link to='/about'>About</Link>
      </Navbar.Link>

      <Navbar.Link active={path === '/projects'} as="div">
        <Link to='/projects'>Projects</Link>
      </Navbar.Link>

      <Navbar.Link active={path === '/contact'} as="div">
        <Link to='/contact'>Contact</Link>
      </Navbar.Link>



    </Navbar>
  );
};

