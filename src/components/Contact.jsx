import React from 'react'

function Contact() {
  return (
    <section id='contact' className=' bg-brightRed py-16 '>
        <div className='container flex flex-col justify-center  mx-auto px-4 py-10'>
            <div className='flex-1 text-center mb-10'>
                <h1 className='font-bold text-2xl text-veryLightGray'>Feel free to contact me or view my CV</h1>
            </div>
            <div className='flex-1 flex flex-row justify-center items-center gap-8'>
              <a target='_blank' rel='nonreferrer noopener' className=' cursor-pointer transition-all hover:opacity-75 hover:scale-110 ' href='https://www.linkedin.com/in/sari-putra-gunawan-62666259/'><i className="fa-brands fa-linkedin text-4xl text-white"></i></a>
              <a target='_blank' rel='nonreferrer noopener' className=' cursor-pointer transition-all hover:opacity-75 hover:scale-110 ' href='https://github.com/rzilla92'><i className="fa-brands fa-github text-4xl text-white"></i></a>
              <a target='_blank' rel='nonreferrer noopener' className=' cursor-pointer transition-all hover:opacity-75 hover:scale-110 ' href='https://www.instagram.com/royzilla92/'><i className="fa-brands fa-instagram text-4xl text-white"></i></a>
              <p className='text-white'> / </p>
              <a target='_blank' rel='nonreferrer noopener' className=' cursor-pointer transition-all hover:scale-110' href='https://drive.google.com/file/d/1i0Csl3zy_7wAx6X463IYWuqK1sCKasCZ/view?usp=sharing'>
                <div className='flex flex-row justify-center items-center  px-4 py-2 rounded-full bg-white text-brightRed hover:bg-darkBlue'>  
                  <i className="fa fa-file-contract text-2xl "></i>
                  <p className='font-bold text-sm ml-2'>CV</p>
                </div>
              </a>
              
            </div>
        </div>
    </section>
    
  )
}

export default Contact
