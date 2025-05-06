import { Button, Card, Input, Loading, Textarea } from '@nextui-org/react'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { axiosInstance } from '../../utils/axios/axiosInstance'
import BlogTextEditor from './BlogTextEditor'

const BlogCreateCard = () => {
    // state management
    const [imageLoading, setImageLoading] = useState(0);
    const [cardImage, setCardImage] = useState('');
    const [value,setValue] =useState('')
    // react-router navigation
    const navigate=useNavigate()

    // react-form-hook
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        // all feiled checking
        if (cardImage === '') {
            toast.error('Image is required')
            return
        }
        if (value === '') {
            toast.error('Blog Description is required')
            return
        }
        const blog = {
            _id:v4(),...data,image:cardImage,text:value,views:0,creation_date:moment().format("MMM Do YY")
        }
        await postBlog(blog)
        navigate('/blog')

    };
     // post blog to database
    
    async function postBlog(newBlog) {
        const response = await axiosInstance.post('blog/postBlog', newBlog).then(res=>toast.success('Blog posted'))
        return response?.data
        
     }
    // post image to imagebb
     function postToImagebb(e) {
        //      post image to image bb
        const formData = new FormData();
         formData.append("image", e.target.files[0]);
         axios.post(`${import.meta.env.VITE_APP_IMAGEBB_URL}`, formData).then(function (response) {
            setCardImage(response?.data?.data?.display_url);
         }).catch(err => toast.error(err));

        // if (error) return 'An error has occurred: ' + error.message
     }
    
  return (
    <Card isHoverable>
          <Card.Body>
            <div className='w-[70vw] mx-auto'>
                  <form onSubmit={handleSubmit(onSubmit)}>

                      <div className='flex justify-between my-5'>
                          <Input width='45%' clearable bordered
                              {...register("title", { required: true })}
                              aria-invalid={errors.title ? "true" : "false"}
                              type='text'
                              placeholder="Blog Title"
                          />
                          {errors.text?.type === 'required' && <p role="alert">Text is required</p>}
                      <input
                          type="file" className="file-input file-input-bordered file-input-success w-[45%] inline-block bg-white"
                          onChange={(e) => postToImagebb(e)}
                      /> 
                  </div>
                  <div className='mx-auto text-center'>
                      <Input clearable bordered
                          width='90%'
                       placeholder="Author name"
                        {...register("author", { required: true })} 
                         aria-invalid={errors.author ? "true" : "false"} 
                        type='text'
                    />
                  </div>
                      {errors.author?.type === 'required' && <p role="alert">Text is required</p>}
                      <p className='text-red-400'>Test must be under 450 words</p>
                      <Textarea width='100%' clearable bordered
                          {...register("card_text", { required: true })}
                          aria-invalid={errors.card_text ? "true" : "false"}
                          type='text'
                          placeholder="Card text"
                      />
                      {errors.card_text?.type === 'required' && <p className=' text-red-500' role="alert">Card Text is required</p>}
                  <div className='my-3'>
                          <BlogTextEditor value={value} setValue={setValue} />
                      </div>

                  <div className='flex justify-center items-center'>
                    <Button className='my-10' clickable={true} type='submit' size='xl'>
                        Submit
                    </Button>
                  </div>
              </form>
            </div>
          </Card.Body>
    </Card>
  )
}

export default BlogCreateCard