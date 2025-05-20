'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Divider from './ui/divider'
import ProjectCard from './ProjectCard'

export default function Hero() {
    const router = useRouter();
    const blogItems = [
        {
            title: "How To Remove Duplicates From Vector In R - Geeks for geeks",
            views: "2,421",
            link: "https://www.geeksforgeeks.org/how-to-remove-duplicates-from-vector-in-r/"
        },{
            title:"Data versus Algorithms: What Really Drives Machine Learning Success?",
            views:"997",
            link: "https://www.linkedin.com/pulse/data-versus-algorithms-what-really-drives-machine-learning-kumar-7ztuc/?trackingId=f1JYpYvYQauQ9U8N3dBddw%3D%3D"
        }
    ]
  return (
    <div className='w-screen mt-10'>
        <div className="relative  flex justify-between items-center  w-full ">
            <div className="">
                <h1 className="font-bold text-5xl text-black dark:text-white mb-2">Prateek Kumar</h1>   
                <h2 className="text-neutral-600 dark:text-neutral-300 px-1 py-2">Building <span className='text-black dark:text-white font-semibold p-2 bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>Full-stack</span> apps, exploring <span className='text-black dark:text-white font-semibold p-2 bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>GenAI</span> side quests and <span className='text-black dark:text-white font-semibold p-2 bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>other cool things</span></h2> 
                <Divider />
            </div>
            <div className="">
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
            <h2 className="mt-2 text-neutral-600 dark:text-neutral-300 py-2">Find me on: <Link href={"https://x.com/codeWalker66"} key={"prateek-twitter"} target='_blank' className='text-black dark:text-white font-semibold p-2 bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg  dark:shadow-blue-950'>Twitter</Link> & <Link href={"https://www.linkedin.com/in/prateekk02/"} key={"prateek-linkedin"} target='_blank' className='text-black dark:text-white font-semibold p-2 bg-gray-100 dark:bg-gray-600 ml-1 rounded-xl shadow-lg dark:shadow-blue-950'>LinkedIn</Link></h2>
        </div>

        <div>
            <h1 className="text-4xl font-bold mt-10">Recent Blogs</h1>
            <div className="">
                {blogItems.map((item, idx) =>(
                    <Link
                        key={`blog-link-${idx}`}
                        href={item.link}
                        className='flex justify-between mt-5 dark:bg-blue-200 bg-[#f3f4f6] border shadow-lg rounded-md p-8 dark:shadow-blue-950 items-center'
                        target='_blank'
                    >
                        <div className="font-semibold text-black text-md ">{item.title}</div>
                        <div className="text-neutral-600 text-lg">{item.views} views</div>
                    </Link>
                ))}
            </div>
            <div onClick={() => router.push("/blog")} className="flex justify-center items-center text-md font-semibold dark:text-neutral-300 mt-12 cursor-pointer"> 
                <div>See All Blogs</div> 
                <ChevronDown className='pt-1' />
            </div>
        </div>
        <div className="mt-5 ">
            <h1 className="text-4xl font-bold mt-10 mb-5">Projects</h1>
            <ProjectCard />
        </div>
    </div>
  )
}
