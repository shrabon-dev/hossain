import React from 'react'
import { BsFillBrushFill, BsKanbanFill, BsPencilFill, BsReverseLayoutTextWindowReverse } from 'react-icons/bs'

export default function ServiceItem(props) {

    
      // Get the corresponding icon based on the prop value
      const IconComponent = props.icon;

  return (
    <>
        <div className='lg_tablet:w-[30%] lg:w-[30%] md:w-[32%] tablet:w-[46%] sm_mobile:w-[92%] tablet:m-0 sm_mobile:m-auto tablet:mb-14 sm_mobile:mb-14 relative  backdrop-blur-sm before:backdrop-blur-sm before:bg-2nd_color/80 before:absolute before:top-0 before:right-0 before:content before:w-[100%] before:h-[100%] before:z-[-1] after:bg-transparent after:absolute after:top-1/2 after:right-1/2 after:border-y-2 after:border-active after:translate-x-1/2 before:rounded-lg after:rounded-lg after:-translate-y-1/2 after:content after:w-[0%] hover:after:w-[101%] after:duration-300 origin-bottom-left after:h-[101%] after:z-[-2]  z-10 content-around bg-2nd_colo/25 hover:bg-2nd_color duration-300 ease-in-out   group  min-h-[240px] rounded p-4 text-center mb-14'> 
                <div className='w-24 h-24 shadow-lg shadow-active/20 absolute left-5 border-2 border-transparent group-hover:border-active top-5 -translate-y-1/2 -translate-x-1/2 m-auto flex justify-center group-hover:bg-white duration-300 ease-in-out  items-center rounded-full bg-main_color'><IconComponent className='inline-block duration-300 ease-in-out  text-white text-6xl group-hover:text-active'/></div>
                <p className='font-poppin text-xl font-medium text-gray-200 pb-5 pt-10'>{props.title}</p>
                <p className='font-poppin text-xs font-normal leading-loose text-gray-400 '>{props.description}</p>
        </div>
    </>
  )
}
