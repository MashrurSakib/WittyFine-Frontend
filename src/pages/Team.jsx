import React from 'react'
import Footer from '../components/Footer/Footer'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import WhyUs from '../components/Services/WhyUs'
import TeamCard from '../components/Team/TeamCard'
import {v4} from 'uuid'
import CustomHeader from '../utils/CustomHeader/CustomHeader'
import { HelmetProvider } from 'react-helmet-async'

const Team = () => {
  const teamInfo = [
    {"Name": "Omor Sany Ananta",
    "image":"https://i.ibb.co/vPN5C8N/Omor-Sany-Ananta.jpg",
    "Designation": "Founder",
    "Info": "Omor Sany Ananta is the Founder of WittyFine, a visionary leader driving the agency's success and growth through innovation."},

     {"Name": "Ali Mohammad Yahia",
     "image":"https://i.ibb.co/VVKMtNK/Ali-Mohammad-Yahia.jpg",
      "Designation": "Co Founder & CEO",
      "Info": "Ali Mohammad Yahia is the Co-Founder and CEO of WittyFine. With his expertise in the field, he has successfully helped businesses of all sizes grow their online presence and achieve their marketing goals."},

     {"Name": "Zahidul Islam Dipu",
     "image":"https://i.ibb.co/f2PyBr5/Zahidul-Islam-Dipu.jpg",
     "Designation": "Co Founder & Managing Partner",
     "Info":"Zahidul Islam Dipu is a digital marketing leader and entrepreneur, serving as Co-Founder & Managing Partner of WittyFine."},


     {"Name": "Arafat Rahman Emon",
     "image":"https://i.ibb.co/2kfrXvZ/Arafat-Rahman-Emon.jpg",
     "Designation": "Co Founder & COO",
     "Info":"Arafat Rahman Emon is the Co-Founder & COO of WittyFine, bringing operational expertise to drive growth and success."},

     {"Name": "Husnatuzzaman Nipun",
     "image":"https://i.ibb.co/cD697bc/Nipun-Bhai.jpg",
     "Designation": "Lead Creative Designer",
     "Info": "Husnatuzzaman Nipun is the Lead Creative Designer at WittyFine, leading the design team to deliver exceptional visuals and user experiences."},

     {"Name": "Sarfaraz Ahmed",
     "image":"https://i.ibb.co/yd3NSpc/Sarfaraz-Ahmed.jpg",
     "Designation":" Business Development & Client Service Manager",
     "Info":"Sarfaraz Ahmed is the Business Development & Client Service Manager at WittyFine, skilled in building and maintaining strong client relationships."}

  ]
  return (
    <div className='bg-white text-black' id='team'>
      <HelmetProvider>
        <CustomHeader title={"Team"} thumbnail={'https://i.ibb.co/PD4TQNm/Team-Work.png'} overview={'Best team'} />
          <Navigationbar/>
          <div style={{background:'url(https://i.ibb.co/hcVt5bY/Vector.png)'}} className='py-40'>
            <div className='w-[90vw] mx-auto'>
            <h3 className='text-5xl font-bold'>The MarketingKit Specialists</h3>
              <p className='text-primary mt-5'> Meet the awesome team behind Marketing Kit</p>
            </div>
          </div>
         <div className='grid md:grid-cols-3 grid-cols-1 gap-5 text-center justify-items-center my-40'>
             {teamInfo.map(team => <TeamCard key={v4()} team={team} />)}
        </div>
        <Footer />
      </HelmetProvider>
    </div>
  )
}

export default Team