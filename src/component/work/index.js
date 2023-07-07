import React from 'react'
import { BsFillBrushFill } from 'react-icons/bs'
import WorkItem from '../reuseable/workItem'
import Title from '../reuseable/heading'

export default function Work() {
  return (
    <>
      <div className='relative z-10 border-t-4 border-white'>

    <span className='lg_tablet:w-20 tablet:w-10 animate-small_big lg_tablet:h-20 tablet:h-10 absolute top-0  left-52 z-[-1] rotate-45 bg-active tablet:block sm_mobile:hidden'></span>
    {/* <span className='lg_tablet:w-20 tablet:w-10 animate-rotate lg_tablet:h-20 tablet:h-10 absolute top-0 rounded-full left-44 z-[-1] bg-main_color tablet:block sm_mobile:hidden'></span> */}
    <span className='lg_tablet:w-20 tablet:w-10 animate-rotate lg_tablet:h-20 tablet:h-10 absolute top-32 right-10 z-[-1] bg-[#1fafb4] tablet:block sm_mobile:hidden'></span>
    <span className='lg_tablet:w-20 tablet:w-10 animate-small_big lg_tablet:h-20 tablet:h-10 absolute bottom-32 left-10 rotate-45 z-[-1] bg-[#467fe9] tablet:block sm_mobile:hidden'></span>
      <div className=' backdrop-blur-0'>
        <div className='container py-10'>
            {/* Section Heading Start */}

             <Title shortTile='What We’re Doing !!' title='Our Works' shortDescription='Consectetur adipiscing elit. Donec erat nunc, hendrerit non sagittis  velit et augue tempor sagittis. Maecenas orci dui, rutrum quis nisi at, iaculis accumsan est.' waterMark='Work' />

            {/* Section Heading End */}
            <div className='flex justify-between items-center flex-wrap '>
   
              <WorkItem title="Responsive Website deisgn" tech="React JS" date="20 June, 2023" img="./images/work/one.jpg"/>
              <WorkItem title="Admin Dashbord" tech="Html Bootstrap5" date="20 June, 2022" img="./images/work/two.jpg"/>
              <WorkItem title="Finsweet  a react app" tech="React JS" date="20 may, 2022" img="./images/work/three.jpg"/>
              <WorkItem title="Finsweet  a react app" tech="React JS" date="20 may, 2022" img="./images/work/three.jpg"/>
              <WorkItem title="Responsive Website deisgn" tech="React JS" date="20 June, 2023" img="./images/work/one.jpg"/>
              <WorkItem title="Admin Dashbord" tech="Html Bootstrap5" date="20 June, 2022" img="./images/work/two.jpg"/>
            
       
            </div>
        </div>
        </div>
      </div>
    </>
  )
}
