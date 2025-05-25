import React, { useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
    <div className='flex flex-col'>
      {/* Logo and Button (scroll away) */}
      <div className='flex justify-between items-center h-20'>
        {/* Logo Section */}
        <div className='ml-6 h-10 w-20'>
          <h1 className='font-friends text-3xl font-[Schibsted_Grotesk] font-bold'>Area</h1>
        </div>
        <div className='hidden md:flex mt-2 ml-3 h-14 w-36 mr-6'>
          <button className='bg-[#495c1b] h-12 w-36 cursor-pointer flex items-center justify-center gap-1 rounded-full hover:bg-[#5a6f22] transition-all duration-300 group'>
            <span className='text-white font-[Friends_UltraBold_Regular]'>Learn More</span>
            <ArrowOutwardIcon className='text-white !text-[20px] transform transition-all duration-700 ease-in-out group-hover:rotate-90' />
          </button>
        </div>
      </div>
      {/* Fixed glassy navbar links section, centered at top */}
      <div className='hidden md:flex fixed top-0 left-1/2 -translate-x-1/2 h-16 px-8 rounded-full border-white/60 border-1 bg-white/40 backdrop-blur-xl shadow-2xl z-50 justify-center items-center mt-10'>
        <div className='flex items-center space-x-8 rounded-full'>
          <span className='font-[Friends_UltraBold_Regular] cursor-pointer'>Benefits</span>
          <span className='font-[Friends_UltraBold_Regular] cursor-pointer'>Specifications</span>
          <span className='font-[Friends_UltraBold_Regular] cursor-pointer'>How-to</span>
          <span className='font-[Friends_UltraBold_Regular] cursor-pointer'>Contact Us</span>
        </div>
      </div>

      {/* Hamburger Icon - Mobile */}
      <div className='md:hidden flex items-center mr-6 '>
        <button onClick={handleDrawerToggle} aria-label='Open menu'>
          <MenuIcon className='text-black !text-3xl cursor-pointer' />
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className='fixed inset-0 bg-white z-50 flex flex-col p-6 transition-all duration-300 border-black border-6'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='font-friends text-3xl font-[Schibsted_Grotesk] font-bold'>Area</h1>
            <button onClick={handleDrawerToggle} aria-label='Close menu'>
              <CloseIcon className='text-black !text-3xl cursor-pointer' />
            </button>
          </div>
          <div className='flex flex-col gap-6'>
            <span className='font-[Friends_UltraBold_Regular] cursor-pointer mt-2'>Benefits</span>
            <span className='font-[Friends_UltraBold_Regular] cursor-pointer mt-2'>Specifications</span>
            <span className='font-[Friends_UltraBold_Regular] cursor-pointer mt-2'>How-to</span>
            <span className='font-[Friends_UltraBold_Regular] cursor-pointer mt-2'>Contact Us</span>
          </div>
          <div className='mt-auto'>
            <button className='bg-[#495c1b] h-12 w-36 cursor-pointer flex items-center justify-center gap-1 rounded-full hover:bg-[#5a6f22] transition-all duration-300 group'>
              <span className='text-white font-[Friends_UltraBold_Regular]'>Learn More</span>
              <ArrowOutwardIcon className='text-white !text-[20px] transform transition-all duration-700 ease-in-out group-hover:rotate-90' />
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Navbar
