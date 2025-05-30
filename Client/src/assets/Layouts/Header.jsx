import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../Images/logo1.png'
import "./Header.css"
const Header = () => {
  return (
    <div>
   <header className='fixed  border-b border-neutral-100 z-999 top-0 left-0 px-5 text-2xl w-full h-15  text-white flex justify-between items-center'>
   <div className="flex ">
   <ScrollLink 
          to="home"
          smooth={true}
          duration={500}
          className="logo text-xl font-bold flex gap-x-2 cursor-pointer"
        >
        <div>
          <img src={logo} className='w-[50px] h-[40px] object-contain' alt="" />
          </div>
          <div>
           <span>Greenland </span> </div>
        </ScrollLink>

   </div>

   <div className="inline-flex gap-x-7 items-center">
        <ScrollLink 
          to="banner"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          className="nav-item cursor-pointer hover:text-green-800 text-[18px] text-black"
          activeClass="active"
        >
          Home
        </ScrollLink>
        <ScrollLink 
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          className="nav-item cursor-pointer hover:text-green-800 text-[18px] text-black"
          activeClass="active"
        >
          About
        </ScrollLink>
        <ScrollLink 
          to="service"
          smooth={true}
          duration={500}
          spy={true}
          offset={-70}
          className="nav-item cursor-pointer hover:text-green-800 text-[18px] text-black"
          activeClass="active"
        >
          Services
        </ScrollLink>
        <ScrollLink 
  to="contact"
  smooth={true}
  duration={500}
  spy={true}
  offset={-70}
  className="nav-item cursor-pointer hover:text-green-800 text-[18px] text-black"
  activeClass="active"
>
  Contact
</ScrollLink>
        <RouterLink 
          to="/login"
          className="nav-item cursor-pointer transition duration-500  hover:bg-black  text-[17px] py-2 px-3 rounded-md bg-green-500 text-white"
        >
         Seller Login
        </RouterLink>
        <RouterLink 
          to="/adminLogin"
          className="nav-item cursor-pointer transition duration-500 hover:bg-black  text-[17px] py-2 px-3 rounded-md bg-indigo-500 text-white"
        >
         Admin Login
        </RouterLink>
      </div>
   </header>
    </div>
  )
}

export default Header