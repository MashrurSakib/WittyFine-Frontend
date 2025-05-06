import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { FaLongArrowAltRight } from 'react-icons/fa'
import './BlogShowCard.css'
const BlogShowCard = ({blog}) => {
  const { title, card_text, _id } = blog
  // const showText = <Interweave content={text} />
  // const chnaged = showText.slice(0, 400)
  // console.log(showText);
  return (
    <div
      className="rounded-2xl bg-white shadow-2xl md:w-[399px] p-10 w-full ">
      <div className=''>
        <h4 className='text-3xl font-bold w-full  my-2'>{title}</h4>
        <p>{card_text.slice(0, 450)}</p> 
        <p className='w-full  my-2'>
          ...
        </p>
        <NavLink to={`/blog/${_id}#blogDetails`}>
          <button className='btn btn-primary text-white'>Read More <FaLongArrowAltRight/></button>
        </NavLink>
      </div>
         
    </div>
  )
}

export default BlogShowCard