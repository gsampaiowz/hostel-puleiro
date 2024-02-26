"use client";
import { useState } from "react";

const Hospedagem = () => {
  const [dataChegada, setDataChegada] = useState(new Date());
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const [dataPartida, setDataPartida] = useState(tomorrowDate)

  return (
    <div className="flex flex-col gap-2 bg-[#bd9280] p-5 rounded-md drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
      <h1 className="font-bold">Quais as datas que deseja se hospedar?</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col">
          <h2>Data de chegada:</h2>
          <input
            value={dataChegada.toISOString().split("T")[0]}
            onChange={(e) => setDataChegada(new Date(e.target.value))}
            className="rounded-md w-64 h-12 pl-4 pr-4"
            type="date"
          />
        </div>
        <div className="flex flex-col">
          <h2>Data de partida:</h2>
          <input
            value={dataPartida.toISOString().split("T")[0]}
            onChange={(e) => setDataPartida(new Date(e.target.value))}
            className="rounded-md w-64 h-12 pl-4 pr-4"
            type="date"
          />
        </div>
      </div>
      <a
        className="text-center text-white bg-[#513c34] p-2 rounded-md"
        target="_blank"
        href={`https://booking.hqbeds.com.br/puleirohostel?arrival=${dataChegada.toLocaleDateString()}&departure=${dataPartida.toLocaleDateString()}`}
      >
        RESERVAR
      </a>
    </div>
  );
};

export default Hospedagem;
