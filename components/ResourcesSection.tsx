'use client'
import React, { useRef } from 'react'
import ResourcesCard from './ResourcesCard'
import { ResourcesSectionProps } from '@/lib/types'
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'motion/react'
import { scaleXVariant, textItem } from '@/lib/motion'

const ResourcesSection: React.FC<ResourcesSectionProps> = ({header, listItems}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"]
  });


  const leftCardY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rightCardY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const leftCardRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);
  const rightCardRotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

 
  const sectionOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.8, 1, 0.8, 0]),
    {
      stiffness: 120,
      damping: 30,
      mass: 1.5,
    }
  );

  const sectionScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.9, 0.98, 1, 0.98, 0.9]
  );

  const sectionBlur = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [2, 0, 0, 0, 2]
  );


  return (
    <motion.div 
      ref={ref} 
      className="mt-10 pt-5 pl-1"
      style={{
        opacity: sectionOpacity,
        scale: sectionScale,
        filter: useMotionTemplate`blur(${sectionBlur}px)`,
      }}
    >
        <div className="inline-block relative"          
        >
            <motion.h1 initial="hidden" animate='show' viewport={{ once: false, amount: 0.2 }} variants={textItem} className="text-3xl font-bold mt-1">{header}</motion.h1>
            <motion.div 
              variants={scaleXVariant} 
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.2 }}
              className="absolute left-0 -bottom-2 h-1 w-full rounded-xl bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-200 dark:from-blue-800 dark:via-blue-400 dark:to-blue-200"
            ></motion.div>
        </div>
        
        <div>
            <div className="flex flex-wrap gap-4 justify-between pt-8">
                {listItems.map((item, index) => {
                    const isLeftCard = index % 2 === 0;
                    
                    return (
                        <motion.div
                            key={item.title}
                            className="w-full sm:w-[48%] lg:w-[48%] p-2"
                            style={{
                                y: isLeftCard ? leftCardY : rightCardY,
                                rotate: isLeftCard ? leftCardRotate : rightCardRotate,
                            }}
                            initial={{ 
                                opacity: 0, 
                                x: isLeftCard ? -50 : 50,
                                scale: 0.9
                            }}
                            whileInView={{ 
                                opacity: 1, 
                                x: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.3,
                                    delay: index * 0.02,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }
                            }}
                            viewport={{ once: false, margin: "-300px" }}
                        >
                            <ResourcesCard
                                title={item.title}                
                                content={item.content}
                                href={item.href}                
                            />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    </motion.div>   
  )
}

export default ResourcesSection