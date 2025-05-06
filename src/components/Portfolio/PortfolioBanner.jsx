import React from 'react'

const PortfolioBanner = () => {
    return (
        <div className='flex justify-center items-center w-[90vw] mx-auto md:flex-row flex-col-reverse'>
            <div className='md:w-1/2 w-full'>
                <h5 className='text-primary font-extrabold'>Our portfolios</h5>
                <p className='md:text-6xl text-4xl font-extrabold'>We succeed when you succeed</p>
                <p className='font-extrabold text-lg'>We strive to generate the most ROI from your investment since we ourselves are a business entity. Let’s do something great together!</p>

            </div>
            <div className='md:w-1/2 w-full  py-10'>
                <img src="https://i.ibb.co.com/QvsS7vxq/Web-Design-1.png" alt="" />
            </div>
        </div>
    )
}

export default PortfolioBanner