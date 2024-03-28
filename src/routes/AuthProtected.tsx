import React from 'react'
// import { Navigate } from 'react-router-dom'

interface AuthProtectedProps {
    children?: React.ReactNode
}

const AuthProtected = ({ children }: AuthProtectedProps) => {
  // if (!localStorage.getItem('authUser')) {
  //   return <Navigate to={{ pathname: "/login" }}/>
  // }
  return <React.Fragment>{children}</React.Fragment>
}

export default AuthProtected