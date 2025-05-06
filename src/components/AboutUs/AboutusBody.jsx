import React from 'react'

const AboutusBody = () => {
  return (
      <div className='w-[90vw] mx-auto ny-20'>
          <h3 className='text-3xl font-extrabold text-center my-5'>Make a Difference For Your Business!</h3>
          <div className='flex md:flex-row flex-col w-[90vw] mx-auto items-center'>
              <div className='md:w-1/2 w-full'>
                  <img src="https://i.ibb.co.com/PZgWTMLn/04-educationalresources.png" alt="" />
              </div>
              <div className='md:w-1/2 w-full'>
                  <p>Through our years of experience, we've also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels. That's why we offer full-service strategies to each of our clients, and use a combination of digital channels to increase visibility, conversions, and revenue.
                  </p>
              </div>
          </div>
          <div className='flex md:flex-row flex-col-reverse w-[90vw] mx-auto items-center'>
              <div className='md:w-1/2 w-full flex justify-center'>
                  <p>The web is our passion, and we’re passionate about helping businesses reach their goals. So when you choose WebFX as your digital marketing agency, you won’t get a cookie-cutter strategy — you'll get a custom plan that fits your company, your needs, and your goals.
                  </p>
              </div>
              <div className='md:w-1/2 w-full flex justify-center'>
                  <img className='md:w-[60%]' src="https://i.ibb.co.com/yBMqJhr6/Product-Release.png" alt="" />
              </div>
          </div>
    </div>
  )
}

export default AboutusBody