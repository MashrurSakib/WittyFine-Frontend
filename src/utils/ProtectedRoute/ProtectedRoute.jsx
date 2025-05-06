import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Navigate, Outlet } from 'react-router-dom'
import { axiosInstance } from '../axios/axiosInstance'

const ProtectedRoute = ({ children }) => {
  // state management email auth
  const check=localStorage.getItem('email')
    console.log(check);
  if (!check) {
    toast.error('You are unauthorized')
    return <Navigate to="/"  />;
}

return children
    
  
}

export default ProtectedRoute