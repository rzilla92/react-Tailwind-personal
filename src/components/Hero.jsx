import React from 'react'
import hello from '../assets/hello.svg'
import {Link} from 'react-scroll'

function Hero() {
  return (
    <section id="hero" className='bg-brightRedSupLight py-24'>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto space-y-0 md:space-y-0'>
          <div className='flex flex-col mb-16 mt-5 space-y-12 md:mb-32 md:mt-32 md:w-1/2'>
            <h1 className='max-w-md text-5xl font-bold text-center md:text-5xl md:text-left'>
                Hi, I'm Sari Putra Gunawan (Roy)
            </h1>
            <p className='max-w-sm text-center text-darkGrayishBlue md:mt-16 md:text-left'>
            I am a Front-end Developer,Graphic & Motion Designer. I like to dabble in various parts of frontend development and like to stay updated on new technologies, create contents and street feeding in my free time.
            </p>
            <div className='flex justify-center md:justify-start'>
              <Link to="contact" smooth={true} spy={true} className='baseline rounded-full px-6 py-2 cursor-pointer transition-all bg-brightRed hover:bg-darkBlue font-bold text-white'>Contact</Link>
            </div>
          </div>
          <div className='w-[40vh] py-10 md:mt-0 md:pb-0 md:w-[60vw]'>
            <img src={hello} />
          </div>          
        </div>
    </section>
  )
}

export default Hero