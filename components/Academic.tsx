// Academic.tsx
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import AcademicCard from "./AcademicCard";
import { fadeInUp } from "@/lib/motion";

const Academic = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });

  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.8, 1, 0.8, 0]), {
    stiffness: 120,
    damping: 30,
    mass: 1.5,
  });
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 0.95, 1, 0.95, 0.8]);
 

  return (
    <div className="mt-5">
      <motion.h1 
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="text-4xl font-bold mt-10 mb-8">Academics</motion.h1>
      <motion.div
        ref={ref}
        style={{
          y: translateY,
          opacity,
          scale,
          
        }}
        className="flex flex-col"
      >
        <AcademicCard />
      </motion.div>
    </div>
  );
};

export default Academic;
