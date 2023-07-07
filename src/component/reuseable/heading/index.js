import React from 'react'

export default function Title(props) {
  return (
    <>
        <div className='text-center xl:w-1/2 lg_tablet:w-2/3 tablet:w-3/4 sm_mobile:w-full m-auto tablet:pb-32 sm_mobile:pb-14 relative z-10'>
                <h6 className='font-poppin tablet:text-base sm_mobile:text-sm text-active pb-3 '>{props.shortTile}</h6>
                <h2 className={`${props.txtColor ? 'titleH2Css '+props.txtColor:'titleH2Css'}`}>{props.title}</h2>
                <p className='font-poppin tablet:text-sm sm_mobile:text-xs font-normal tablet:leading-normal sm_mobile:leading-[1.7] text-gray-400 pt-5'>{props.shortDescription ? props.shortDescription:''}</p>
                {/* text shape */}
                <span className='waterMarkCss'>{props.waterMark}</span>        
        </div>
    </>
  )
}
