import { Button } from "@/components/ui/button";
import SeparatorWith from "./Separator";
import { facebookIcon, googleIcon, xIcon, youtubeIcon } from "@/assets";
import Image from "next/image";

const LoginRight = () => {
  return (
    <div className="w-full col-span-5 flex flex-col gap-4 py-6 pr-4 pl-2">
      <div className="w-full  flex justify-between">
        <div className="w-[120px]">
          <img className=" w-full object-contain " src="/logob.png" alt="" />
        </div>
        {/* lang select */}
        <div className=""></div>
      </div>

      <Topsection />
      <LoginForm />
    </div>
  );
};

export default LoginRight;

const Topsection = () => {
  return (
    <div className="py-6">
      <h1 className="text-4xl font-bold text-primary text-center">Hi Philip</h1>
      <p className="text-gray-500 text-center text-[12px]">
        Wellcome to univessel
      </p>
    </div>
  );
};

const LoginForm = () => {
  return (
    <div className=" pr-8">
      <form action="" className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Email"
          className="p-1 px-2 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-1 px-2 border border-gray-300 rounded-lg"
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
          <a href="" className="text-primary">
            Forgot password?
          </a>
        </div>

        <Button size={"lg"} variant="default">
          Login
        </Button>
        {/* dont have account */}
        <p className="text-center text-gray-500 text-[12px]">
          Dont have an account?{" "}
          <a href="" className="text-primary">
            Sign up
          </a>
        </p>
        <SeparatorWith />

        <Button
          variant="ghost"
          className=" text-primary flex justify-center items-center gap-2 bg-gray-100 py-2 hover:text-white hover:bg-secondary"
        >
          Continue with google
          <span className=" relative">
            <Image src={googleIcon} alt="google" width={15} height={15} />
          </span>
        </Button>

          {/* social links */}

          <div className="flex justify-center mb-4 mt-2 gap-2">
            <a href="" className=" relative">
              <Image src={xIcon} alt="google" width={20} height={20} />
            </a>
            <a href="" className=" relative">
              <Image src={facebookIcon} alt="google" width={20} height={20} />
            </a>
            <a href="" className=" relative">
              <Image src={youtubeIcon} alt="google" width={20} height={20} />
            </a>
            <a href="" className=" relative">
              <Image src={googleIcon} alt="google" width={20} height={20} />
            </a>
        
          </div>

      </form>
    </div>
  );
};
