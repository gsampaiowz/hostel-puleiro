"use client";

import { useState } from "react";

type CardQuartoProps = {
  image: string;
  title: string;
  subtitle: string;
  promocional?: boolean;
  detalhes: string;
};

const CardQuarto = ({
  image,
  title,
  subtitle,
  promocional,
  detalhes,
}: CardQuartoProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-[#513c34] relative min-w-72 rounded-lg">
      <h1 className="text-center text-white h-28 flex items-center justify-center px-6 drop-shadow-[0_0_5px_rgba(0,0,0,1)] font-bold">
        {title}
      </h1>
      <img
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="object-cover w-full aspect-square"
        src={image}
        alt="quarto"
      />

      <div className={`absolute opacity-0 w-80 h-16 -left-[16px] flex items-center justify-center top-[100px] px-6 transition-all pointer-events-none z-10 rounded-lg bg-white ${showTooltip ? "opacity-100" : ""}`}>
        <small className="text-md font-bold">{detalhes}</small>
      </div>

      <h2 className="text-center whitespace-pre-wrap h-40 text-white flex items-center justify-center px-6 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
        {subtitle}
      </h2>
      {promocional && (
        <h3 className="absolute -bottom-12 h-12 w-[80%] rounded-b-lg font-bold text-center p-3 bg-[#bd9280] mx-[10%]">
          VALOR PROMOCIONAL
        </h3>
      )}
    </div>
  );
};

export default CardQuarto;
