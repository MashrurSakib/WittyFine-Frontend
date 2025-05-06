import React from 'react'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import PortfolioCreate from '../../components/PortfolioDetails/PortfolioCreate'
import DrawerNavigation from '../../shared/Drawer/DrawerNavigation'

const PortfolioCreation = () => {
    return (
        <div className='bg-white h-[100vh] text-black'>
            <Navigationbar />
            <DrawerNavigation>
                <PortfolioCreate />
            </DrawerNavigation>
        </div>
    )
}

export default PortfolioCreation