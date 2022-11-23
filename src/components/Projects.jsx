import React from 'react'
import {hoobank, smartbrain, trvl, robofriends} from '../constants'

function Projects() {
  return (
    <section id='projects' className=' bg-veryPaleRed'>
        <div className='container flex flex-col justify-center mx-auto px-4 py-10 my-16'>
            <div className='flex-1 text-center mb-10'>
                <h1 className='font-bold text-lg text-veryDarkBlue'>Check Out Some of My Work</h1>
            </div>
            <div className='flex-1 flex flex-col md:flex-row justify-center gap-8'>
                <div className="flex-1 rounded overflow-hidden bg-white shadow-lg transition-all hover:scale-105 hover:cursor-pointer">
                    <a target="_blank" rel='nonreferrer noopener' href="https://soft-fairy-3b902f.netlify.app/">
                        <img className="w-full" src={smartbrain} alt="smartbrain app"/>
                        <div className="px-6 py-4">
                            <h2 className="font-bold text-md mb-2">SmartBrain App</h2>
                            <p className="text-gray-700 text-sm">
                            A face detection app built with React & Tachyons utilising ClariFaiAPI & PosgresQL to keep track of users & counts.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="flex-1 rounded overflow-hidden bg-white shadow-lg transition-all hover:scale-105 hover:cursor-pointer">
                    <a target="_blank" rel='nonreferrer noopener' href="https://rzilla92.github.io/robofriends/">
                        <img className="w-full" src={robofriends} alt="robofriends app"/>
                        <div className="px-6 py-4">
                        <h2 className="font-bold text-md mb-2">Robofriends App</h2>
                            <p className="text-gray-700 text-sm">
                            A real-time search of Robot Friends app built using React & Tachyons with data generated from Robohash.org.                            
                            </p>
                        </div>
                    </a>
                </div>
                <div className="flex-1 rounded overflow-hidden bg-white shadow-lg transition-all hover:scale-105 hover:cursor-pointer">
                    <a target="_blank" rel='nonreferrer noopener' href="https://rzilla92.github.io/bank-modern-ui/">
                        <img className="w-full" src={hoobank} alt="hoobank"/>
                        <div className="px-6 py-4">
                            <h2 className="font-bold text-md mb-2">Hoobank</h2>
                            <p className="text-gray-700 text-sm">
                            A Modern Website buillt using React & Tailwind CSS for Hoobank, a digital banking company.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="flex-1 rounded overflow-hidden bg-white shadow-lg transition-all hover:scale-105 hover:cursor-pointer">
                    <a target="_blank" rel='nonreferrer noopener' href="https://rzilla92.github.io/travel-website-react/">
                        <img className="w-full" src={trvl} alt="trvl"/>
                        <div className="px-6 py-4">
                        <h2 className="font-bold text-md mb-2">TRVL</h2>
                            <p className="text-gray-700 text-sm">
                            A fully responsive website built with React Hooks for a mock company travel company, TRVL.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    
        
        
    </section>
  )
}

export default Projects