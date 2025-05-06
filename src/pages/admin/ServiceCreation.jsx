import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { v4 } from 'uuid';
import Navigationbar from '../../components/Navigationbar/Navigationbar'
import SolutionCreate from '../../components/Services/SolutionCreate';
import SolutionShow from '../../components/Services/SolutionShow';
import DrawerNavigation from '../../shared/Drawer/DrawerNavigation'
import { axiosInstance } from '../../utils/axios/axiosInstance';

const ServiceCreation = () => {
  // state management
  const [solutions, setSolutions] = useState([]);
  const [service, setService] = useState('')


  // post service
  const postServicetoDB = async(data) => {
    try {
      const response = axiosInstance.post('services/postService', data)
      toast.success('Service created')
      setSolutions([])
      setService('')
      
    } catch (err) {
      toast.error(err)
    }
  }

  

  // handle create service
  const handleCreateService = (e) => {
    e.preventDefault()
    postServicetoDB({"_id":v4(),"service":service,solutions})
  }
  return (
    <>
    <div className='bg-white text-black'>
        <Navigationbar />
        <DrawerNavigation>
          {/* <BlogCreateCard/> */}
          <div>
            <form onSubmit={handleCreateService} className='shadow-xl rounded w-[750px] px-10 py-5 mx-auto'>
               {/* service name */}
              <input onChange={e => setService(e.target.value)} type="text"
                className='w-full input input-bordered my-3'
                placeholder='Enter the service name'
                name="service name" id="" />
                <span className="text-xl font-semibold">
                  Enter sub services
                </span>
                  <div className="w-full py-4">
                    <SolutionCreate solutions={solutions} setSolutions={setSolutions} />
                    <div></div>
                </div>

                  <input className='bg-primary text-white font-extrabold block p-3 rounded-2xl mx-auto' type="submit" value="Create Service" />
              
            </form>
            <p className='text-center font-bold my-5'>All the sub solution created</p>
            <div className="flex flex-wrap w-[100%] mx-auto gap-5">
                 <SolutionShow solutions={solutions} setSolutions={setSolutions} />
            </div>
            <div></div>
          </div>
          
        </DrawerNavigation>
    </div>
    </>
  )
}

export default ServiceCreation