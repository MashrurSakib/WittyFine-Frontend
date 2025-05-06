const AboutUsCard = ({title,text,image}) => {
  return (
      <>
        {/* <Card isHoverable variant="bordered" >
        <Card.Body css={{width:'50%'}}>
          <div className='flex items-center md:flex-row flex-col'>
            <div className='w-1/2'>
              <img className='w-[250px]' src="https://i.ibb.co/w47qHbt/Testimonial.png" alt="" />
            </div>
            <div className='w-1/2'>
               <div className='flex flex-col'>
                 <h4 className='text-lg inline-block text-yellow-500'>{title}</h4>
                 <p className=' bg-yellow-500 inline-block h-[2px] w-20'></p>
              </div>
              <p className='w-full'>{text}</p>
            </div>
          </div> */}
              {/* </Card.Body>
      </Card> */}
          {/* daisy ui card */}
      <div
        className={`move card lg:card-side bg-base-100 shadow-xl ${image !== undefined ? 'md:w-[800px]' : 'w-full'} md:h-[300px] border-2 border-solid border-primary`}>
        {image !== undefined ? <figure className='md:w-[30%] w-full md:p-5 p-0'><img className='md:w-[250px] w-full md:h-[271px] h-full aspect-auto' src={image} alt="Album" /></figure> : null}

            <div className="card-body md:w-[70%] m-auto">
          <h2 className="card-title">{title}!</h2>
                <span className='bg-yellow-500 h-[1px] w-[80px]'></span>
          <p className='text-wrap'>{text}</p>
             </div>
          </div>
      </>
    );
};

export default AboutUsCard;