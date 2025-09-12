 "use client"
 import React from 'react'
import { motion } from "framer-motion";
interface TeamCardProps{
     role:string
     name:string
     className:string
}
const TeamCard = ({role, name, className}:TeamCardProps) => {
  return (
    <motion.div className={`text-white bg-gray-400 w-[300px] md:w-[250px] relative h-72 flex justify-center ${className}  rounded-2xl overflow-hidden cursor-pointer transform-style-preserve-3d `}>

       <img src="/team-1.png" className='absolute -bottom-5 z-[3] h-[350px] md:h-auto' alt="" />

       <div className='w-fit bg-white absolute bottom-3 rounded-full flex p-1 pr-3  z-[5]    items-center gap-x-2 text-sm'>
        <span className='bg-slate-800 py-1.5 px-3.5 rounded-full text-purple-300'>{name}</span>
        
         <span className='text-black font-semibold'>{role}</span>
       </div>

       <img src="/primary-logo.png" className='h-[200px] opacity-[0.6] ' alt="" />
       
    </motion.div>

  )
}

export default TeamCard