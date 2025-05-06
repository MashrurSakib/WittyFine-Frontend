import React from 'react'
import { v4 } from 'uuid'
import {TiTick} from 'react-icons/ti'
import { Card } from '@nextui-org/react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
const ServiceCard = ({ service }) => {
  
  return (
    <Card isHoverable variant="bordered" css={{ mw: "400px",height:'399px' }}>
      <Card.Body>
        <div className='h-full'>
            <h3 className='text-3xl font-extrabold mb-4 text-center'>{service?.service}</h3>
            {service?.solutions?.slice(0, 5)?.map(solution => <div key={v4()} className='my-2 mx-4'><TiTick className="inline hover:text-yellow-400" />{solution?.name}</div>)}
        </div>
        <div className='flex items-center'>
          <button className='mt-10 mx-auto bg-yellow-500 p-4 rounded-lg'>
            <Link className='text-white font-bold' to={`/services/${service?._id}`}>Explore More <FaArrowRight className='inline'/></Link>
          </button>
       </div>
      </Card.Body>
    </Card>
  )
}

export default ServiceCard