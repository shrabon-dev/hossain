import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
export default function TeamMemberItem(props) {
  return (
    <>
            <div className='lg:w-48 md:w-48 tablet:w-48 sm_mobile:w-44 group mb-10 text-center'>
                  <div className='border-2 m-auto border-active w-full tablet:w-48 sm_mobile:w-44  tablet:h-48 sm_mobile:h-44 rounded-full relative'> 
                    <div className='bg-2nd_color w-full h-full rounded-full bottom-2 duration-300 ease-in-out overflow-hidden'>
                        <img className='w-full h-full block' src={props.img} alt='team 1'/>
                    </div>
                  </div>
                  <div className='text-center pt-10'>
                    <h3 className='text-gray-200 font-poppin font-medium text-xl pb-2'>{props.name}</h3>
                    <h6 className='text-gray-600 font-poppin font-medium text-sm pb-2'>{props.desi}</h6>
                    <div>
                    <ul className='text-white flex space-x-5 items-center justify-center text-center'>
                            <li><a className='text-active hover:text-gray-600 duration-300 ease-in-out text-lg' href=''><FaLinkedinIn className='inline-block'/></a></li>
                            <li><a className='text-active hover:text-gray-600 duration-300 ease-in-out text-lg' href=''><FaTwitter className='inline-block'/></a></li>
                            <li><a className='text-active hover:text-gray-600 duration-300 ease-in-out text-lg' href=''><FaYoutube className='inline-block'/></a></li>
                            <li><a className='text-active hover:text-gray-600 duration-300 ease-in-out text-lg' href=''><FaFacebookF className='inline-block'/></a></li>
                        </ul>
                    </div>
                  </div>
            </div>
    </>
  )
}
