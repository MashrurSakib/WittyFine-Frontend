import React from 'react'
import { TbExternalLink } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import './PortfolioCard.css'
import PortfolioModal from './PortfolioModal'
const PortfolioCard = ({ companyName, companyImage }) => {
    return (
        <div className='rounded-xl portfolio-card relative'>
            <div className='flex justify-center items-center'>
                <img className='portfolio-card-image' src={companyImage} alt={companyImage} />
            </div>
            <div className='rounded-full'>
                <Link to={`/portfolioDetails/${companyName}`} className="cardLink-btn">
                    <TbExternalLink className='cardLink text-4xl btn btn-circle' />
                </Link>
                <p className='card-text font-extrabold text-4xl'>{companyName}</p>
            </div>
            {/* <button onClick={openModal}>Open Modal</button> */}

            {/* <PortfolioModal /> */}
        </div>
    )
}

export default PortfolioCard