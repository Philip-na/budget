import React from 'react'
import LoginLeft from '../components/login-left'
import LoginRight from '../components/login-right'

const Login = () => {
  return (
    <div className=" w-[100vw] max-w-[980px]  rounded-sm grid grid-cols-12 ">

        <LoginLeft />
        <LoginRight />
        
    </div>
  )
}

export default Login