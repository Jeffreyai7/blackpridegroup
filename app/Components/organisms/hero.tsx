import React from 'react'
import Button from '../atoms/button'
import Image from 'next/image'
import heroImg from "@/public/assets/images/hero.webp"
const Hero = () => {
  return (
    <div className='h-screen text-black grid grid-cols-1 md:grid-cols-2 pt-4 w-[95%] mx-auto' >
      <div className='flex flex-col gap-8 font-bold md:w-[85%]' >
        <h1 className='text-subheading md:text-mainheading'>Transform your Online Presence using Digital Tools</h1>
        <p className=' text-paragraph md:text-2xl font-medium'> Expert Digital Marketing Solutions for Ambitious Businesses
        </p>
        <Button className="py-5 font-semibold flex-none w-[50%]">Get Started Today</Button>
      </div>
      <div>
        <Image src={heroImg} className='w-full h-fit rounded-3xl' alt='heroimage'/>
      </div>
    </div>
  )
}

export default Hero