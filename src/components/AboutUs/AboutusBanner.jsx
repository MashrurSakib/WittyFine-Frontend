import React from 'react'

const AboutusBanner = () => {
  return (
      <div  className="flex w-[90vw] mx-auto md:flex-row-reverse flex-col-reverse items-center">
        <div className='md:w-[50%] flex justify-center w-full'>
          <img className='md:w-[500px]' src="https://i.ibb.co.com/N2fptdsB/High-Quality-Products-1.png" alt="about us" />
        </div>
        <div className='md:w-[50%] flex justify-center w-full'>
           <div>
            <div>
                <h3 className='font-extrabold  md:text-6xl text-3xl bottom-solid border-b-4 border-yellow-200 inline'>Revenue-Generating .</h3>
                <br />
                <h3 className='font-extrabold md:text-6xl text-3xl'>Digital Marketing <span className='text-yellow-400'> Solutions</span></h3>
                <br />
                <small>Featured in leading publications around the world</small>
            </div>
               <p className='word-wrap'>
                    WittyFine is a tech-enabled digital marketing solutions provider, and we create custom strategies for each of our clients based on their needs and goals.

                    Our team is made up of professional marketers, designers, and developers, and we know what it takes to get real results online. We also keep the focus on the metrics that mean the most, like leads and revenue generated. We know that hitting these goals is what moves businesses forward, and we believe that our clients' success is the best measure of our own performance.
      
               </p>
           </div>
      </div>
   </div>
  )
}

export default AboutusBanner