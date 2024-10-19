import { navlinks } from "@/app/lib/constants"
import Link from "next/link"

interface Props {
    isopened: boolean,
    handleClick: () => void
  
  }
  

const Mediumnav = ({handleClick, isopened}: Props) => {

    return (

<div className={`md:hidden absolute top-[74px] left-0 right-0 w-full h-screen bg-black flex justify-center items-center`} >
<ul className='flex flex-col py-2 h-[50%] justify-between items-center text-white font-extrabold'>
            {
                navlinks.map((el, index) => {
                    return <li onClick={handleClick} ><Link className={`transition-all hover:text-foregold hover:border-foregold `} key={index} href={el.link}>{el.name}</Link> </li>
               
                  })
            }
        </ul>
</div>
    )
}

export default Mediumnav