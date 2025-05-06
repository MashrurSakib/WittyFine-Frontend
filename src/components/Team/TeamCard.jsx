
import { Avatar, Card } from '@nextui-org/react'
import React from 'react'

const TeamCard = ({team}) => {
  return (
    <Card css={{width:'300px',height:'320px'}}>
       <Card.Body css={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
         <Avatar
            size="lg"
            src={team?.image}
            color="warning"
            bordered
              />
        <div className='text-center'>
          <h5 className='font-extrabold text-xl'>{team?.Name}</h5>
          <p className='font-bold'>{team?.Designation}</p>
          <p className='w-[90%] mx-auto text-center break-words whitespace-pre-wrap'>{team?.Info}</p>
            {/* <div><a href={`mailto:${}`}>{ email}</a></div> */}
        </div> 
       </Card.Body>
    </Card>
  )
}

export default TeamCard