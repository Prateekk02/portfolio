'use client'
import React from 'react'
import { FooterProps } from '@/lib/types'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import Divider from './ui/divider'
import { motion } from 'motion/react'

const Footer: React.FC<FooterProps> = ({ itemList }) => {
  return (
    <motion.footer 
    initial={{
      y:-10,
      opacity:0,
      filter:'blur(30px)'
    }}
    animate={{
      y:0,
      opacity:1,
      filter:'blur(0px)'
    }}
    transition={{
      duration:0.8,
      ease: 'easeInOut'
    }}
    viewport={{once:false, amount:0.2}}
    className="relative max-w-4xl mx-auto dark:border-blue-700 mt-16   text-sm text-neutral-600 dark:text-neutral-300">
      <Divider />
      <div className=" px-4 py-8 flex flex-col gap-6">
        
        {/* Links section */}
        <div className="flex flex-wrap justify-center gap-4 text-center">
          {itemList.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>

        
        <div className="flex justify-center items-center gap-3">
          <span>Find me on</span>
          <a
            href="https://x.com/codeWalker66"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            <FaXTwitter size={18} />
          </a>
          <span>and</span>
          <a
            href="https://www.linkedin.com/in/prateekk02/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>

        
        <div className="text-center text-xs text-neutral-500 dark:text-neutral-400">
          Portfolio inspired from <a href="https://manuarora.in/" target='_blank' rel='noopener noreferrer' className='hover:scale-110 duration-300 hover:text-black dark:hover:text-white'>Manu Arora</a>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
