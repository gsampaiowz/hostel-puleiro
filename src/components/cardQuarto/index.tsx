type CardQuartoProps = {
  image: string;
  title: string;
  subtitle: string;
};

const CardQuarto = ({ image, title, subtitle }: CardQuartoProps) => {
  return (
    <div className="bg-[#513c34] min-w-72 rounded-lg">
      <h1 className="text-center text-white pt-9 pb-9 drop-shadow-[0_0_5px_rgba(0,0,0,1)] font-bold">{title}</h1>
      <img className="object-cover w-full aspect-square" src={image} alt="quarto" />
      <h2 className="text-center text-white pt-9 pb-9 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">{subtitle}</h2>
    </div>
  );
};

export default CardQuarto;
