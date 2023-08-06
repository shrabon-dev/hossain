import React, { useEffect, useRef } from 'react'
import { MdSupportAgent } from 'react-icons/md'
import { AiFillStar, AiOutlineGlobal,AiOutlineTeam } from 'react-icons/ai'
import { motion,useInView , animate,initial,transition,cubicBezier,AnimatePresence} from "framer-motion"
import PromotionItem from '../reuseable/promotion'



export default function Promoton() {
  const frameMotion = useRef(null)
  const isInView = useInView(frameMotion,{ once: true })

  const container = {
    show : {
      transition:{
        delayChildren:.04,
        staggerChildren:.35,
      }
    }
  }
  const childAnimateX = {
    hidden : {
      opacity:0,
      x:200,
    },
    show : {
      opacity:1,
      x:0,
      transition:{
        ease:cubicBezier(0.2, .2, .02, 0.92),
        duration:1.6,
      }
    },
    exit:{
      opacity:0,
      y:-200,
    }
  }
  const childAnimateY = {
    hidden : {
      opacity:0,
      y:200,
    },
    show : {
      opacity:1,
      y:0,
      transition:{
        ease:cubicBezier(0.2, .2, .02, 0.92),
        duration:1.6,
      }
    },
    exit:{
      opacity:0,
      y:-200,
    }
  }

  useEffect(()=>{
    console.log('See the ViewPort' , isInView)
  },[isInView])


  return (
    <>
    <AnimatePresence>
      <div className='bg-white '>
      <div className='relative bg-main_color z-[1] tablet:rounded-tl-[300px]'>
        <span className='w-96 h-96 rotate-12 z-[-1] bg-[#083f087a] absolute left-0 top-0 block blur-4xl tablet:block sm_mobile:hidden'></span>
        <div ref={frameMotion} className='container tablet:py-32 sm_mobile:py-14 relative z-[2]'>
          <div className='md:flex justify-between lg:gap-20 md:gap-5'>
            <motion.div initial={'hidden'} animate={`${isInView ? 'show':'hidden'}`} variants={container} className='xl:w-1/2 lg:w-1/2 md:w-1/2 lg_tablet:w-1/2 tablet:w-full tablet:mb-0 sm_mobile:mb-10 sm_mobile:w-full'>
              <motion.h2 variants={childAnimateY} className='font-poppin text-white lg:text-5xl md:text-4xl sm_mobile:text-3xl lg:font-bold md:font-semibold pb-8 !leading-normal'>
              How we support our client all over the world
              </motion.h2>
              <motion.p variants={childAnimateY} className='font-poppin text-gray-400 lg:text-base md:text-base font-light leading-relaxed pb-5'>SaaS become a common delivery model for many business application, including 
                office software, messaging software, payroll processing software, DBMS software, 
                management software</motion.p>
                <motion.div  variants={childAnimateY} className='pt-5 lg_tablet:mb-0 tablet:mb-10'>
                  <p className='font-poppin text-gray-200 lg:text-base md:text-base font-medium uppercase leading-relaxed mt-10 pb-2'>Client Satisfaction</p>
                   <span><AiFillStar className='inline-block text-active text-xl'/>
                   <AiFillStar className='inline-block text-active text-xl'/>
                   <AiFillStar className='inline-block text-active text-xl'/>
                   <AiFillStar className='inline-block text-active text-xl'/>
                   <AiFillStar className='inline-block text-active text-xl'/>
                   <span className='font-poppin text-gray-200 lg:text-base md:text-base font-medium'>(5.00)</span>
                   </span>
                </motion.div>
            </motion.div>
            <div className='xl:w-1/3 lg:w-1/2 md:w-1/2 lg_tablet:w-1/2 tablet:w-full sm_mobile:w-full'>
                <motion.div initial={'hidden'} animate={`${isInView ? 'show':'hidden'}`} variants={container} className='inview'>
                  
                    <PromotionItem variants={childAnimateX} icon={AiOutlineTeam} title="Multilingual Support" shortDesc="Our team consists of professionals fluent in various languages, enabling us to provide support in the client's preferred language."/>
                    <PromotionItem variants={childAnimateX} icon={AiOutlineGlobal} title="Global Presence" shortDesc="Our global network enables us to provide consistent and reliable services across different time zones and languages."/>
                    <PromotionItem variants={childAnimateX} icon={MdSupportAgent} title="24/7 Support" shortDesc="Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form"/>
  
                </motion.div>
            </div>
       
          </div>
        </div>
      </div>
      </div>
    </AnimatePresence>
    
    </>
  )
}
