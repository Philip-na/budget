import EnterOtp from "../components/Enter-otp"

const page = () => {
  return (
    <div className=" bg-white shadow-md  p-4 py-8 w-fit  rounded-sm flex flex-col gap-3 ">

        <h1  className="font-bold font-mont text-xl uppercase text-center text-primary">
            Verify
        </h1>
        <p className="text-gray-600 font-mont text-sm text-center">
            Please enter your one time password
        </p>

        <EnterOtp />

        

    
    </div>
  )
}

export default page