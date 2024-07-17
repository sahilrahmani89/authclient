import React from 'react'
// import useAuth from '../../hooks/useAuth'
import { Navigate, } from 'react-router-dom'
// import useCheckAuth from '../../hooks/useCheckAuth'
import useAuth from '../../hooks/useAuth'


const ProtectedRoute = ({Component}) => {
    const {isAuthenticated,isLoading} = useAuth()
    if(isLoading){
        return <p>Loading...</p>
    }
  return (
    isAuthenticated ? <Component /> : <Navigate to="/login" />
  )
}

export default ProtectedRoute