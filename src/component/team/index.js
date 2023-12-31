import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import Title from '../reuseable/heading';
import TeamMemberItem from '../reuseable/teamMember';
import { motion,inView,cubicBezier  } from "framer-motion"
export default function Team() {
  const container = {
    show : {
      transition:{
        delayChildren:.4,
        staggerChildren:.35,
      }
    }
  }

  const childAnimateY = {
    hidden : {
      opacity:0,
      y:600,
    },
    show : {
      opacity:1,
      y:0,
      transition:{
        ease:cubicBezier(0.2, .2, .02, 0.92),
        duration:1,
      }
    },
    exit:{
      opacity:0,
      y:-200,
    }
  }
  return (
    <>
    <div className='relative rounded-tr-[300px] rounded-bl-[300px] z-20'>
      <span className='w-52 h-52 bg-active rounded-full absolute right-0 top-0 z-20'></span>
      <span className='w-52 h-52 bg-active rounded-full absolute left-0 bottom-0 z-20'></span>
    <span className='lg_tablet:w-20 tablet:w-20  rounded-full  h-20 absolute top-32 left-0 z-[-1] bg-[#3dffd5fb] block'></span>
      <span className='lg_tablet:w-32 tablet:w-32 rounded-full  h-32 absolute bottom-32 right-0 z-[-1] bg-[#49f8989a] block'></span>
      <div className='bg-2nd_color/25 rounded-bl-[300px] rounded-tr-[300px] backdrop-blur-md z-20 relative'>
        <div className='container tablet:py-32 sm_mobile:py-20 overflow-hidden'>
             {/* Section Heading Start */}
             <Title shortTile='Here are all expert members' title='Our Team Member' shortDescription="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions h" waterMark='Team'/>
         
            {/* Section Heading End */}
            <motion.div initial={'hidden'} whileInView={'show'} variants={container}  viewport={{ once:true }}  className='flex tablet:justify-between sm_mobile:justify-around flex-wrap items-center lg:gap-10 md:gap-10 sm_mobile:gap-5'>
                
                <TeamMemberItem variants={childAnimateY} name="Muhammod Alli" img="./images/team/team (1).jpg" desi="Sr. Software Engineer" linkdine="" fb="" tw="" yt="" />
                <TeamMemberItem variants={childAnimateY} name="Ibrahim" img="./images/team/team (3).jpg" desi="Sr. Software Engineer" linkdine="" fb="" tw="" yt="" />
                <TeamMemberItem variants={childAnimateY} name="Jinnaht Ali" img="./images/team/team (2).jpg" desi="Manager of DF Ltd." linkdine="" fb="" tw="" yt="" />
                <TeamMemberItem variants={childAnimateY} name="Usman Ali" img="./images/team/team (4).jpg" desi="Product Manager" linkdine="" fb="" tw="" yt="" />
          
            </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}
