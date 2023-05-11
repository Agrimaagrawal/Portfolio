import React ,{useState} from 'react';
import {FiAlignJustify} from 'react-icons/fi';
import {FiX} from 'react-icons/fi';
import {NavHashLink as Link} from 'react-router-hash-link';


const Navbar = () => {
  const [open,setOpen]=useState(false);
  return (
    <div className=' bg-tblue w-full  flex justify-between p-3'>
      <div className='text-tgreen text-xl font-bold'> AGRIMA AGRAWAL </div>
      <div className='absolute right-6 top-3 text-3xl text-tgreen md:hidden 'onClick={()=>setOpen(!open)}>
           {open?<FiX/>:<FiAlignJustify/>}
        </div>
        <div className= {`md:flex gap-10  md:mt-0 absolute md:static bg-teal-600 md:bg-tblue md:w-auto md:z-auto z-[10] left-0 w-full h-[400px] md:h-1 md:pl-0 pl-16 transition-all ease-in-out duration-500 ${open?'top-16':'top-[-490px]'}`}>
    
                <Link to="#About" smooth><div className="hover:underline cursor-pointer m-20 md:m-0 text-xl text-white md:text-tgreen" >About </div></Link>
                <Link to="#Project" smooth><div className="hover:underline cursor-pointer m-20 md:m-0 text-xl text-white md:text-tgreen">Projects</div></Link>
                <Link to="#Skills" smooth><div className="hover:underline cursor-pointer m-20  md:m-0 text-xl text-white md:text-tgreen">Skills</div></Link>
                </div>
        
           
      
    </div>
  )
}

export default Navbar
