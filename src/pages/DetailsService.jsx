import React, { useEffect,useState } from 'react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import AboutUsCard from '../components/AboutUs/AboutUsCard'
import Footer from '../components/Footer/Footer'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import ServiceDetailsBanner from '../components/Services/ServiceDetailsBanner'
import WhyUs from '../components/Services/WhyUs'
import Contact from '../shared/Drawer/Contact/Contact'
import { axiosInstance } from '../utils/axios/axiosInstance'
import CustomHeader from '../utils/CustomHeader/CustomHeader'

const DetailsService = () => {
    // state management
    const [service, setService] = useState({})
    console.log(service)

    // getting the specific service from db
    const getService = async (id) => {
        const response = await axiosInstance.get(`services/getService?id=${id}`)
        setService(response?.data)
        
    }

    // id from react router dom
    const { id } = useParams()


    // handleing the side effect
    useEffect(() => {
      getService(id)
    }, [id])
 
    // define the half half solution
    let firstHalf = service?.solutions?.slice(0, parseInt(service?.solutions?.length / 2))
    let lastHalf=service?.solutions?.slice(parseInt(service?.solutions?.length / 2))
    
    console.log(firstHalf,lastHalf)
  return (
    <div className='bg-white text-black' id='service'>
      <CustomHeader title={`${service?.srvice}`} />
          <Navigationbar />
          <div  style={{background:'url(https://i.ibb.co.com/8SSg5gb/Wave.png)',backgroundRepeat:'no-repeat'}} className=' py-44 z-50'>
              <ServiceDetailsBanner name={service?.service} />
          </div>

      {/* sub services */}
      <div >

        <div className={`flex item-center justify-between w-[95vw] mx-auto`}>
            
              {/* first half to all sub service */}
              <div className='pt-20'>
              {firstHalf?.map(elem=><div key={elem?._id} className='py-10'>
                     <AboutUsCard
                        title={elem?.name}
                        text={elem?.description}
                     />
                  </div>)}
              </div>
              {/* last half to all sub service */}
              <div className=''>
                  {lastHalf?.map(elem=><div key={elem?._id} className='py-10'>
                     <AboutUsCard
                       title={elem?.name}
                       text={elem?.description}
                     />
                  </div>)}
              </div>
              
          </div>
      </div>

          <Contact/>
          <WhyUs/>
          <Footer/>
    </div>
  )
}

export default DetailsService