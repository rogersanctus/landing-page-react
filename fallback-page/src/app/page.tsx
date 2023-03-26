export default function Home() {
  return (
    <main className="flex sm:justify-center sm:items-stretch h-full items-center">
      <div className="sm:w-2/3 w-auto sm:h-auto h-2/3 sm:border-x sm:border-y-0 border-x-0 border-y border-slate-300 bg-slate-100 flex flex-col justify-center items-center text-center">
        <section className="p-8">
          <div className="flex flex-col">
            <p className="sm:text-3xl text-xl font-bold text-slate-800">
              Sinto muito. No momento esta página está sendo atualizada.
            </p>
            <p className="sm:text-4xl text-2xl font-semibold mt-4 text-amber-600">
              Em breve estaremos de volta!
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
