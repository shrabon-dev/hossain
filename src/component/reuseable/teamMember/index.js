import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { motion,inView,cubicBezier  } from "framer-motion"

export default function TeamMemberItem(props) {
  const subContainer = {
    show : {
      transition:{
        delayChildren:.4,
        staggerChildren:.35,
      }
    }
  }

  const subChildAnimateY = {
    hidden : {
      opacity:0,
      rotate:180,
      x:-200,
    },
    show : {
      opacity:1,
      rotate:0,
      x:0,
      transition:{
        ease:cubicBezier(0.2, .2, .02, 0.72),
        duration:1.6,
      }
    }

  }
  return (
    <>
            <motion.div variants={props.variants} className='lg:w-48 md:w-48 tablet:w-48 sm_mobile:w-44 group mb-10 text-center'>
                  <div className='border-2 m-auto border-active w-full tablet:w-48 sm_mobile:w-44  tablet:h-48 sm_mobile:h-44 rounded-full relative'> 
                    <div className='bg-2nd_color w-full h-full rounded-full bottom-2 duration-300 ease-in-out overflow-hidden'>
                        <img className='w-full h-full block' src={props.img} alt='team 1'/>
                    </div>
                  </div>
                  <div className='text-center pt-10'>
                    <motion.h3 initial={{ y:-50,opacity:0 }} whileInView={{ y:0,opacity:1}} viewport={{ once:true }} transition={{ duration:1,delay:1 }} className='text-gray-200 font-poppin font-medium text-xl pb-2'>{props.name}</motion.h3>
                    <motion.h6 initial={{ y:-50,opacity:0 }} whileInView={{ y:0,opacity:1}} viewport={{ once:true }} transition={{ duration:1,delay:1 }} className='text-gray-600 font-poppin font-medium text-sm pb-2'>{props.desi}</motion.h6>
                    <div>
                    <motion.ul initial={'hidden'} whileInView={'show'} variants={subContainer} className='text-white flex space-x-5 items-center justify-center text-center'>
                            <motion.li variants={subChildAnimateY}><a className='text-active hover:text-gray-600 duration-300 ease-in-out text-lg' href=''><FaLinkedinIn className='inline-block'/></a></motion.li>
                            <motion.li variants={subChildAnimateY}><a className='text-active hover:text-gray-600 duration-300 ease-in-out text-lg' href=''><FaTwitter className='inline-block'/></a></motion.li>
                            <motion.li variants={subChildAnimateY}><a className='text-active hover:text-gray-600 duration-300 ease-in-out text-lg' href=''><FaYoutube className='inline-block'/></a></motion.li>
                            <motion.li variants={subChildAnimateY}><a className='text-active hover:text-gray-600 duration-300 ease-in-out text-lg' href=''><FaFacebookF className='inline-block'/></a></motion.li>
                    </motion.ul>
                    </div>
                  </div>
            </motion.div>
    </>
  )
}
