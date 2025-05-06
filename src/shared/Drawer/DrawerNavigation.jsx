import { Card } from '@nextui-org/react'
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const DrawerNavigation = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const handleLogout = () => {
        localStorage.removeItem('email')
        navigate('/login/admin')
    }

    return (
        < >
            <div className="drawer drawer-mobile bg-white pt-28 text-black">
               <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content flex flex-col items-center justify-start ">
                 {/* <!-- Page content here --> */}
                 {children}
                 <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    
               </div> 
               <Card isHoverable variant="bordered" css={{height:'100%',position:"sticky"}}>
                 <Card.Body>
                
                 <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                 <ul className="menu p-4 w-80 text-black">
                   {/* <!-- Sidebar content here --> */}
                <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/admin/blogcreation'}>Create Blog</NavLink></li>
                <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/admin/blogManagement'}>Blog Management</NavLink></li>
                <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/admin/portfolioCreation'}>Create Portfolio</NavLink></li>
                <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/admin/faqcreation'}>Create FAQ</NavLink></li>
                <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/admin/contactresponse'}>Contact Response</NavLink></li>
                <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/admin/newsletterresponse'}>NewsLetter Response</NavLink></li>
                <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/admin/servicecreation'}>Create Service</NavLink></li>
                
                 </ul>
                 <button 
                className="bg-red-500 rounded-full py-2 px-4 btn btn-danger"
                onClick={()=>handleLogout()}
                >
                  
                  Logout
                  </button>
                 </Card.Body>
               </Card>
             </div>
    </>
    )
}

export default DrawerNavigation