import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css-3.png';
import git from '../assets/git.png';
import js from '../assets/js.png';
import react from '../assets/react.svg';
import github from '../assets/github.png';
import c from '../assets/c-.png';
import tailwind from '../assets/physics.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration:1000,
});


const Skills = () => {
    const skills=[
        {photo:html,name:"HTML"},
        {photo:css,name:"Css"},
        {photo:js,name:"Javascript"},
        {photo:react,name:"React"},
        {photo:tailwind,name:"Tailwind css"},
        {photo:git,name:"Git"},
        {photo:github,name:"Github"},
        {photo:c,name:"C++"},

    ]
  return (
    <div>
      <div className='w-full h-auto lg:min-h-screen bg-tblue '>
        <h1 className='text-3xl lg:text-6xl font-bold text-center p-12 pt-36 text-white underline'> My Skills</h1>
        <div  className='flex  w-full justify-center items-center'>
        <div className='flex flex-wrap lg:w-[800px] justify-center gap-4 '>
          {skills.map((i)=>{
            return(
              
            <div className=' w-[100px] h-[120px] md:w-[200px] md:h-[150px] flex-col border-2 border-tgreen' data-aos="zoom-out">
              <div className='w-[40px] md:w-[70px] mx-auto my-5 '>
                <img src={i.photo}></img>
              </div>
              <div className='text-center md:text-xl font-semibold text-white'><h1>{i.name}</h1></div>

            </div>

         
            )
          })}
          <div/>

        </div>
            

      

      </div>
      </div>
    </div>
  )
}

export default Skills
