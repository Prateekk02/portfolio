"use client"
import { useRef } from "react"
import { experienceItems } from "@/data/content"
import { Badge } from "./ui/badge"
import { ChevronRight } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"

export interface ExperienceProps {
  organization: string
  role: string
  duration: string
  location: string
  techStack: string[]
  responsibility: string[]
}

const ExperienceCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

  const translateContent = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  
  // const opacityContent = useSpring(
  //   useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.8, 1, 0.8, 0]),
  //   {
  //     stiffness: 120,
  //     damping: 30,
  //     mass: 1.5,
  //   }
  // );
  
  const scaleContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0.8, 0.95, 1, 0.95, 0.8]
  ); 

  return (
    <motion.div 
      ref={ref} 
      className="space-y-8"
      style={{
        
        scale: scaleContent,
        y: translateContent,
        
      }}
    >
      {experienceItems.map((experience, index) => (
        <motion.div
          key={index}
          className="rounded-lg bg-gradient-to-br from-[#f3f4f6] via-[#d1d5db] to-[#f3f4f6] dark:bg-gradient-to-br dark:from-blue-300 dark:via-blue-400 dark:to-blue-300 dark:hover:shadow-blue-950 dark:hover:bg-blue-300 duration-300 hover:bg-[#d1d1d2] hover:shadow-xl border p-6 transition-all"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: index * 0.1 
          }}
          whileHover={{ 
            scale: 1.02,
            y: -5,
            transition: { duration: 0.2 }
          }}
          
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
          >
            <div>
              <motion.h3 
                className="text-2xl font-bold text-black"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                {experience.organization}
              </motion.h3>
              <motion.h4 
                className="text-xl font-semibold text-black mt-1"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
              >
                {experience.role}
              </motion.h4>
            </div>
            <motion.div 
              className="mt-2 md:mt-0 md:text-right"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
            >
              <p className="text-neutral-700 font-medium">{experience.duration}</p>
              <p className="text-neutral-700">{experience.location}</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
          >
            <h5 className="text-lg font-semibold text-black mb-2">Tech Stack</h5>
            <div className="flex flex-wrap gap-2 mb-4">
              {experience.techStack.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1 + 0.6 + techIndex * 0.05 
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Badge className="bg-white text-sm text-blue-600 px-2 py-1 rounded-md shadow-lg">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
          >
            <h5 className="text-lg font-semibold text-black mb-2">Responsibilities</h5>
            <ul className="space-y-2">
              {experience.responsibility.map((resp, respIndex) => (
                <motion.li 
                  key={respIndex} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1 + 0.4 + respIndex * 0.1 
                  }}
                >
                  <motion.div
                    initial={{ rotate: -90, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + 0.5 + respIndex * 0.1 
                    }}
                  >
                    <ChevronRight className="h-5 w-5 text-neutral-700 shrink-0 mt-0.5" />
                  </motion.div>
                  <span className="text-neutral-700 ml-1">{resp}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ExperienceCard