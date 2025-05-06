import React from 'react'
import { Carousel } from 'primereact/carousel';
import TestimonialCard from './TestimonialCard';
const TestimonialRedesign = () => {
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '400px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    return (
        <div>
            <div className='app-testimonial-DESKTOP-responsive'>
                <Carousel value={allTestimonials}
                    numVisible={3} numScroll={3}
                    className="custom-carousel"
                    // circular
                    // autoplayInterval={3000}
                    responsiveOptions={responsiveOptions} itemTemplate={TestimonialCard} />
            </div>

            <div className='app-testimonial-mobile-responsive'>
                <Carousel value={allTestimonials}
                    // circular
                    // autoplayInterval={3000}
                    numVisible={1} numScroll={1} orientation="vertical"
                    verticalViewPortHeight="600px"
                    itemTemplate={TestimonialCard}
                />
            </div>

        </div>


    )
}

export default TestimonialRedesign

export const allTestimonials = [
    {
        "id": 1,
        "name": "Muhammad Refat Ahmed",
        "review": "This is an honest review. I had the chance to talk to the founder. He has outstanding knowledge of digital marketing (DM) strategy and extensive experience in providing digital services to various national and international companies. His words prove him to be a strategy-focused, impact-driven marketer, and service provider. You can definitely consider taking services from his agency for your start-up."
    },

    {
        "id": 2,
        "name": "Md Shanto Mandal",
        "review": "I recently worked with this company on a media buying project and have been thoroughly impressed with the service they provided. They were very knowledgeable in the area of media buying, offering great advice on where to advertise and what campaigns would be the most effective. Overall, I highly recommend this company to anyone looking for expert media buying services."
    },

    {
        "id": 3,
        "name": "Arif Anjum Leon",
        "review": "I recently had the pleasure of working with the team at WittyFine. They completely exceeded my expectations in both their creative design and engagement campaign. Artisan Outfitters had a really great experience working with them. Their attention to detail and passion for the project was evident throughout the entire process. I would highly recommend them for any marketing needs you may have. Thanks again to WittyFine for a job well done!"
    },

    {
        "id": 4,
        "name": "Shishir Rahman",
        "review": "The team was able to quickly identify key characteristics of Taffy's target audience, and provided valuable insights and recommendations on how to effectively market the product to this group. I highly recommend WittyFine team to any business looking to gain a deeper understanding of their target audience and develop an effective marketing strategy."
    },

    {
        "id": 5,
        "name": "Mike Anderson",
        "review": "I recently had the pleasure of working with WittyFine Team to help JA Plumbing with their social media posters and lead generation. Their attention to detail was remarkable and they worked quickly and efficiently to get the job done. I'd highly recommend their services to anyone looking for professional marketing help."
    },

    {
        "id": 6,
        "name": "John Smith",
        "review": "I recently worked with this company to drive more sales through digital platforms. They provided helpful insights and advice to help us structure our campaigns and optimize our approach. The results were outstanding, with a significant increase in our sales numbers. They were also very knowledgeable about industry trends, which enabled us to stay ahead of the competition."
    },

    {
        "id": 7,
        "name": "Jonathan schweizer",
        "review": "I recently contracted WittyFine to help with managing our Google My Business profile and online reputation. Their service was exceptional - they were highly responsive, organized, and professional. They were able to quickly understand our needs and develop a plan of action that was tailored to our business’s needs. They provided detailed reporting that allowed Tony Beef to track progress and see the results of their work."
    }

]