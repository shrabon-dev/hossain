import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import Title from '../reuseable/heading';

export default function Team() {
  return (
    <>
    <div className='relative z-20'>
    <span className='lg_tablet:w-52 tablet:w-1/3 blur-[90px]  h-52 absolute top-32 left-0 z-[-1] bg-active block'></span>
      <span className='lg_tablet:w-52 tablet:w-1/3 blur-[60px]  h-52 absolute bottom-32 right-0 z-[-1] bg-[#00a2ff9a] block'></span>
      <div className='bg-2nd_color/25 backdrop-blur-md z-20 relative'>
        <div className='container tablet:py-52 sm_mobile:py-6 overflow-hidden'>
             {/* Section Heading Start */}
             <Title shortTile='Here are all expert members' title='Our Team Member' shortDescription="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions h" waterMark='Team'/>
         
            {/* Section Heading End */}
            <div className='flex tablet:justify-between sm_mobile:justify-around flex-wrap items-center lg:gap-10 md:gap-10 sm_mobile:gap-5'>
                <div className=' lg:w-48 md:w-1/4 sm_mobile:w-44 group mb-10'>
                  <div className='border-2 border-active w-full tablet:h-48 sm_mobile:h-44 rounded-full relative'> 
                    <div className='bg-2nd_color w-full h-full rounded-full absolute left-5 bottom-2 duration-300 ease-in-out group-hover:bottom-0 group-hover:left-0 overflow-hidden'>
                        <img className='w-full h-full block' src='./images/team/team (3).jpg' alt='team 1'/>
                    </div>
                  </div>
                  <div className='text-center pt-10'>
                    <h3 className='text-gray-200 font-poppin font-medium text-xl pb-2'>Muhammad Ali</h3>
                    <h6 className='text-gray-600 font-poppin font-medium text-sm pb-2'>Sr. Software Engineer</h6>
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
                <div className=' lg:w-48 md:w-1/4 sm_mobile:w-44 group mb-10'>
                  <div className='border-2 border-active w-full tablet:h-48 sm_mobile:h-44 rounded-full relative'> 
                    <div className='bg-2nd_color w-full h-full rounded-full absolute left-5 bottom-2 duration-300 ease-in-out group-hover:bottom-0 group-hover:left-0 overflow-hidden'>
                        <img className='w-full h-full block' src='./images/team/team (1).jpg' alt='team 1'/>
                    </div>
                  </div>
                  <div className='text-center pt-10'>
                    <h3 className='text-gray-200 font-poppin font-medium text-xl pb-2'>Muhammad Ali</h3>
                    <h6 className='text-gray-600 font-poppin font-medium text-sm pb-2'>Sr. Software Engineer</h6>
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
                <div className=' lg:w-48 md:w-1/4 sm_mobile:w-44 group mb-10'>
                  <div className='border-2 border-active w-full tablet:h-48 sm_mobile:h-44 rounded-full relative'> 
                    <div className='bg-2nd_color w-full h-full rounded-full absolute left-5 bottom-2 duration-300 ease-in-out group-hover:bottom-0 group-hover:left-0 overflow-hidden'>
                        <img className='w-full h-full block' src='./images/team/team (2).jpg' alt='team 1'/>
                    </div>
                  </div>
                  <div className='text-center pt-10'>
                    <h3 className='text-gray-200 font-poppin font-medium text-xl pb-2'>Muhammad Ali</h3>
                    <h6 className='text-gray-600 font-poppin font-medium text-sm pb-2'>Sr. Software Engineer</h6>
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
                <div className=' lg:w-48 md:w-1/4 sm_mobile:w-44 group mb-10'>
                  <div className='border-2 border-active w-full tablet:h-48 sm_mobile:h-44 rounded-full relative'> 
                    <div className='bg-2nd_color w-full h-full rounded-full absolute left-5 bottom-2 duration-300 ease-in-out group-hover:bottom-0 group-hover:left-0 overflow-hidden'>
                        <img className='w-full h-full block' src='./images/team/team (1).jpg' alt='team 1'/>
                    </div>
                  </div>
                  <div className='text-center pt-10'>
                    <h3 className='text-gray-200 font-poppin font-medium text-xl pb-2'>Muhammad Ali</h3>
                    <h6 className='text-gray-600 font-poppin font-medium text-sm pb-2'>Sr. Software Engineer</h6>
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
                <div className=' lg:w-48 md:w-1/4 sm_mobile:w-44 group mb-10'>
                  <div className='border-2 border-active w-full tablet:h-48 sm_mobile:h-44 rounded-full relative'> 
                    <div className='bg-2nd_color w-full h-full rounded-full absolute left-5 bottom-2 duration-300 ease-in-out group-hover:bottom-0 group-hover:left-0 overflow-hidden'>
                        <img className='w-full h-full block' src='./images/team/team (3).jpg' alt='team 1'/>
                    </div>
                  </div>
                  <div className='text-center pt-10'>
                    <h3 className='text-gray-200 font-poppin font-medium text-xl pb-2'>Muhammad Ali</h3>
                    <h6 className='text-gray-600 font-poppin font-medium text-sm pb-2'>Sr. Software Engineer</h6>
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
              
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
