import React from 'react'
import BlogCreateCard from '../../components/Blog/BlogCreateCard'
import BlogTextEditor from '../../components/Blog/BlogTextEditor'
import Footer from '../../components/Footer/Footer'
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import DrawerNavigation from '../../shared/Drawer/DrawerNavigation'
const Blog = () => {
  return (
    <div className='bg-white h-[100vh] text-black'>
        <Navigationbar />
        <DrawerNavigation>
          <BlogCreateCard/>
        </DrawerNavigation>
    </div>
  )
}

export default Blog