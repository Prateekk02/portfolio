import React from 'react'
import ResourcesCard from './ResourcesCard'

interface ListItems {
    title: string, 
    content: string, 
    href: string
}

interface ResourcesSectionProps {
    header: string,
    listItems: ListItems[] 
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({header, listItems}) => {
  return (
    <div className=" mt-10 pt-5 pl-1">
        <div className="inline-block relative">
            <h1 className="text-3xl font-bold mt-1">{header}</h1>
            <div className="absolute left-0 -bottom-1 h-1 w-full rounded-xl bg-gradient-to-r from-neutral-700  via-neutral-500 to-neutral-200 dark:from-blue-800 dark:via-blue-400 dark:to-blue-200"></div>
        </div>
    <div>
        <div className="flex flex-wrap gap-4 justify-between pt-8">
            {listItems.map((item) => (
                <div
                key={item.title}
                className="w-full sm:w-[48%] lg:w-[48%] p-2"
            >
                <ResourcesCard
                title={item.title}                
                content={item.content}
                href={item.href}                
                />
            </div>
            ))}
        </div>
    </div>
    </div>   
  )
}

export default ResourcesSection
