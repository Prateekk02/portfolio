import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SnippetsCardProps } from '@/lib/types'


const SnippetsCard: React.FC<SnippetsCardProps> = ({logoLink, title, content, href}) => {
  return (
    <div className=' relative bg-[#f3f4f6] dark:bg-blue-200 w-[350px] h-[180px] p-4 rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-blue-950 dark:hover:bg-blue-300 duration-300 hover:bg-[#d1d1d2] border hover:scale-102 flex flex-col'>
      {href ? (
        <Link target="_blank" href={href} className="flex flex-col h-full">
          <div className="absolute top-3 right-3 h-2 w-2 rounded-full animate-pulse bg-green-500"></div>
        <div className="flex items-center mb-2">
          <div className="mr-2">
            <Image 
              src={logoLink} 
              alt={`${title} logo`} 
              width={48} 
              height={48} 
              className="object-contain"
            />
          </div>
        </div>
          <div className="text-xl font-bold dark:text-black">{title}</div>

        <div className="text-justify text-sm pt-4 text-neutral-600 flex-grow overflow-y-auto">
          {content}
        </div>
      </Link>
      ) : (
        <div className="flex flex-col h-full">
          <div className="absolute top-3 right-3 h-2 w-2 rounded-full animate-pulse bg-red-700"></div>
          <div className="flex items-center mb-2">
            <div className="mr-2">
              <Image 
                src={logoLink} 
                alt={`${title} logo`} 
                width={48} 
                height={48} 
                className="object-contain"
              />
            </div>
          </div>
            <div className="text-xl font-bold dark:text-black">{title}</div>

          <div className="text-justify text-sm pt-4 text-neutral-600 flex-grow overflow-y-auto">
            {content}
          </div>
      </div>
      )}
    </div>
  )
}

export default SnippetsCard