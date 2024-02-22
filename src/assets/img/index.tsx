import compartilhadoMisto2 from "./quarto-compartilhado-misto2.jpg";
import compartilhadoMisto1 from "./quarto-compartilhado-misto1.jpg";

export type imagensQuartosProps = {
  imagem: string;
  subtitle: string;
  title: string;
};

const imagensQuartos: imagensQuartosProps[] = [
  {
    imagem: compartilhadoMisto2.src,
    subtitle: "9 Beliches com ventiladores.",
    title: "Quarto Compartilhado Misto 2",
  },
  {
    imagem: compartilhadoMisto1.src,
    subtitle: " 3 Beliches com Ar condicionado.",
    title: "Quarto Compartilhado Misto 1",
  },
];

export default imagensQuartos;
