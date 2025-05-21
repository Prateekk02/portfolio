import React from 'react'
import Link from 'next/link'
import { LongCardProps } from '@/lib/types'

export const  LongCard: React.FC<LongCardProps> = ({itemList}) => {
  return (
    <div >
        {itemList.map((item, idx) =>(
            <div key={`blog-link-${idx}`}>
                {item.link ? (<Link
                    
                    href={item.link ? item.link : ""}
                    className='flex justify-between mt-5 dark:bg-blue-200 hover:scale-105 bg-[#f3f4f6] dark:shadow-blue-950 hover:bg-[#d1d1d2] dark:hover:bg-blue-300 border shadow-lg rounded-md p-8  items-center duration-300 dark:hover:shadow-xl dark:hover:shadow-blue-950 hover:shadow-xl'
                    target='_blank'
                >
                    <div className="font-semibold text-black text-md ">{item.title}</div>
                    {item.views && (
                        <div className="text-neutral-600 text-lg">{item.views} views</div>
                    )}
                </Link>) : (
                    <div className='flex justify-between mt-5 dark:bg-blue-200 bg-[#f3f4f6] hover:scale-105 dark:shadow-blue-950 hover:bg-[#d1d1d2] dark:hover:bg-blue-300 border shadow-lg rounded-md p-4 items-center duration-300 dark:hover:shadow-xl dark:hover:shadow-blue-950 hover:shadow-xl'>              
                        <div className="font-semibold text-black text-md ">{item.title}</div>
                    </div>

                    // TODO: Adding reference for papers which I have read or any article I have written on it.
                )}
            </div>
        ))}
    </div>
  )
}
