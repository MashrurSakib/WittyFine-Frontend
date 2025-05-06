import { Collapse,Text } from '@nextui-org/react'
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
const Accordian = ({ faq }) => {
    // state management
    const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapse onClick={()=>setIsOpen(a=>!a)} title={faq?.question}>
            <Text>
              <Typewriter
                options={{
                  strings: faq?.answer,
                  loop:false,
                  autoStart:true,
                  start: isOpen,
                  delay: 10,
                }}
              />                
            </Text>
    </Collapse>
  )
}

export default Accordian