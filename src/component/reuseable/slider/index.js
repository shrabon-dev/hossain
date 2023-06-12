import React from 'react'
import { FaQuoteLeft,FaQuoteRight } from 'react-icons/fa'

export default function SliderPart(props) {
  return (
    <>
        <div  className={`p-4 mx-5 bg-2nd_color/75 text-center border border-active rounded-tl-[50px] rounded-br-[50px] `}>
            <p className='font-poppin font-light tablet:text-sm sm_mobile:text-xs text-gray-300 leading-relaxed pb-5'><FaQuoteLeft className='inline-block text-main_color text-6xl text- pr-4'/>{props.feedback}<FaQuoteRight className='inline-block text-6xl pl-4 text-main_color'/> </p>
            <div className='flex justify-start items-center gap-5'>
                <div className='w-20 h-20 overflow-hidden rounded-full'><picture><img src={props.img}/></picture></div>
                <div className='text-left '>
                <h4 className='font-poppin font-medium text-lg text-white uppercase'>{props.name}</h4>
                <p className='font-poppin font-light text-sm text-active'>{props.designation}</p>
                </div>
            </div>
        </div>
    </>
  )
}
