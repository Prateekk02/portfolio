'use client'
import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { testimonials } from "@/data/content";
import { fadeInUp } from "@/lib/motion";


const Testimonial = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });

  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.8, 1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 0.95, 1, 0.95, 0.8]);
 

  return (
    <div className="mt-5">
      <motion.h1 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className="text-2xl sm:text-3xl md:text-4xl font-bold mt-10 mb-8">Feedback & Endorsements</motion.h1>
      <motion.div
        ref={ref}
        style={{
          y: translateY,
          opacity,
          scale,
          
        }}
        className="flex flex-col"
      >
        <AnimatedTestimonials testimonials={testimonials} />
      </motion.div>
    </div>
  );
};

export default Testimonial