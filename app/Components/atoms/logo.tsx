import React from 'react'
import Image from 'next/image'
import logo from "@/public/assets/images/blackpridehead.png"
const Logo = () => {
  return (
    <Image src={logo} width={40} height={40} alt="logo"/>
  )
}

export default Logo