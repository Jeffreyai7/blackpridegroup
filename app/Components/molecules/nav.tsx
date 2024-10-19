"use client"
import { navlinks } from '@/app/lib/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import Logo from '../atoms/logo'

interface Props {
  pathname: string,
  isopened: boolean,
  handleClick: () => void

}


const Nav = ({pathname, handleClick, isopened}: Props) => {
  

  return (
    <nav className='border-b-2 border-b-foreblack py-2'>
        <div className='flex justify-between items-center py-2 w-[95%] mx-auto'>
          <Logo className=''/>
        <ul className='hidden md:flex w-[50%] justify-between text-foreblack font-extrabold mr-[100px]'>
            {
                navlinks.map((el, index) => {
                    return <li key={index} ><Link className={`border-b-2 border p-3 rounded-full transition-all hover:text-foregold hover:border-foregold ${pathname === el.link && "border-foregold text-foregold"}`}  href={el.link}>{el.name}</Link> </li>
               
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