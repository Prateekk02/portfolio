'use client'
import React from 'react'
import Header from './Header'
import { blogItems, dummyBlogContent } from '@/data/content'
import { LongCard } from './LongCard'
import Divider from './ui/divider'
import { motion } from 'motion/react'
import { scaleXVariant, textVariant } from '@/lib/motion'

function BlogHero() {  

  return (
    <div>
        <Header title='Blog' content='"The palest ink is better than the best memory.", a famous proverb telling us the importance of writing down what we have learned. This page contain all the blogs which I have written and will be writing on other platform as well as native to my portfolio.'/>
        <div className="inline-block relative pt-8 mb-3 pl-1">
            <motion.h1 initial="hidden" animate="visible" variants={textVariant} className="text-3xl font-bold mt-1">External Blogs</motion.h1>
            <motion.div initial='hidden' animate='visible' variants={scaleXVariant} className="absolute left-0 -bottom-2 h-1 w-full rounded-xl bg-gradient-to-r from-neutral-700  via-neutral-500 to-neutral-200 dark:from-blue-800 dark:via-blue-400 dark:to-blue-200"></motion.div>
        </div>
        <LongCard itemList={blogItems}/>
        <Divider />
        <div className="inline-block relative pt-8 mb-3 pl-1">
            <motion.h1 initial='hidden' whileInView='visible' variants={textVariant} viewport={{once:false, amount:0.2}} className="text-3xl font-bold mt-1">In House Blogs</motion.h1>
            <motion.div initial='hidden' whileInView='visible' variants={scaleXVariant} className="absolute left-0 -bottom-2 h-1 w-full rounded-xl bg-gradient-to-r from-neutral-700  via-neutral-500 to-neutral-200 dark:from-blue-800 dark:via-blue-400 dark:to-blue-200"></motion.div>
        </div>
        <LongCard itemList={dummyBlogContent}/>

    </div>
  )
}

export default BlogHero