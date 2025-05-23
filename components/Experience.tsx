'use client';
import React from 'react';
import ExperienceCard from './ExperienceCard';
import { motion } from 'motion/react'; 
import { fadeInUp } from '@/lib/motion';

const Experience = () => {
  return (
    <div className='mt-5'>
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }} 
        className="text-4xl font-bold mt-10 mb-8"
      >
        Experience
      </motion.h1>

      <div className="flex flex-col">
        <ExperienceCard />
      </div>
    </div>
  );
};

export default Experience;
