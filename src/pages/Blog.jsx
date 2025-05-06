import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import BlogShowCard from '../components/Blog/BlogShowCard'
import Footer from '../components/Footer/Footer'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import WhyUs from '../components/Services/WhyUs'
import { axiosInstance } from '../utils/axios/axiosInstance'
import CustomHeader from '../utils/CustomHeader/CustomHeader'

const Blog = () => {
    // getting all blogs
    async function getBlogs() {
        const response =await axiosInstance('blog/getBlogs')
        return response.data
    }
    // using react-query
    const { isLoading, error, data: blogs,isError } = useQuery('blogs',getBlogs)
    let blogContent;

  if (isLoading) {
    blogContent=<ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#4fa94d" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />
  } else if (isLoading === false && blogs.length > 0 ) {
    blogContent=blogs?.map(blog => <BlogShowCard key={blog._id} blog={blog} />)
  } else if (isLoading === false && isError === true) {
    <p>Internt issue</p>
  }
  return (
    <div className='bg-white text-black' id='blog' >
      <CustomHeader title={"Blog"}/>
      <Navigationbar />
      <div style={{background:'url(https://i.ibb.co.com/8SSg5gb/Wave.png)'}} className=' py-40'>
        <h3 className='text-3xl font-extrabold w-[90vw] mx-auto'>WittyFine Blog</h3>
        <p className='text-primary  w-[90vw] mx-auto'>Digital Marketing Articles</p>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 justify-items-center py-14 w-[90vw] mx-auto'>
        {blogContent}
      </div>
      <WhyUs/>
      <Footer/>
    </div>
  )
}

export default Blog