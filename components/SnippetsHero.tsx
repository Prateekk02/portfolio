import React from 'react'
import SnippetsCard from './SnippetsCard'
import { snippetsItem } from '@/data/content'
import Header from './Header'

export default function SnippetsHero() {
    
  return (
    <main >
        
        <Header title='Snippets' content='Resuable templates and code snippets which can easily be integrated in your application. The page contains functions, templates which can be used for making AI models from scratch, animations in web application and many more.'/>

        
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
