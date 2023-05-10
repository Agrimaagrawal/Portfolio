import React from 'react'
import {FaLinkedin } from 'react-icons/fa';
import {FaGithub} from  'react-icons/fa';
import{AiFillMail} from 'react-icons/ai';
import photo from '../assets/myphoto.jpg';
import Project from '../Components/Project'
import 'animate.css';
import '../style.css';
import {NavHashLink as Link} from 'react-router-hash-link';

const Hero = () => {
  
  return (
    <>
    <div className='w-full min-h-screen flex justify-center items-center  flex-col ' id="hero">
    
    
       <div className='flex flex-col-reverse lg:flex-row gap-12 items-center justify-center'>
     <div className="flex flex-col items-center md:w-1/2">
        <div className='mt-4 w-full'>
        
            <h1 className='text-2xl lg:text-5xl text-center font-extrabold  '><span className='text-white'>Hi👋,</span><div className="text-white lg:w-[500px]">I'm Agrima Agrawal</div></h1>
            <h1 className='text-2xl lg:text-4xl text-tgreen font-semibold text-center  mt-5'> A Frontend Developer</h1>
            <p className=" text-lg  md:text-xl text-center  text-white">I love to write code which brings ideas into reality</p>

        </div>
       
         <div className=' mt-8 flex gap-5 mb-4'>
          <a href="https:/www.linkedin.com/in/agrima-agrawal-34a772212" target="_blank" className='text-white md:text-3xl text-xl'><FaLinkedin/></a>
          <a href="https://github.com/Agrimaagrawal" target="_blank" className='text-white md:text-3xl text-xl'><FaGithub/></a>
          <a href="https://agrimaagrawal20@gmail.com" target="_blank" className='text-white md:text-3xl text-xl'><AiFillMail/></a>

         </div>
         <div className='flex gap-3'>
         <div>
 <Link to='#Project' smooth><button type="button" class="text-white bg-gradient-to-r from-tgreen to-blue-950 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-8 py-2.5 text-center mr-2 mb-2">My Work</button></Link>
</div>
          <Link to="#About" smooth><div><button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
  <span class="relative px-8 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      About me
  </span>
</button>

</div>
</Link>


         </div>
         </div>
         <div className='lg:w-1/2 flex justify-center items-center '>
          <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-2 border-tgreen lg:ml-44 mt-4 '>
            <img src={photo} className=" w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full object-cover p-3"></img>

          </div>

         </div>
         </div> 
    </div>
    
    </>
  )
}

export default Hero
