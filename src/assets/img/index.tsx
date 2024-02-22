import compartilhadoMisto2 from "./quarto-compartilhado-misto2.jpg";
import compartilhadoMisto1 from "./quarto-compartilhado-misto1.jpg";
import compartilhadoFeminino from "./quarto-compartilhado-feminino.jpg";
import casal from "./quarto-casal.jpg";
import familia1 from "./quarto-familia1.jpg";
import familia2 from "./quarto-familia2.jpg";
import familia3 from "./quarto-familia3.jpg";
import kitnet from "./kitnet.jpg";

export type imagensQuartosProps = {
  imagem: string;
  subtitle: string;
  title: string;
};

const imagensQuartos: imagensQuartosProps[] = [
  {
    imagem: compartilhadoMisto2.src,
    subtitle: "9 Beliches. Com ventiladores.",
    title: "Quarto Compartilhado Misto 2",
  },
  {
    imagem: compartilhadoMisto1.src,
    subtitle: "3 Beliches. Com Ar condicionado.",
    title: "Quarto Compartilhado Misto 1",
  },
  {
    imagem: compartilhadoFeminino.src,
    subtitle: "3 Beliches. Com Ar condicionado.",
    title: "Quarto Compartilhado Feminino",
  },
  {
    imagem: casal.src,
    subtitle: "Cama de casal. Com Ar condicionado. 2 Pessoas",
    title: "Quarto Casal",
  },
  {
    imagem: familia1.src,
    subtitle: "Cama de casal e cama de solteiro. Com Ar condicionado. 3 Pessoas",
    title: "Quarto Família 1",
  },
  {
    imagem: familia2.src,
    subtitle: "Cama de casal, cama de solteiro e beliche. Com Ar condicionado. 5 Pessoas",
    title: "Quarto Familía 2",
  },
  {
    imagem: familia3.src,
    subtitle: "Cama de casal e beliche. Com Ar condicionado. 4 Pessoas",
    title: "Quarto Familía 3",
  },
  {
    imagem: kitnet.src,
    subtitle: "2 Camas de casal. Com ventiladores. 4 Pessoas",
    title: "Kitnet",
  },
];

export default imagensQuartos;
