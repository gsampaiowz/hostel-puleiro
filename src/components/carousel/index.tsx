"use client";
import { imagensQuartosProps } from "@/assets/img";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type CarouselProps = {
  map: React.ReactNode;
  slides: imagensQuartosProps[];
};

const Carousel: React.FC<CarouselProps> = ({ map, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(3);

  const prev = () =>
    setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1 ));

  const next = () =>
    setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="max-w-72 mb-8 rounded-lg overflow-visible drop-shadow-[0_0_10px_rgba(0,0,0,1)] relative">
      <div
        className="rounded-lg flex ml-32 gap-32 min-w-[416px] transition-transform ease-out duration-500 relative"
        style={{ transform: `translateX(calc(-${currentSlide * 100}% - 128px))` }}
      >
        {map}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2 transition-transform pointer-events-none">
        <button
          onClick={prev}
          className="p-2 rounded-full absolute h-full -left-[40vw] cssBreak:-left-[150px] cssBreak:w-[200px] flex justify-end items-center w-[35vw] shadow pointer-events-auto"
        >
          <FaArrowLeft color="white" className="bg-black/25 rounded-full size-10 p-2" />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full absolute h-full -right-[40vw] cssBreak:-right-[150px] cssBreak:w-[200px] flex items-center w-[35vw] shadow pointer-events-auto"
        >
          <FaArrowRight color="white" className="bg-black/25 rounded-full size-10 p-2" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
