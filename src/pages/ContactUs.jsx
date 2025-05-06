import React from 'react'
import Footer from '../components/Footer/Footer'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import Contact from '../shared/Drawer/Contact/Contact'
import CustomHeader from '../utils/CustomHeader/CustomHeader'

const ContactUs = () => {
  return (
    <div className=" text-black bg-white" id='contactus'>
      <CustomHeader title={"Contact us"}/>
          <Navigationbar />
          <div className='py-40'>
             <Contact/>
          </div>
          <Footer/>
    </div>
  )
}

export default ContactUs