import React from 'react'
import { BlinkerProps } from '@/lib/types';

const colorMap: Record<string, string> = {
  red: 'bg-red-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',

};

const shadowMap: Record<string, string> = {
  red: 'shadow-[0_0_10px_3px_rgba(239,68,68,0.7)]',
  green: 'shadow-[0_0_10px_3px_rgba(34,197,94,0.7)]',
  blue: 'shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]',
  yellow: 'shadow-[0_0_10px_3px_rgba(234,179,8,0.7)]',
};

const Blinker: React.FC<BlinkerProps> = ({ color }) => {
  const bgClass = colorMap[color] || 'bg-green-500';
  const shadowClass = shadowMap[color] || 'shadow-[0_0_10px_3px_rgba(34,197,94,0.7)]';

  return (
    <>
      <div className={`absolute top-9 right-9 h-3 w-3 rounded-full ${bgClass} ${shadowClass} animate-ping`}></div>
      <div className={`absolute top-9 right-9 h-3 w-3 rounded-full ${bgClass}`}></div>
    </>
  )
}

export default Blinker;
