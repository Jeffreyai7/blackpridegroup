import React from 'react'
import Logo from '../atoms/logo'
import { FaFacebook } from 'react-icons/fa'
import { SiLinkedin } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { PiYoutubeLogoLight } from "react-icons/pi";
import Logotitle from '../atoms/logotitle';

const Footer = () => {
  return (
    <footer className='border-t-2 border-white'>
    <div className='bg-footerground py-3 text-white'>
      <div className='grid md:grid-cols-2 w-[95%] mx-auto'>
        <div className='flex flex-col gap-2 w-[70%] '>
          <Logo className='text-black'/>
          <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Expedita veritatis sequi atque consequuntur quibusdam recusandae voluptatibus saepe beatae.
          Dolores, corporis iusto! Sed provident veritatis odit corporis, quod molestiae. Incidunt, quasi!
          </span>
          <ul className='flex flex-col gap-2'>
            <li>King Solomons Heights</li>
            <li>26, Mango Street, Accra, Ghana</li>
            <li>(+233) 030 280 2935</li>
            <li>info@sfanonline.org</li>
            <li className='flex items-center justify-between w-[70%] '>
            <FaFacebook className='h-6 w-6' />
            <SiLinkedin className='h-6 w-6' />
            <FiInstagram className='h-6 w-6' />
            <BsTwitterX className='h-6 w-6' />
            <PiYoutubeLogoLight className='h-6 w-6' />
            </li>
          </ul>
        </div>
        <div className='grid grid-cols-2'>
        <div className='flex justify-center pt-5'>
            <div>
              <span className='text-black font-semibold'>Company</span>
            <ul>
              <li className='cursor-pointer decoration-transparent underline underline-offset-4 decoration-thickness-4 hover:underline hover:decoration-black transition-all' >About Us</li>
              <li className='cursor-pointer decoration-transparent underline underline-offset-4 decoration-thickness-4 hover:underline hover:decoration-black transition-all'>Contact Us</li>
              <li className='cursor-pointer decoration-transparent underline underline-offset-4 decoration-thickness-4 hover:underline hover:decoration-black transition-all'>Our Services</li>
              <li className='cursor-pointer decoration-transparent underline underline-offset-4 decoration-thickness-4 hover:underline hover:decoration-black transition-all' >Coaching</li>
              <li className='cursor-pointer decoration-transparent underline underline-offset-4 decoration-thickness-4 hover:underline hover:decoration-black transition-all' >Advertising</li>
            </ul>
            </div>
        </div>
        <div className='flex justify-center pt-5'>
        <div>
          <span className='text-black font-semibold'>Help & Legal</span>
          <ul>
            <li className='cursor-pointer decoration-transparent underline underline-offset-4 decoration-thickness-4 hover:underline hover:decoration-black transition-all' >FAQS</li>
            <li className='cursor-pointer decoration-transparent underline underline-offset-4 decoration-thickness-4 hover:underline hover:decoration-black transition-all' >Privacy</li>
            <li className='cursor-pointer decoration-transparent underline underline-offset-4 decoration-thickness-4 hover:underline hover:decoration-black transition-all' >Terms of Use</li>
            <li className='cursor-pointer decoration-transparent underline underline-offset-4 decoration-thickness-4 hover:underline hover:decoration-black transition-all' >Cookies</li>
            <li className='cursor-pointer decoration-transparent underline underline-offset-4 decoration-thickness-4 hover:underline hover:decoration-black transition-all'>Accessibility</li>
          </ul>

        </div>
        </div>
        </div>
      </div>
    </div>
<div className="bg-footer-gray py-[30px] px-[30px] text-[.8rem] md:text-[1.2rem] md:px-[100px] flex  justify-center gap-2">
Copyright &copy; {new Date().getFullYear()} <Logotitle className={''}/> | All rights reserved
</div>
</footer>

  )
}

export default Footer