import React from 'react';
import { Link } from 'react-router-dom';
import clouds from '../assets/clouds.png';
import Weather from './Weather';


const Home = () => {
    return (
        <div className="bg-gradient-to-t from-[#52D4FF] to-white to-75% relative">
            <div>
                <img src= { clouds } alt="cloud_1" className='absolute -top-[250px] -right-[150px] w-[600px] h-[700px]'/>
                <img src= { clouds } alt="cloud_2" className='absolute top-[80px] -left-[100px] w-[600px] h-[700px]'/>
                <img src= { clouds } alt="cloud_3" className='absolute -bottom-[-100px] -right-[150px] w-[600px] h-[700px]'/>
            </div>

            <header className='flex flex-col items-center justify-center pt-[115px] gap-8'>
              <span className='text-sm text-gray-500 border px-3 py-1.5 items-center justify-center rounded-full bg-neutral-300 mt-10'>
                see weather like never before, {" "}
                <Link to = {"/weather"} className='font-semibold'>
                view 🌥️
                </Link>
              </span>

              <span className="max-w-3xl">
                <h1 className='text-center text-7xl'>
                  The Only Competitor to the Weather Channel
                </h1>
              </span>

              <div className='flex items-center justify-center gap-5'>
                <Link to= {"/weather"} className='border border-[#52D4FF] rounded-full bg-[#C3F2FF] px-7 py-3 font-bold text-[#1999D5]'>See Demo</Link>
                <a href="https://github.com/Atanu-18/" target='_blank' className='text-gray-500 font-bold underline text-2xl hover:cursor-pointer'>Start at github</a>
              </div>

              <span className='text-[#37A5CA] font-bold'>
                see this cool demo
              </span>

              <div>
                <img src="https://placehold.co/750x500" alt="demo-pic" className="rounded-t-lg border-2 border-gray-400]"/>
                
              </div>

            </header>
        </div>
    )
}


export default Home;