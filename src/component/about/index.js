import React from 'react'

export default function About() {
  return (
    <>
        <div className='relative '>
            <div className='container lg:pb-52 md:py-20 overflow-hidden'>
                <div className='flex tablet:flex-row sm_mobile:flex-col-reverse justify-between items-center gap-5'>
                    <div className='tablet:w-1/3 sm_mobile:w-1/2 relative tablet:float-none sm_mobile:float-right tablet:pl-0 sm_mobile:pl-5'>
                        <picture>
                            <img className='rounded-t-full rounded-r-full ' src='./images/about/abt.jpg' alt='about png'/>
                        </picture>
                        <picture>
                            {/* <img className='rounded-full  absolute -top-20 w-52 h-52 -left-32' src='./images/about/about.jpg' alt='about png'/> */}
                        </picture>
                        <picture>
                            {/* <img className='rounded-full w-32 h-32 absolute -bottom-32 -left-20' src='./images/about/abt2.jpg' alt='about png'/> */}
                        </picture>
                    </div>
                    <div className='tablet:w-1/2 '>
                        <h3 className='font-poppin text-white lg:text-6xl md:text-4xl  sm_mobile:text-3xl font-medium pb-8'>Introduction To Best<span className='block pt-3 text-active'> Digital Agency!!</span></h3>
                        <p className='font-poppin text-gray-400 lg:text-base md:text-base  tablet:text-base sm_mobile:text-sm font-light tablet:leading-relaxed sm_mobile:leading-[1.7] sm_mobile:text-justify pb-5'>Use this section to describe your company and the products you offer. 
                            about why you are in business. Use this pany and the products you offer. You could share your company’s story and details about why you are in business. </p>
                        <p className='font-poppin text-gray-400 tablet:text-base sm_mobile:text-sm font-light tablet:leading-relaxed sm_mobile:leading-[1.7] sm_mobile:text-justify'>Use this section to describe your company and the products you offer. 
                         You could share your company’s story and details about why you are in business. </p>

                         <div className='lg:text-5xl md:text-4xl tablet:text-4xl sm_mobile:text-4xl font-poppin font-medium text-2nd_color pt-10'>
                            <span className='block font-black text-active pb-2'>10 + </span> Years experience
                         </div>
                    </div>
                </div>
            </div>
            <span className='lg_tablet:w-[120%] tablet:w-full h-full lg_tablet:rotate-[12deg] bg-[#1bdbfd1a] blur-3xl -left-32 top-0 block absolute tablet:block sm_mobile:hidden'></span>
        </div>
    </>
  )
}
