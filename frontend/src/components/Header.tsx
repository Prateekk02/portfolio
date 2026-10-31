'use client'
import React from 'react'
import Divider from './ui/divider'
import { HeaderProps } from '@/lib/types'
import { motion } from 'motion/react';
import { textItem, textContainer } from '@/lib/motion';


const Header: React.FC<HeaderProps> = ({title, content}) => {
  
  return (
    <>
        <motion.h1 
          initial={{
              opacity:0,
              filter:'blur(8px)',
              y:-20
          }}
          animate={{
              opacity:1,
              filter:'blur(0px)',
              y:0
          }}

          transition={{
              duration:0.8,
              ease:'easeOut'
          }}
          className="text-5xl font-bold mt-10">
            {title}
        </motion.h1>
        <motion.div variants={textContainer} initial="hidden" animate="visible">
        <motion.p variants={textItem} className="text-justify text-md text-neutral-600 dark:text-neutral-300 mt-4 w-full">{content}</motion.p>
        </motion.div>
        <div className="relative mt-4">
            <Divider />
        </div>
    </>
  )
}

export default Header