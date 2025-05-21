import React from 'react'
import Divider from './ui/divider'
import { uiItems, utilityItem, dsaItems, ytChannelItems, podcastList } from '@/data/content'
import { BookSection } from './BookSection'
import { papersItems } from '@/data/content'

import ResourcesSection from './ResourcesSection'

export default function ResourcesHero() {
    
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
        <ResourcesSection header="UI Libraries" listItems={uiItems}/>
        <ResourcesSection header="DSA & CP Lovers" listItems={dsaItems}/>
        <ResourcesSection header="Youtube Channels" listItems={ytChannelItems}/>
        <ResourcesSection header="Podcasts & Knowledge" listItems={podcastList}/>
        <Divider />
        <BookSection title='Research Papers & White Papers' bookItems={papersItems}/>
    </main>
  )
}
