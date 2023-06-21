import React from 'react'

export default function About() {
  return (
    <>
        <div className='relative bg-white h-[70vh] tablet:rounded-tl-[300px]'>
            <div className='container md:py-14 tablet:py-10 sm_mobile:py-5'>
                <div className='flex tablet:flex-row sm_mobile:flex-col-reverse justify-between items-center gap-5'>
                    <div className='tablet:w-1/3 sm_mobile:w-1/2 relative tablet:float-none sm_mobile:float-right tablet:pl-0 sm_mobile:pl-5'>
                        <picture>
                            <img className='w-full block' src='./images/about/abt.png' alt='about png'/>
                        </picture>
                        {/* <picture>
                            <img className='rounded-full  absolute -top-20 w-52 h-52 -left-32' src='./images/about/about.jpg' alt='about png'/>
                        </picture> */}
                    </div>
                    <div className='tablet:w-1/2 '>
                        <h3 className='font-poppin text-main_color lg:text-6xl md:text-4xl  sm_mobile:text-3xl font-medium pb-8'>Introduction To Best<span className='block pt-3 text-active'> Digital Agency!!</span></h3>
                        <p className='font-poppin text-gray-900 lg:text-base md:text-base  tablet:text-base sm_mobile:text-sm font-normal tablet:leading-relaxed sm_mobile:leading-[1.7] sm_mobile:text-justify pb-5'>Use this section to describe your company and the products you offer. 
                            about why you are in business. Use this pany and the products you offer. You could share your company’s story and details about why you are in business. </p>
                        <p className='font-poppin text-gray-900 tablet:text-base sm_mobile:text-sm font-normal tablet:leading-relaxed sm_mobile:leading-[1.7] sm_mobile:text-justify'>Use this section to describe your company and the products you offer. 
                         You could share your company’s story and details about why you are in business. </p>

                         <div className='lg:text-6xl md:text-4xl tablet:text-4xl sm_mobile:text-4xl font-poppin font-medium text-main_color pt-10'>
                            <span className='block font-black text-active pb-2'>10 + </span> Years experience
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
