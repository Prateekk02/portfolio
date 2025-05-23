'use client';
import { scaleXVariant } from '@/lib/motion';
import { motion } from 'motion/react';
import React from 'react';

export default function Divider() {
  return (
    <div className="relative p-2 overflow-hidden">
      <motion.div
        initial='initial'
        whileInView='animate'
        variants={scaleXVariant}
        viewport={{once:false, amount:0.3}}
        className="origin-center absolute bottom-0 mx-12 h-0.5 bg-gradient-to-r from-neutral-100 via-neutral-700 to-neutral-100 dark:from-blue-950 dark:via-blue-600 dark:to-blue-950 shadow-lg dark:shadow-blue-950 rounded-lg left-0 right-0"
      />
    </div>
  );
}
