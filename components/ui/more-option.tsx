'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

interface MoreOptionProps{
    title: string,
    href: string
}

const MoreOption: React.FC<MoreOptionProps> = ({title, href}) =>{
    const router = useRouter();
  return (
    <div onClick={() => router.push(`${href}`)} className="flex justify-center items-center text-md font-semibold dark:text-neutral-300 mt-12 cursor-pointer"> 
        <div >{title}</div> 
        <ChevronDown className='pt-1' />
    </div>
  )
}
export default MoreOption;
