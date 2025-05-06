import { Card } from '@nextui-org/react'
import React from 'react'
import {v4} from 'uuid'
const WhyUs = () => {
    const values = [
        {
            "name": "Proven Performance",
            "description":"We've partnered with the best to bring the latest marketing technology to our clients."
        },
        {
            "name": "Transparent ROI Tracking",
            "description":"Clients have access to our data and can monitor every detail of their campaign."
        },
        {
            "name": "Unparalleled Track Record",
            "description":"We have over 90% client retention rate"
        },
        {
            "name": "Proven Performance",
            "description":"Our Digital Marketing experts have a combined experience of over 20 years."
        },
    ]
  return (
      <div className='flex flex-col md:flex-row w-[90vw] mx-auto my-40 justify-center items-center'>
          <div className='md:w-1/2'>
            <div className='flex flex-col justify-start'>
            <h3 className='font-extrabold  md:text-6xl text-3xl bottom-solid border-b-4 border-yellow-200 inline text-left'>We're A Leader In <span className='text-yellow-400 text-left'> Tech-Enabled Digital Marketing Solutions</span></h3>
                <br />
            </div>
            <p className='text-left'>Combining our technology platform and our expert online marketing team gives you an unfair advantage over your competition. As a leader in SEO, PPC, social, marketplaces, and web design services, our digital marketing agency prides itself on driving qualified traffic, converting visitors, and using cutting-edge technology measuring effectiveness to deliver real results for our clients.Get in touch with us today to experience what makes WittyFine stand apart from other digital marketing agencies.</p>
          </div>
          <div className='md:w-1/2'>
              <div className='flex'>
                {values?.slice(0,2)?.map(value =>
                  <Card key={v4()} isHoverable variant="bordered" css={{ mw: "400px",margin:'5px' }}>
                    <Card.Body>
                      <h5 className='font-extrabold'>{value?.name}</h5>
                      <p>{value?.description}</p>
                    </Card.Body>
                   </Card>)}
              </div>
              <div className='flex'>
                {values?.slice(2,4)?.map(value =>
                  <Card key={v4()} isHoverable variant="bordered" css={{ mw: "400px",margin:'5px' }}>
                    <Card.Body>
                      <h5 className='font-extrabold'>{value?.name}</h5>
                      <p>{value?.description}</p>
                    </Card.Body>
                   </Card>)}
              </div>

          </div>
    </div>
  )
}

export default WhyUs