"use client"
import { navlinks } from '@/app/lib/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Logo from '../atoms/logo'



const Nav = () => {
  const pathname = usePathname()
  const [isopened, setIsopened] = useState(false)



  const handleClick = () => {
    setIsopened((prev) => {
      return !prev
    })
  }

  return (
    <nav className='border-b-2 border-b-foreblack py-2 '>
        <div className='flex justify-between items-center py-2 w-[95%] mx-auto '>
        <Logo/>
        <ul className='hidden md:flex w-[70%] justify-between text-foreblack font-extrabold'>
            {
                navlinks.map((el, index) => {
                    return <li ><Link className={`border-b-2 border p-3 rounded-full transition-all hover:text-foregold hover:border-foregold ${pathname === el.link && "border-foregold text-foregold"}`} key={index} href={el.link}>{el.name}</Link> </li>
               
                  })
            }
        </ul>
        <div className='md:hidden'  onClick={handleClick} >
          {
           isopened ? <FaTimes className='h-9 w-9 text-foreblack' /> : <FaBars className='h-9 w-9 text-foreblack md:hidden'/>
          }
        </div>
        </div>
    </nav>
  )
}

export default Nav