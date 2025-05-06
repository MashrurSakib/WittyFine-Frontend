import React from 'react'
import ShowContact from '../../components/Contact/ShowContact'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import DrawerNavigation from '../../shared/Drawer/DrawerNavigation'

const ContactResponse = () => {
  return (
      <div className='text-black'>
          <Navigationbar />
          <DrawerNavigation>
             <ShowContact/>
         </DrawerNavigation>
    </div>
  )
}

export default ContactResponse