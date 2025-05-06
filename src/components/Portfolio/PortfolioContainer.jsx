import React from 'react'
import { useQuery } from 'react-query'
import { axiosInstance } from '../../utils/axios/axiosInstance'
import PortfolioCard from './PortfolioCard'
import PortfolioModal from './PortfolioModal'

const PortfolioContainer = () => {
    // getting all portfolio
    async function getPortfolio() {
        const response = await axiosInstance('portfolio/allPortfolio')
        return response.data
    }

    // using react-query
    const { isLoading, error, data: portfolios } = useQuery('portfolios', getPortfolio)

    if (isLoading) return


    return (
        <div className='w-[90vw] mx-auto py-40'>
            <div className='text-center'>
                <h4 className='md:text-5xl text-3xl text-black font-extrabold'>Some of our greatest projects</h4>
                <p className='font-bold my-2'>These clients put their faith in us and reaped the rewards; so can you!</p>
                <span className='w-[150px] h-[2px] bg-primary inline-block rounded-full'></span>
            </div>
            {/* portfolio mapping */}
            <div className='w-[90vw] flex flex-wrap mx-auto justify-center'>
            {
                portfolios?.map(portfolio => <PortfolioCard companyName={portfolio?.companyName} companyImage={portfolio?.companyImage} />)
            }
            </div>
            {/* <PortfolioCard /> */}
            {/* <div className='w-[80vw]'>
                <button onClick={openModal}>Open Modal</button>
                <PortfolioModal />
            </div> */}
        </div>
    )
}

export default PortfolioContainer