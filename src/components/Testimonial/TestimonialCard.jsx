import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'
import './TestimonialCard.css'
const TestimonialCard = (testimonial) => {

    return (
        <div className='app-testimonial_card shadow-2xl rounded-xl'>
            <div className='app-testimonial_card-review'>
                <h4>Company logo</h4>
                <p className='font-extrabold text-lg'>{testimonial?.review}</p>
            </div >
            <div className='flex justify-evenly  app-testimonial_card-reviewer'>
                <div>
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='rounded-full app-testimonial_card-avatar' src="https://i.ibb.co/VVKMtNK/Ali-Mohammad-Yahia.jpg" />
                    </div>
                </div>
                <div className='mx-5'>
                    <h5>{testimonial?.name}</h5>
                    <p>Designation</p>
                </div>
                <div className=''>
                    <RiDoubleQuotesR className='w-20 block h-16' />
                </div>
            </div>
        </div >
    )
}

export default TestimonialCard