'use client'
import React from 'react'
import { LongCard } from './LongCard'
import { BookSectionProps } from '@/lib/types'
import { motion } from 'motion/react'

// Enhanced animation variants for better scroll behavior
const containerVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
}

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const underlineVariants = {
  hidden: { 
    scaleX: 0,
    opacity: 0
  },
  visible: { 
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.3
    }
  }
}

const cardContainerVariants = {
  hidden: { 
    opacity: 0,
    y: 40
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.4
    }
  }
}

export const BookSection: React.FC<BookSectionProps> = ({title, bookItems}) => {
  return (
    <motion.div 
      className="mt-8 pt-3 pl-1"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: false, 
        amount: 0.2,
        margin: "-100px 0px -100px 0px" // Trigger animation earlier/later
      }}
    >
      <div className="inline-block relative">
        <motion.h1 
          variants={titleVariants}
          className="text-3xl font-bold mt-1"
        >
          {title}
        </motion.h1>
        <motion.div 
          className="absolute left-0 -bottom-2 h-1 w-full rounded-xl bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-200 dark:from-blue-800 dark:via-blue-400 dark:to-blue-200"
          variants={underlineVariants}
          style={{ transformOrigin: "left" }}
        />
      </div>
      
      <motion.div 
        className="mt-10"
        variants={cardContainerVariants}
      >
        <LongCard itemList={bookItems}/>
      </motion.div>
    </motion.div>     
  )
}