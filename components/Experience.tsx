import React from 'react'
import ExperienceCard from './ExperienceCard'
 

function Experience() {
  return (
    <div className='mt-5'>
        <h1 className="text-4xl font-bold mt-10 mb-8">Experience</h1>
        <div className="flex flex-col">
            <ExperienceCard />
        </div>
    </div>
  )
}

export default Experience