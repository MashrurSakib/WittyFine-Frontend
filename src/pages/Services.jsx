import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { isError, useQuery } from 'react-query'
import Faq from '../components/FAQ/Faq'
import Footer from '../components/Footer/Footer'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import Benefits from '../components/Services/Benefits'
import ServiceBanner from '../components/Services/ServiceBanner'
import ServiceCard from '../components/Services/ServiceCard'
import WhyUs from '../components/Services/WhyUs'
import Contact from '../shared/Drawer/Contact/Contact'
import { axiosInstance } from '../utils/axios/axiosInstance'
import CustomHeader from '../utils/CustomHeader/CustomHeader'

const Services = () => {
    // getting all blogs
    async function getServices() {
        const response =await axiosInstance('services/getServices')
        return response.data
    }
    
    // using react-query
    const { isLoading, error, data: services } = useQuery('services',getServices)

   
  let serviceContent;
  if (isLoading) {
    serviceContent=<ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#4fa94d" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />
  } else if (isLoading === false && services.length > 0 ) {
    serviceContent=services?.map(service=><ServiceCard service={service}/>)
  } else if (isLoading === falsee && isError === true) {
    <p>Internt issue</p>
  }


  return (
    <div className='bg-white text-black' id='services'>
      <CustomHeader title={"Services"} />
      <Navigationbar />
      <div style={{ background: 'url(https://i.ibb.co.com/8SSg5gb/Wave.png)'}} className='py-10'>
            <ServiceBanner />
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 justify-center w-[90vw] mx-auto gap-5'>
              {serviceContent}
          </div>
         <Benefits/>
          <Contact/>
         <div className='my-40'>
            <h3 className='font-extrabold text-center text-5xl'>Why us</h3>
            <WhyUs/>
         </div>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Services