import React from 'react'

const PortfolioDetailsBanner = ({ companyName, companyImage, companyDetails }) => {
    return (
        <div
            className='flex justify-between items-center w-[90vw] mx-auto md:flex-row flex-col py-14'>
            <div className=''>
                <h3 className='md:text-5xl text-2xl font-extrabold my-2 text-center'>{companyName}</h3>
                <p className='my-2 text-center text-lg leading-loose'>{companyDetails}</p>
            </div>
            {/* <img className='rounded-2xl' width={'550px'} src={companyImage} alt={companyImage} /> */}
        </div>
    )
}

export default PortfolioDetailsBanner