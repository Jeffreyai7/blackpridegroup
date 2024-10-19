import React from 'react'
import Image from 'next/image'
import logo from "@/public/assets/images/blackpridehead.png"
import { agbalumo } from '@/app/fonts/fonts';
import { Clm } from '@/app/lib/utils';
import Logotitle from './logotitle';

const Logo = ({className} : {className: string}) => {
  return (
    <div className="flex items-center">

      <Image src={logo} width={40} height={40} alt="logo"/>
      <Logotitle className=''/>
    </div>
  )
}

export default Logo