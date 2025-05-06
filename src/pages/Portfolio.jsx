import React from 'react'
import Footer from '../components/Footer/Footer'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import PortfolioBanner from '../components/Portfolio/PortfolioBanner'
import PortfolioContainer from '../components/Portfolio/PortfolioContainer'
import Contact from '../shared/Drawer/Contact/Contact'
import CustomHeader from '../utils/CustomHeader/CustomHeader'

const Portfolio = () => {

    return (
        <div className='bg-white text-black' id='portfolio'>
            <CustomHeader title={"Portfolio"} />
            <Navigationbar />
            <div className='py-28'>
                <PortfolioBanner />
            </div>
            <PortfolioContainer />
            <Contact />
            <Footer />
        </div>
    )
}

export default Portfolio