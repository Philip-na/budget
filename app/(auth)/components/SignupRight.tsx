import { facebookIcon, googleIcon, xIcon, youtubeIcon } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import SeparatorWith from "./Separator";
import { Input } from "@/components/ui/input";

const SignupRight = () => {
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

export default SignupRight;

const Topsection = () => {
  return (
    <div className="py-6">
      <h1 className="text-4xl font-bold text-primary text-center">Join </h1>
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
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
    
        <Button size={"lg"} variant="default">
            Sign up
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
          className=" text-primary flex justify-center items-center gap-2 bg-gray-100 py-1 hover:text-white hover:bg-secondary"
        >
          Continue with google
          <span className=" relative">
            <Image src={googleIcon} alt="google" width={15} height={15} />
          </span>
        </Button>
      </form>
    </div>
  );
};
