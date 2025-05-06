import React from 'react'
import CustomHeader from '../utils/CustomHeader/CustomHeader'
import Footer from '../components/Footer/Footer'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import PortfolioDetailsBanner from '../components/PortfolioDetails/PortfolioDetailsBanner'
import { useParams } from 'react-router-dom'
import { axiosInstance } from '../utils/axios/axiosInstance'
import { useQuery } from 'react-query'
import PortfolioDetailsImages from '../components/PortfolioDetails/PortfolioDetailsImages'
import PortfolioCompanyDetails from '../components/PortfolioDetails/PortfolioCompanyDetails'
import PortfolioDetailsContribution from '../components/PortfolioDetails/PortfolioDetailsContribution'
import Contact from '../shared/Drawer/Contact/Contact'

const PortfolioDetails = () => {
    // id for the portfolio
    const { name } = useParams()
    // get specific portfolio
    async function getSpecificPortfolio() {
        const response = await axiosInstance(`portfolio/specificPortfolio?companyName=${name}`)
        return response.data
    }

    // using react-query
    const { isLoading, error, data: portfolio } = useQuery('portfolio', getSpecificPortfolio)


    if (isLoading) return
    console.log(name)
    return (
        <div>
            <CustomHeader title={'portfolio'} />
            <Navigationbar />
            {/* portfolio details banner */}
            <div
                style={{ background: 'url(https://i.ibb.co.com/V0Q2Y6WL/Rectangle-5.png)' }}
                className='py-44'>
                <PortfolioDetailsBanner
                    companyName={portfolio?.companyName}
                    companyDetails={portfolio?.companyDetails}
                    companyImage={portfolio?.companyImage}
                />
            </div>
            {/* portfolio details images */}
            <div className='my-5'>
                <p className='font-extrabold md:text-5xl text-3xl my-4 text-center'>Images How We Have Helped Our Customers</p>
                <PortfolioDetailsImages
                    contributionImages={portfolio?.contributionImages}
                />
            </div>
            <div className='my-5'>
                <PortfolioDetailsContribution contributionDetails={portfolio?.contributionDetails} />
            </div>
            <Contact />
            <Footer />
        </div>
    )
}

export default PortfolioDetails