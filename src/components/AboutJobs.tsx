export function AboutJobs() {
  return (
    <section
      id="about_jobs"
      className="bg-surface p-6 xxs:rounded-2xl rounded-none xxs:border-0 border-y border-stone-300 w-full lg:w-4/6"
    >
      <span className="xxs:text-3xl text-xl font-semibold uppercase text-secondary drop-shadow-sm">
        Que tipo de aplicações desenvolvo
      </span>
      <ul className="list-inside list-disc mt-4 font-medium xxs:text-xl text-md text-black font-poppins">
        <li className="cursor-pointer">Aplicações SSR</li>
        <li className="cursor-pointer">Aplicações SPA</li>
        <li className="cursor-pointer">Aplicações PWA</li>
        <li className="cursor-pointer">Landing Pages</li>
        <li className="cursor-pointer">E-commerces</li>
        <li className="cursor-pointer">Blogs</li>
        <li className="cursor-pointer">Aplicações desktop com Electron</li>
      </ul>
      <div className="mt-8 ">
        <span className="xxs:text-2xl text-lg font-bold drop-shadow">
          O que você pode esperar?
        </span>
        <ul className="mt-4 italic list-inside list-disc xxs:text-xl text-md font-poppins">
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
