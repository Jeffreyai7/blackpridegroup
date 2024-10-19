"use client"
import React, { useState } from 'react'
import Nav from '../molecules/nav'
import { usePathname } from 'next/navigation'
import Mediumnav from '../molecules/dropdownnav'

const Header = () => {
    const pathname = usePathname()
    const [isopened, setIsopened] = useState<boolean>(false)

    const handleClick = () => {
        setIsopened((prev) => {
          return !prev
        })
      }
    
  return (
    <header className='sticky top-0 left-0 right-0 w-full z-10 bg-backgwhite'>
        <Nav handleClick={handleClick} pathname={pathname} isopened={isopened} />
    {
        isopened && <Mediumnav handleClick={handleClick} isopened={isopened}/> 
    }
    </header>
  )
}

export default Header