import React from 'react'

const Contact = () => {
  return (
    <div className='h-auto w-full bg-tblue pt-5'>
     
     <hr ></hr>
     <div className='flex justify-center pt-4 gap-3' >
      <h1 className='md:text-xl text-tgreen  '>Contact me via:</h1>
      <div className=' flex gap-5 mb-4'>
          <a href="https:/www.linkedin.com/in/agrima-agrawal-34a772212" target="_blank" className='text-white  md:text-xl '>Linkedin</a>
          <a href="https://github.com/Agrimaagrawal" target="_blank" className='text-white md:text-xl'>Github</a>
          <a href="mailto:agrimaagrawal20@gmail.com" target="_blank" className='text-white  md:text-xl'>Mail</a>

         </div>
         </div>

    </div>
  )
}

export default Contact
