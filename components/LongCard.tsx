import React from 'react'
import Link from 'next/link'
import { LongCardProps } from '@/lib/types'

export const  LongCard: React.FC<LongCardProps> = ({itemList}) => {
  return (
    <div>
        {itemList.map((item, idx) =>(
            <Link
                key={`blog-link-${idx}`}
                href={item.link ? item.link : ""}
                className='flex justify-between mt-5 dark:bg-blue-200 bg-[#f3f4f6] dark:shadow-blue-950 hover:bg-[#d1d1d2] dark:hover:bg-blue-300 border shadow-lg rounded-md p-8  items-center duration-300 dark:hover:shadow-xl dark:hover:shadow-blue-950 hover:shadow-xl'
                target='_blank'
            >
                <div className="font-semibold text-black text-md ">{item.title}</div>
                {item.views && (
                    <div className="text-neutral-600 text-lg">{item.views} views</div>
                )}
            </Link>
        ))}
    </div>
  )
}
