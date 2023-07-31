import React from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration:1000,
});

const About = () => {
  return (
    <>
    <div className='w-full min-h-screen  bg-tblue overflow-hidden' id='About' >
        <h1 className='text-3xl lg:text-5xl text-center text-white underline font-extrabold pt-20'>About me</h1>
        <div className='flex mt-20 flex-wrap gap-4 justify-center'>

            
            <div className=' mx-3 w-[500px] h-[200px]  border-tgreen border-2  rounded-md 'data-aos="fade-right">
                <h1 className='text-3xl font-bold p-8 pb-0 pt-7 text-white'>I do Frontend</h1>
                <p className='text-xl  p-8 pt-2 text-tgreen'>I write code to convert designs into website</p>
            </div>
            
            <div className=' mx-3  w-[500px] h-[200px]  border-tgreen border-2  rounded-md 'data-aos="fade-left">
                 <h1 className='text-3xl font-bold p-8 pb-0 pt-7 text-white'>I do Designing </h1>
                <p className='text-xl  p-8 pt-2 text-tgreen'>I design ideas using canva and figma</p>
            </div>
            <div className='mx-3  w-[500px] h-auto border-tgreen border-2  rounded-md 'data-aos="fade-right">
                 <h1 className='text-3xl font-bold p-8 pb-0 pt-7 text-white'>I study Computer Science </h1>
                <p className='text-xl  p-8 pt-2 text-tgreen'>I am BTech final year student who studies Computer Science fundamentals</p>
            </div>
            <div className='mx-3 w-[500px] h-[200px]  border-tgreen border-2  rounded-md ' data-aos="fade-left" >
                 <h1 className='text-3xl font-bold p-8 pb-0 pt-7 text-white'>I do Leetcode </h1>
                <p className='text-xl  p-8 pt-2 text-tgreen'>I practice Data Structure and Algorithms on Leetcode</p>
            </div>
            

        </div>

    </div>
    </>
  )
}

export default About
