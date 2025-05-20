import React from 'react'
import Divider from './ui/divider'
import SnippetsCard from './SnippetsCard'

export default function SnippetsHero() {
    const snippetsItem = [
        {
            logoLink:"/nextjs-icon.png",
            title: "Test 1",
            content: "Implement Linear regression using this colab template",
            href: "#"
        },{
            logoLink:"",
            title: "",
            content: "",
            href: "#"
        },{
            logoLink:"",
            title: "",
            content: "",
            href: "#"
        },{
            logoLink:"",
            title: "",
            content: "",
            href: "#"
        },{
            logoLink:"/coming-soon.png",
            title: "More Incoming",
            content: "More component coming soon...",
            href: "#"
        }
        
    ]
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
                href={item.href}                
                />
            </div>
            ))}
        </div>
    </main>
  )
}
