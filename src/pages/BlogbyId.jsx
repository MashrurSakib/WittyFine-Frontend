import React, { useEffect, useState } from 'react'
import {motion, useScroll} from 'framer-motion'
import { useParams } from 'react-router-dom'
import Navigationbar from '../components/Navigationbar/Navigationbar'
import Footer from '../components/Footer/Footer'
import { Interweave } from 'interweave';
import { axiosInstance } from '../utils/axios/axiosInstance'
import {IoIosEye} from 'react-icons/io'
import {AiOutlineTags} from 'react-icons/ai'
import CustomHeader from '../utils/CustomHeader/CustomHeader'
const BlogbyId = () => {
  // state management
  const [blog, setBlog] = useState({})
  

    // id from recat router
    const {id} = useParams()


  useEffect(() => {
    getBlog(id)
  },[id])
    // blog fetching
    async function getBlog(id) {
        const response =await axiosInstance(`blog/getBlog?id=${id}`)
        setBlog(response?.data)
    }
   
    useEffect(() => {
            axiosInstance.put(`blog/update_blog_views?id=${blog?._id}`,{views:blog?.views+1})
            .then(res => {
              console.log("blog views updated", res);
            })
            .catch(err => {
              console.log("blog views update failed", err);
            } )
        }, [blog])
        

  return (
    <div className='bg-white text-black' id='blogDetails'>
      <CustomHeader title={`${blog?.title}`} thumbnail={blog?.image} overview={blog?.title} />
          <Navigationbar/>
      <motion.section
            initial={{opacity:0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[90vw] mx-auto py-16">
        <div className="blog-header mx-auto p-10">
              <div>
             <h4 className="text-xl text-indigo-500 font-bold font-mono">{blog?.author}</h4>
             <small className="text-neutral-500 text-xs">{blog?.creation_date}</small>
              </div>
           <div>
              <h2 className="text-2xl font-mono font-extrabold">{blog?.title}</h2>
              <div className="badge badge-lg"><IoIosEye />Views {blog?.views}</div>
              {/* <p className="font-mono text-sm font-bold inline"><AiOutlineTags className="inline" />{blog?.tag}</p> */}
           </div>
            </div>
            <div className="blog-image">
          <img className=" h-[570px] mx-auto rounded-lg" src={blog?.image} alt={blog?.title} />
            </div>
        <div className="blog-description md:w-[70%]  mx-auto my-5 ">
          <Interweave
            className='w-full'
	             content={blog?.text}
              />
            </div>
          </motion.section>
          <Footer/>
    </div>
  )
}

export default BlogbyId