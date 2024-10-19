import { agbalumo} from '@/app/fonts/fonts'
import { Clm } from '@/app/lib/utils'
import React from 'react'

const Logotitle = ({className}: {className: string}) => {
  return (
    <div>
      <span className= {Clm(`${agbalumo.className} text-foreblack font-extrabold,`, className)}> Black Pride Group</span>
    </div>
  )
}

export default Logotitle