import React from 'react'
import { MdSupportAgent } from 'react-icons/md'
import { AiFillStar, AiOutlineGlobal,AiOutlineTeam } from 'react-icons/ai'


export default function Promoton() {
  return (
    <>
      <div className='relative z-[1]'>
        <span className='w-96 h-96 rotate-12 z-[-1] bg-[#083f087a] absolute left-0 top-0 block blur-4xl tablet:block sm_mobile:hidden'></span>
        <div className='container tablet:py-32 sm_mobile:py-14 relative z-[2]'>
          <div className='md:flex justify-between lg:gap-20 md:gap-5'>
            <div className='xl:w-1/2 lg:w-1/2 md:w-1/2 lg_tablet:w-1/2 tablet:w-full tablet:mb-0 sm_mobile:mb-10 sm_mobile:w-full'>
              <h2 className='font-poppin text-white lg:text-5xl md:text-4xl sm_mobile:text-3xl lg:font-bold md:font-semibold pb-8 !leading-normal'>How we support our client all over the world</h2>
              <p className='font-poppin text-gray-400 lg:text-base md:text-base font-light leading-relaxed pb-5'>SaaS become a common delivery model for many business application, including 
                office software, messaging software, payroll processing software, DBMS software, 
                management software</p>
                <div className='pt-5 lg_tablet:mb-0 tablet:mb-10'>
                  <p className='font-poppin text-gray-200 lg:text-base md:text-base font-medium uppercase leading-relaxed mt-10 pb-2'>Client Satisfaction</p>
                   <span><AiFillStar className='inline-block text-active text-xl'/>
                   <AiFillStar className='inline-block text-active text-xl'/>
                   <AiFillStar className='inline-block text-active text-xl'/>
                   <AiFillStar className='inline-block text-active text-xl'/>
                   <AiFillStar className='inline-block text-active text-xl'/>
                   <span className='font-poppin text-gray-200 lg:text-base md:text-base font-medium'>(5.00)</span>
                   </span>
                </div>
            </div>
            <div className='xl:w-1/3 lg:w-1/2 md:w-1/2 lg_tablet:w-1/2 tablet:w-full sm_mobile:w-full'>
                <div>
                     <div className='flex items-center bg-2nd_color p-4 rounded-full mb-5'>
                          <span className='bg-main_color h-full tablet:p-6 sm_mobile:p-2 rounded-full tablet:mr-6 sm_mobile:mr-2'>
                            <AiOutlineTeam className='inline-block text-6xl text-active'/>
                          </span>
                          <div>
                            <h5 className='font-poppin text-white lg:text-xl md:text-lg sm_mobile:text-base font-medium'>Multilingual Support</h5>
                            <p className='font-poppin text-gray-400 lg:text-xs md:text-xs sm_mobile:text-xs sm_mobile:leading-[1.7] font-light leading-loose pt-3'>Our team consists of professionals fluent in various languages, 
                            enabling us to provide support in the client's preferred language.</p>
                          </div>
                     </div>
                     <div className='flex items-center bg-2nd_color p-4 rounded-full mb-5'>
                          <span className='bg-main_color h-full tablet:p-6 sm_mobile:p-2 rounded-full tablet:mr-6 sm_mobile:mr-2'>
                            <AiOutlineGlobal className='inline-block text-6xl text-active'/>
                          </span>
                          <div>
                            <h5 className='font-poppin text-white lg:text-xl md:text-lg font-medium sm_mobile:text-base'>Global Presence</h5>
                            <p className='font-poppin text-gray-400 lg:text-xs md:text-xs  sm_mobile:text-xs sm_mobile:leading-[1.7] font-light leading-loose pt-3'>Our global network enables us to provide consistent and reliable services across different time zones and languages.</p>
                          </div>
                     </div>
                     <div className='flex items-center bg-2nd_color p-4 rounded-full mb-5'>
                          <span className='bg-main_color h-full tablet:p-6 sm_mobile:p-2 rounded-full tablet:mr-6 sm_mobile:mr-2'>
                            <MdSupportAgent className='inline-block text-6xl text-active'/>
                          </span>
                          <div>
                            <h5 className='font-poppin text-white lg:text-xl md:text-lg font-medium sm_mobile:text-base'>24/7 Support</h5>
                            <p className='font-poppin text-gray-400 lg:text-xs md:text-xs  sm_mobile:text-xs sm_mobile:leading-[1.7] font-light leading-loose pt-3'>Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, </p>
                          </div>
                     </div>
                </div>
            </div>
       
          </div>
        </div>
      </div>
    </>
  )
}
