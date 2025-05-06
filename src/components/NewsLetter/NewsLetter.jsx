import { Button } from '@nextui-org/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { axiosInstance } from '../../utils/axios/axiosInstance';

const NewsLetter = () => {
    // handle newsletter email
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axiosInstance.post(`newsletter/create`, {
            email: data.email,
        })
            .then((res) => {
                toast.success('You are Added')
                reset()
            })
            .catch((err) => {
                console.log(err);
                toast.error('Something went wrong')
            });
  };
    return (
        <div className='w-[100vw] bg-[#F9BC6E] md:px-20 md:py-36 my-20 px-10 py-20'>
            <div className='md:w-[70%] w-[90%] mx-auto md:flex md:justify-between md:items-center'>
            <div className='md:w-1/2 w-full'>
                <h3 className='text-white md:text-5xl text-2xl font-extrabold'>Book A Free Digital </h3>
                <h3 className='text-white md:text-5xl text-2xl font-extrabold'>Marketing Consultation</h3>
            </div>
            <div className='md:w-1/2 w-full mt-3 md:mt-0'>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <input

                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                },
                            })}
                        
                            className=' inline-block rounded-2xl bg-white p-5 w-full'
                        placeholder="Enter your email" 
                        />
                        {errors.email && <p role="alert" className='text-red-500 font-bold'>{errors.email?.message}</p>}
                    <Button css={{width:'100%',margin:'5px 0',background:'white',color:'black'}} type="submit" >Subscribe to Newsletter</Button>
               </form>
            </div>
           </div>
        </div>
    );
};

export default NewsLetter;