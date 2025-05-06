import { Collapse } from '@nextui-org/react'
import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { v4 } from 'uuid'
import { axiosInstance } from '../../utils/axios/axiosInstance'
import Accordian from './Accordian'

const Faq = () => {
     // getting all blogs
     async function getFaqs() {
        const response =await axiosInstance('faq/getFAQs')
        return response.data
     }

    
    // using react-query
    const { isLoading, error, data:faqs,isError } = useQuery('faqs',getFaqs)
    // defining faq content
  let faqContent;
  if (isLoading) {
    faqContent=<ThreeDots 
    height="80" 
    width="80" 
    radius="9"
    color="#4fa94d" 
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
     />
  } else if (isLoading === false && faqs?.length > 0) {
    faqContent=faqs?.map(faq => <Accordian key={v4()} faq={faq}/>)
  }else if (isLoading === false && isError === true) {
    <p>Internt issue</p>
  }
      
  return (
      <div className='bg-white'>
          <div className='text-center my-20'>
              <h3 className='text-5xl font-extrabold bottom-solid border-b-4 border-yellow-200 inline '>Frequently Asked Questions</h3>
          </div>
          <div className='w-[90vw] mx-auto'>
          <Collapse.Group splitted bordered>    
          { faqContent}
        </Collapse.Group>
        </div>
    </div>
  )
}

export default Faq