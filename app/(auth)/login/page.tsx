import React from 'react'
import LoginLeft from '../components/login-left'
import LoginRight from '../components/login-right'

const Login = () => {
  return (
    <div className=" bg-white shadow-md  w-[100vw] max-w-[900px]  rounded-sm grid grid-cols-12 ">

        <LoginLeft />
        <LoginRight />
        
    </div>
  )
}

export default Login