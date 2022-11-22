import React from 'react'

function Nav() {
  return (
    <section id='nav'>
      <nav className='relative container mx-auto p-6'>
          <div className='flex items-center justify-between'>
              <div className='pt-2'><i className="fa-solid fa-mug-hot text-brightRed text-2xl baseline"></i></div>
              <div className='hidden md:flex justify-center items-center space-x-6'>
                  <a href="#" className='font-semibold hover:opacity-70'>Home</a>
                  <a href="#" className='font-semibold hover:opacity-70'>About</a>
                  <a href="#" className='font-semibold hover:opacity-70'>Resume</a>
                  <a href="#" className='font-semibold hover:opacity-70'>Projects</a>
              </div>
              <a href='#' className='hidden md:block rounded-full px-6 py-2 cursor-pointer transition-all bg-brightRed hover:bg-darkBlue font-bold text-white'>Contact</a>

          </div>
      </nav>
    </section>
  )
}

export default Nav