import React from 'react'
import { BsPlayFill } from 'react-icons/bs'

export default function Banner() {
  return (
    <>
    <div>
            {/* Shape start */}
            <div className='w-52 h-52 bg-[#9c902336] blur-3xl absolute right-0 top-2  tablet:block sm_mobile:hidden'></div>
        <div className='container py-32 relative'>
            <div className='flex justify-between tablet:flex-row sm_mobile:flex-col-reverse items-center'>
                <div className='md:w-1/2 tablet:w-2/3 sm_mobile:w-full tablet:text-left sm_mobile:text-center'>
                    <h1 className='font-k2d lg:text-8xl md:text-4xl tablet:text-6xl tablet:leading-[1.6] sm_mobile:text-3xl lg:pb-5 md:pb-10 text-white font-bold tablet:mt-0 sm_mobile:mt-10'>Build Your <span className='block lg:pt-5 xl:text-5xl lg:text-5xl md:text-4xl md:pt-2 tablet:text-4xl  lg:leading-none md:leading-normal'>Awesome Platform</span> </h1>
                    <p className='font-poppin text-gray-300 tablet:text-sm sm_mobile:text-xs font-normal sm_mobile:!leading-[1.8] tablet:w-full sm_mobile:w-full tablet:m-0 sm_mobile:m-auto sm_mobile:pt-6'>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, 
                        we will provide the best service for those of you who use our services.</p>
                   
                    <div className='flex items-center space-x-10 tablet:mt-10 sm_mobile:mt-5 tablet:justify-start sm_mobile:justify-center'>
                        <a href='#' className='bg-main_color after:ease-in-out after:duration-300 after:absolute after:top-0 after:left-0 after:-z-10 z-10 after:block after:bg-active after:w-0 hover:after:w-full after:h-full relative  border-active border-2 font-poppin font-normal tablet:text-lg sm_mobile:text-sm rounded-md mt-10 text-white py-2 px-5'>Learn More</a>
                        <a href='#' className='bg-2nd_color smallBig rounded-full tablet:p-4 sm_mobile:p-2 text-active relative after:absolute wiggle -bottom-4 after:border-2 after:border-active tablet:after:w-24 sm_mobile:after:w-16 tablet:after:h-24 sm_mobile:after:h-16 after:rounded-full after:-translate-y-1/2 after:-translate-x-1/2  after:top-1/2 after:left-1/2  '>
                            <BsPlayFill className='inline-block text-4xl'/>
                        {/* <span class=" absolute inline-flex h-full w-full top-0 left-0 rounded-full bg-[#0E182B] opacity-75"></span> */}
                        </a>
                    </div>
                </div>
                <div className='md:w-1/2 tablet:w-1/2 sm_mobile:w-1/2 text-right flex justify-end relative'>
                    <picture>
                        <img className="w-[500px] block" src="./images/banner/banner.png" alt="banner png" />
                    </picture>
                    <span className='absolute tablet:-bottom-32 sm_mobile:bottom-0 tablet:right-0 sm_mobile:right-36 tablet:w-1/2 sm_mobile:w-full'>
                        <picture>
                            <img className='w-52' src='./images/banner/shape.png' />
                        </picture>
                    </span>
                    <span className='absolute tablet:top-0 sm_mobile:-top-28 tablet:-right-10 sm_mobile:right-0 tablet:w-1/2 sm_mobile:w-full'>
                        <picture>
                            <img className='w-52' src='./images/banner/shape2.png' />
                        </picture>
                    </span>
                    <span className='absolute tablet:top-52 sm_mobile:bottom-0 lg:left-20  md:-left-32 sm_mobile:left-0 tablet:w-1/2 sm_mobile:w-full'>
                        <picture>
                            <img className='w-52' src='./images/banner/shape3.png' />
                        </picture>
                    </span>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}
