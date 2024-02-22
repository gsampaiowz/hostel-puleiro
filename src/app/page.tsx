import Header from "@/components/header";
import Hospedagem from "../components/hospedagem";
import Carousel from "./../components/carousel/index";
import imagensQuartos from "@/assets/img";
import CardQuarto from "@/components/cardQuarto";

export default function Home() {
  return (
    <>
      {/* CABEÇALHO */}
      <Header />

      {/* CONTEUDO */}
      <main className="max-w-[1600px] flex min-h-screen flex-col gap-16 items-center w-[90%] m-auto">
        <Hospedagem />

        <Carousel
          slides={imagensQuartos}
          map={imagensQuartos.map((item) => (
            <CardQuarto
              key={item.title}
              image={item.imagem}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        />
      </main>

      {/* RODAPE */}
      <footer className="h-12 w-full justify-center flex items-center"></footer>
    </>
  );
}
