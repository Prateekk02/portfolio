"use client";
import { useState } from "react";
import Link from "next/link";
import { LongCardProps } from "@/lib/types";
import MoreOption from "./ui/more-option";
import { motion } from "motion/react";
import { childVariantStaggering, parentVariantStaggering } from "@/lib/motion";

export const LongCard: React.FC<LongCardProps> = ({ itemList }) => {
  const INITIAL_COUNT = 2;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleSeeMore = () => {
    if (visibleCount >= itemList.length) {
      setVisibleCount(INITIAL_COUNT);
    } else {
      setVisibleCount((prev) => prev + 2);
    }
  };

  const visibleItems = itemList.slice(0, visibleCount);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={parentVariantStaggering}
    >
      {visibleItems.map((item, idx) => (
        <div key={`blog-link-${idx}`}>
          {item.link ? (
            <motion.div
              key={`long-card-${item.title}`}
              initial="initial"
              animate="animate"
              variants={childVariantStaggering}
              viewport={{once:false, amount:0.3}}
            >
              <Link
                href={item.link}
                className="flex justify-between mt-5 p-8 items-center rounded-lg bg-gradient-to-br from-[#f3f4f6] via-[#d1d5db] to-[#f3f4f6] 
             dark:bg-gradient-to-br dark:from-[#D8E1FF]  dark:to-[#F4F6FA] dark:hover:shadow-blue-950
               dark:hover:bg-blue-300 duration-300 hover:bg-[#d1d1d2] hover:shadow-xl hover:scale-105 border "
                target="_blank"
              >
                <div className="font-semibold text-black text-md">
                  {item.title}
                </div>
                {item.views && (
                  <div className="text-neutral-600 text-lg">
                    {item.views} views
                  </div>
                )}
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial="initial"
              animate="animate"
              variants={childVariantStaggering}
              viewport={{once:false, amount:0.3}}
              className="flex justify-between mt-5 p-4 items-center rounded-lg bg-gradient-to-br from-[#f3f4f6] via-[#d1d5db] to-[#f3f4f6] 
              dark:bg-gradient-to-br dark:from-[#D8E1FF]  dark:to-[#F4F6FA] dark:hover:shadow-blue-950 dark:hover:bg-blue-300 duration-300 hover:bg-[#d1d1d2] hover:shadow-xl border"
            >
              <div className="font-semibold text-black text-md">
                {item.title}
              </div>
            </motion.div>
          )}
        </div>
      ))}

      {itemList.length > INITIAL_COUNT && (
        <div className="flex justify-center">
          <button onClick={handleSeeMore}>
            <MoreOption
              title={
                visibleCount >= itemList.length ? "Show Less" : "See More Blogs"
              }
            />
          </button>
        </div>
      )}
    </motion.div>
  );
};
