import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SnippetsCardProps } from '@/lib/types'
import Blinker from './ui/blinker'


const SnippetsCard: React.FC<SnippetsCardProps> = ({logoLink, title, content, href}) => {
  return (
    <div className=' relative w-[350px] h-[180px] p-4 hover:scale-102 flex flex-col rounded-lg bg-gradient-to-br from-[#f3f4f6] via-[#d1d5db] to-[#f3f4f6] dark:bg-gradient-to-br dark:from-blue-300 dark:via-blue-400 dark:to-blue-300 dark:hover:shadow-blue-950 dark:hover:bg-blue-300 duration-300 hover:bg-[#d1d1d2] hover:shadow-xl border'>
      {href ? (
        <Link target="_blank" href={href} className="flex flex-col h-full">
          <Blinker color='green' />
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
          <Blinker color='red'/>
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