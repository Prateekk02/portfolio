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
        <motion.div
          className="flex items-center justify-center h-full w-12"
          initial={{ opacity: 1, x: 70 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {!isHovered && (
            <Download className="text-neutral-600 dark:text-white" size={25} />
          )}
        </motion.div>

        <AnimatePresence>
          <motion.span
            className="ml-2 p-2 flex justify-center items-center text-sm font-medium text-neutral-600 dark:text-white whitespace-nowrap"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1, x: -10 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            Download Resume
          </motion.span>
        </AnimatePresence>
      </motion.div>
      <ToastContainer />
    </>
  );
};

export default Resume;
