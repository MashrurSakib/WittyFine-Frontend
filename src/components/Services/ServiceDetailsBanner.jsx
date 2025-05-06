import React from 'react'

const ServiceDetailsBanner = ({name}) => {
  return (
    <div className='w-[90vw] mx-auto flex md:flex-row flex-col items-center'>
          <div className='md:w-1/2 w-full'>
        <h3 className='font-extrabold text-4xl'>{name}</h3>
              <p>Our digital marketing agency follows a systematic approach to ensure all our online marketing efforts deliver profitable results. Leverage WittyFine’s Digital marketing services today and let us help you boost your customer acquisition and retention rates.
              </p>
          </div>
      <div className='md:w-1/2 w-full flex justify-center'>
        <img className='md:w-1/2 w-full' src={"https://i.ibb.co.com/FvRTHkk/web-optimization-1.png"} alt="service" />
          </div>
    </div>
  )
}

export default ServiceDetailsBanner