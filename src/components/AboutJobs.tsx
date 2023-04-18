export function AboutJobs() {
  return (
    <section
      id="about_jobs"
      className="bg-surface p-6 xxs:rounded-2xl rounded-none xxs:border-0 border-y border-stone-300 w-full lg:w-4/6"
    >
      <h2 className="xxs:text-3xl text-xl font-semibold uppercase text-secondary drop-shadow-sm">
        Que tipo de aplicações desenvolvo
      </h2>
      <ul
        className="list-inside list-disc mt-4 font-medium xxs:text-xl text-md text-black font-poppins"
        itemScope
        itemType="https://schema.org/Service"
      >
        <li className="cursor-pointer" itemProp="description">
          Aplicações SSR
        </li>
        <li className="cursor-pointer" itemProp="description">
          Aplicações PWA
        </li>
        <li className="cursor-pointer" itemProp="description">
          Landing Pages
        </li>
        <li className="cursor-pointer" itemProp="description">
          Aplicações SPA
        </li>
        <li className="cursor-pointer" itemProp="description">
          E-commerces
        </li>
        <li className="cursor-pointer" itemProp="description">
          Blogs
        </li>
        <li className="cursor-pointer" itemProp="description">
          Aplicações desktop com Electron
        </li>
      </ul>
      <div className="mt-8 ">
        <h3 className="xxs:text-2xl text-lg font-bold drop-shadow">
          O que você pode esperar?
        </h3>
        <ul
          className="mt-4 italic list-inside list-disc xxs:text-xl text-md font-poppins"
          itemScope
          itemType="https://schema.org/Action"
        >
          <li itemProp="result">Transforme sua ideia em um produto!</li>
          <li itemProp="result">
            Dê manutenção e faça melhorias em sua aplicação.
          </li>
          <li itemProp="result">
            Ou traga-a para Web/Mobile com responsividade e acessibilidade.
          </li>
        </ul>
      </div>
    </section>
  )
}
