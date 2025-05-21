import React from 'react'
import Header from './Header'
import { blogItems, dummyBlogContent } from '@/data/content'
import { LongCard } from './LongCard'
import Divider from './ui/divider'

function BlogHero() {   

  return (
    <div>
        <Header title='Blog' content='"The palest ink is better than the best memory.", a famous proverb telling us the importance of writing down what we have learned. This page contain all the blogs which I have written and will be writing on other platform as well as native to my portfolio.'/>
        <div className="inline-block relative pt-8 mb-3 pl-1">
            <h1 className="text-3xl font-bold mt-1">External Blogs</h1>
            <div className="absolute left-0 -bottom-2 h-1 w-full rounded-xl bg-gradient-to-r from-neutral-700  via-neutral-500 to-neutral-200 dark:from-blue-800 dark:via-blue-400 dark:to-blue-200"></div>
        </div>
        <LongCard itemList={blogItems}/>  
        <Divider />
        <div className="inline-block relative pt-8 mb-3 pl-1">
            <h1 className="text-3xl font-bold mt-1">In House Blogs</h1>
            <div className="absolute left-0 -bottom-2 h-1 w-full rounded-xl bg-gradient-to-r from-neutral-700  via-neutral-500 to-neutral-200 dark:from-blue-800 dark:via-blue-400 dark:to-blue-200"></div>
        </div>
        <LongCard itemList={dummyBlogContent}/>

    </div>
  )
}

export default BlogHero