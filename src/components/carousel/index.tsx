"use client";
import { imagensQuartosProps } from "@/assets/img";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type CarouselProps = {
  map: React.ReactNode;
  slides: imagensQuartosProps[];
};

const Carousel: React.FC<CarouselProps> = ({ map, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prev = () =>
    setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="rounded-lg overflow-visible relative">
      <div
        className=" rounded-lg flex gap-32 transition-transform ease-out duration-500 relative"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {map}
      </div>
      <div className="absolute w-[150%] left-[-25%] inset-0 flex items-center justify-between p-2 transition-transform pointer-events-none">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow bg-primary/40 hover:bg-primary pointer-events-auto"
        >
          <FaArrowLeft size={20} color="white"/>
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full shadow bg-primary/40 hover:bg-primary pointer-events-auto"
        >
          <FaArrowRight size={20} color="white"/>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
