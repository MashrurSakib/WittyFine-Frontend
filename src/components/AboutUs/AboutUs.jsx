import React from 'react';
import AboutUsCard from './AboutUsCard';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className='w-[90vw] mx-auto md:my-52 my-32'>
           <div className='flex justify-center items-center flex-col my-10'>
                <h4 className='md:text-4xl inline-block word-wrap font-extrabold text-2xl'>We're A Leader In Tech-Enabled Digital Marketing Solutions</h4>
                <span className='h-[5px] block rounded-full gradient mt-5'></span>
                <p className='mt-10'>Combining our technology platform and our expert online marketing team gives you an unfair advantage over your competition. As a leader in SEO, PPC, social, marketplaces, and web design services, our digital marketing agency prides itself on driving qualified traffic, converting visitors, and using cutting-edge technology measuring effectiveness to deliver real results for our clients.

                Get in touch with us today to experience what makes WittyFine stand apart from other digital marketing agencies.
                </p>
           </div>
            <div className='w-[80%] mx-auto'>
                <div className='flex justify-start my-5'>
                    <div>
                       <div className='text-8xl text-yellow-100 font-bold'>01</div>
                        <AboutUsCard
                            image={'https://i.ibb.co.com/prfhV00L/Testimonial.png'}
                           title={`Proven Performance`}
                           text={`We've partnered with the best to bring the latest marketing technology to our clients.`}
                         />
                    </div>
                </div>
                <div  className='flex justify-end my-4'>
                    <div>
                        <div className='text-8xl text-yellow-100 font-bold flex justify-end'>02</div>
                        <AboutUsCard
                            image={"https://i.ibb.co.com/ycbvnsQD/Get-Started.png"}
                            title={`Transparent ROI Tracking`}
                            text={`Clients have access to our data and can monitor every detail of their campaign.`}
                        />
                    </div>
                </div>
                <div className='flex justify-start my-5'>
                    <div>
                        <div className='text-8xl text-yellow-100 font-bold'>03</div>
                        <AboutUsCard
                            image={"https://i.ibb.co.com/R494Z7rq/Settings.png"}
                            title={'Unparalleled Track Record'}
                            text={"Understanding the steps needed to beat your competitors is essential when understanding the length of the project, and how we will effectively tackle your digital marketing.​​"}
                        />
                    </div>
                </div>
                <div className='flex justify-end my-4'>
                    <div>
                       <div className='text-8xl text-yellow-100 font-bold flex justify-end'>04</div>
                        <AboutUsCard
                            image={'https://i.ibb.co.com/CpwFJ0BK/Team-Work.png'}
                           title={'Launch'}
                           text={"Taking every step we have planned and carefully following the laid-out road map to reach your business goals.​"}
                        /> 
                    </div>
                </div>
            </div>

                

        </div>
    );
};

export default AboutUs;