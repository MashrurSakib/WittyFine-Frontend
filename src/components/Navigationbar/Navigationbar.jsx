import { Link } from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {FaLongArrowAltRight} from 'react-icons/fa'
const Navigationbar = () => {
    
    return (

      <div className="navbar bg-base-100 md:px-20 md:py-5 py-0 shadow-lg fixed  z-50">
        <div className="md:navbar-start navbar">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li tabIndex={0}>
                {/* <NavLink to={'/home#home'}>Home</NavLink> */}
                <Link to={'/home'}>Home</Link>
              <NavLink to={'/services#services'} className="justify-between">
                Service
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
              </NavLink>
              <ul className="p-2 bg-white">
                <li><NavLink to={'/services/641b6e9e1364618d1df6c14e'} className="link link-hover text-black">Digital Marketing</NavLink> </li>
                <li><NavLink to={'/services/641b6e9e1364618d1df6c14f'} className="link link-hover text-black">Design</NavLink></li>
                <li><NavLink to={'/services/641b6e9e1364618d1df6c151'} className="link link-hover text-black">Content Writing</NavLink></li>
                <li><NavLink to={'/services/641b6e9e1364618d1df6c150'} className="link link-hover text-black">Web Development</NavLink></li>
              </ul>
            </li>
              <li><NavLink to={'/portfolio#portfolio'}>Portfolio</NavLink></li>
              <li><NavLink to={'/aboutus#aboutus'}>About us</NavLink></li>
              <li className={(isActive)=>`hover:bg-[#FFFF8A] ${isActive?'bg-slate-500':'bg-black'}`}><NavLink to={'/contactus'}>Contact us</NavLink></li>
              <li className='hover:bg-[#FFFF8A]'><NavLink to={'/blog#blog'}>Blog</NavLink></li>
              <button className='bg-primary rounded-full font-bold text-white hover:shadow-lg border-none py-2'>Book a Consultation <FaLongArrowAltRight className='inline hover:translate-x-2 ' /></button>
          </ul>
        </div>
        {/* logo */}
          <Link to={'/#home'} className="normal-case text-xl">
            <img className='w-[30px] inline' src="https://i.ibb.co.com/Sj1XHpk/Witty-Fine.png" alt="" /><span> WittyFine</span>
          </Link>
        </div>
        {/* navbar middle */}
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : null}><NavLink to={'/home#home'}>Home</NavLink></li>
            
          <li className={(isActive)=>isActive?"bg-[#FFFF8A]":null}><NavLink to={'/aboutus#aboutus'}>About us</NavLink></li>
          <li tabIndex={0} className={(isActive)=>isActive?"bg-[#FFFF8A]":null}>
            <NavLink to={'/services#services'}>
              Services
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </NavLink>
            <ul className="p-2 bg-white ">
                <li><NavLink to={'/services/641b6e9e1364618d1df6c14e#service'} className="link link-hover text-black">Digital Marketing</NavLink> </li>
                <li><NavLink to={'/services/641b6e9e1364618d1df6c14f#service'} className="link link-hover text-black">Design</NavLink></li>
                <li><NavLink to={'/services/641b6e9e1364618d1df6c151#service'} className="link link-hover text-black">Content Writing</NavLink></li>
                <li><NavLink to={'/services/641b6e9e1364618d1df6c150#service'} className="link link-hover text-black">Web Development</NavLink></li>
            </ul>
          </li>
            <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/portfolio#portfolio'}>Portfolio</NavLink></li>
            <li className={(isActive)=>isActive?"bg-[#FFFF8A]":"hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/contactus#contactus'}>Contact us</NavLink></li>
            <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/blog#blog'}>Blog</NavLink></li>
            <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/login/admin'}>Admin Login</NavLink></li>
            {/* <button className='bg-primary rounded-full font-bold text-white hover:shadow-lg border-none p-2'>Book a Consultation <FaLongArrowAltRight className='inline hover:translate-x-2 ' /></button> */}
          </ul>
        </div>
        {/* navbar end */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* <li className={(isActive)=>isActive?"bg-[#FFFF8A]":null}><NavLink to={'/aboutus#aboutus'}>About us</NavLink></li>
          <li tabIndex={0} className={(isActive)=>isActive?"bg-[#FFFF8A]":null}>
            <NavLink to={'/services#services'}>
              Services
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </NavLink>
            <ul className="p-2 bg-white ">
            <li><NavLink to={'/services/641b6e9e1364618d1df6c14e'} className="link link-hover text-black">Digital Marketing</NavLink> </li>
                <li><NavLink to={'/services/641b6e9e1364618d1df6c14f'} className="link link-hover text-black">Design</NavLink></li>
                <li><NavLink to={'/services/641b6e9e1364618d1df6c151'} className="link link-hover text-black">Content Writing</NavLink></li>
                <li><NavLink to={'/services/641b6e9e1364618d1df6c150'} className="link link-hover text-black">Web Development</NavLink></li>
            </ul>
          </li>
            <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/portfolio#portfolio'}>Portfolio</NavLink></li>
            <li className={(isActive)=>isActive?"bg-[#FFFF8A]":"hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/contactus#contactus'}>Contact us</NavLink></li>
            <li className={(isActive) => isActive ? "bg-[#FFFF8A]" : "hover:inline hover:bg-[#ffe26e]"}><NavLink to={'/blog#blog'}>Blog</NavLink></li> */}
            <a className='bg-primary rounded-full font-bold text-white hover:shadow-lg border-none p-2' href="https://calendly.com/themarketingkit/get-a-free-consultancy" target="_blank" rel="noopener noreferrer">
              Book a Consultation <FaLongArrowAltRight className='inline hover:translate-x-2 ' />
            </a>
        </ul>
      </div>
    </div>
    );
};

export default Navigationbar;