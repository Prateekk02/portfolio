import React from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { MoreOptionProps } from '@/lib/types'
import { motion } from 'motion/react'

const MoreOption: React.FC<MoreOptionProps> = ({title}) => {
  return (
    <div className="flex justify-center items-center text-md font-semibold dark:text-neutral-300 mt-12 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"> 
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="mr-1"
      >
        {title}
      </motion.div> 
      
      <motion.div
        initial={{ opacity: 0, x: 10, rotate: -90 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{
          y: title === 'Show Less' ? -2 : 2,
          transition: {
            duration: 0.2,
            ease: "easeInOut"
          }
        }}
      >
        {title !== 'Show Less' ? (
          <ChevronDown className='pt-1' />
        ) : (
          <ChevronUp className='pt-1'/>
        )}
      </motion.div>
    </div>
  )
}

export default MoreOption;