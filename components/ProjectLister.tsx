'use client'
import ProjectCard from './ProjectCard'
import { projectItems } from '@/data/content';
import { ProjectListerProps } from '@/lib/types';
import { parentVariantStaggering, childVariantStaggering } from '@/lib/motion';
import { motion } from 'motion/react';




const ProjectLister: React.FC<ProjectListerProps> = ({count}) => {
    const visibleProjectItems = projectItems.slice(0,count);


  return (
    <motion.div initial='initial' animate='animate' variants={parentVariantStaggering} className="flex flex-wrap gap-4 justify-between">
      {visibleProjectItems.map((item, idx) => (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}                        
            variants={childVariantStaggering}
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
        </motion.div>
        ))}
      </motion.div>
  )
}

export default ProjectLister