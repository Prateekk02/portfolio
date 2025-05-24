import React from 'react'
import { FaMessage } from "react-icons/fa6";

const MessageBtn = () => {
  return (
    <div className='group flex justify-center items-center'>
        <div className="group-hover:scale-110 duration-300 transition-all ease-in-out p-2 shadow-neutral-300 mr-2  shadow-lg hover:shadow-xl rounded-full">
            <FaMessage className='text-neutral-600  hover:text-blue-600 group duration-300 cursor-pointer dark:text-white dark:hover:text-blue-600' size={18}/>
        </div>
    </div>
  )
}

export default MessageBtn