import { Button } from "@/components/ui/button";
import ImageSlides from "./image-slides";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LoginLeft = () => {
  return (
    <div className="w-full relative col-span-7 min-h-[500px]">
      <ImageSlides />

      <div className=" absolute top-[1rem] right-[10px] ">
        <Button
          variant="ghost"
          size={"lg"}
          className="bg-none py-1 text-white text-sm bg-transparent border border-gray-300 px-4"
        >
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>

      <div className=" absolute left-0 p-4 top-0">
        <h1 className="text-lg font-bold font-mont  text-white">Univessel</h1>
      </div>

      <div className=" absolute bottom-[10px] left-[10px] flex gap-2 items-center  ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="">
          <h4>
            <span className="text-white font-mont ">Philip</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LoginLeft;
