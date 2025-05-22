import React from 'react'
import ProjectCard from './ProjectCard'
import { projectItems } from '@/data/content';
import { ProjectListerProps } from '@/lib/types';


const ProjectLister: React.FC<ProjectListerProps> = ({count}) => {
    const visibleProjectItems = projectItems.slice(0,count);
  return (
    <div className="flex flex-wrap gap-4 justify-between">
                    {visibleProjectItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-full sm:w-[48%] lg:w-[48%] p-2"
                    >
                        <ProjectCard
                        title={item.title}
                        logoLink={item.logoLink}
                        content={item.content}
                        href={item.href}
                        techList={item.techList}
                        githubLink={item.githubLink}
                        showBlinker={item.showBlinker}
                        />
                    </div>
                    ))}
            </div>
  )
}

export default ProjectLister