import React from 'react'
import { BsFillBrushFill, BsKanbanFill, BsPencilFill, BsReverseLayoutTextWindowReverse } from 'react-icons/bs'
import ServiceItem from '../reuseable/serviceItem'
import Title from '../reuseable/heading'

export default function Service() {
  return (
    <>
        <div className='bg-main_color'>
        <div className='container py-10 overflow-hidden'>
            {/* Section Heading Start */}
            
             <Title shortTile='What We’re Offering' title='Our Services' shortDescription='Consectetur adipiscing elit. Donec erat nunc, hendrerit non sagittis  velit et augue tempor sagittis. Maecenas orci dui, rutrum quis nisi at, iaculis accumsan est.' waterMark='Service' />

            {/* Section Heading End */}
            <div className='flex justify-between items-center flex-wrap '>
              {/* reuseable component used */}
              <ServiceItem title="Graphics Design" icon={BsFillBrushFill} description="Consectetur adipiscing elit. Donec erat nunc, hendrerit non sagittis  velit et augue tempor sagittis. Maecenas orci dui, rutrum quis nisi at, iaculis accumsan est."/>
              <ServiceItem title="Web Design" icon={BsReverseLayoutTextWindowReverse} description="Consectetur adipiscing elit. Donec erat nunc, hendrerit non sagittis  velit et augue tempor sagittis. Maecenas orci dui, rutrum quis nisi at, iaculis accumsan est."/>
              <ServiceItem title="Web Design" icon={BsReverseLayoutTextWindowReverse} description="Consectetur adipiscing elit. Donec erat nunc, hendrerit non sagittis  velit et augue tempor sagittis. Maecenas orci dui, rutrum quis nisi at, iaculis accumsan est."/>
              <ServiceItem title="Web Development" icon={BsKanbanFill} description="Consectetur adipiscing elit. Donec erat nunc, hendrerit non sagittis  velit et augue tempor sagittis. Maecenas orci dui, rutrum quis nisi at, iaculis accumsan est."/>
              <ServiceItem title="Web Development" icon={BsKanbanFill} description="Consectetur adipiscing elit. Donec erat nunc, hendrerit non sagittis  velit et augue tempor sagittis. Maecenas orci dui, rutrum quis nisi at, iaculis accumsan est."/>
              <ServiceItem title="Digital Marketing" icon={BsPencilFill} description="Consectetur adipiscing elit. Donec erat nunc, hendrerit non sagittis  velit et augue tempor sagittis. Maecenas orci dui, rutrum quis nisi at, iaculis accumsan est."/>
              {/* reuseable component used */}
            </div>
        </div>
        </div>
    </>
  )
}
