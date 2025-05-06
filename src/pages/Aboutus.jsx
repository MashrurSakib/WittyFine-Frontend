import React from 'react'
import AboutusBanner from '../components/AboutUs/AboutusBanner'
import AboutusBody from '../components/AboutUs/AboutusBody'
import Ensure from '../components/AboutUs/Ensure'
import Footer from '../components/Footer/Footer'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import WhyUs from '../components/Services/WhyUs'
import Contact from '../shared/Drawer/Contact/Contact'
import CustomHeader from '../utils/CustomHeader/CustomHeader'

const Aboutus = () => {
  return (
    <div className='bg-white text-black' id='aboutus'>
      <CustomHeader title={"About us"}/>
          <Navigationbar />
          <div style={{background:'url(https://i.ibb.co.com/8SSg5gb/Wave.png)'}} className='py-28'>
            <AboutusBanner/>
          </div>
          {/* <div className='bg-[#F9BC6E] my-20'>
            <AboutusSolution/>
          </div> */}
      <div>
        <AboutusBody/>
      </div>
      <Ensure />
      <Contact />
      <WhyUs/>
          <Footer/>
    </div>
  )
}

export default Aboutus