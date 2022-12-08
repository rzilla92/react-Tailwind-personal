import React from 'react'
import {profilepic} from "../constants"
import TechStack from './TechStack'

function About() {
  return (
    <section id='about'>
      <div className='container flex flex-col px-4 py-16 mx-auto mt-10 mb-10 space-y-12 md:space-y-0 md:flex-row'>
        <div className='flex flex-none justify-center items-center md:block '>
          <img className='rounded-full w-1/2 border-brightRed border-8 shadow-lg md:mx-auto' src={profilepic}/>
        </div>
        <div className='flex flex-1 flex-col mx-8 sm:mx-10 md:max-w-md" md:flex-row gap-16 text-center md:text-start'>
          <div className='flex-1'>
              <h2 className=' font-semibold'>About Me</h2>
              <p>I am a graduate from Deakin University with Bachelor in Commerce(Accounting) degree. I am a self-taught Web Developer, currently diving deeper into Front-end Web Development. I believe that to be successful in life, one must have the ability to adopt, stay committed & develop postive mindset along the journey.</p>
          </div>          
          <div className='flex-1'>
            <h2 className=' font-semibold'>Tech Stack</h2> 
            <div className='flex-2'>
              <TechStack />
            </div>

          </div>
            
        </div>
      </div>
      
    </section>
  )
}

export default About