import React from 'react'
import { motion,useInView , animate,initial,transition } from "framer-motion"


export default function PromotionItem(props) {
    let Icon = props.icon
    let variants = props.variants
  return (
    <>
        <motion.div variants={variants} className='flex items-center bg-2nd_color p-4 rounded-full mb-5 '>
                <span className='bg-main_color h-full tablet:p-6 sm_mobile:p-2 rounded-full tablet:mr-6 sm_mobile:mr-2'>
                <Icon className='inline-block text-6xl text-active'/>
                </span>
                <div>
                <h5 className='font-poppin text-white lg:text-xl md:text-lg sm_mobile:text-base font-medium'>{props.title}</h5>
                <p className='font-poppin text-gray-400 lg:text-xs md:text-xs sm_mobile:text-xs sm_mobile:leading-[1.7] font-light leading-loose pt-3'>{props.shortDesc}</p>
                </div>
        </motion.div>
    </>
  )
}
