import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../../utils/axios/axiosInstance'

const NewsLetterResponseTable = () => {
    // state management
    const [newsletters,setNewsLetters]=useState([])
    // getting all newsletter response
    useEffect(() => {
        async function getNewsLetter() {
            const response = await axiosInstance('newsletter/read')
            return setNewsLetters(response?.data)
            
        }
        getNewsLetter()
    }, [])
    console.log(newsletters)
  return (
    <div>
          <div className="overflow-x-auto w-full">
  <table className="table w-[calc(100vw-350px)] text-black">
    {/* head */}
    <thead>
      <tr>
        <th bg-primary>Email</th>
        <th bg-primary></th>
      </tr>
    </thead>
    <tbody>
    {/* row 1 */}
    {newsletters.map(newsletter =>
        <tr>
            <td>
                <p>{newsletter?.email}</p>
            </td>
                <th>
            <button className="btn btn-ghost btn-xs">details</button>
            </th>
         </tr>)}

    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th>Name</th>
        {/* <th>Job</th>
        <th>Favorite Color</th> */}
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
    </div>
  )
}

export default NewsLetterResponseTable