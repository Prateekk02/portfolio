"use client";
import React, { useState, useRef } from "react";
import { Download } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast, ToastContainer } from "react-toastify";

const Resume: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const lastClick = useRef<number>(0);
  const THROTTLE_INTERVAL = 1000;

  const handleDownload = () => {
    const now = Date.now();

    if (now - lastClick.current < THROTTLE_INTERVAL) {
      toast.warn("You're are clicking too fast! Chill....", {
        position: "bottom-center",
        autoClose: 1500,
      });
      return;
    }
    const link = document.createElement("a");
    link.href = "Prateek_Kumar.pdf";
    link.download = "Prateek_Kumar_Resume.pdf";

    lastClick.current = now;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.location.reload();
    toast.success("Resume downloaded successfully.", { autoClose: 1000 });
  };

  return (
    <>
      <motion.div
        initial={{ width: 48 }}
        whileHover={{ width: 160 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="fixed flex items-center justify-center bottom-10 right-8 h-12 rounded-full border border-neutral-400 dark:border-blue-800 shadow-lg dark:shadow-blue-950 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleDownload}
      >
        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="icon"
              className="flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Download className="text-neutral-600 dark:text-white" size={25} />
            </motion.div>
          ) : (
            <motion.span
              key="text"
              className="flex justify-center items-center text-sm font-medium text-neutral-600 dark:text-white whitespace-nowrap px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              Download Resume
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default Resume;