type CardQuartoProps = {
  image: string;
  title: string;
  subtitle: string;
};

const CardQuarto = ({ image, title, subtitle }: CardQuartoProps) => {
  return (
    <div className="bg-[#513c34] w-72 rounded-lg drop-shadow-[0_0_10px_rgba(0,0,0,1)]">
      <h1 className="text-center text-white pt-12 pb-12">{title}</h1>
      <img className="object-cover w-full aspect-square" src={image} alt="quarto" />
      <h2 className="text-center text-white pt-12 pb-12">{subtitle}</h2>
    </div>
  );
};

export default CardQuarto;
