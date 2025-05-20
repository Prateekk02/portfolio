import React from 'react'
import Divider from './ui/divider'

import ResourcesSection from './ResourcesSection'

export default function ResourcesHero() {
    const utilityItem = [
        {
            title: "Lucide-icons",
            content: "Great for stylish icons",
            href : "https://lucide.dev/guide/packages/lucide-react"
        },
        {
            title: "React-icons",
            content: "Great for simple icons",
            href : "https://react-icons.github.io/react-icons/"
        },{
            title: "Postman",
            content: "Best known for API testing.",
            href : "https://www.postman.com/"
        },{
            title: "Overleaf",
            content: "Great resource for writing acedamic papers and resumes.",
            href : "https://www.overleaf.com/"
        },

        
    ]
  return (
    <main>
        <h1 className="text-5xl font-bold mt-10">Resources</h1>
        <p className="text-justify text-md text-neutral-600 dark:text-neutral-300 mt-4 w-full">
            Resources which has helped me make my life easier. These resources includes the youtube channels, blogs, documentation, utilities etc which I follow.
        </p>
        <div className="relative mt-4">
            <Divider />
        </div>
        <ResourcesSection header="Utilities" listItems={utilityItem} />
    </main>
  )
}
