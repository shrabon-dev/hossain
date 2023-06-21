import React, { useState } from 'react'
import {BsPlayFill} from 'react-icons/bs'


export default function VideoCard() {


  return (
    <>
    <div className='w-full relative after:absolute after:-top-10 after:w-full after:h-1 after:bg-white before:absolute before:-bottom-10 before:w-full before:h-1 before:bg-white my-10'>
        <div className="w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage:'url(./images/vcard.jpg)' }}>
            <div className='bg-active/70 w-full h-96 flex justify-center items-center' >
              <div className=''>
                <a href='#' className='inline-flex w-36 venobox h-36 relative after:absolute z-[2] after:w-24  after:h-24 after:bg-white after:rounded-full after:z-[-1] border-white/20 border-2 justify-center items-center rounded-full bg-white/80 after:animate-ping text-black' ><BsPlayFill className='inline-block text-6xl'/></a>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}
