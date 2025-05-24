import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router';

const navbar = () => {
  return (
    <>
    <div className='fixed top-0 left-0 right-0 flex flex-col border-black border-2 bg-white z-50'>
      <div className='flex justify-between items-center h-20'>
        {/* Logo Section */}
        <div className='ml-6 h-10 w-20'>
          <h1 className='font-friends text-3xl font-[Schibsted_Grotesk] font-bold'>Area</h1>
        </div>

        {/* Main Navbar Section */}
        <div className='border-black border-2 h-16 flex-1 flex justify-center items-center ml-8 mr-8'>
          {/* <h1 className='font-friends text-3xl font-[Schibsted_Grotesk] font-medium'>Main Navbar</h1> */}
          {/* <Link to='/benefits' className='text-[Friends_UltraBold_Regular]'>Benefits</Link> */}
          <div className='border-black border-2 h-16 flex justify-center items-center px-8'>
            <div className='flex items-center space-x-8'>
              <span className='font-[Friends_UltraBold_Regular] cursor-pointer'>Benefits</span>
              <span className='font-[Friends_UltraBold_Regular] cursor-pointer'>Specifications</span>
              <span className='font-[Friends_UltraBold_Regular] cursor-pointer'>How-to</span>
              <span className='font-[Friends_UltraBold_Regular] cursor-pointer'>Contact Us</span>
            </div>
          </div>
        </div>

        {/* Dummy Right Section */}
        <div className='mt-2 ml-3 h-14 w-36 mr-6'>
          <button className='bg-[#495c1b] h-12 w-36 cursor-pointer flex items-center justify-center gap-1 rounded-full hover:bg-[#5a6f22] transition-all duration-300 group'>
            <span className='text-white font-[Friends_UltraBold_Regular]'>Learn More</span>
            <ArrowOutwardIcon className='text-white !text-[20px] transform transition-all duration-700 ease-in-out group-hover:rotate-90' />
          </button>
        </div>
      </div>
      <div className='h-24 w-full border-t border-black'></div>
    </div>
    </>
  )
}

export default navbar
