import React from 'react'
import Divider from './ui/divider'
import SnippetsCard from './SnippetsCard'
import { snippetsItem } from '@/data/content'


export default function SnippetsHero() {
    
  return (
    <main >
        <h1 className="text-5xl font-bold mt-10">Snippets</h1>
        <p className="text-justify text-md text-neutral-600 dark:text-neutral-300 mt-4 w-full">Resuable templates and code snippets which can easily be integrated in your application. The page contains functions, templates which can be used for making AI models from scratch, animations in web application and many more. </p>
        <div className="relative mt-4">
            <Divider />
        </div>

        
        <div className="flex flex-wrap gap-4 justify-between pt-8">
            {snippetsItem.map((item, idx) => (
                <div
                key={idx}
                className="w-full sm:w-[48%] lg:w-[48%] p-2"
            >
                <SnippetsCard
                title={item.title}
                logoLink={item.logoLink}
                content={item.content}
                             
                />
            </div>
            ))}
        </div>
    </main>
  )
}
