import Image from 'next/image'

export function About() {
  return (
    <section
      id="about_me"
      className="about-gradient flex flex-col p-8 gap-8 md:flex-row pt-24 border-b border-slate-50"
    >
      <div className="me" itemScope itemType="https://schema.org/Person">
        <Image
          src="/a_profile_square.png"
          className="me__picture"
          alt="my photo"
          width={150}
          height={150}
          priority
          itemProp="image"
        />
      </div>
      <div className="presentation-text flex flex-col gap-4 md:border-l-2 border-l-0 border-l-zinc-300 md:pl-6 font-josefin-slab font-medium">
        <h1>
          <span className="text-stone-500 font-bold text-4xl">Olá,</span>
          <span
            className="text-stone-600 font-semibold text-3xl whitespace-nowrap"
            itemScope
            itemType="https://schema.org/Person"
          >
            {' '}
            sou <span itemProp="name">Rogério Santos</span>,
          </span>
        </h1>
        <article
          className="flex flex-col lg:flex-row lg:justify-items-stretch lg:items-baseline gap-4 text-2xl font-medium drop-shadow-sm"
          itemProp="mainContentOfPage"
        >
          <p className="lg:w-1/3 text-zinc-800" itemProp="about">
            <span className="break-words">
              <span className="text-3xl">d</span>esenvolvedor há mais de dez
              anos em diversos tipos de aplicação e, atualmente, atuo como
              desenvolvedor Front-end, com mais de cinco anos de experiência em
              projetos variados.
            </span>
          </p>
          <p className="lg:w-1/3 text-zinc-800">
            Tenho experiência com trabalho em equipes diversas, com práticas em
            desenvolvimento ágil. Produzo código seguindo as boas práticas
            atuais de Clean Code e aplicando design patterns onde cabem, sem
            reinventar a roda, mas mantendo sempre um olhar sobre o desempenho
            quando a aplicação pede.
          </p>
          <p className="lg:w-1/3 text-zinc-800">
            Já desenvolvi pra ambientes nativos e com poucos recursos, então,
            sei otimizar código pra eficiência, velocidade e baixo consumo
            desses recursos. E em aplicações Web, consigo combinar estas
            melhorias com boas práticas de códigos reaproveitáveis e
            readaptáveis.
          </p>
        </article>
      </div>
    </section>
  )
}
