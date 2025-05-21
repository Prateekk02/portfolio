import React from 'react'
import Divider from './ui/divider'
import { HeaderProps } from '@/lib/types'

const Header: React.FC<HeaderProps> = ({title, content}) => {
  return (
    <>
        <h1 className="text-5xl font-bold mt-10">{title}</h1>
        <p className="text-justify text-md text-neutral-600 dark:text-neutral-300 mt-4 w-full">{content}</p>
        <div className="relative mt-4">
            <Divider />
        </div>
    </>
  )
}

export default Header