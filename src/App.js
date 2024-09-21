import React from 'react'
import "./App.css"
import Image from "./images/pngwing.com.png"

const App = () => {
  return (
    <div className='bg-black w-full h-full text-white px-72 pt-20'>
      {/* header */}
      <div className='flex justify-between header text-2xl'>
        {/* left */}
        <div>
          <ul className='flex'>
            <li className='pr-10'><a href="#home">Home</a></li>
            <li className='pr-10'><a href="#about">About</a></li>
            <li className='pr-10'><a href="#projects">Projects</a></li>
            <li className='pr-10'><a href="#contact">Contact</a></li>
          </ul>
        </div>
        {/* right */}
        <div>
          <a href="#resume">Resume</a>
        </div>
      </div>

      {/* banner */}
      <div className='flex flex-col justify-center items-center mt-52 banner relative'>
        <div className='absolute top-[-200px] left-1/4 w-1/2'>
          <img src={Image} alt="portfolio" className='w-full' />
        </div>
        <h1 className='rounded-xl text-[140px] pt-72 px-10'>KARAN BHANUSHALI</h1>
        <p className='text-2xl font-bold'>Software Engineer / Programmer</p>
      </div>

      {/* intro */}
      <div className='mt-60 pb-20 flex flex-col items-center justify-between intro'>
        <h1 className='text-5xl font-bold mb-20 head'>ABOUT</h1>
        <h1 className='text-3xl font-bold leading-loose'>Welcome! I’m Karan Bhanushali, a software engineer with 3 + years of experience, focusing on MERN, Python, and cloud computing technologies. I excel at designing scalable applications and cloud infrastructures, with a particular interest in working with AWS and Large Language Models (LLMs) to enhance AI-driven capabilities.</h1>
        <h1 className='text-3xl font-bold mt-10 leading-loose'>My approach combines strong technical skills with creativity to build performant, secure, and user-friendly applications. From cloud deployment and backend architecture to dynamic front-end design, I take pride in delivering solutions that not only work but make an impact. Explore my portfolio to see how I’m harnessing the power of cloud, AI, and full stack development.</h1>
      </div>

      {/* works */}
      <div className='mt-52 works flex flex-col items-center'>
        <h1 className='text-5xl font-bold pb-20 head'>WORKS</h1>
        <p></p>
      </div>
    </div>
  )
}

export default App