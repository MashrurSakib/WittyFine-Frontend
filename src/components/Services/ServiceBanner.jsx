import React from 'react'

const ServiceBanner = () => {
  return (
    <div className='flex justify-between items-center my-20 md:flex-row flex-col w-[90vw] mx-auto'>
        <div className='md:w-1/2 md:mx-0 flex flex-col item-center'>
          <div>
                <h3 className='font-extrabold w-full mb-8  text-6xl bottom-solid border-b-4 border-yellow-200 inline '>Services</h3>
                <p className='text-left w-[80%] mt-20'>Our digital marketing agency follows a systematic approach to ensure all our online marketing efforts deliver profitable results. Leverage WittyFine’s Digital marketing services today and let us help you boost your customer acquisition and retention rates.</p>
          </div>
        </div>
        <div className='md:w-1/2 md:mx-0 flex flex-col  items-center w-[90vw] mx-auto'>
            <img className='md:w-[50%] rounded-xl' src="https://i.ibb.co.com/pmSzMMD/Project-Management-1.png" alt="service image" />
        </div>
    </div>
  )
}

export default ServiceBanner