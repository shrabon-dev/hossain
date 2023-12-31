import React from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { animate, cubicBezier, motion } from 'framer-motion';

export default function Banner() {

    const container = {
        animate : {
            transition:{
                staggerChildren:.95,
            }
        }
    }

    const childTopToBottom = {
        initial:{
            opacity:0,
            y:-100,
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                ease:cubicBezier(.05,.01,-.02,.95),
                duration:1.6,
            }
        }
    }
    const scaleAnimate = {
        initial:{
            scale:.6,
        },
        animate:{
            scale:1,
            transition:{
                ease:cubicBezier(.05,.01,-.02,.95),
                duration:1.6,
            }
        },
    }

  return (
    <>
    <div className='bg-white relative z-20'>
    <div className='rounded-br-[300px] bg-main_color'>
            {/* Shape start */}
            <div className='w-52 h-52 bg-[#9c902336] z-10 blur-3xl absolute right-0 top-2  tablet:block sm_mobile:hidden '></div>
        <div className='container lg:py-28 sm_mobile:py-28 relative '>
            <div className='flex justify-between tablet:flex-row sm_mobile:flex-col-reverse items-center'>
                <motion.div initial={'initial'} animate={'animate'} variants={container} className='md:w-1/2 tablet:w-2/3 sm_mobile:w-full tablet:text-left sm_mobile:text-center'>

                    <motion.h1 variants={childTopToBottom} className='font-k2d lg:text-8xl md:text-4xl tablet:text-6xl tablet:leading-[1.6] sm_mobile:text-3xl lg:pb-5 md:pb-10 text-white font-bold tablet:mt-0 sm_mobile:mt-10'>Build Your <motion.span variants={childTopToBottom} className='block lg:pt-5 xl:text-5xl lg:text-5xl md:text-4xl md:pt-2 tablet:text-4xl  lg:leading-none md:leading-normal'>Awesome Platform</motion.span> </motion.h1>
                    <motion.p variants={childTopToBottom} className='font-poppin text-gray-300 tablet:text-sm sm_mobile:text-xs font-normal sm_mobile:!leading-[1.8] tablet:w-full sm_mobile:w-full tablet:m-0 sm_mobile:m-auto sm_mobile:pt-6'>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, 
                        we will provide the best service for those of you who use our services.</motion.p>
                    <motion.div variants={childTopToBottom} className='flex items-center space-x-10 tablet:mt-10 sm_mobile:mt-0 tablet:justify-start sm_mobile:justify-center'>
                        <a href='#' className='bg-main_color after:ease-in-out after:duration-300 after:absolute after:top-0 after:left-0 after:-z-10 z-10 after:block after:bg-active after:w-0 hover:after:w-full after:h-full relative  border-active border-2 font-poppin font-normal tablet:text-lg sm_mobile:text-sm rounded-md mt-10 text-white py-2 px-5'>Learn More</a>
                        <a href='#' className='bg-2nd_color smallBig rounded-full tablet:p-4 sm_mobile:p-2 text-active relative after:absolute wiggle -bottom-4 after:border-2 after:border-active tablet:after:w-24 sm_mobile:after:w-16 tablet:after:h-24 sm_mobile:after:h-16 after:rounded-full after:-translate-y-1/2 after:-translate-x-1/2  after:top-1/2 after:left-1/2  '>
                            <BsPlayFill className='inline-block text-4xl'/>
                        </a>
                    </motion.div>

                </motion.div>
                <div className='md:w-1/2  tablet:w-1/2 sm_mobile:w-1/2 text-right flex justify-end relative'>
                    <span className='animate-moveTop absolute w-full z-[2] lg:bottom-[43%] tablet:bottom-[20%] xl:left-[25%] lg:left-0 md:block sm_mobile:hidden -translate-x-2/4  -translate-y-1/2 sm_mobile:bottom-0 lg_tablet:left-[-12%] md:left-[-60px] tablet:left-0 '>
                       <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:1.6,ease:'linear',delay:3 }} className=' lg:text-[2.8rem] lg_tablet:text-4xl tablet:text-[1.8rem] sm_mobile:text-[1.3rem] -rotate-90 w-[600px] text_stroke font-black'>Hossain A Creative Agency</motion.div>
                    </span>
                    <picture>
                        <motion.img initial={'initial'} animate={'animate'} variants={scaleAnimate} className="lg_tablet:w-[400px]  relative z-[1] tablet:w-80 rounded-lg block" src="./images/banner/banner.jpg" alt="banner png" />
                    </picture>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
