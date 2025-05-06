import React, { useEffect, useState } from 'react';
import { axiosInstance } from "../../utils/axios/axiosInstance";
import { toast } from "react-hot-toast";
import ContactList from "./ContactList";
import ContactTextModal from "./ContactTextModal";

const ShowContact = () => {
  // state management
  const [allContact, setAllContact] = useState([])
  const [modalText,setModalText]=useState('')
  
  // fetch contact action
  const fetchAllContact = async() => {
    try {
      const response = await axiosInstance('contact/getContact')
      setAllContact(response.data)
    } catch (err) {
       toast.error(err)
    }
  }

  // handleing side effect
  useEffect(() => {
    fetchAllContact()
  }, [])
  

  return (
    <div className="w-full overflow-x-scroll">
    <table className="table w-full">
      {/* head */}
      <thead >
        <tr>
          <th className="bg-primary">Name</th>
          <th className="bg-primary">Email</th>
          <th className="bg-primary">Subject</th>
          <th className="bg-primary">Text</th>
          <th className="bg-primary"></th>
        </tr>
      </thead>
      <tbody>
          {/* row 1 */}
          {allContact?.map(contact=><ContactList key={contact._id} setModalText={setModalText} contact={contact}/>)}
        
      </tbody>
      {/* foot */}
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Emial</th>
          <th>Subject</th>
          <th>Text</th>
          <th></th>
        </tr>
      </tfoot>
      
      </table>
      <ContactTextModal text={modalText} />
  </div>
  )
}

export default ShowContact