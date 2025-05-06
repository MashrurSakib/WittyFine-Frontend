import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { v4 } from 'uuid';
import { Card } from '@nextui-org/react';
const AboutusSolution = () => {
    const data = [
        {
          title: 'Earning Traffic',
          description: 'Our marketers partner with you to identify your target market and get to work making your site more visible to your key market through our comprehensive digital marketing services.',
        },
        {
          title: 'Measurable Advertising',
          description: `By focusing on ROI from the starting line, our digital marketing agency crafts PPC, display, geotargeted, and remarketing campaigns engineered for success.`,
        },
        {
          title: 'Dazzling Designs',
          description: `Our interactive team, driven by a keen eye for conversion-based design, creates cutting-edge designs with a focus on the latest web standards.`,
        },
        {
          title: 'Social Reach',
          description: `Our team of social media experts can create and execute a social media management plan that gets the right message in front of your desired audience.`,
        },
      ];
  return (
      <>
        <div className='w-[90vw] mx-auto flex items-center justify-center py-20'>
              <div className='w-1/2 flex justify-center flex-col items-center'>
                  <span className='w-[130px] h-[10px] bg-white rounded-md'></span>
                  <h3 className='text-5xl font-extrabold'>Our Solutions</h3>
              </div>
              <div className='w-1/2'>
                <Swiper
                className="mySwiper swiper-h"
                spaceBetween={50}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                    delay:300
                }}
                modules={[Pagination]}
                breakpoints={{
                        300: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        500: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                }}
            >
              {data.map(elem=><SwiperSlide key={v4()}><Card isHoverable css={{height:'320px',padding:'20px',position:'relative'}}>
                  <Card.Body>
                     <h4 className='md:text-3xl text-2xl inline-block bg-white py-2 mb-2'>{elem?.title}</h4>
                    <div>
                        <p className='inline-block text-left overflow-x-hidden overflow-y-scroll'>{elem?.description}</p>
                     </div>
                  </Card.Body>
                  </Card></SwiperSlide>)}
                </Swiper>
            </div>
       </div>
      </>
          
  )
}

export default AboutusSolution