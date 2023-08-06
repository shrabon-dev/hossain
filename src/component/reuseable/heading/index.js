import { motion } from 'framer-motion'
import React from 'react'

export default function Title(props) {
  return (
    <>
        <motion.div  className='text-center xl:w-1/2 lg_tablet:w-2/3 tablet:w-3/4 sm_mobile:w-full m-auto tablet:pb-32 sm_mobile:pb-14 relative z-10'>
                <motion.h6 whileInView={{ y:0 }} initial={{ y:-200 }} transition={{ duration:1.6 }} className='font-poppin tablet:text-base sm_mobile:text-sm text-active pb-3 '>{props.shortTile}</motion.h6>
                <motion.h2 whileInView={{ y:0 }} initial={{ y:-200 }} transition={{ duration:1.6 }} className={`${props.txtColor ? 'titleH2Css '+props.txtColor:'titleH2Css'}`}>{props.title}</motion.h2>
                <motion.p whileInView={{ y:0 }} initial={{ y:-200 }} transition={{ duration:1.6 }} className='font-poppin tablet:text-sm sm_mobile:text-xs font-normal tablet:leading-normal sm_mobile:leading-[1.7] text-gray-400 pt-5'>{props.shortDescription ? props.shortDescription:''}</motion.p>
                {/* text shape */}
                <motion.span  whileInView={{ scale: 1, opacity: 1, x: '-50%', y: '-60%' }} initial={{ scale: 0.5, opacity: 0, x: '-50%', y: '-50%' }} transition={{ duration:1.6,delay:1.6 }}   style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform:'translate(-50%,-50%)'
        }} className='waterMarkCss'>{props.waterMark}</motion.span>        
        </motion.div>
    </>
  )
}
