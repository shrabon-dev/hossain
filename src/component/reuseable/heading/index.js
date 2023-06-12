import React from 'react'

export default function Title(props) {
  return (
    <>
        <div className='text-center tablet:w-1/3 sm_mobile:w-full m-auto tablet:pb-32 sm_mobile:pb-14 relative z-10'>
                <h6 className='font-poppin tablet:text-base sm_mobile:text-sm text-active pb-3 '>{props.shortTile}</h6>
                <h2 className='font-k2d font-bold  tablet:text-5xl sm_mobile:text-3xl text-gray-300'>{props.title}</h2>
                <p className='font-poppin tablet:text-sm sm_mobile:text-xs font-normal tablet:leading-normal sm_mobile:leading-[1.7] text-gray-400 pt-5'>{props.shortDescription ? props.shortDescription:''}</p>
                {/* text shape */}
                <span className='font-poppin lg_tablet:text-[200px] tablet:text-[100px] sm_mobile:text-[56px] -translate-x-1/2 -translate-y-1/2 tracking-wide text-stroke text-transparent font-bold absolute  top-1/4 left-1/2 z-[-1]'>{props.waterMark}</span>        
        </div>
    </>
  )
}
