import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Banner from '../banner'
import Service from '../service'
import About from '../about'
import Work from '../work'
import Promoton from '../promoton'
import Team from '../team'
import Faqs from '../faqs'
import ContactUs from '../contact'
import Testimonial from '../testimonial'
import VideoCard from '../videoCard'

export default function Home() {
  return (
    <div className='bg-main_color md:container_p'>
        <Header/>
        <Banner/>
        <About/>
        <Promoton/>
        <Team/>
        <VideoCard/>
        <Service/>
        <Work/>
        <Testimonial/>
        <Faqs/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}
