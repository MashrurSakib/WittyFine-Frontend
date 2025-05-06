import { Input } from '@nextui-org/react';
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios/axiosInstance';

const Login = () => {
    // react router to navigate
    const navigate=useNavigate()

    // hook form
    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    // check password
    const checkPassword = async (auth) => {
        try {
            const response = await axiosInstance.post(`authentication/checkPassword`, auth)
            if (response.status === 200) {
              await localStorage.setItem("email",auth?.email)
              navigate('/admin/blogcreation')
            }
        } catch (err) {
            toast.error('Not Authorized',err)
        }  
    }

    // on login form submission
    const onSubmit = async(data) => {
        console.log(data)
        checkPassword(data)
        // reset()
        // navigate to same route after login
    };
  return (
      <div className='bg-white'>
           <div className=' text-black h-[100vh] flex md:flex-row flex-col w-[90vw] items-center mx-auto'>
          <div className='md:w-1/2 w-full'>
              <img src="https://i.ibb.co.com/QF6jK361/Login-Vector.png" alt="Login" />
          </div> 
        <div className='md:w-1/2 w-full'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:my-10 my-0">
                    <Input
                        clearable
                        css={{width:'100%'}}
                        label="Email"
                        placeholder="Enter your email"
                        {...register("email",
                              {
                                  pattern: {
                                     value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Please enter a valid email',
                                  }
                              },
                              { required: "Email Address is required" })}
                          aria-invalid={errors.mail ? "true" : "false"}
                      />
                      {errors.email && <p className="text-red-400" role="alert">{errors.email?.message}</p>}
                </div>
                <div className="md:my-10 my-0">
                  <Input.Password
                    clearable
                    css={{width:'100%'}}
                    color="warning"
                    type="password"
                    {...register("password", { required: true })}
                    aria-invalid={errors.password ? "true" : "false"}
                    label="Password"
                    placeholder="Enter your password with eye"
                  />
                </div>
                  {errors.password?.type === 'required' && <p className="text-red-400" role="alert">Password is required</p>}
                  <div className='text-center'>
                    <input className='bg-primary text-white font-bold btn' type="submit" value="Login" />
                  </div>
              </form>
         </div>
    </div>
   </div>
  )
}

export default Login