import React from 'react'
import './PortfolioDetailsImage.css'
const PortfolioDetailsImages = ({ contributionImages }) => {
    return (
        <div className='flex flex-wrap w-[90vw] mx-auto justify-center'>
            {contributionImages?.map(image => <img className='object-cover md:mx-4 my-3 portfolio-image rounded-xl' src={image} alt={image} />)}
        </div>
    )
}

export default PortfolioDetailsImages