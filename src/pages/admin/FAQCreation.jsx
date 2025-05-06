import React from 'react'
import FAQCreationCard from '../../components/FAQ/FAQCreationCard'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import DrawerNavigation from '../../shared/Drawer/DrawerNavigation'

const FAQCreation = () => {
  return (
      <div className='bg-white text-black'>
          <Navigationbar />
          <DrawerNavigation>
            <FAQCreationCard/>
        </DrawerNavigation>
    </div>
  )
}

export default FAQCreation