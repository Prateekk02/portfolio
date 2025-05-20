import React from 'react'
import Link from 'next/link'
import { SquareArrowOutUpRight } from "lucide-react"

interface ResourcesCardProps {
    title: string,
    content: string,
    href: string
}

const ResourcesCard: React.FC<ResourcesCardProps> = ({title, content, href}) => {
  return (
    <div className='bg-[#f3f4f6] dark:bg-blue-200 w-[350px] h-[200px] p-4 rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-blue-950 dark:hover:bg-blue-300 duration-300 hover:bg-[#d1d1d2] border hover:scale-102 flex flex-col'>
        <div className="text-2xl font-semibold p-2 dark:text-black">{title}</div>
        <div className="text-justify text-lg text-neutral-600 p-2 flex-grow overflow-y-auto">{content}</div>
        <div className="flex items-center space-x-2">
            <span className="p-2 text-neutral-600">Link:</span>
            <Link 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                
            >
                <SquareArrowOutUpRight className='text-black ' size={15} />
            </Link>
        </div>
    </div>
  )
}

export default ResourcesCard;