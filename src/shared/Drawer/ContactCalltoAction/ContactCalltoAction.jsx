import React, { useEffect, useState } from 'react'
import { FcCallback } from 'react-icons/fc'
import { BsFillChatLeftFill } from 'react-icons/bs'
import { FcCalendar } from 'react-icons/fc'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { axiosInstance } from '../../../utils/axios/axiosInstance'
import './ContactCalltoAction.css'
import { v4 } from 'uuid'
import { Card } from '@nextui-org/react'
const ContactCalltoAction = ({ children }) => {
  // react-hook-form
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  // state management
  const [isStartOpenClicked, setIsStartOpenClicked] = useState(false)
  const [services, setServices] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
  // functions--
  // functions--axios get to fetch all service
  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await axiosInstance('/services/getServices')
        const serviceCollection = await response?.data?.map(elem => elem.service)
        setServices(serviceCollection)
      } catch (err) {
        toast.error(err)
      }
    }
    getServices()
  }, [])
  // post contact info to database
  const postContact = async (newContact) => {
    return axiosInstance.post('contact/postContact', newContact)
      .then(response => {
        toast.success('Got your response.')
        reset()
      })
      .catch(err => toast.error(err))
  }
  // functions--handle contact submission
  const onSubmit = (data) => {
    postContact({ _id: v4(), ...data })
  };

  // console.log(isStartOpenClicked);


  // drawer content
  let drawerContent;
  // when isStartOpenClicked is false
  if (isStartOpenClicked === false) {
    drawerContent = <div className="">
      <div className='callToAction-lg'>
        <label style={{ borderRadius: '0% 100% 67% 33% / 0% 26% 74% 100% ' }} htmlFor="my-drawer-4" className=" callToAction-label-lg drawer-button btn hover:bg-[#00337C] bg-[#00337C] fixed  w-20 h-20  text-white font-extrabold flex flex-col">Chat<BsFillChatLeftFill className='inline-block' /></label>
      </div>
      <div className='callToAction-sm'>
        <label htmlFor="my-drawer-4" className="callToAction-label-sm drawer-button btn hover:bg-[#00337C] bg-[#00337C] fixed  w-20 h-10 text-white font-extrabold flex flex-col">Chat <BsFillChatLeftFill className='inline-block' /></label>
        {/* <!-- Sidebar content here --> */}
      </div>
      <p className='text-2xl font-extrabold'>What are you waiting for?</p>
      <p className='text-xl text-primary font-extrabold'>Let's talk</p>
      {/* Phone Number */}
      {/* <div className="divider"></div> */}
      <Card isHoverable css={{ margin: '15px 0' }}>
        <Card.Body >
      <div className='rounded-xl flex items-center cursor-pointer '>
            <div className='p-4 rounded-lg '>
          <FcCallback className='inline-block w-10' />
        </div>
        <div className='flex flex-col ml-5'>
          <small>Phone Number</small>
          <a className='text-black font-extrabold' href={`tel:+${import.meta.env.VITE_APP_PHONE_NUMBER}`}>{import.meta.env.VITE_APP_PHONE_NUMBER}</a>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* Email */}
      {/* <div className="divider"></div> */}
      <Card isHoverable css={{ margin: '15px 0' }}>
        <Card.Body >
      <div className='rounded-xl flex items-center cursor-pointer '>
            <div className='p-4 rounded-lg'>
          <img className='w-10 block' src="https://i.ibb.co/H4vvgkr/istockphoto-1128540244-170667a.jpg" alt="" />
        </div>
        <div className='flex flex-col ml-5'>
          <small>Email</small>
          <a className='text-black font-extrabold' href={`mailto:${import.meta.env.VITE_APP_EMAIL}`}>{import.meta.env.VITE_APP_EMAIL}</a>
        </div>
          </div>
        </Card.Body>
      </Card>
      {/* whats app */}
      {/* <div className="divider"></div> */}
      <Card isHoverable css={{ margin: '15px 0' }}>
        <Card.Body >
      <div className='rounded-xl flex items-center w-full cursor-pointer '>
            <div className='p-4 rounded-lg'>
          <img className='w-10 block' src="https://i.ibb.co/ZTwLRxx/whatsapp-design-template-a62f0bf703ae0061d9754c93653c510a-screen.jpg" alt="" />
        </div>
        <div className='flex flex-col ml-5'>
          <small className='block'>Whats App</small>
          <p className='font-extrabold'>{import.meta.env.VITE_APP_PHONE_NUMBER}</p>
        </div>
          </div>
        </Card.Body>
      </Card>
      {/* <div className="divider"></div> */}
      {/* callender link */}
      <Card isHoverable css={{ margin: '15px 0' }}>
        <Card.Body >
          <div className=' flex items-center cursor-pointer '>
            <div className='p-4 rounded-lg'>
          <FcCalendar className='w-10 h-10' />
          {/* <img className='w-10 block' src="https://i.ibb.co/ZTwLRxx/whatsapp-design-template-a62f0bf703ae0061d9754c93653c510a-screen.jpg" alt="" /> */}
        </div>
        <div className='flex flex-col ml-5'>
              <a href='https://calendly.com/themarketingkit/get-a-free-consultancy' target="_blank" className='font-extrabold text-lg text-black'>Schedule a call <FaLongArrowAltRight className='inline-block' /></a>
        </div>
          </div>
        </Card.Body>
      </Card>
      {/* <div className="divider"></div> */}
      {/* Start a project*/}
      <Card isHoverable css={{ margin: '15px 0' }}>
        <Card.Body >
          <div onClick={() => setIsStartOpenClicked(elem => !elem)} className=' flex items-center cursor-pointer '>
            <div className='p-4 rounded-lg'>
          {/* <FcCalendar className='w-10 h-10' /> */}
          <img className='w-10 block' src="https://i.ibb.co/Z2NHKps/images.png" alt="" />
        </div>
        <div className='flex flex-col ml-5'>
          <a className='font-extrabold text-lg text-black'>Start a project <FaLongArrowAltRight className='inline-block' /></a>
        </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  }
  // when isStartOpenClicked is true
  if (isStartOpenClicked === true) {
    drawerContent = <div className="">
      <div className='callToAction-lg'>
        <label style={{ borderRadius: '0% 100% 67% 33% / 0% 26% 74% 100% ' }} htmlFor="my-drawer-4" className="callToAction-label-lg drawer-button btn hover:bg-[#00337C] bg-[#00337C] fixed w-20 h-20  text-white font-extrabold ">Chat<BsFillChatLeftFill className='inline-block' /></label>
      </div>
      <div className='callToAction-sm'>
        <label htmlFor="my-drawer-4" className="callToAction-label-sm drawer-button btn hover:bg-[#00337C] bg-[#00337C] fixed w-20 h-10 text-white font-extrabold">Chat<BsFillChatLeftFill className='inline-block' /></label>
        {/* <!-- Sidebar content here --> */}
      </div>
      {/* <!-- Sidebar content here --> */}
      <button onClick={() => setIsStartOpenClicked(elem => !elem)} className='text-blue-400 font-bold btn-ghost text-left'><FaLongArrowAltLeft className='text-blue-400 font-bold inline-block' />Back</button>
      <h3 className='font-extrabold text-2xl'>Need a digital product or a custom solution? We’re all ears!</h3>
      <p>It usually takes us up to 6 hours to get back to you.</p>
      <form className='mx-auto w-[95%]' onSubmit={handleSubmit(onSubmit)}>
        {/* name */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input type="text" placeholder="Type here"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
            className="input input-bordered w-full max-w-xs" />
          {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>Name is required</p>}
        </div>
        {/* email */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your email</span>
          </label>
          <input type="email" placeholder="Type here"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            })}
            className="input input-bordered w-full max-w-xs" />
          {errors.email?.type === 'required' && <p role="alert" className='text-red-500'>Email is required</p>}
        </div>
        {/* Message */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea placeholder="Your message"
            {...register("message", { required: true })}
            aria-invalid={errors.message ? "true" : "false"}
            className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
          {errors.message?.type === 'required' && <p role="alert" className='text-red-500'>Message is required</p>}
        </div>
        {/* Phone Number */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type={'tel'} placeholder="Your phone number"
            {...register("phoneNumber")}
            className="textarea textarea-bordered textarea-lg w-full max-w-xs" />
        </div>
        {/* All services */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Select one services</span>
          </label>
          <select {...register("service")} className="select select-bordered">
            <option disabled selected>Pick one service</option>
            {services?.map(elem => <option key={elem?._id} value={elem}>{elem}</option>)}
          </select>
        </div>
        {/* submission button */}
        <input className='btn btn-primary rounded-full p-5 text-black font-extrabold block btn-full w-full my-3' type="submit" value="Submit" />
      </form>
    </div>
  }
  return (
      <div>
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                  {/* <!-- Page content here --> */}
                  {children}
            {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary fixed top-[50vh] left-[75%]">Open drawer</label> */}
         </div> 
        <div className="drawer-side">
           <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <div className="menu p-4 bg-base-100 text-base-content callAction">
            {drawerContent}
          </div>
          </div>
        </div>
      </div>
  )
}

export default ContactCalltoAction