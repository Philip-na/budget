
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" relative w-full h-[600px]  bg-white">
      {/* backgroud vedio */}

      <div className="absolute inset-0 bg-black ">
        <video
          className="w-full h-full object-cover backdrop-blur-sm"
          autoPlay
          loop
          muted
        >
          <source src="/ved/vd1.mp4" type="video/mp4" />
        </video>
      </div>
      {/* blur */}
      <div className="absolute inset-0 bg-black bg-opacity-[.85]"></div>

      <div className=" absolute top-0 left-0 w-full h-full py-[80px]   pt-[20vh] text-white">
        <div className=" container  flex flex-col items-center justify-center gap-8">
          <div className=" px-4 flex flex-col gap-2">
            <h1 className=" text-5xl lg:text-[55px] font-bold text-center leading-[1.3]  font-mont not-italic  ">
              All what you need to make it, <br /> in{" "}
              <span className="text-secondary">one</span> place
            </h1>
            <p className=" text-center  text-sm text-gray-400">
              With over 1000+ vendors, we have all you need to make your event a
              success <br /> is more than just a platform, it's a community of
              event planners, vendors and more
            </p>
          </div>
          <div className=" px-4 mt-8 flex max-w-[690px] gap-4">
            <Button size="lg" variant="default" className="w-full" asChild>
              <Link href="/services">
                Explore <ArrowRight size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/signup">
                Get started
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
