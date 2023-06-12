import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { AiOutlineMinus } from 'react-icons/ai'
import { BsArrowReturnRight } from 'react-icons/bs'
import Title from '../reuseable/heading'

export default function Faqs() {

    let [faqs, setFaqs] = useState(null)

    let handleAccordion = (i) =>{
        // if(faqs == 0 || faqs){
        //     setFaqs(null)
        // }else{
        // }
        
        if(faqs === i){
            setFaqs(null)
        }
        setFaqs(i)
    }

  return (
    <>
        <div>
            <div className='container tablet:py-52 sm_mobile:py-0 overflow-hidden'>
                <div className=''>
            
                   <div className='tablet:flex justify-between   items-start flex-wrap'>
                      {/* ======================= Faqs Image ======================= */}
                      <div className='lg:w-1/2 md:w-full'>
                        {/* <div>
                            <picture>
                                <img src='./images/faq/faq.png' alt='faq png' />
                            </picture>  
                        </div> */}
                                {/* ======================= Title Start ======================= */}
                    <div className='tablet:mb-32 sm_mobile:mb-5 sm_mobile:!text-center'>
                       <Title shortTile='Your Frequently Asked Questions' title="Faq's" shortDescription='' waterMark="Faq's" />
                    </div>

                    {/* ======================= Title End ======================= */}
                    </div>
                    {/* ======================= Faqs Image ======================= */}
                    {/* ======================= Faqs Start ======================= */}
                    <div className='md:w-1/2  m-auto'>
                        <div>
                            {/* ========== One Faqs Question ============ */}
                            {data.map((item,i) => 
                            
                        
                            
                            <div className='bg-2nd_color p-4 rounded mb-5'>
                                <h4 onClick={()=>handleAccordion(i)} className='cursor-pointer text-gray-200 font-normal tablet:text-xl sm_mobile:text-base font-poppin flex justify-between'> {++i}.  {item.title} <span className='cursor-pointer'> 
                                {faqs === i ?
                                <AiOutlineMinus onClick={() => setFaqs(!faqs)} className='inline-block'/>
                                :
                                <FiPlus onClick={() => setFaqs(!faqs)} className='inline-block'/> 
                                }
                                 </span></h4> 
                                 <div className={`${faqs === i ? 'faq expanded ' : 'faq'}`}>
                                   <p className='accordine'><span className='text-lg font-medium text-active/70 pr-2'> <span><BsArrowReturnRight className='inline-block text-active'/></span> </span>{item.answere} </p>                              
                                 </div>
                            </div>
                                )}
                        </div>
                    </div>
                    {/* ======================= Faqs End ======================= */}
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

let data =[
    {
        title:' What services do you offer?',
        answere:'We offer a range of services including list the services you provide. Each service is designed to explain the purpose or benefits of the service.'
    },
    {
        title:'What services do you offer?',
        answere:'We offer a range of services including list the services you provide. Each service is designed to explain the purpose or benefits of the service.'
    },
    {
        title:'What services do you offer?',
        answere:'We offer a range of services including list the services you provide. Each service is designed to explain the purpose or benefits of the service.'
    },
    {
        title:'What services do you offer?',
        answere:'We offer a range of services including list the services you provide. Each service is designed to explain the purpose or benefits of the service.'
    },
    {
        title:'What services do you offer?',
        answere:'We offer a range of services including list the services you provide. Each service is designed to explain the purpose or benefits of the service.'
    },
    {
        title:'What services do you offer?',
        answere:'We offer a range of services including list the services you provide. Each service is designed to explain the purpose or benefits of the service.'
    },
    {
        title:'What services do you offer?',
        answere:'We offer a range of services including list the services you provide. Each service is designed to explain the purpose or benefits of the service.'
    }
]
