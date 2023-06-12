import React, { useEffect, useState } from 'react'

export default function Header() {

    let  [isScrollTop, setIsScrollTop] = useState(false)
    useEffect(()=>{

        let handleScroll = ()=>{
        let  height = window.innerHeight
        let scrollTop= window.pageYOffset  || document.documentElement.scrollTop;
       
        setIsScrollTop(scrollTop>height)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    },[])

  return (
    <>
        <div>
            <nav className={`nav ${isScrollTop ? 'fixed_menu':''}`}>
                <div className='container'>
                <div className='flex justify-between !items-center tablet:flex sm_mobile:hidden'>
                    {/* ====== Menu Bar One Start ====== */}
                    <div>
                        <ul className='text-white flex'>
                            <li><a className='a_css a_active' href=''>Home</a></li>
                            <li><a className='a_css' href=''>Service</a></li>
                            <li><a className='a_css' href=''>About us</a></li>
                            {/* <li><a className='a_css' href=''>Our Team</a></li> */}
                       
                        </ul>
                    </div>

                    {/* ====== Logo Start ====== */}
                    <div>
                            <a href='#'>
                                <picture>
                                        <img className='w-32' src='./images/logo.png' alt='Hossain-logo' />
                                </picture>
                            </a>
                    </div>

                    {/* ====== Menu Bar Two Start ====== */}
                    <div>
                         <ul className='text-white flex'>
                            <li><a className='a_css' href=''>Our works</a></li>
                            <li><a className='a_css' href=''>Our Teams</a></li>
                            <li><a className='a_css' href=''>Faq's</a></li>
                            <li><a className='a_css btn_contact' href=''>Contact us</a></li>
                        </ul>
                    </div>
                </div>

                

                </div>
            </nav>
        </div>
    </>
  )
}
