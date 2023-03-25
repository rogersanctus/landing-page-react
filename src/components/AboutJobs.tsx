export function AboutJobs() {
  return (
    <section
      id="about_jobs"
      className="bg-surface p-6 rounded-xl w-full lg:w-4/6"
    >
      <span className="text-3xl font-semibold uppercase text-secondary drop-shadow-sm">
        Que tipo de aplicações desenvolvo
      </span>
      <ul className="list-inside list-disc mt-4 font-medium text-xl text-black font-poppins">
        <li className="cursor-pointer">Aplicações SSR</li>
        <li className="cursor-pointer">Aplicações SPA</li>
        <li className="cursor-pointer">Aplicações PWA</li>
        <li className="cursor-pointer">Landing Pages</li>
        <li className="cursor-pointer">E-commerces</li>
        <li className="cursor-pointer">Blogs</li>
        <li className="cursor-pointer">Aplicações desktop com Electron</li>
      </ul>
      <div className="mt-8 ">
        <span className="text-2xl font-bold drop-shadow">
          O que você pode esperar?
        </span>
        <ul className="mt-4 italic list-inside list-disc text-xl font-poppins">
          <li>Transforme sua ideia em um produto!</li>
          <li>Dê manutenção e faça melhorias em sua aplicação.</li>
          <li>
            Ou traga-a para Web/Mobile com responsividade e acessibilidade.
          </li>
        </ul>
      </div>
    </section>
  )
}
