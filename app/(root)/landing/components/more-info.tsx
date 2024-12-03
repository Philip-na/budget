import { EventType } from "@/app/event/util/types";
import { AnimatedText } from "@/components/animated-text";
import { motion } from "motion/react";

type MoreInfoProps = {
  data: EventType;
};



const MoreInfo = ({ data }: MoreInfoProps) => {
  return (
    <motion.div  initial="hidden" animate="visible" className="flex flex-col gap-4">

        <AnimatedText text={data.location? data.location : ""} className=" text-white border-spacing-1 overflow-hidden" />

        <AnimatedText text={data.title} className=" my-1 text-4xl font-semibold font-mont text-white" />

        <AnimatedText text={data.description} className="text-muted" />
        
    </motion.div>
  );
};

export default MoreInfo;







