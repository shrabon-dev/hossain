import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {


  return (
    <>
    <div className='relative overflow-hidden z-50'>
          <div className='lg_tablet:w-96 tablet:w-1/3  h-96 bg-[#0d704a3d] blur-3xl absolute z-0 right-0 top-0 lg_tablet:-rotate-45 tablet:rotate-0'>
          </div>
          <div className='w-96 h-96 bg-[#b45d2a3d] blur-3xl absolute z-10 left-0 top-0 -rotate-45'>
          </div>
      <footer className='py-10 relative z-[32] overflow-hidden'>
        
          <div className='container'>
            <div className='flex justify-between items-start'>
              <div className='tablet:w-1/2 sm_mobile:w-full'>
                <h5 className='font-poppin tablet:text-2xl sm_mobile:text-xs text-white pb-5 '>Important Links</h5>
                    <ul className='text-white flex-col space-y-3'>
                        <li><a className='a_css cursor-pointer' href='#'>Our works</a></li>
                        <li><a className='a_css cursor-pointer' href='#'>Pricing</a></li>
                        <li><a className='a_css cursor-pointer' href='#'>Faq's</a></li>
                        <li><a className='a_css cursor-pointer' href='#'>Contact</a></li>
                    </ul>
              </div>
              <div >
                  <a href='#'>
                      <picture>
                              <img className='w-32' src='./images/logo.png' alt='Hossain-logo' />
                      </picture>
                  </a>
              </div>
              <div className='tablet:w-1/2 sm_mobile:w-full tablet:pl-0 sm_mobile:pl-5'>
                    <h5 className='font-poppin tablet:text-2xl sm_mobile:text-sm text-white pb-10 '>Social Links</h5>
                    <ul className='text-white flex flex-wrap tablet:space-x-3 sm_mobile:space-x-0 '>
                        <li><a className='before:bg-active tablet:mr-0 sm_mobile:mr-1 tablet:mb-0 sm_mobile:mb-2 tablet:w-12 tablet:h-12 sm_mobile:w-10 flex justify-center items-center sm_mobile:h-10 before:absolute tablet:before:w-12 sm_mobile:before:w-10 tablet:before:h-12 sm_mobile:before:h-10 before:z-[-2] before:block before:bottom-0 relative after:absolute after:bottom-0 after:z-[-1] z-[23] after:h-2 after:duration-300 after:bg-main_color hover:after:h-full sm_mobile:hover:after:h-10 after:block tablet:after:w-12 sm_mobile:after:w-10 tablet:p-4 sm_mobile:p-3' href=''><FaLinkedinIn className='inline-block'/></a></li>
                        <li><a className='before:bg-active tablet:mr-0 sm_mobile:mr-1 tablet:mb-0 sm_mobile:mb-2 tablet:w-12 tablet:h-12 sm_mobile:w-10 flex justify-center items-center sm_mobile:h-10 before:absolute tablet:before:w-12 sm_mobile:before:w-10 tablet:before:h-12 sm_mobile:before:h-10 before:z-[-2] before:block before:bottom-0 relative after:absolute after:bottom-0 after:z-[-1] z-[23] after:h-2 after:duration-300 after:bg-main_color hover:after:h-full sm_mobile:hover:after:h-10 after:block tablet:after:w-12 sm_mobile:after:w-10 tablet:p-4 sm_mobile:p-3' href=''><FaTwitter className='inline-block'/></a></li>
                        <li><a className='before:bg-active tablet:mr-0 sm_mobile:mr-1 tablet:mb-0 sm_mobile:mb-2 tablet:w-12 tablet:h-12 sm_mobile:w-10 flex justify-center items-center sm_mobile:h-10 before:absolute tablet:before:w-12 sm_mobile:before:w-10 tablet:before:h-12 sm_mobile:before:h-10 before:z-[-2] before:block before:bottom-0 relative after:absolute after:bottom-0 after:z-[-1] z-[23] after:h-2 after:duration-300 after:bg-main_color hover:after:h-full sm_mobile:hover:after:h-10 after:block tablet:after:w-12 sm_mobile:after:w-10 tablet:p-4 sm_mobile:p-3' href=''><FaYoutube className='inline-block'/></a></li>
                        <li><a className='before:bg-active tablet:mr-0 sm_mobile:mr-1 tablet:mb-0 sm_mobile:mb-2 tablet:w-12 tablet:h-12 sm_mobile:w-10 flex justify-center items-center sm_mobile:h-10 before:absolute tablet:before:w-12 sm_mobile:before:w-10 tablet:before:h-12 sm_mobile:before:h-10 before:z-[-2] before:block before:bottom-0 relative after:absolute after:bottom-0 after:z-[-1] z-[23] after:h-2 after:duration-300 after:bg-main_color hover:after:h-full sm_mobile:hover:after:h-10 after:block tablet:after:w-12 sm_mobile:after:w-10 tablet:p-4 sm_mobile:p-3' href=''><FaFacebookF className='inline-block'/></a></li>
                    </ul>
                    <h5 className='font-poppin tablet:text-2xl sm_mobile:text-sm text-white pt-10 pb-5 '>Google Maps</h5>
                    <div>
                      <iframe className='w-full tablet:h-auto sm_mobile:h-32' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57842.71996697491!2d90.01244545!3d25.0283043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d610b1247fcd%3A0x6820b0a61eb62bfc!2sSherpur!5e0!3m2!1sen!2sbd!4v1684396979459!5m2!1sen!2sbd" width="300" height="160"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
              </div>
            </div>
          </div>
      </footer>
    </div>
    </>
  )
}
