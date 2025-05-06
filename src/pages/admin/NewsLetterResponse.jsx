import React from 'react'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import NewsLetterResponseTable from '../../components/NewsLetter/NewsLetterResponseTable'
import DrawerNavigation from '../../shared/Drawer/DrawerNavigation'


const NewsLetterResponse = () => {
  return (
    <div className='text-black'>
          <Navigationbar />
          <DrawerNavigation>
            <NewsLetterResponseTable/>
         </DrawerNavigation>
    </div>
  )
}

export default NewsLetterResponse