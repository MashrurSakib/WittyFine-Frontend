import React from 'react'
import { Link } from 'react-router-dom'
import './NotFoundBanner.css'
const NotFoundBanner = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center text-center flex-col'>
      <div className="containerGlitch">
        <p className="glitch" id="textGlitch"> 404 page not found </p>
      </div>
      <Link className='btn btn-primary' to={'/#home'}>
        <button >
          Go to Home Page
        </button>
      </Link>
    </div>
  )
}

export default NotFoundBanner