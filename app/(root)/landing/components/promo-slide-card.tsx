import { motion } from "motion/react";
import { Data } from "../prom-home-list";

type PromoSlideCardProps = {
  data: Data;
};

const PromoSlideCard = ({ data }: PromoSlideCardProps) => {
  return (
    <motion.div
      className="w-full relative shadow-sm max-w-[180px] min-w-[150px] h-[200px] bg-gray-100 overflow-hidden rounded-lg font-mont"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: { duration: 0.5 } }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <motion.img
        layoutId={data.title + "img"}
        src={data.img}
        alt={data.title}
        className="w-full h-full object-cover absolute top-0 left-0 rounded-lg"
      />
      <motion.div layout className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-end p-2">
        <motion.span
          layout
          className="mb-2 h-1 w-5 rounded-full nb-2 bg-secondary"
        ></motion.span>
        <motion.h4 layoutId={data.title} className="text-white font-bold text-sm">{data.title}</motion.h4>
        <motion.p layoutId={data.date + "data"} className="text-white text-xs">{data.date}</motion.p>
      </motion.div>
    </motion.div>
  );
};

export default PromoSlideCard;
