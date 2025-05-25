
import { Badge } from "./ui/badge"
import { ChevronRight } from "lucide-react"
import React, { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { ExperienceCardProps } from "@/lib/types"




const ExperienceCard = ({experienceItems}: ExperienceCardProps) => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target:ref,
    offset:["start end", "end start"]
  })



  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 50]),
    { stiffness: 120, damping: 30, mass: 1.5 }
  );
  const scaleContent = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0.98, 1, 1.01, 0.99]),
    { stiffness: 180, damping: 40, mass: 2 }
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y: translateContent,
        scale: scaleContent,
      }}
      className="space-y-8"
    >
      {experienceItems.map((experience, index) => (
        <div
          key={index}
          className="rounded-lg bg-gradient-to-br from-[#f3f4f6] via-[#d1d5db] to-[#f3f4f6] 
          dark:bg-gradient-to-br dark:from-[#D8E1FF]  dark:to-[#F4F6FA] dark:hover:shadow-blue-950 dark:hover:bg-blue-300 
          duration-300 hover:bg-[#d1d1d2] hover:shadow-xl border p-6 transition-all"
        >
          <div className="flex flex-col md:flex-row justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-black">{experience.organization}</h3>
              <h4 className="text-xl font-semibold text-black mt-1">{experience.role}</h4>
            </div>
            <div className="mt-2 md:mt-0 md:text-right">
              <p className="text-neutral-700 font-medium">{experience.duration}</p>
              <p className="text-neutral-700">{experience.location}</p>
            </div>
          </div>

          <div className="mt-4">
            <h5 className="text-lg font-semibold text-black mb-2">Tech Stack</h5>
            <div className="flex flex-wrap gap-2 mb-4">
              {experience.techStack.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  className="bg-white text-sm text-blue-600 px-2 py-1 rounded-md shadow-lg"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h5 className="text-lg font-semibold text-black mb-2">Responsibilities</h5>
            <ul className="space-y-2">
              {experience.responsibility.map((resp, respIndex) => (
                <motion.li
                  key={respIndex}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{
                    duration: 0.25,
                    delay: 0.05 * respIndex, // small delay between lines
                  }}
                >
                  <ChevronRight className="h-5 w-5 text-neutral-700 shrink-0 mt-0.5" />
                  <span className="text-neutral-700 ml-1">{resp}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </motion.div>

  );
};

export default ExperienceCard;
