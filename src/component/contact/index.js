import React from 'react'
import {HiOutlineMail } from 'react-icons/hi';
import {IoCallSharp,IoLocationSharp,IoLogoWhatsapp } from 'react-icons/io5';
import Title from '../reuseable/heading';
import { motion,cubicBezier} from "framer-motion"
// import {IoLocationSharp } from 'react-icons/im';

export default function ContactUs() {
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
          x:-200,
        },
        show : {
          opacity:1,
          x:0,
          transition:{
            ease:cubicBezier(0.2, .2, .02, 0.92),
            duration:1,
          }
        },

      }
      const childAnimateY = {
        hidden : {
          opacity:0,
          y:40,
        },
        show : {
          opacity:1,
          y:0,
          transition:{
            ease:cubicBezier(0.6, .02, -.1, -0.05),
            duration:1,
          }
        },

      }
  return (
    <>
    <div className='bg-white'>
        <div className='relative overflow-hidden bg-main_color rounded-tr-[300px]'>
            <div className='absolute'>
                <span className='w-96 h-32 bg-white block rotate-45 absolute -top-6 -left-28 '></span>
                <span className='w-96 h-32 bg-active block rotate-45 shadow-2xl'></span>
            </div>
            <div className='container py-20 overflow-hidden'>
                {/* Section Heading Start */}
                
                <Title shortTile='Here are all expert members' title='Contact With Us' shortDescription='' waterMark='Contact' />
                {/* Section Heading End */}
                <motion.h6 initial={{ y:100,opacity:0 }} whileInView={{ y:0,opacity:1 }} transition={{ duration:1 }} viewport={{ once:true }} className='font-poppin tablet:text-4xl sm_mobile:text-2xl sm_mobile:leading-relaxed mb-2 text-gray-300 font-normal !leading-relaxed text-center tablet:w-2/3 m-auto'> <span className='text-active'>Hossain.</span> - A digital agency. You will get all best solution from here.</motion.h6>
                <div className='tablet:flex justify-between tablet:py-32 sm_mobile:py-10 gap-5'>
                    <motion.div initial={'hidden'} whileInView={'show'} viewport={{ once:true }} variants={container} className='tablet:w-1/2 sm_mobile:w-full'>

                        <motion.div variants={childAnimateX} className='flex tablet:w-3/4 sm_mobile:w-full mb-9 justify-start gap-5 group items-center bg-2nd_color p-3 rounded-full 
                        relative after:w-0 after:duration-700 after:ease-in-out after:origin-top hover:after:w-[93%] after:h-3/4 after:bg-active after:absolute after:top-1/2 after:left-4 z-10 after:-z-10 after:rounded-full after:-translate-y-1/2'>
                            <span className='w-20 h-20 lg_tablet:w-20 lg_tablet:h-20 tablet:w-12 tablet:h-12 bg-active group-hover:bg-main_color duration-700 ease-in-out rounded-full flex justify-center items-center '> <HiOutlineMail className='inline-block lg_tablet:text-6xl tablet:text-3xl text-6xl text-gray-100'/> </span>
                                <p className='font-poppin lg_tablet:text-lg tablet:text-[10px] sm_mobile:text-base text-gray-300 font-normal'>hossain@gmail.com <span className='block pt-1'>info@gmail.com</span></p>
                        </motion.div>
                        <motion.div variants={childAnimateX} className='flex tablet:w-3/4 sm_mobile:w-full mb-9 justify-start gap-5 group items-center bg-2nd_color p-3 rounded-full 
                        relative after:w-0 after:duration-700 after:ease-in-out after:origin-top hover:after:w-[93%] after:h-3/4 after:bg-active after:absolute after:top-1/2 after:left-4 z-10 after:-z-10 after:rounded-full after:-translate-y-1/2'>
                            <span className='w-20 h-20 lg_tablet:w-20 lg_tablet:h-20 tablet:w-12 tablet:h-12 bg-active group-hover:bg-main_color duration-700 ease-in-out rounded-full flex justify-center items-center '> <IoCallSharp className='inline-block lg_tablet:text-6xl tablet:text-3xl text-6xl text-gray-100'/> </span>
                                <p className='font-poppin lg_tablet:text-lg tablet:text-[10px] sm_mobile:text-base text-gray-300 font-normal'>+880 1236547819 <span className='block pt-1'>+880 1425639871</span></p>
                        </motion.div>
                        <motion.div variants={childAnimateX} className='flex tablet:w-3/4 sm_mobile:w-full mb-9 justify-start gap-5 group items-center bg-2nd_color p-3 rounded-full 
                        relative after:w-0 after:duration-700 after:ease-in-out after:origin-top hover:after:w-[93%] after:h-3/4 after:bg-active after:absolute after:top-1/2 after:left-4 z-10 after:-z-10 after:rounded-full after:-translate-y-1/2'>
                            <span className='w-20 h-20 lg_tablet:w-20 lg_tablet:h-20 tablet:w-12 tablet:h-12 bg-active group-hover:bg-main_color duration-700 ease-in-out rounded-full flex justify-center items-center '> <IoLogoWhatsapp className='inline-block lg_tablet:text-6xl tablet:text-3xl text-6xl text-gray-100'/> </span>
                            <p className='font-poppin lg_tablet:text-lg tablet:text-[10px] sm_mobile:text-base text-gray-300 font-normal'>+999 56565826556 <span className='block pt-1'>+881 12365896541</span></p>
                        </motion.div>
                        <motion.div variants={childAnimateX} className='flex tablet:w-3/4 sm_mobile:w-full mb-6 justify-start gap-5 group items-center bg-2nd_color p-3 rounded-full 
                        relative after:w-0 after:duration-700 after:ease-in-out after:origin-top hover:after:w-[93%] after:h-3/4 after:bg-active after:absolute after:top-1/2 after:left-4 z-10 after:-z-10 after:rounded-full after:-translate-y-1/2'>
                            <span className='w-20 h-20 lg_tablet:w-20 lg_tablet:h-20 tablet:w-12 tablet:h-12 bg-active group-hover:bg-main_color duration-700 ease-in-out rounded-full flex justify-center items-center '> <IoLocationSharp className='inline-block lg_tablet:text-6xl tablet:text-3xl text-6xl text-gray-100'/> </span>
                                <p className='font-poppin lg_tablet:text-lg tablet:text-[10px] sm_mobile:text-base text-gray-300 font-normal'>Kashba Nama Para<span className='block pt-1'>Sherpu-Mymensingh</span></p>
                        </motion.div>
                        
                    </motion.div>
                    <div className='tablet:w-1/2 sm_mobile:w-full'>
                        <motion.form initial={'hidden'} whileInView={'show'} viewport={{ once:true }} variants={container} className='w-full m-auto bg-2nd_color p-6 rounded-md overflow-hidden'>
                            <h6  className='font-poppin lg_tablet:w-1/2 tablet:w-full m-auto text-xl mb-10 uppercase border-b border-hover_color/75 pb-3 text-gray-300 font-normal leading-relaxed text-center'> <span className='text-active'>Get Touch With Us</span> </h6>
                            <div>
                                <motion.input variants={childAnimateY} type='text' placeholder='Name' className='font-poppin mb-5 text-base font-light bg-hover_color/25 hover:bg-hover_color/50 duration-300 ease-in-out  rounded border-none outline-none w-full p-3 text-gray-300 ' />
                            </div>
                            <div>
                                <motion.input variants={childAnimateY} type='text' placeholder='Subject' className='font-poppin mb-5 text-base font-light bg-hover_color/25 hover:bg-hover_color/50 duration-300 ease-in-out rounded border-none outline-none w-full p-3 text-gray-300 ' />
                            </div>
                            <div>
                                <motion.input variants={childAnimateY} type='email' placeholder='Email' className='font-poppin mb-5 text-base font-light bg-hover_color/25 hover:bg-hover_color/50 duration-300 ease-in-out rounded border-none outline-none w-full p-3 text-gray-300 ' />
                            </div>
                            <div>
                                <motion.textarea variants={childAnimateY} placeholder='You Text....' className='font-poppin mb-5 h-32 resize-none text-base font-light bg-hover_color/25 hover:bg-hover_color/50 duration-300 ease-in-out rounded border-none outline-none w-full p-3 text-gray-300 '></motion.textarea>
                            </div>
                            <div className='text-center'>
                                <motion.button variants={childAnimateY} className='font-poppin mb-5 text-base font-light bg-hover_color/25 hover:bg-hover_color/50 duration-300 ease-in-out rounded border-none outline-none w-24 p-3 text-gray-300 '>Submit</motion.button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
