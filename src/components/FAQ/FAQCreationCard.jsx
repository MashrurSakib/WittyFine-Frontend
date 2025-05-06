import { Card, Input, Textarea } from '@nextui-org/react'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { axiosInstance } from '../../utils/axios/axiosInstance'

const FAQCreationCard = () => {
  // state management
  const [question,setQuestion]=useState("")
  const [answer, setAnswer] = useState("")


  // post faq
  async function postFAQ(faq) {
    const response = await axiosInstance.post('faq/postFAQ', faq)
    return response?.data
    
 }
  // POST faw
  const handlePostFAQ = () => {
    if (question === "" || answer === '') {
      toast.error('All feild required')
      return
    }
    const faq = {
      question,answer
    }
    postFAQ(faq)
  }
  return (
    <Card className='w-[70vw] mx-auto px-20'>
      <Card.Body>
        <Input
          onChange={e=>setQuestion(e.target.value)}
                clearable
            bordered
                labelPlaceholder="Question"
          css={{ width: '100%', margin: '5px 0' }}
          required
          />
        <Textarea onChange={e=>setAnswer(e.target.value)} css={{ width: '100%', margin: '30px 0' }} labelPlaceholder="Warning" status="warning" required/>
        <button onClick={handlePostFAQ} className='btn btn-[bg-yellow-200]'>Submit</button>
     </Card.Body>  
   </Card>
  )
}

export default FAQCreationCard