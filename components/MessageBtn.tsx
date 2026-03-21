"use client";

import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { MessageCard } from "@/lib/types";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { motion } from "motion/react";
import { EmailBtn, WhatsAppBtn, TwitterBtn, LinkedinBtn } from "./ui/SocialBtn";
import { toast } from "react-toastify";

const MessageBtn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [current, setCurrent] = useState<MessageCard | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    try {
      const res = await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        toast.success("I have got your message, will reach out to you soon.", {
          position: "bottom-left",
          autoClose: 5000,
        });
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.", {
          position: "bottom-left",
          autoClose: 5000,
        });
      }
    } catch {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-left",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 sm:bottom-24 sm:right-6 md:bottom-28 md:right-8 z-30">
      <div className="relative flex items-center justify-center">
        {current && (
          <motion.div
            layoutId="message-card"
            ref={ref}
            initial={{ opacity: 0, filter: "blur(8px)", y: -10 }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3,
            }}
            className="absolute -bottom-6 right-0 mb-4 w-[90vw] max-w-[360px] sm:max-w-[400px] md:max-w-[420px] mx-auto rounded-2xl bg-gradient-to-br from-[#f3f4f6] via-[#d1d5db] to-[#f3f4f6] dark:bg-gradient-to-br dark:from-[#D8E1FF]  dark:to-[#F4F6FA] dark:hover:shadow-blue-950 z-50 shadow-lg"
          >
            <div>
              <div className="flex w-full justify-center px-4 pt-3 mt-4 pb-1">
                <motion.div className="text-base sm:text-lg font-bold text-neutral-800 dark:text-black text-center leading-tight px-2">
                  Have a question? Drop your message.
                </motion.div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="p-4 sm:p-5 flex flex-col gap-3"
              >
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="contact-name" className="mb-1 text-neutral-700 text-sm sm:text-base">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2 text-sm sm:text-base rounded-md border text-black border-neutral-300 dark:border-neutral-700 bg-white/90  backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm"
                    placeholder="Your full name"
                  />
                </div>

                {/* Honey pot field  */}

                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="contact-email" className="mb-1 text-neutral-700  text-sm sm:text-base">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 text-sm sm:text-base rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/90 text-black backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="contact-message" className="mb-1 text-neutral-700  text-sm sm:text-base">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    className="w-full px-3 py-2 text-sm sm:text-base rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/90 text-black backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-sm resize-none min-h-[90px] sm:min-h-[110px]"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-2 sm:mt-3 px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r
                   from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg 
                   hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform 
                   hover:scale-[1.02] active:scale-[0.98] active:duration-75 cursor-pointer"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>

                <div className="flex justify-center items-center gap-4">
                  <WhatsAppBtn />
                  <EmailBtn />
                  <TwitterBtn />
                  <LinkedinBtn />
                </div>
              </form>
            </div>
          </motion.div>
        )}

        <motion.button
          layoutId="message-trigger"
          className="group flex justify-center items-center"
          onClick={() => setCurrent({} as MessageCard)}
        >
          <div className="group-hover:scale-110 transition-all ease-in-out p-3 shadow-md border dark:shadow-lg dark:shadow-blue-950 rounded-full">
            <FaMessage
              className="text-neutral-600 hover:text-blue-600 dark:text-white dark:hover:text-blue-500 transition duration-300 cursor-pointer"
              size={20}
            />
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default MessageBtn;
