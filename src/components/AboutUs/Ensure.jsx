import React from 'react'

const Ensure = () => {
  return (
    <div className='flex w-[90vw] mx-auto md:flex-row flex-col my-40 justify-center items-center'>
          <div className='md:w-1/2'>
            <img className='md:w-[70%] rounded-lg' src="https://img.freepik.com/free-vector/follow-leader-concept-illustration_114360-10886.jpg" alt="" />
          </div>
          <div className='md:w-1/2'>
            <div>
                  <h4 className='md:text-5xl text-2xl inline-block font-extrabold text-yellow-400'>Tech based <span className='md:text-5xl text-2xl inline-block font-extrabold text-black'>Solution</span></h4>
                  <br />
                 <span className='w-[80px] h-[2px] bg-yellow-300 inline-block'></span>
             </div>
              <p className='w-[100%]'>Combining our technology platform and our expert online marketing team gives you an unfair advantage over your competition. As a leader in SEO, PPC, social, marketplaces, and web design services, our digital marketing agency prides itself on driving qualified traffic, converting visitors, and using cutting-edge technology measuring effectiveness to deliver real results for our clients.</p>
          </div>
    </div>
  )
}

export default Ensure