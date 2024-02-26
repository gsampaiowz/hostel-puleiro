import Header from "@/components/header";
import Hospedagem from "../components/hospedagem";
import Carousel from "./../components/carousel/index";
import imagensQuartos from "@/assets/img";
import CardQuarto from "@/components/cardQuarto";
import cozinhaCompartilhada from "@/assets/img/cozinha-compartilhada.png";
import recepcao from "@/assets/img/recepcao.png";
import recepcao2 from "@/assets/img/recepcao2.png";
import madrugada from "@/assets/img/madrugada.png";
import lavanderia from "@/assets/img/lavanderia.jpg";
import lavanderia2 from "@/assets/img/lavanderia2.jpg";
import whats from "@/assets/icons/whats.png";
import insta from "@/assets/icons/insta.png";
import { MdEmail } from "react-icons/md";

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

        <div className="flex flex-wrap gap-12 justify-center">
          <div
            className="bg-no-repeat flex items-center min-h-[404px] bg-cover p-12 rounded-3xl overflow-hidden relative size-full max-w-[404px] before:-z-1 before:absolute before:size-full before:top-0 before:left-0 before:backdrop-brightness-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]"
            style={{ backgroundImage: `url('${cozinhaCompartilhada.src}')` }}
          >
            <ul className="text-white font-bold relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,1)] leading-7">
              <li>• Cozinha Privada e equipada</li>
              <li>• Não oferecemos serviço de alimentação</li>
              <li>
                • Estamos localizados à beira-mar de Itapuã próximo ao aeroporto
                (8km) e de fácil acesso aos pontos turísticos.
              </li>
              <li>• Banheiro privado</li>
              <li>
                • <span className="text-green-400">CHECK IN 14h</span>{" "}
              </li>
              <li>
                • <span className="text-red-400">CHECK OUT 12h</span>{" "}
              </li>
            </ul>
          </div>

          <div
            className="bg-no-repeat flex items-center min-h-[404px] bg-cover p-12 rounded-3xl overflow-hidden relative size-full max-w-[404px]  before:-z-1 before:absolute before:size-full before:top-0 before:left-0 before:backdrop-brightness-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]"
            style={{ backgroundImage: `url('${recepcao.src}')` }}
          >
            <p className="text-white font-bold relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,1)] leading-7">
              Para realizar sua reserva direta é necessário:
              <br /> 1. Nome completo dos hóspedes <br /> 2. Um EMAIL para
              receber as informações e confirmação da reserva <br /> 3. Na
              semana da estadia, enviaremos nosso LINK para pagamento e Check-In
              Online
            </p>
          </div>

          <div
            className="bg-no-repeat flex items-center min-h-[404px] bg-cover p-12 rounded-3xl overflow-hidden relative size-full max-w-[404px]  before:-z-1 before:absolute before:size-full before:top-0 before:left-0 before:backdrop-brightness-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]"
            style={{ backgroundImage: `url('${recepcao2.src}')` }}
          >
            <p className="text-white font-bold relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,1)] leading-7">
              Temos o serviço de Day Use no valor de{" "}
              <span className="text-green-400">R$20,00 por pessoa</span> <br />{" "}
              Você poderá ter acesso aos banheiros com chuveiro e maleiro, além
              da área social com WIFI onde será seu local de espera. Lembrando
              que o período deste serviço acontece apenas das 9H às 18H.
              Qualquer dúvida estamos a disposição!
            </p>
          </div>
          <div
            className="bg-no-repeat flex items-center min-h-[404px] bg-cover p-12 rounded-3xl overflow-hidden relative size-full max-w-[404px]  before:-z-1 before:absolute before:size-full before:top-0 before:left-0 before:backdrop-brightness-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]"
            style={{ backgroundImage: `url('${lavanderia.src}')` }}
          >
            <p className="text-white font-bold relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,1)] leading-7">
              Taxa única para o
              <span className="text-green-400"> aluguel de toalha: R$10</span> e
              <span className="text-blue-400"> cadeado: R$5</span> (quartos
              compartilhados) <br />• Em caso da não devolução de material e
              danificação será cobrado um valor extra de R$ 20; <br />• Favor
              devolver a recepção o material no momento do check out; <br />• Os
              quartos privados têm no pacote 2 toalhas de cortesia, para uma
              quantidade maior, o aluguel.
            </p>
          </div>
          <div
            className="bg-no-repeat flex items-center min-h-[404px] bg-cover p-12 rounded-3xl overflow-hidden relative size-full max-w-[404px]  before:-z-1 before:absolute before:size-full before:top-0 before:left-0 before:backdrop-brightness-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]"
            style={{ backgroundImage: `url('${lavanderia2.src}')` }}
          >
            <p className="text-white font-bold relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,1)] leading-7">
              Para 10kg de roupa para lavagem
              <span className="text-green-400"> cobramos R$20</span>. <br />
              <br />
              • O hóspede é responsável por estender as as roupas no varal
              <br />• O tempo de lavagem completa são de 2H
            </p>
          </div>
          <div
            className="bg-no-repeat flex items-center min-h-[404px] bg-cover p-12 rounded-3xl overflow-hidden relative size-full max-w-[404px]  before:-z-1 before:absolute before:size-full before:top-0 before:left-0 before:backdrop-brightness-50 drop-shadow-[0_0_5px_rgba(0,0,0,1)]"
            style={{ backgroundImage: `url('${madrugada.src}')` }}
          >
            <p className="text-white font-bold relative z-10 drop-shadow-[0_0_5px_rgba(0,0,0,1)] leading-7">
              Quanto à chegada após às{" "}
              <span className="text-green-300">22h</span>, não se preocupe.
              Nosso funcionamento é das 7 às 22h, mas recebemos o hóspede após
              esse horário e na madrugada, desde que o check in online esteja
              concluído e a previsão do horário seja informada. Além disso, você
              receberá a
              <span className="text-green-300">
                {" "}
                senha da porta de entrada do hostel
              </span>{" "}
              e também, sempre procuramos manter um(a) colega no apoio. Sendo
              assim, fique tranquilo(a).
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-center font-bold text-white drop-shadow-[0_0_5px_rgba(0,0,0,1)] text-3xl">
            Cancelamento
          </h1>
          <p className="font-bold text-white drop-shadow-[0_0_5px_rgba(0,0,0,1)] max-w-[440px] ">
            Poderá ser cancelada a reserva sem bônus até{" "}
            <span className="text-red-500">24h</span> antes do check in, caso
            contrário, uma multa de 50% do valor da reserva.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-center font-bold text-white drop-shadow-[0_0_5px_rgba(0,0,0,1)] text-3xl">
            Nossos contatos
          </h1>
          <div className="font-bold flex flex-col gap-12 text-white drop-shadow-[0_0_5px_rgba(0,0,0,1)] justify-center">
            <div className="flex flex-col gap-6 w-full max-w-[500px] min-w-[300px]">
              <a
                href="https://api.whatsapp.com/send?phone=5571999057521"
                target="_blank"
                className="flex gap-4 items-center"
              >
                <img width={32} src={whats.src} alt="" />
                Whatsapp: +55 71 99905-7521
              </a>
              <a
                href="https://www.instagram.com/puleirohostel/"
                target="_blank"
                className="flex gap-4 items-center"
              >
                <img width={32} src={insta.src} alt="" />
                Instagram: @puleirohostel
              </a>
              <a
                href="https://www.instagram.com/puleirohostel/"
                target="_blank"
                className="flex gap-4 items-center"
              >
                <MdEmail size={32} />
                E-mail: reservadiretapuleirohostel@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-6 w-full max-w-[500px] min-w-[300px]">
              <span className="text-2xl">Endereço: </span>
              <p className="italic">
                Rua Aristides Milton, 25, Salvador-BA Cep 41610011 <br /> Na
                Orla De Itapuã, próximo a Sereia, próximo ao Point do Gela e em
                frente à Colônia de Pescadores Z6.
              </p>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3372266262713!2d-38.3692675847801!3d-12.950259962890579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71617832ef383e5%3A0xe5468cfc75ba3d6d!2sPuleiro%20Hostel!5e0!3m2!1spt-BR!2sbr!4v1657384008028!5m2!1spt-BR!2sbr"
          width={400}
          height={300}
          style={{ border: 0, borderRadius: "1rem" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>
      </main>

      {/* RODAPE */}
      <footer className="h-12 w-full justify-center flex items-center"></footer>
    </>
  );
}
