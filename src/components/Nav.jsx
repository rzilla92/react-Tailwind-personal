import React, { useState } from 'react'
import {Link} from 'react-scroll'



function Nav() {
  
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  }

  return (
    <section id='nav' className='sticky top-0 z-50 bg-white'>
      <nav className='relative container mx-auto p-6'>
          <div className='flex items-center justify-between'>
              <div className='pt-2'><i className="fa-solid fa-mug-hot text-brightRed text-2xl baseline"></i></div>
              <div className='hidden md:flex justify-center items-center space-x-6'>
                  <Link to="home" activeClass="active" smooth={true} spy={true} className="font-semibold cursor-pointer hover:opacity-70">Home</Link>
                  <Link to="about" smooth={true} spy={true} className="font-semibold cursor-pointer hover:opacity-70">About</Link>
                  <Link to="projects" smooth={true} spy={true} className="font-semibold cursor-pointer hover:opacity-70">Projects</Link>
              </div>
              <Link to="contact" smooth={true} spy={true} className="hidden md:block rounded-full px-6 py-2 cursor-pointer transition-all bg-brightRed hover:bg-darkBlue font-bold text-white">Contact</Link>
              
              <button id='menu-btn' onClick={handleToggle} className={`${isActive ? "" : "open"} block md:hidden hamburger focus:outline-none items-center`}>
                <span className='hamburger-top'></span>
                <span className='hamburger-middle'></span>
                <span className='hamburger-bottom'></span>
              </button>
              
          </div>
          <div className='md:hidden'>
            <div id='menu' className={`${isActive ? "hidden" : "flex" } flex absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:selfcenter left-6 right-6 drop-shadow-md`}>
              <Link to="home" activeClass="active" smooth={true} spy={true} className="font-semibold hover:opacity-70">Home</Link>
              <Link to="about" smooth={true} spy={true} className="font-semibold hover:opacity-70">About</Link>
              <Link to="projects" smooth={true} spy={true} className="font-semibold hover:opacity-70">Projects</Link>
              <Link to="contact" smooth={true} spy={true} className='rounded-full px-6 py-2 cursor-pointer transition-all bg-brightRed hover:bg-darkBlue font-bold text-white'>Contact</Link>
            </div>
          </div>
      </nav>
    </section>
  )
}

export default Nav