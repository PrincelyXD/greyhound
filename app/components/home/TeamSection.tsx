import React from 'react'
import TeamCard from '../TeamCard'

const TeamSection = () => {
  return (
    <div className='py-24  md:p-32'>
            <div className="text-center mb-16">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
    <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">
      Meet the Team
    </span>
  </h2>
  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
    A passionate group of designers, developers, and strategists dedicated to 
    building world-class digital experiences that drive innovation and growth.
  </p>
</div>

          
            <div className="grid max-w-[1000px] mx-auto  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 px-5  gap-8 justify-items-center">
                <TeamCard name='Anslem' role='Back-end Developer' className='lg:mt-13'/>
                <TeamCard name='Clinton' role='Creative Director' className=''/>
                <TeamCard name='Princely' role='Front-end Developer' className='lg:mt-13'/>
             
            </div>
        {/* build team card from drible design img */}
    </div>
  )
}

export default TeamSection