import React from 'react'

const navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center border-black border-2 h-18'>
      {/* Logo Section */}
      <div className='border-black border-2 ml-3 h-10 w-20'>
        <h1 className='font-friends text-3xl font-[Schibsted_Grotesk] font-medium'>Area</h1>
      </div>

      {/* Main Navbar Section */}
      <div className='border-black border-2 h-14 w-20 flex-1 flex justify-center items-center ml-3'>
        <h1 className='font-friends text-3xl font-[Schibsted_Grotesk] font-medium'>Main Navbar</h1>
      </div>

      {/* Dummy Right Section */}
      <div className='border-black border-2 ml-3 h-10 w-20 mr-3'>
        <h1 className='font-friends text-3xl font-[Schibsted_Grotesk] font-medium'>Right</h1>
      </div>
    </div>
    </>
  )
}

export default navbar
