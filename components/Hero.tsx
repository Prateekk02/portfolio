'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Divider from './ui/divider'
import { LongCard } from './LongCard'
import { ChevronDown } from 'lucide-react'
import ProjectLister from './ProjectLister'
import { blogItems } from '@/data/content'
import Experience from './Experience' 
import Academic from './Academic'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import { testimonials } from '@/data/content'
import { easeInOut, motion } from 'motion/react'
import { textContainer, textVariant, textItem, headerVariant, blurUpVariant } from '@/lib/motion'


const Hero = () => { 
    
      
  return (
    <div className='w-screen mt-10'>
        <div className="relative flex justify-between items-center w-full ">
            <div>
                <motion.h1 
                    initial="hidden"
                    animate="visible"
                    variants={headerVariant}
                    className="font-bold text-5xl text-black dark:text-white mb-2">Prateek Kumar</motion.h1>   
                <motion.h2
                    initial='hidden'
                    animate='visible'
                    variants={blurUpVariant}
                    className="text-neutral-600 dark:text-neutral-300 px-1 py-2"
                    >
                    Building{" "}
                    <motion.span
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={textVariant}
                        className="text-black dark:text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950"
                    >
                        Full-stack
                    </motion.span>{" "}
                    apps, exploring{" "}
                    <motion.span
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={textVariant}
                        className="text-black dark:text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950"
                    >
                        GenAI
                    </motion.span>{" "}
                    side quests and
                    <motion.span
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={textVariant}
                        className="text-black dark:text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950"
                    >
                        other cool things
                    </motion.span>
                </motion.h2>
                <Divider />
            </div>
            <motion.div 
                initial={{
                    scale:0,
                    filter:'blur(10px)',
                    
                }}
                animate={{
                    scale: 1,
                    filter:'blur(0px)',
                    
                }}
                transition={{
                    duration: 0.3,
                    ease: easeInOut,                    
                    delay:0.4
                }}

            >
                <Image 
                    width={150}
                    height={150}
                    alt='Prateek Photo'
                    src={"/prateek.jpeg"}
                    className='rounded-full shadow-lg px-1 mt-2 mb-4'
                />
            </motion.div>
        </div>
        <motion.div variants={textContainer} initial="hidden" animate="show" className="pt-4 px-1 w-full mx-auto">
            <motion.h1 variants={textItem} className='text-neutral-600 text-justify dark:text-neutral-300'>I&apos;m a full-stack developer bridging AI research and software engineering — from training deep learning models to deploying them in scalable apps with Next.js and Node.js.
            I build intelligent systems that learn, adapt, and deliver real-world value using NLP, GenAI, and computer vision.</motion.h1>
            <h2 className="mt-2 text-neutral-600 dark:text-neutral-300 py-2">Find me on: 
                <Link href={"https://x.com/codeWalker66"} key={"prateek-twitter"} target='_blank' className='text-black dark:text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>Twitter</Link> & 
                <Link href={"https://www.linkedin.com/in/prateekk02/"} key={"prateek-linkedin"} target='_blank' className='text-black dark:text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>LinkedIn</Link></h2>
        </motion.div>

        <div className='mt-5 pt-5'>
            <motion.h1 
                initial={{
                    opacity:0,
                    y:30
                }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-8">Recent Blogs</motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true }}
            >
                <LongCard itemList={blogItems} />
            </motion.div>
        </div>
        <div className=" mt-5 pt-5">
            <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true }}                
                className="text-4xl font-bold mb-8">
                    Projects
            </motion.h1>            
            <motion.div 
                initial={{ opacity: 0, y: 40  }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                viewport={{ once: true }}
            >
                <ProjectLister count={4}/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: false, amount:0.2 }}
                className="flex justify-center items-center text-md font-semibold dark:text-neutral-300 mt-12 cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                <Link href={"projects"} className="flex items-center gap-1">
                    <div className='text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white'>
                    View More Projects
                    </div>
                    <ChevronDown className='pt-1' />
                </Link>
            </motion.div>
        </div>        
        <Experience />  
        <Academic />  
        <Divider />
        <AnimatedTestimonials testimonials={testimonials} autoplay />
        
    </div>
  )
}

export default Hero;