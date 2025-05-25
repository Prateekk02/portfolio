"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import { ProjectCardProps } from "@/lib/types";
import Blinker from "./ui/blinker";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
  useMotionTemplate,
} from "motion/react";

const ProjectCard: React.FC<ProjectCardProps> = ({
  logoLink,
  title,
  content,
  techList,
  href,
  githubLink,
  showBlinker,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"], // Card enters when 90% down viewport, exits when 10% down
  });

  const translateContent = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [50, 0, -50]
  );

  const opacityContent = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0, 0.8, 1, 0.8, 0]),
    {
      stiffness: 180,
      damping: 18,
      mass: 1.2,
    }
  );

  const scaleContent = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0.85, 0.95, 1, 0.95, 0.85]
  );

  const blurContent = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [2, 0, 0, 0, 2]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        y: translateContent,
        opacity: opacityContent,
        scale: scaleContent,
        filter: useMotionTemplate`blur(${blurContent}px)`,
      }}
      className="relative rounded-lg bg-gradient-to-br from-[#f3f4f6] via-[#d1d5db] to-[#f3f4f6] dark:bg-gradient-to-br
               dark:from-[#D8E1FF]  dark:to-[#F4F6FA] dark:hover:shadow-blue-950
               dark:hover:bg-blue-400 duration-300 hover:bg-[#d1d1d2] hover:shadow-xl border hover:scale-102
                w-[360px] h-[450px] p-4 flex flex-col"
    >
      {githubLink && (
        <div className="absolute -top-4 -right-4 border-2 border-neutral-300 dark:border-neutral-700 rounded-full p-2 bg-white dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-200 shadow-md hover:scale-105">
          <Link
            key={`title-${title}`}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} className="text-black dark:text-white" />
          </Link>
        </div>
      )}

      {href ? (
        <Link target="_blank" href={href} className="flex flex-col h-full">
          {showBlinker && <Blinker color="green" />}
          <div className="p-2">
            <Image
              src={logoLink}
              alt={`${title} logo`}
              width={50}
              height={50}
            />
          </div>
          <div className="text-3xl font-bold p-2 dark:text-black">{title}</div>

          <div className="text-justify text-md text-neutral-600 p-2 flex-grow overflow-y-auto">
            {content}
          </div>

          {techList && (
            <div className="p-2 flex flex-wrap gap-2 mt-auto">
              {techList.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white text-sm text-blue-600 px-2 py-1 rounded-md shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </Link>
      ) : (
        <div className="flex flex-col h-full">
          <div className="p-2">
            <Image
              src={logoLink}
              alt={`${title} logo`}
              width={50}
              height={50}
            />
          </div>
          {showBlinker && <Blinker color="red" />}
          <div className="text-3xl font-bold p-2 dark:text-black">{title}</div>

          <div className="text-justify text-md text-neutral-600 p-2 flex-grow overflow-y-auto">
            {content}
          </div>

          {techList && (
            <div className="p-2 flex flex-wrap gap-2 mt-auto">
              {techList.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-white text-sm text-blue-600 px-2 py-1 rounded-md shadow-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
