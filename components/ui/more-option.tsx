
import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { MoreOptionProps } from '@/lib/types'


const MoreOption: React.FC<MoreOptionProps> = ({title}) =>{
    
  return (
    <div className="flex justify-center items-center text-md font-semibold dark:text-neutral-300 mt-12 cursor-pointer"> 
        <div >{title}</div> 
        {title !== 'Show Less' ? (<ChevronDown className='pt-1' />) : (<ChevronUp className='pt-1'/>)}
    </div>
  )
}
export default MoreOption;
