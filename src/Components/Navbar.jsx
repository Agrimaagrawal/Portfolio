import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className=' bg-tblue w-full  flex justify-between'>
      <div className='text-tgreen text-xl font-bold'> AGRIMA AGRAWAL </div>
        <div className='flex text-tgreen  gap-7 text-xl '>
    
                <div className="hover:underline cursor-pointer" >About </div>
                <div className="hover:underline cursor-pointer">Projects</div>
                <div className="hover:underline cursor-pointer">Skills</div>
                </div>
        
           
      
    </div>
  )
}

export default Navbar
