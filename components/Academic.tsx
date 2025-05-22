import React from 'react'
import AcademicCard from './AcademicCard'

const Academic = () => {
  return (
    <div className='mt-5'>
        <h1 className="text-4xl font-bold mt-10 mb-8">Academics</h1>
        <div className="flex flex-col">
            <AcademicCard />
        </div>
    </div>
  )
}

export default Academic