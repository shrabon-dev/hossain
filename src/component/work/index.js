import React from 'react'
import { BsFillBrushFill } from 'react-icons/bs'
import WorkItem from '../reuseable/workItem'
import Title from '../reuseable/heading'

export default function Work() {
  return (
    <>
      <div className='relative z-10'>

    <span className='lg_tablet:w-20 tablet:w-10 lg_tablet:blur-[90px] tablet:blur-sm  h-1/4 absolute top-32 right-0 z-[-1] bg-[#1fafb4] tablet:block sm_mobile:hidden'></span>
    <span className='lg_tablet:w-20 tablet:w-10 lg_tablet:blur-[90px] tablet:blur-sm  h-1/4 absolute bottom-32 left-0 z-[-1] bg-[#467fe9] tablet:block sm_mobile:hidden'></span>
      <div className='bg-2nd_color/20 backdrop-blur-3xl'>
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
