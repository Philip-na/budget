import { CurrentSlideData, Data } from "../prom-home-list";

type ControlsProps = {
  currentSlideData: CurrentSlideData;
  silderData: Data[];
  data: Data[];
  transitionData: Data;
  handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
  handleCurrentSlideData: React.Dispatch<React.SetStateAction<CurrentSlideData>>;
  handleData: React.Dispatch<React.SetStateAction<Data[]>>;
  initData: Data;
};

const Controls = ({
  currentSlideData,
  silderData,
  data,
  transitionData,
  handleTransitionData,
  handleCurrentSlideData,
  handleData,
  initData,
}: ControlsProps) => {

    const handlePre = () => {
        handleData((prev) => [
            transitionData ? transitionData : initData, ...prev.slice(0, prev.length - 1)
        ])
        handleCurrentSlideData({
            data: transitionData ? transitionData : initData,
            index: silderData.findIndex((item) => item.id === data[data.length - 1].id )
        })
        handleTransitionData(data[data.length - 1])
    }

    const handleNext = () => {
       handleData((prev) => prev.slice(1));
       handleCurrentSlideData({
        data: transitionData ? transitionData : initData,
        index: silderData.findIndex((item) => item.id === data[0].id )
       })
         handleTransitionData(data[0])

         setTimeout(() => {
            handleData((prev) => [
                ...prev, transitionData ? transitionData : initData
            ])
         }, 500)

         console.log(data)
    }

    

  return (
    <>
        <div className="flex gap-4 items-center mt-5">
            <button
            onClick={handlePre}
            className="bg-white p-2 rounded-full shadow-md"
            >
            <svg
                xmlns="http://www.w3.org/
                2000/svg"
                className="h-5 w-5"
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
            </button>
            <button
            onClick={handleNext}
            className="bg-white p-2 rounded-full shadow-md"
            >
            <svg
                xmlns="http://www.w3.org/
                2000/svg"
                className="h-5 w-5"
                fill="none"

                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
                />
            </svg>
            </button>
        </div>

    
    </>
  );
};

export default Controls;
