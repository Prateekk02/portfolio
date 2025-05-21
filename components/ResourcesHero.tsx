import React from 'react'
import Divider from './ui/divider'
import { uiItems, utilityItem, dsaItems, ytChannelItems, podcastList } from '@/data/content'
import { BookSection } from './BookSection'
import { papersItems } from '@/data/content'
import Header from './Header'

import ResourcesSection from './ResourcesSection'

export default function ResourcesHero() {
    
  return (
    <main>
        
        <Header title='Resources' content='Resources which has helped me make my life easier. These resources includes the youtube channels, blogs, documentation, utilities etc which I follow.'/>
        <ResourcesSection header="Utilities" listItems={utilityItem} />
        <ResourcesSection header="UI Libraries" listItems={uiItems}/>
        <ResourcesSection header="DSA & CP Lovers" listItems={dsaItems}/>
        <ResourcesSection header="Youtube Channels" listItems={ytChannelItems}/>
        <ResourcesSection header="Podcasts & Knowledge" listItems={podcastList}/>
        <Divider />
        <BookSection title='Books, Research Papers, Whitepapers, Blogs' bookItems={papersItems}/>
    </main>
  )
}
