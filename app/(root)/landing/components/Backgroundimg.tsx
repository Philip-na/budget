import { motion } from "framer-motion";
import { Data } from "../prom-home-list";
import { CurrentSlideData } from "../prom-home-list";

type props = {
  transtionData: Data;
  currentSlideData: CurrentSlideData;
};

const Backgroundimg = ({ transtionData, currentSlideData }: props) => {
  return (
    <>
      {transtionData && (
        <motion.img
          key={transtionData.img}
          src={transtionData.img}
          alt="Transition image"
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: "-100%", opacity: 0 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
        />
      )}

      {currentSlideData && (
        <motion.img
          key={currentSlideData.data.img}
          src={currentSlideData.data.img}
          alt="Current image"
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
        />
      )}
    </>
  );
};

export default Backgroundimg;
