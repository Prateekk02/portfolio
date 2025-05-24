"use client";
import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { MessageCard } from "@/lib/types";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { motion } from "motion/react";

import WhatsAppBtn from "./ui/WhatsAppBtn";



const MessageBtn = () => {
  const [current, setCurrent] = useState<MessageCard | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));

  return (
    <div className="relative flex min-h-screen items-center justify-center  p-3 sm:p-4 md:p-6">
      {current && (
        <div className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-lg"></div>
      )}
      {current && (
        <motion.div
          layoutId={`message-card-${current.email}`}
          ref={ref}
          className="z-20 w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] mx-auto rounded-2xl 
          bg-gradient-to-br from-[#f3f4f6] via-[#d1d5db] to-[#f3f4f6] shadow-2xl"
        >
          <div className="flex w-full justify-center px-4 sm:px-6 pt-4 sm:pt-6 pb-2">
            <motion.div
              layoutId={`message-header-${current.email}`}
              className="text-lg sm:text-xl font-semibold text-neutral-800 text-center leading-tight px-2"
            >
              Want to hire me? Let&apos;s discuss.
            </motion.div>
          </div>
          <form className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4">
            {/* Name  */}
            <div className="flex flex-col">
              <label className="mb-1.5 sm:mb-2 font-semibold text-neutral-700 text-sm sm:text-base">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-neutral-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                placeholder="Your full name"
              />
            </div>

            {/* Email  */}
            <div className="flex flex-col">
              <label className="mb-1.5 sm:mb-2 font-semibold text-neutral-700 text-sm sm:text-base">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-neutral-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Number  */}
            <div className="flex flex-col">
              <label className="mb-1.5 sm:mb-2 font-semibold text-neutral-700 text-sm sm:text-base">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-neutral-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label className="mb-1.5 sm:mb-2 font-semibold text-neutral-700 text-sm sm:text-base">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-neutral-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                placeholder="What's this about?"
              />
            </div>

            {/* Message  */}

            <div className="flex flex-col">
              <label className="mb-1.5 sm:mb-2 font-semibold text-neutral-700 text-sm sm:text-base">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg border border-neutral-300 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm resize-none min-h-[80px] sm:min-h-[100px]"
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>

            {/* Submit button  */}
            <button
              type="submit"
              className="w-full mt-3 sm:mt-4 px-4 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] active:duration-75"
            >
              Send Message
            </button>

            <WhatsAppBtn />

            <p className="text-xs text-neutral-600 text-center mt-2">
              * Required fields
            </p>
          </form>
        </motion.div>
      )}
      <div className="group flex justify-center items-center">
        <div className="group-hover:scale-110 duration-300 transition-all ease-in-out p-2 shadow-neutral-300 mr-2  shadow-lg hover:shadow-xl rounded-full">
          <FaMessage
            className="text-neutral-600  hover:text-blue-600 group duration-300 cursor-pointer dark:text-white dark:hover:text-blue-600"
            size={18}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageBtn;