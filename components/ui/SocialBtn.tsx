"use client";

import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "motion/react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from 'react-icons/fa6'


const email = process.env.NEXT_PUBLIC_EMAIL_ADDRESS;
const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER

export const TwitterBtn = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="bg-black dark:bg-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
      >
        <Link
          href="https://x.com/codeWalker66"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on X (Twitter)"
        >
          <FaXTwitter className="text-white dark:text-white text-xl sm:text-2xl" />
        </Link>
      </motion.div>
    </div>
  );
};

export const LinkedinBtn = () => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="bg-blue-600 dark:bg-blue-700 p-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
      >
        <Link
          href="https://www.linkedin.com/in/prateekk02/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect on LinkedIn"
        >
          <FaLinkedinIn className="text-white dark:text-white text-xl sm:text-2xl" />
        </Link>
      </motion.div>
    </div>
  );
};

export const EmailBtn = () => {
  if (!email) return null;

  return (
    <div className="flex justify-center items-center mt-2">
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-blue-500 dark:bg-blue-600 p-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
      >
        <Link
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email"
        >
          <MdEmail className="text-white dark:text-white text-2xl sm:text-3xl" />
        </Link>
      </motion.div>
    </div>
  );
}


export const WhatsAppBtn = () => {
  if (!phone) return null 

  return (
    <div className="flex justify-center items-center mt-2">
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration:0.3, ease:'easeInOut' }}
        className="bg-green-500 dark:bg-green-600 p-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
      >
        <Link
          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-white dark:text-white text-2xl sm:text-3xl" />
        </Link>
      </motion.div>
    </div>
  )
}




