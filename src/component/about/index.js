import React from 'react'
import { motion,inView  } from "framer-motion"

export default function About() {
  return (
    <>
        <div className='relative bg-white tablet:rounded-tl-[300px]'>
            <div className='container md:py-14 tablet:py-10 sm_mobile:py-5'>
                <div className='flex tablet:flex-row sm_mobile:flex-col-reverse justify-between items-center gap-5'>
              
                    <motion.div className='tablet:w-1/3 sm_mobile:w-1/2 relative tablet:float-none shadow-md sm_mobile:float-right tablet:pl-0 sm_mobile:pl-5'>
                        <picture>
                            <motion.img  viewport={{ once:true }} whileInView={{ scale:1,opacity:1 }} initial={{ scale:.5,opacity:0 }} transition={{ duration:1,delay:1 }} className='w-full block relative z-10  rounded-md' src='./images/about/about2.jpg' alt='about jpg'/>
                        </picture>
                        <motion.span  viewport={{ once:true }} whileInView={{ y:0 }} initial={{ y:-200 }} transition={{ duration:1 }} className='w-full h-4/6 from-active to-white bg-gradient-to-br  absolute rounded-3xl shadow-lg -top-[8%] -left-[10%] z-0 block'>
                        </motion.span>
                        <motion.span  viewport={{ once:true }} whileInView={{ y:0 }} initial={{ y:200 }} transition={{ duration:1 }} className='w-full h-4/6 from-green-600 to-white bg-gradient-to-t absolute rounded-3xl shadow-lg -bottom-[8%] -right-[10%] z-0 block'>
                        </motion.span>
                    </motion.div>
                 
                    <div className='tablet:w-1/2 '>
                        <motion.h3  viewport={{ once:true }} whileInView={{ x:0 }} initial={{ x:200 }} transition={{ duration:1.6 }} className='font-poppin text-main_color lg:text-6xl md:text-4xl  sm_mobile:text-3xl font-medium pb-8'>Introduction To Best<span className='block pt-3 text-active'> Digital Agency!!</span></motion.h3>
                 
                        <motion.p  viewport={{ once:true }} whileInView={{ x:0 }} initial={{ x:200 }} transition={{ duration:1.6 }} className='font-poppin text-gray-900 lg:text-base md:text-base  tablet:text-base sm_mobile:text-sm font-normal tablet:leading-relaxed sm_mobile:leading-[1.7] sm_mobile:text-justify pb-5'>Use this section to describe your company and the products you offer. 
                            about why you are in business. Use this pany and the products you offer. You could share your company’s story and details about why you are in business. </motion.p>
                        <motion.p  viewport={{ once:true }} whileInView={{ x:0 }} initial={{ x:200 }} transition={{ duration:1.6 }} className='font-poppin text-gray-900 tablet:text-base sm_mobile:text-sm font-normal tablet:leading-relaxed sm_mobile:leading-[1.7] sm_mobile:text-justify'>Use this section to describe your company and the products you offer. 
                         You could share your company’s story and details about why you are in business. </motion.p>

                         <motion.div  viewport={{ once:true }} whileInView={{ x:0 }} initial={{ x:200 }} transition={{ duration:1.6 }} className='lg:text-6xl md:text-4xl tablet:text-4xl sm_mobile:text-4xl font-poppin font-medium text-main_color pt-10'>
                            <span className='block font-black text-active pb-2'>10 + </span> Years experience
                         </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
