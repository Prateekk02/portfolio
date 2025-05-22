import React from 'react'
import Header from './Header'
import ProjectLister from './ProjectLister'
import { projectItems } from '@/data/content'

const ProjectHero = () => {
    const visibleProjectCount = projectItems.length;
  return (
    <div>
        <Header title='Projects' content="I've developed various projects across various domains that includes Python, Machine Learning, Deep Learning, NLP, Computer Vision, Gen AI, Full stack projects using Next.js and AI SaaS. " />
        <div className="mt-10">
            <ProjectLister count={visibleProjectCount}/>
        </div>
    </div>
  )
}

export default ProjectHero