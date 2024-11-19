import SearchBox from "@/components/Search";

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

        {/* <img
          src="/hero.jpeg"
          alt=""
          className="w-full h-full object-cover"
        /> */}
      </div>
      {/* blur */}
      <div className="absolute inset-0 bg-black bg-opacity-[.85]"></div>


      <div className=" absolute top-0 left-0 w-full h-full py-[80px] pt-[20vh] text-white">
        <div className=" container  space-y-8">
          <div className=" px-4 flex flex-col gap-2">
            <h1 className=" text-5xl font-bold  font-cormoratGaramond  ">
              Exprience the magic of Seamless <br /> Planning
            </h1>
            <p className=" text-sm text-gray-400">
              the finest wedding moments made possible hire professionals <br />{" "}
              to make it a success
            </p>
          </div>
          <div className=" px-4 flex max-w-[690px] gap-4">
            <SearchBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
