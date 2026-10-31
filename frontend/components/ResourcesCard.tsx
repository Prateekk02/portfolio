import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ResourcesCardProps {
  title: string;
  content: string;
  href: string;
}

const ResourcesCard: React.FC<ResourcesCardProps> = ({
  title,
  content,
  href,
}) => {
  return (
    <>
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <div
          className="relative lg:w-[400px] h-[215px] p-4 hover:scale-102 flex flex-col rounded-lg bg-gradient-to-br from-[#f3f4f6] via-[#d1d5db] to-[#f3f4f6] 
            dark:bg-gradient-to-br dark:from-[#D8E1FF]  dark:to-[#F4F6FA] 
            dark:hover:shadow-blue-950 dark:hover:bg-blue-300 duration-300 
            hover:bg-[#d1d1d2] hover:shadow-xl border"
        >
          <div className="absolute top-1 right-1">
            <ExternalLink />
          </div>
          <div className="text-2xl font-semibold p-2 dark:text-black">
            {title}
          </div>
          <div className="text-justify text-lg text-neutral-600 p-2 flex-grow overflow-y-auto">
            {content}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ResourcesCard;
