import Header from "@/components/header";
import Hospedagem from "../components/hospedagem";
import Carousel from "./../components/carousel/index";
import imagensQuartos from "@/assets/img";
import CardQuarto from "@/components/cardQuarto";
import cozinhaCompartilhada from "@/assets/img/cozinha-compartilhada.png";
import recepcao from "@/assets/img/recepcao.png";

export default function Home() {
  return (
    <>
      {/* CABEÇALHO */}
      <Header />

      {/* CONTEUDO */}
      <main className="max-w-[1600px] flex min-h-screen flex-col gap-16 items-center w-[90%] m-auto">
        <Hospedagem />

        <small className="font-bold text-lg text-white drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
          Passe o mouse por cima da imagem para saber o que disponibilizamos em
          cada quarto
        </small>

        <Carousel
          slides={imagensQuartos}
          map={imagensQuartos.map((item) => (
            <CardQuarto
              detalhes={item.detalhes}
              key={item.title}
              image={item.imagem}
              title={item.title}
              promocional={item.promocional}
              subtitle={item.subtitle}
            />
          ))}
        />

        <h1 className="font-bold text-white drop-shadow-[0_0_5px_rgba(0,0,0,1)] text-xl">
          Informações gerais
        </h1>
        <div className="flex flex-wrap gap-12">
          <div
            className="bg-no-repeat bg-cover p-12 rounded-3xl overflow-hidden relative size-full max-w-96 before:-z-1 before:absolute before:size-full before:top-0 before:left-0 before:backdrop-brightness-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]"
            style={{ backgroundImage: `url('${cozinhaCompartilhada.src}')` }}
          >
            <ul className="text-white font-bold relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,1)] leading-7">
              <li>•Cozinha Privada e equipada</li>
              <li>•Não oferecemos serviço de alimentação</li>
              <li>
                •Estamos localizados à beira-mar de Itapuã próximo ao aeroporto
                (8km) e de fácil acesso aos pontos turísticos.
              </li>
              <li>•Banheiro privado</li>
              <li>•Horário CHECK IN 14h</li>
              <li>•Horário CHECK OUT 12h</li>
            </ul>
          </div>
          <div
            className="bg-no-repeat bg-cover p-12 rounded-3xl overflow-hidden relative size-full max-w-96 before:-z-1 before:absolute before:size-full before:top-0 before:left-0 before:backdrop-brightness-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]"
            style={{ backgroundImage: `url('${recepcao.src}')` }}
          >
            <p className="text-white font-bold relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,1)] leading-7">
              Para Reserva Direta: 😃🙏🏼✌🏾 <br /> Para realizar sua reserva
              direta é necessário:
              <br /> 1. Nome completo dos hóspedes <br /> 2. Um EMAIL para
              receber as informações e confirmação da reserva <br /> 3. Na
              semana da estadia, enviaremos nosso LINK para pagamento e Check-In
              Online
            </p>
          </div>
        </div>
        <h1 className="font-bold text-white drop-shadow-[0_0_5px_rgba(0,0,0,1)] text-xl">
          Política de cancelamento ⛔
        </h1>
        <p className="font-bold text-white drop-shadow-[0_0_5px_rgba(0,0,0,1)] max-w-96">
        Poderá ser cancelada a reserva sem bônus até 24h antes do check in, caso contrário, uma multa de 50% do valor da reserva.
        </p>
        <h1 className="font-bold text-white drop-shadow-[0_0_5px_rgba(0,0,0,1)] text-xl">
          Nossos serviços
        </h1>
      </main>

      {/* RODAPE */}
      <footer className="h-12 w-full justify-center flex items-center"></footer>
    </>
  );
}
