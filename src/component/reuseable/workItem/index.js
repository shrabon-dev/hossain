import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from "framer-motion"

export default function WorkItem(props) {
  return (
    <>
        <motion.div variants={props.variants}  className="lg:w-[32%] md:w-[32%] sm_mobile:w-[48%] h-auto relative  bg-transparent border border-2nd_color group  ease-in-out duration-300 rounded p-4 text-center mb-10"> 
              <div className='absolute border-y-2 border-active backdrop-blur-md bg-2nd_color/60 w-full h-0 -translate-y-1/2 origin-bottom right-0 top-1/2 group-hover:h-3/5 opacity-0 group-hover:opacity-100 overflow-hidden ease-in-out duration-300  flex flex-col items-center justify-center'>
             
                <div className=' text-center'>
                  <h className='text-white  lg:text-lg md:text-sm sm_mobile:text-sm  font-poppin font-medium'>{props.title}</h>
                  <p className='lg:text-sm sm_mobile:text-xs font-normal font-poppin text-gray-200 tablet:pt-4 pb-1'>Tecqnology : <span className='text-active/95 pr-2 inline-block'>{props.tech}</span></p>
                  <p className='lg:text-sm sm_mobile:text-xs font-normal font-poppin text-gray-200'>Published : <span className='text-active/95 pr-2 inline-block'>{props.date}</span></p>
                </div>  
              <a href='#' className='hover:bg-white hover:text-black rounded-full bg-transparent !w-14 !h-8 flex lg:text-sm sm_mobile:text-xs font-normal font-poppin text-active justify-center items-center ease-in-out opacity-0 group-hover:opacity-100 duration-700 mt-1'>View</a>
              </div>
                <div className='w-full'>
                <picture>
                    <img className='w-full h-full object-cover' src={props.img}/>
                </picture>
                </div>              
        </motion.div>
    </>
  )
}
