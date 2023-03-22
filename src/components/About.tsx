import Image from 'next/image'

export function About() {
  return (
    <section
      id="about_me"
      className="about-gradient flex flex-col p-8 gap-8 backdrop-blur-md md:flex-row pt-24"
    >
      <div className="me">
        <Image
          src="/a_profile_square.png"
          className="me__picture"
          alt="my photo"
          width={150}
          height={150}
          priority
        />
      </div>
      <div className="presentation-text flex flex-col gap-4 md:border-l-2 border-l-0 border-l-slate-800/70 md:pl-6 font-josefin-slab font-medium drop-shadow-md">
        <p>
          <span className="text-sky-200  text-4xl">Olá,</span>
          <span className="text-sky-300  text-xl whitespace-nowrap">
            {' '}
            sou Rogério Santos,
          </span>
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-items-stretch lg:items-baseline gap-4 text-2xl">
          <p className="lg:w-1/3 text-white">
            <span className="break-words">
              <span className="text-3xl">d</span>esenvolvedor há mais de dez
              anos em diversos tipos de aplicação e, atualmente, atuo como
              desenvolvedor Front-end, com mais de cinco anos de experiência em
              projetos variados.
            </span>
          </p>
          <p className="lg:w-1/3 text-white">
            Tenho experiência com trabalho em equipes diversas, com práticas em
            desenvolvimento ágil. Produzo código seguindo as boas práticas
            atuais de Clean Code e aplicando design patterns onde cabem, sem
            reinventar a roda, mas mantendo sempre um olhar sobre o desempenho
            quando a aplicação pede.
          </p>
          <p className="lg:w-1/3 text-white">
            Já desenvolvi pra ambientes nativos e com poucos recursos, então,
            sei otimizar código pra eficiência, velocidade e baixo consumo
            desses recursos. E em aplicações Web, consigo combinar estas
            melhorias com boas práticas de códigos reaproveitáveis e
            readaptáveis.
          </p>
        </div>
      </div>
    </section>
  )
}
