"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const images:{id:number, src:string}[] = [
    {
        id: 1,
        src: "/bg1.jpg",
    },
    {
        id: 2,
        src: "/bg2.jpeg",
    },
]

const ImageSlides = () => {

    const [active, setActive] = useState(0);
    
    const nextSlide = () => {
        setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }

    const prevSlide = () => {
        setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  return (
    <>
        <div
            className="h-full relative"
            style={{ clipPath: "polygon(0 0%, 100% 0%, 92% 100%, 0% 100%)" }}
        >
            {images.map((img) => (
                <div
                    key={img.id}
                    className={`w-full h-full absolute top-0 left-0 ${
                        active === img.id - 1 ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-500`}
                >
                    <img
                        src={img.src}
                        alt=""
                        className="w-full h-full rounded-lg rounded-se-2xl rounded-ee-3xl object-cover"
                    />
                </div>
            ))}

            <div className="absolute bottom-[10px] left-[75%] w-fit flex justify-center gap-2">
                <button
                    className=" p-1 border border-gray-400 text-sm rounded-full text-gray-400"
                    onClick={prevSlide}
                >
                    <ArrowLeft size={20} />
                </button>
                <button
                    className=" p-1 border border-gray-400 text-sm rounded-full text-gray-400"
                    onClick={nextSlide}
                >
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    </>
  )
}

export default ImageSlides