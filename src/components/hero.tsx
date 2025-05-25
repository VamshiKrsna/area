import React from 'react'
import HeroImage from "../assets/HeroImage2.jpg"

const Hero = () => {
  return (
    <div>
      <h1 className='font-[EB_Garamond] text-[186px] leading-none mt-8 text-center'>
        Browse everything.
      </h1>
      <img src={HeroImage} alt="HeroImage" className='w-full mt-10 rounded-xl'/>
    </div>
  )
}

export default Hero