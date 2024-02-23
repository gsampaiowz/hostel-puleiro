import compartilhadoMisto1 from "./quarto-compartilhado-misto1.jpg";
import compartilhadoMisto2 from "./quarto-compartilhado-misto2.jpg";
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
  promocional: boolean;
  detalhes: string;
};

const imagensQuartos: imagensQuartosProps[] = [
  {
    imagem: compartilhadoMisto1.src,
    subtitle: "3 Beliches\n• Tem ar condicionado.",
    title: "Quarto Compartilhado Misto 1",
    promocional: false,
    detalhes: "Disponibilizamos um kit de roupa de cama + Armário (locked)\n Alugamos toalhas (R$10) e cadeados (R$5)."
  },
  {
    imagem: compartilhadoMisto2.src,
    subtitle: "9 Beliches\n• Possui ventiladores.",
    title: "Quarto Compartilhado Misto 2",
    promocional: false,
    detalhes: "Disponibilizamos um kit de roupa de cama + Armário (locked)\n Alugamos toalhas (R$10) e cadeados (R$5)."
  },
  {
    imagem: compartilhadoFeminino.src,
    subtitle: "3 Beliches\n• Tem ar condicionado.",
    title: "Quarto Compartilhado Feminino",
    promocional: false,
    detalhes: "Disponibilizamos um kit de roupa de cama + Armário (locked)\n Alugamos toalhas (R$10) e cadeados (R$5)."
  },
  {
    imagem: casal.src,
    subtitle: "Cama de casal\n• Tem ar condicionado\n• Até 2 pessoas",
    title: "Quarto Casal",
    promocional: false,
    detalhes: "Disponibilizamos um kit de roupa de cama + 2 toalhas" 
  },
  {
    imagem: familia1.src,
    subtitle: "Cama de casal e cama de solteiro\n• Tem ar condicionado\n• Até 3 pessoas",
    title: "Quarto Família 1",
    promocional: true,
    detalhes: "Disponibilizamos um kit de roupa de cama + 2 toalhas" 
  },
  {
    imagem: familia2.src,
    subtitle: "Cama de casal, cama de solteiro e beliche\n• Tem ar condicionado\n• Até 5 pessoas",
    title: "Quarto Familía 2",
    promocional: true,
    detalhes: "Disponibilizamos um kit de roupa de cama + 2 toalhas" 
  },
  {
    imagem: familia3.src,
    subtitle: "Cama de casal e beliche\n• Tem ar condicionado\n• Até 4 pessoas",
    title: "Quarto Familía 3",
    promocional: true,
    detalhes: "Disponibilizamos um kit de roupa de cama + 2 toalhas" 
  },
  {
    imagem: kitnet.src,
    subtitle: "2 Camas de casal\n• Possui ventiladores\n• Até 4 pessoas",
    title: "Kitnet",
    promocional: true,
    detalhes: "Disponibilizamos um kit de roupa de cama + 2 toalhas" 
  },
];

export default imagensQuartos;
