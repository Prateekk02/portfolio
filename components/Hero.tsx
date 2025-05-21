import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MoreOption from './ui/more-option'
import Divider from './ui/divider'
import ProjectCard from './ProjectCard'
import { LongCard } from './LongCard'
import { blogItems, projectItems } from '@/data/content'

export default function Hero() {
    
    
  return (
    <div className='w-screen mt-10'>
        <div className="relative flex justify-between items-center w-full ">
            <div>
                <h1 className="font-bold text-5xl text-black dark:text-white mb-2">Prateek Kumar</h1>   
                <h2 className="text-neutral-600 dark:text-neutral-300 px-1 py-2">Building <span className='text-black dark:text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>Full-stack</span> apps, exploring 
                <span className='text-black dark:text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>GenAI</span> side quests and 
                <span className='text-black dark:text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>other cool things</span></h2> 
                <Divider />
            </div>
            <div>
                <Image 
                    width={150}
                    height={150}
                    alt='Prateek Photo'
                    src={"/prateekkumar2.png"}
                    className='rounded-full shadow-lg px-1 mt-2 mb-4'
                />
            </div>
        </div>
        <div className="pt-4 px-1 w-full mx-auto">
            <h1 className='text-neutral-600 text-justify dark:text-neutral-300'>I&apos;m a full-stack developer bridging AI research and software engineering — from training deep learning models to deploying them in scalable apps with Next.js and Node.js.
            I build intelligent systems that learn, adapt, and deliver real-world value using NLP, GenAI, and computer vision.</h1>
            <h2 className="mt-2 text-neutral-600 dark:text-neutral-300 py-2">Find me on: 
                <Link href={"https://x.com/codeWalker66"} key={"prateek-twitter"} target='_blank' className='text-black dark:text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>Twitter</Link> & 
                <Link href={"https://www.linkedin.com/in/prateekk02/"} key={"prateek-linkedin"} target='_blank' className='text-black dark:text-white font-semibold px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>LinkedIn</Link></h2>
        </div>

        <div>
            <h1 className="text-4xl font-bold mt-10">Recent Blogs</h1>
            <LongCard itemList={blogItems}/>
            <MoreOption title='See All Blogs' href='blog'/>
        </div>
        <div className="mt-5">
            <h1 className="text-4xl font-bold mt-10 mb-8">Projects</h1>
            <div className="flex flex-wrap gap-4 justify-between">
                    {projectItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-full sm:w-[48%] lg:w-[48%] p-2"
                    >
                        <ProjectCard
                        title={item.title}
                        logoLink={item.logoLink}
                        content={item.content}
                        href={item.href}
                        techList={item.techList}
                        githubLink={item.githubLink}
                        />
                    </div>
                    ))}
            </div>
            <MoreOption title='See More' href='projects' />
        </div>
        

    </div>
  )
}
