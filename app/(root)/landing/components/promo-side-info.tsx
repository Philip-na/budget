import { Button } from "@/components/ui/button";
import { CurrentSlideData, Data } from "../prom-home-list";
import { motion } from "motion/react";
import MoreInfo from "./more-info";

type PromoSideInfoProps = {
  transtionData: Data;
  currentSlideData: CurrentSlideData;
};

const PromoSideInfo = ({
  transtionData,
  currentSlideData,
}: PromoSideInfoProps) => {
  return (
    <>
      <motion.span
        layout
        className="mb-2 h-1 w-5 rounded-full nb-2 bg-secondary"
      ></motion.span>

      <MoreInfo data={transtionData ? transtionData : currentSlideData.data} />

      <motion.div className="mt-5 flex items-center gap-3 ">
        <Button variant={"secondary"} size={"icon"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Button>

        <Button variant={"default"} size={"lg"}>
          Grab Now
        </Button>
      </motion.div>
    </>
  );
};

export default PromoSideInfo;
