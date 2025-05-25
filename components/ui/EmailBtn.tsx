'use client'

import React from 'react'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { motion } from 'motion/react'

const email = process.env.NEXT_PUBLIC_EMAIL_ADDRESS

function EmailBtn() {
  if (!email) return null

  return (
    <div className="flex justify-center items-center mt-2">
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration:0.3, ease:'easeInOut' }}
        className="bg-blue-500 dark:bg-blue-600 p-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
      >
        <Link
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email"
        >
          <MdEmail className="text-white dark:text-white text-2xl sm:text-3xl" />
        </Link>
      </motion.div>
    </div>
  )
}

export default EmailBtn
