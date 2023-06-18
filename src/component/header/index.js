import React, { useEffect, useRef, useState } from 'react'

import {AiOutlineClose} from 'react-icons/ai'
import {HiMenuAlt3} from 'react-icons/hi'

export default function Header() {

    let  [isScrollTop, setIsScrollTop] = useState(false)
    let [mobileMenu, setMobileMenu] = useState([])
    let [mobileMenuShow,setMobileMenuShow] = useState(false)
    let [mobileLogo,setMobileLogo] = useState([])

    const itemListOne  = useRef(null)
    const itemListTwo  = useRef(null)
    const logoM  = useRef(null)


    
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
   
    useEffect(() => {
        // Accessing the li element using the ref
        const listItemOne = Array.from(itemListOne.current.children);
        const listItemTwo = Array.from(itemListTwo.current.children);
        const logo = logoM.current.querySelector('img');
        let combineList = [...listItemOne,...listItemTwo];

        setMobileMenu(combineList)
        setMobileLogo(logo)
    }, [1000]);


  return (
    <>
        <div>
            <nav className={`nav ${isScrollTop ? 'fixed_menu':''}`}>
                <div className='container'>
                <div className='flex justify-between !items-center tablet:flex sm_mobile:hidden'>
                    {/* ====== Menu Bar One Start ====== */}
                    <div>
                        <ul ref={itemListOne} className='text-white flex'>
                            <li><a className='a_css a_active' href=''>Home</a></li>
                            <li><a className='a_css' href=''>Service</a></li>
                            <li><a className='a_css' href=''>About us</a></li>
                        </ul>
                    </div>

                    {/* ====== Logo Start ====== */}
                    <div ref={logoM}>
                            <a href='#'>
                                <picture>
                                        <img className='lg:w-32 lg_tablet:w-24 tablet:w-20' src='./images/logo.png' alt='Hossain-logo' />
                                </picture>
                            </a>
                    </div>

                    {/* ====== Menu Bar Two Start ====== */}
                    <div>
                         <ul ref={itemListTwo} className='text-white flex'>
                            <li><a className='a_css' href=''>Our works</a></li>
                            <li><a className='a_css' href=''>Our Teams</a></li>
                            <li><a className='a_css' href=''>Faq's</a></li>
                            <li><a className='a_css btn_contact' href=''>Contact us</a></li>
                        </ul>
                    </div>
                </div>

                {/* ============= Mobile menu start ================= */}
                <div className='tablet:hidden'>
                    <div className='flex justify-between'>
                        <div>
                            {mobileLogo && 
                            <img className='w-1/3' src={mobileLogo.src} alt={mobileLogo.alt}/>
                            }
                        </div>

                        {/* menu icon start */}
                         <div >
                            <HiMenuAlt3 onClick={()=>setMobileMenuShow(!mobileMenuShow)} className='text-2xl inline-block text-gray-400'/>
                         </div>
                        {/* menu icon end */}
                    </div>
                        {/* {mobileMenuShow &&  */}
                            <ul className={`${mobileMenuShow ? 'mobileMenu block mobileMenuExpanded' : 'mobileMenu mobileMenuColspan' }`}>
                                <span onClick={()=>setMobileMenuShow(!mobileMenuShow)} className='border-2 border-b-0 border-l-0 rounded-full p-[2px] border-active/60 inline-block absolute right-5 cursor-pointer'> <AiOutlineClose className='text-2xl'/> </span>
                            {mobileMenu.map((item, index) => (
                                <li className='last:bg-active last:hover:text-active  last:hover:bg-main_color last:shadow-sm last:drop-shadow-2xl  last:mt-5  last:px-4 last:m-auto last:w-32 last:text-center last:rounded-lg last:inline-block font-k2d  duration-300 hover:text-active text-base py-2' key={index}><a className='' href='#'>{item.textContent}</a></li>
                                ))}
                            </ul>
                        {/* } */}
                </div>
                {/* ============= Mobile menu end ================= */}

                

                </div>
            </nav>
        </div>
    </>
  )
}
