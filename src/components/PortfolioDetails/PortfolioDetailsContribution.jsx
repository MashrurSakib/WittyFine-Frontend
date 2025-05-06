import { Interweave } from 'interweave'
import React from 'react'

const PortfolioDetailsContribution = ({ contributionDetails }) => {
    return (
        <div className='w-[90vw] mx-auto'>
            <Interweave content={contributionDetails} />
        </div>
    )
}

export default PortfolioDetailsContribution