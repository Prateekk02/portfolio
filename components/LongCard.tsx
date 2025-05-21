'use client'
import { useState } from 'react'
import Link from 'next/link'
import { LongCardProps } from '@/lib/types'
import MoreOption from './ui/more-option'

export const LongCard: React.FC<LongCardProps> = ({ itemList }) => {
  const INITIAL_COUNT = 2;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleSeeMore = () => {
    if (visibleCount >= itemList.length) {
      setVisibleCount(INITIAL_COUNT); 
    } else {
      setVisibleCount(prev => prev + 2); 
    }
  }

  const visibleItems = itemList.slice(0, visibleCount);

  return (
    <div>
      {visibleItems.map((item, idx) => (
        <div key={`blog-link-${idx}`}>
          {item.link ? (
            <Link
              href={item.link}
              className='flex justify-between mt-5 dark:bg-blue-200 hover:scale-105 bg-[#f3f4f6] dark:shadow-blue-950 hover:bg-[#d1d1d2] dark:hover:bg-blue-300 border shadow-lg rounded-md p-8 items-center duration-300 dark:hover:shadow-xl dark:hover:shadow-blue-950 hover:shadow-xl'
              target='_blank'
            >
              <div className="font-semibold text-black text-md">{item.title}</div>
              {item.views && (
                <div className="text-neutral-600 text-lg">{item.views} views</div>
              )}
            </Link>
          ) : (
            <div className='flex justify-between mt-5 dark:bg-blue-200 bg-[#f3f4f6] hover:scale-105 dark:shadow-blue-950 hover:bg-[#d1d1d2] dark:hover:bg-blue-300 border shadow-lg rounded-md p-4 items-center duration-300 dark:hover:shadow-xl dark:hover:shadow-blue-950 hover:shadow-xl'>
              <div className="font-semibold text-black text-md">{item.title}</div>
            </div>
          )}
        </div>
      ))}

      {itemList.length > INITIAL_COUNT && (
        <div className="flex justify-center">
          <button onClick={handleSeeMore}>
            <MoreOption title={visibleCount >= itemList.length ? 'Show Less' : 'See More Blogs'} />
          </button>
        </div>
      )}
    </div>
  );
};
