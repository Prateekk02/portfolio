import React from 'react';
import { Book, GraduationCap, Calendar } from 'lucide-react';
import { academicItems } from '@/data/content';
import { AcademicProps } from '@/lib/types';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

const AcademicCard = () => {
  return (
    <div className="relative w-full">
      {/* Vertical timeline line */}
      <div className="absolute left-[24px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-blue-400 to-gray-200 dark:from-primary dark:via-blue-500 dark:to-gray-700" />
      
      {/* Academic items */}
      <div className="space-y-12">
        {academicItems.map((item, index) => (
          <AcademicItem key={index} item={item} isLast={index === academicItems.length - 1} />
        ))}
      </div>
    </div>
  );
};

const AcademicItem = ({ item }: { item: AcademicProps; isLast: boolean }) => {
  return (
    <div className="relative pl-14">
      {/* Timeline node */}
      <div className="absolute left-0 top-0 flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center z-10">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
      </div>

      {/* Content card */}
      <div className={cn(
        "relative p-6 rounded-lg bg-gradient-to-br from-[#f3f4f6] via-[#d1d5db] to-[#f3f4f6] dark:bg-gradient-to-br dark:from-blue-300 dark:via-blue-400 dark:to-blue-300 dark:hover:shadow-blue-950 dark:hover:bg-blue-300 duration-300 hover:bg-[#d1d1d2] hover:shadow-xl border",
        "transform transition-all duration-300 hover:shadow-xl",
      )}>
        {/* Institution and duration header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h3 className="font-bold text-2xl text-black ">{item.organization}</h3>
          <div className="flex items-center mt-2 sm:mt-0 text-neutral-700 ">
            <Calendar className="h-4 w-4 mr-1.5" />
            <span>{item.duration}</span>
          </div>
        </div>
        
        {/* Degree and location */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-black ">{item.degree}</h4>
          <p className="text-neutral-700 ">{item.location}</p>
          {item.grade && <p className="mt-1 text-neutral-700 font-medium">Grade: <span className="text-black font-semibold">{item.grade}</span></p>}
        </div>
        
        {/* Coursework */}
        {item.coursework.length > 0 && (
          <div className="mb-4">
            <h5 className="font-medium text-black flex items-center mb-2">
              <Book className="h-4 w-4 mr-2" />
              Key Coursework
            </h5>
            <div className="flex flex-wrap gap-2">
              {item.coursework.map((course, idx) => (
                <Badge key={idx} variant="secondary" className="bg-white text-sm text-blue-600 px-2 py-1 rounded-md shadow-lg">
                  {course}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {/* Honors */}
        {item.honors.length > 0 && (
          <div>
            <h5 className="font-medium text-black  mb-2">Honors & Awards</h5>
            <ul className="list-disc list-inside text-neutral-700 ">
              {item.honors.map((honor, idx) => (
                <li key={idx}>{honor}</li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Decorative element */}
        <div className="absolute top-5 -left-3 w-6 h-1 bg-primary rounded-full" />
      </div>
    </div>
  );
};

export default AcademicCard;
