import React from 'react'
import { LongCard } from './LongCard'
import { BookSectionProps } from '@/lib/types'


export const BookSection: React.FC<BookSectionProps> = ({title, bookItems}) => {
  return (
    <div className=" mt-8 pt-3 pl-1">
        <div className="inline-block relative">
            <h1 className="text-3xl font-bold mt-1">{title}</h1>
            <div className="absolute left-0 -bottom-1 h-1 w-full rounded-xl bg-gradient-to-r from-neutral-700  via-neutral-500 to-neutral-200 dark:from-blue-800 dark:via-blue-400 dark:to-blue-200"></div>
        </div>
        <div className="mt-10">
            <LongCard itemList={bookItems}/>
        </div>
    </div>     
  )
}
