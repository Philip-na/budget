import { Check,} from "lucide-react"
import Image from "next/image"

const points = [
    {
        name: "cleint delight",
    },
    {
        name: "quality assurance",
    },
    {
        name: "customer satisfaction",
    },
    {
        name: "quality assurance",
    }
]

const Quality = () => {
  return (
    <section className="bg-white w-full py-16">

        <div className=" container">
            <div className="w-full grid grid-cols-2 px-8">

                {/* lefts parts */}
                <div className=" flex  flex-col px-16 space-y-4 py-8">
                    <h2 className="text-black font-cormoratGaramond leading-[1.2] text-[40px]">
                        We keep in mind the quality of  services
                    </h2>

                    <p className="text-black font-normal font-sans">
                        Sorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam suscipit eum tempore recusandae, reiciendis iste! Qui ipsa impedit facilis repellendus sint .
                    </p>

                    <p className="text-black font-normal font-sans">
                        Sorem ipsum dolor sit amet consectetur, adipisicing elit.  impedit facilis repellendus sint 
                    </p>

                    <div className="grid grid-cols-2 gap-2 w-full">

                        {
                            points.map((point,i) => (
                                <div className=" flex items-center gap-2" key={'pt' + i}>

                                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center ">
                                    <Check size={12}  className="text-white"/>
                                    </span>
                                    <p className=" font-normal font-sans">
                                        {point.name}
                                    </p>


                                </div>
                            ))
                        }

                    </div>
                    
                    
                </div>

                {/* right part */}
                <div className="pr-16 w-full max-w-[470px]">
                    <div className=" relative h-[450px] w-full">
                        <div className="h-[calc(100%-100px)] w-[calc(100%-100px)] absolute top-0 left-[100px] bg-red-400">
                            <Image src="/quality2.png" layout="fill" objectFit="cover" alt="quality" />
                        </div>
                        <div className="h-[calc(100%-100px)] w-[calc(100%-100px)] absolute top-[100px] left-0 bg-blue-400">
                            <Image src="/quality1.png" layout="fill" objectFit="cover" alt="quality" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Quality