import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { axiosInstance } from '../../utils/axios/axiosInstance'
import { MdDeleteSweep } from 'react-icons/md'
import {CiRead} from 'react-icons/ci'
import ContactTextModal from './ContactTextModal'
const ContactList = ({ contact,setModalText }) => {

  // handle Delete response
  const handleDelete = async(id) => {
    try {
      const response = axiosInstance.delete(`contact/deleteContact?id=${id}`)
      toast.success('contact deleted')
    } catch (err) {
      toast.error(err)
    }
  }
  
  
  return (
    <tr>
          <td>
            {contact?.name}
          </td>
          <td>
            {contact?.email}
          </td>
          <td>
        {contact?.subject}{contact?.service}
          </td>
          <td onClick={()=>setModalText(contact?.message)} className='line-break  bg-white text-black'>
             <label  htmlFor="my-modal-3" className=""> <CiRead className='bg-white shadow-md text-xl text-black'/></label>
          </td>
          <th>
            <button onClick={()=>handleDelete(contact?._id)} className="btn btn-ghost"><MdDeleteSweep className='text-red-500 text-xl'/></button>
      </th>
        </tr>
  )
}

export default ContactList