"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Divider from "./ui/divider";
import { LongCard } from "./LongCard";
import { ChevronDown } from "lucide-react";
import ProjectLister from "./ProjectLister";
import { blogItems } from "@/data/content";
import Experience from "./Experience";
import Academic from "./Academic";
import { motion } from "motion/react";
import {
  textContainer,
  textVariant,
  textItem,
  headerVariant,
  blurUpVariant,
} from "@/lib/motion";
import { Badge } from "./ui/badge";
import { SocialMediaBtn } from "./ui/SocialBtn";
import { socialMediaItems } from "@/data/content";
import { projectItems } from '@/data/content';
import { upcomingProjectItems } from "@/data/content";
import Testimonial from "./Testimonial";

const Hero = () => {
  return (
    <div className="w-full mt-10">
      <div className="relative flex flex-col-reverse sm:flex-row justify-between items-center w-full gap-4">
        <div>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={headerVariant}
            className="font-bold text-3xl sm:text-4xl md:text-5xl text-black dark:text-white mb-2"
          >
            Prateek Kumar
          </motion.h1>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={blurUpVariant}
            className="text-neutral-600 dark:text-neutral-300 px-1 py-2 text-sm sm:text-base"
          >
            Building{" "}
            <Badge className="mx-0.5 text-black dark:text-white font-semibold text-sm sm:text-base bg-gray-100 dark:bg-gray-600 rounded-xl shadow-lg dark:shadow-blue-950 whitespace-normal">
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariant}
              >
                Fullstack
              </motion.span>{" "}
            </Badge>
            apps, exploring{" "}
            <Badge className="mx-0.5 text-black dark:text-white font-semibold text-sm sm:text-base bg-gray-100 dark:bg-gray-600 rounded-xl shadow-lg dark:shadow-blue-950 whitespace-normal">
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariant}
              >
                GenAI
              </motion.span>{" "}
            </Badge>
            side quests and{" "}
            <Badge className="mx-0.5 text-black dark:text-white font-semibold text-sm sm:text-base bg-gray-100 dark:bg-gray-600 rounded-xl shadow-lg dark:shadow-blue-950 whitespace-normal">
              <motion.span
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariant}
              >
                other cool things
              </motion.span>
            </Badge>
          </motion.h2>
          <Divider />
        </div>
        <motion.div
          initial={{
            scale: 0,
            filter: "blur(8px)",
          }}
          animate={{
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          <Image
            width={150}
            height={150}
            alt="Prateek Photo"
            src={"/prateek.jpeg"}
            priority
            className="rounded-full shadow-lg px-1 mt-2 mb-4 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]"
          />
        </motion.div>
      </div>
      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="visible"
        className="pt-4 px-1 w-full mx-auto"
      >
        <motion.h1
          variants={textItem}
          className="text-neutral-600 text-justify dark:text-neutral-300"
        >
          I&apos;m a full-stack developer bridging AI research and software
          engineering — from training deep learning models to deploying them in
          scalable apps with Next.js and Node.js. I build intelligent systems
          that learn, adapt, and deliver real-world value using NLP, GenAI, and
          computer vision.
        </motion.h1>

        <div className="flex justify-between mt-4 text-neutral-600 dark:text-neutral-300">
          <div className="flex items-center gap-4">
            <span>Find me on:</span>
            <div className="flex items-center gap-6">
              {socialMediaItems.map((item, index) => (
                <SocialMediaBtn
                  key={index}
                  href={item.href}
                  Icon={item.Icon}
                  size={item.size}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-5 pt-5">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
        >
          Recent Blogs
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <LongCard itemList={blogItems} />
        </motion.div>
      </div>
      <div className=" mt-5 pt-5">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
        >
          Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <ProjectLister count={4} projectItem={projectItems}/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center items-center text-md font-semibold dark:text-neutral-300 mt-12 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <Link href={"projects"} className="flex items-center gap-1">
            <div className="text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white">
              View More Projects
            </div>
            <ChevronDown className="pt-1" />
          </Link>
        </motion.div>
      </div>

      <div className=" mt-5 pt-5">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8"
        >
          Upcoming Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <ProjectLister count={1} projectItem={upcomingProjectItems} />
        </motion.div>

      </div>

      <Experience />
      <Academic />
      <Divider />
      <Testimonial />

    </div>
  );
};

export default Hero;
