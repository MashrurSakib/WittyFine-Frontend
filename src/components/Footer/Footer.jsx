import { NavHashLink as NavLink } from 'react-router-hash-link';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import './Footer.css'
// image importing
import GoogleCertificate from '../../assets/google_digital_garage.jpeg'
import HubspotCertificate from '../../assets/hubspot-image.png'
import SimpliLearnCertificate from '../../assets/logo-simplilearn.png'
const Footer = () => {
  return (
    <><footer className="footer px-10 bg-[#F9BC6E] text-black py-20">
      <div className="">
        <span className="footer-title">
          WittyFine
          {/* <img className='inline' src="https://i.ibb.co/vky1Vht/The-Marketing-Kit-Logo-02.jpg" alt="" /> */}
          {/* WittyFine
          WittyFine */}
        </span>
        <p className="app-footer-about">At our digital marketing agency, we are passionate about helping businesses thrive in the digital age. We're excited to embark on this journey with you and help you unlock the full potential of your online presence. Contact us today to discuss how we can elevate your digital marketing strategy and drive sustainable growth for your business.</p>
      </div> 
    
      <div>
      <span className="footer-title">Services</span> 
        <NavLink to={'/services/641b6e9e1364618d1df6c14e#service'} className="link link-hover text-black">Digital Marketing</NavLink>
        <NavLink to={'/services/641b6e9e1364618d1df6c14f#service'} className="link link-hover text-black">Design</NavLink>
        <NavLink to={'/services/641b6e9e1364618d1df6c151#service'} className="link link-hover text-black">Content Writing</NavLink>
        <NavLink to={'/services/641b6e9e1364618d1df6c150#service'} className="link link-hover text-black">Web Development</NavLink>
    </div> 
    <div>
      <span className="footer-title">Company</span> 
        <NavLink to={'/#home'} className="link link-hover text-black">Home</NavLink>
        <NavLink to={'/services#services'} className="link link-hover text-black">Services</NavLink>
        <NavLink to={'/aboutus#aboutus'} className="link link-hover text-black">About us</NavLink>
        <NavLink to={'/blog#blog'} className="link link-hover text-black">Blog</NavLink>
        <NavLink to={'/contactus#contactus'} className="link link-hover text-black">Contact us</NavLink>
        <NavLink to={'/marketingKit-team#team'} className="link link-hover text-black">Team</NavLink>           
    </div> 

    <div>
        <span className="footer-title">Certified By</span>
        <div className="grid grid-flow-col gap-4 ">
          <div className="flex flex-col">
            {/* certificates */}
            <div className="grid grid-rows-1 gap-2 ">
              <div className="">
                <img className="app-certificate_size " src={GoogleCertificate} alt={'Google Garage certificate'} />
              </div>
              <div className="">
                <img className="app-certificate_size " src={HubspotCertificate} alt={'Hubsport certificate'} />
              </div>
              <div className="">
                <img className="app-certificate_size" src={SimpliLearnCertificate} alt={'SimpliLearn Certificate'} />
              </div>

              {/* <img className="app-certificate_size px-1" src={HubspotCertificate} alt={'Hubsport certificate'} />
              <img className="app-certificate_size px-1" src={SimpliLearnCertificate} alt={'SimpliLearn Certificate'} /> */}
            </div>

          </div>
        </div>
        {/* social media link */}
        <div className="xs:inline-block ">
          <span className="footer-title block">Social Media</span>
          <div className="">
            <a href={import.meta.env?.VITE_APP_FACEBOOK_URL} target="_blank"><FaFacebook className='inline text-2xl mx-4 text-black' /></a>
            <a href={import.meta.env.VITE_APP_LINKEDIN_URL} target="_blank"><FaLinkedin className='inline text-2xl mx-4 text-black' /></a>
            <a href={import.meta.env.VITE_APP_INSTAGRAM_URL} target="_blank"><FaInstagram className='inline text-2xl mx-4 text-black' /></a>
            <a href={import.meta.env.VITE_APP_TWITTER_URL} target="_blank"><FaTwitter className='inline text-2xl mx-4 text-black' /></a>
          </div>
        </div>
  </div>

  </footer> 
      <footer className="footer footer-center px-10 py-4 bg-white text-black">
        <div className="flex justify-center items-center">
          <img className="block w-[30px]" src="https://i.ibb.co/c1Gsgst/The-Marketing-Kit-Logo-06.png" alt="" />
          <p>Copyright © 2023 - All right reserved by WittyFine</p>
        </div>
</footer>
      </>
  )
}

export default Footer