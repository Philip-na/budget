import React from 'react'
import LoginLeft from '../components/login-left'
import SignupRight from '../components/SignupRight'

const Signup = () => {
  return (
    <div className=" bg-white shadow-md  w-[100vw] max-w-[900px]  rounded-sm grid grid-cols-12 ">

    <LoginLeft />
    <SignupRight />
    
</div>
  )
}

export default Signup