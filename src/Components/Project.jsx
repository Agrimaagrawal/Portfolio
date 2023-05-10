import React from 'react'
import Youtube from '../assets/Youtube.png';
import Weather from '../assets/Weather.png';
import TicTac from '../assets/Tictac.png';
import Todo from '../assets/Todo.png';


const Project = () => {
  return (
    <div className=' bg-tblue w-full h-auto flex flex-col ' id="Project">
      <h1 className='text-white text-3xl md:text-5xl font-extrabold underline text-center mt-32 md:m-0 '>My Projects</h1>
      <div className='flex mt-10 md:mt-28 gap-8 justify-center items-center flex-wrap'>
      <div className='flex flex-col justify-center items-center gap-6 md:w-[500px]  h-[400px] w-[400px] bg-white/5 hover:border-2 border-tgreen '>
            <h1 className='text-3xl font-bold text-white '>Youtube clone</h1>
            <div className='w-[300px] md:w-[400px] shadow-lg '><img src={Youtube}></img></div>
            <div className='flex gap-10'>
              <button className='font-bold text-xl underline text-purple-400  '><a href="https://github.com/Agrimaagrawal/Youtubeclone" >Github Link</a></button>
              <button className='font-bold text-xl text-tgreen underline '><a href="https://youtubeclone-beta.vercel.app/" >Live Project Link</a></button>
            </div>
          </div>
          
<div className='flex flex-col justify-center items-center gap-6 md:w-[500px]  h-[400px] w-[400px]  bg-white/5 hover:border-2 border-tgreen'>
            <h1 className='text-3xl font-bold text-white '>Weather app</h1>
            <div className='w-[300px] md:w-[400px] shadow-lg '><img src={Weather}></img></div>
            <div className='flex gap-10'>
              <button className='font-bold text-xl underline text-purple-400'><a href="https://github.com/Agrimaagrawal/weatherforecast.github.io" >Github Link</a></button>
              <button className='font-bold text-xl text-tgreen underline '><a href="https://agrimaagrawal.github.io/weather.github.io/" >Live Project Link</a></button>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center gap-6 md:w-[500px] h-[400px] w-[400px]  bg-white/5 hover:border-2 border-tgreen'>
            <h1 className='text-3xl font-bold text-white '>Tic Tac Toe</h1>
            <div className=' w-[300px] md:w-[400px] shadow-lg '><img src={TicTac}></img></div>
            
            <div className='flex gap-10'>
              <button className='font-bold text-xl underline text-purple-400'><a href="https://github.com/Agrimaagrawal/Tic-Tac-Toe" >Github Link</a></button>
              <button className='font-bold text-xl text-tgreen underline '><a href="https://tic-tac-toe-five-xi-28.vercel.app/" >Live Project Link</a></button>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center gap-6 md:w-[500px] h-[400px] w-[400px]  bg-white/5 hover:border-2 border-tgreen'>
            <h1 className='text-3xl font-bold text-white '>Todo app</h1>
            <div className='w-[300px] md:w-[400px] shadow-lg '><img src={Todo}></img></div>
            
            <div className='flex gap-10'>
              <button className='font-bold text-xl underline text-purple-400 '><a href="https://github.com/Agrimaagrawal/Todo-react-app" >Github Link</a></button>
              <button className='font-bold text-xl text-tgreen underline '><a href="https://agrimaagrawal.github.io/Todo-react-app/" >Live Project Link</a></button>
            </div>
          </div>
        

        </div>
      </div>
      
    
  )
}

export default Project

