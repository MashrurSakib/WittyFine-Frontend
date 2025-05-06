import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import WhyUs from '../components/Services/WhyUs'
import Testimonial from '../components/Testimonial/Testimonial'
import Contact from '../shared/Drawer/Contact/Contact'
import CustomHeader from '../utils/CustomHeader/CustomHeader'
import FAQCreationCard from '../components/FAQ/FAQCreationCard'
import Faq from '../components/FAQ/Faq'


const Home = () => {

  return (
    <div className='bg-white text-black' id='home'>
      <CustomHeader title={''} />
          <Navigationbar />
      <div style={{ background: 'url(https://i.ibb.co.com/8SSg5gb/Wave.png)', backgroundRepeat: 'no-repeat' }} className='md:pt-16 pt-32'>
        <Banner />
          <AboutUs />
      <Contact />
      <div className='text-center my-20'>
        <WhyUs/>
      </div>
        <NewsLetter />
        <Testimonial />
        <Faq/>
      <Footer />
      </div>
    </div>
  )
}

export default Home