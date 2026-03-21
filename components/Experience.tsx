'use client';
import { experienceItems } from "@/data/content"
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { motion } from 'motion/react'; 
import { fadeInUp } from '@/lib/motion';

const Experience: React.FC = () => {
  return (
    <div className='mt-5'>
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} 
        className="text-2xl sm:text-3xl md:text-4xl font-bold mt-10 mb-8"
      >
        Experience
      </motion.h1>

      <div className="flex flex-col">
        <ExperienceCard experienceItems={experienceItems} />
      </div>
    </div>
  );
};

export default Experience;
