import React from 'react'
import { BookCardsProps } from '@/lib/types';


const BookCards: React.FC<BookCardsProps> = ({title}) => {
  return (
    <div className=''>
        <h1 className="">{title}</h1>
    </div>
  )
}

export default BookCards;
