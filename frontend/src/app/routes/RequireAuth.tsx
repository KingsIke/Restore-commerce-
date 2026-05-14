import React from 'react'
import { useUserInfoQuery } from '../../features/account/accountApi'
import { useLocation, Navigate, Outlet } from 'react-router-dom';

export const RequireAuth = () => {
    const {data: user, isLoading} = useUserInfoQuery();
    const location = useLocation()

    if(isLoading) return <div>Loading....</div>

    if(!user) {
        return <Navigate to='/login' state={{from: location} }/>
    }
  return (
    <Outlet />
  )
}
