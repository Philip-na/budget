"use client";

import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { EventType } from "@/app/event/util/types";
import { events } from "@/app/event/util/event";
import Backgroundimg from "./components/Backgroundimg";
import PromoSideInfo from "./components/promo-side-info";
import Slides from "./components/slides";
import Controls from "./components/controls";

export type Data = EventType;

const sliderData = events;
const initData = sliderData[0];

export type CurrentSlideData = {
  data: Data;
  index: number;
};
const PromHomeList = () => {
  const [data, setData] = useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState<Data>(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
    data: initData,
    index: 0,
  });

  return (
    <div className="w-full min-h-[420px] relative select-none overflow-hidden rounded-lg ">
      <AnimatePresence>
        
          <Backgroundimg
            transtionData={transitionData}
            currentSlideData={currentSlideData}
            key={currentSlideData.data.id}
          />

          <div key={'data-div'} className=" absolute   z-20 h-full w-full">
            <div className="grid grid-cols-10 h-full w-full ">

                {/* left side */}
              <div className="flex flex-col justify-center p-4 col-span-4">
                <PromoSideInfo
                  transtionData={transitionData}
                  currentSlideData={currentSlideData}
                />
              </div>
                  
                  {/* right side */}
                <div className="col-span-6 flex h-full flex-col justify-start flex-1 p-4 md:justify-center md:p-10">

                    <Slides data={data} />

                    <Controls 
                        currentSlideData={currentSlideData}
                        silderData={sliderData}
                        data={data}
                        transitionData={transitionData}
                        handleTransitionData={setTransitionData}
                        handleCurrentSlideData={setCurrentSlideData}
                        handleData={setData}
                        initData={initData}
                    />

                </div>
            </div>
          </div>
        
      </AnimatePresence>
    </div>
  );
};

export default PromHomeList;
