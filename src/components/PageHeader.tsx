'use client'

import { useMenuStore } from '@/app/MenuContextWrapper'
import ArrowUp from '@public/icons/arrow-up.svg'

export function PageHeader() {
  const { state, dispatch } = useMenuStore()

  function onToggleMenu() {
    const newIsMenuOpen = !state.isOpen
    dispatch({ type: 'toggle', payload: newIsMenuOpen })
    dispatch({ type: 'store' })
  }

  return (
    <>
      <header
        id="top"
        className="static fitmenu:absolute w-full fitmenu:px-2 fitmenu:py-4 fitmenu:bg-transparent bg-secondary fitmenu:border-b-0 border-b border-sky-900"
      >
        <div className="fitmenu:hidden flex items-center">
          <button
            className="flex items-center outline-none m-2 hover:text-accent text-white"
            onClick={onToggleMenu}
          >
            <svg
              className="w-8 h-8"
              x-show="!showMenu"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <span className="font-semibold uppercase ml-2">Menu</span>
          </button>
        </div>
        <nav className="flex justify-center">
          <ul
            className={`${
              state.isOpen ? '' : 'hidden'
            } flex fitmenu:flex-row flex-col gap-1 fitmenu:gap-8 text-white fitmenu:text-cyan-600 nav-menu cursor-pointer fitmenu:w-auto w-full fitmenu:pb-0 pb-4`}
          >
            <li className="text-md font-semibold fitmenu:text-2xl uppercase">
              <a
                href="#about_me"
                className="flex flex-col items-center fitmenu:static relative"
              >
                <span className="fitmenu:z-auto z-10 whitespace-nowrap fitmenu:p-0 p-2">
                  Sobre mim
                </span>
                <div className="fitmenu:static absolute w-full h-full fitmenu:w-0 fitmenu:h-[12px] fitmenu:mt-2 fitmenu:bg-cyan-600 bg-stone-800" />
              </a>
            </li>
            <li className="text-md font-semibold fitmenu:text-2xl uppercase">
              <a
                href="#skills"
                className="flex flex-col items-center fitmenu:static relative"
              >
                <span className="fitmenu:z-auto z-10 whitespace-nowrap fitmenu:p-0 p-2">
                  Habilidades
                </span>
                <div className="fitmenu:static absolute w-full h-full fitmenu:w-0 fitmenu:h-[12px] fitmenu:mt-2 fitmenu:bg-cyan-600 bg-stone-800" />
              </a>
            </li>
            <li className="text-md font-semibold fitmenu:text-2xl uppercase">
              <a
                href="#about_jobs"
                className="flex flex-col items-center fitmenu:static relative"
              >
                <span className="fitmenu:z-auto z-10 whitespace-nowrap fitmenu:p-0 p-2">
                  No que trabalho
                </span>
                <div className="fitmenu:static absolute w-full h-full fitmenu:w-0 fitmenu:h-[12px] fitmenu:mt-2 fitmenu:bg-cyan-600 bg-stone-800" />
              </a>
            </li>
            {/*<li className="text-md font-semibold fitmenu:text-2xl uppercase">
              <a
                href="#portfolio"
                className="flex flex-col items-center fitmenu:static relative"
              >
                <span className="fitmenu:z-auto z-10 whitespace-nowrap fitmenu:p-0 p-2">
                  Portfólio
                </span>
                <div className="fitmenu:static absolute w-full h-full fitmenu:w-0 fitmenu:h-[12px] fitmenu:mt-2 fitmenu:bg-cyan-600 bg-stone-800" />
              </a>
            </li>*/}
            <li className="text-md font-semibold fitmenu:text-2xl uppercase">
              <a
                href="#contact"
                className="flex flex-col items-center fitmenu:static relative"
              >
                <span className="fitmenu:z-auto z-10 whitespace-nowrap fitmenu:p-0 p-2">
                  Contato
                </span>
                <div className="fitmenu:static absolute w-full h-full fitmenu:w-0 fitmenu:h-[12px] fitmenu:mt-2 fitmenu:bg-cyan-600 bg-stone-800" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="absolute z-20">
        <a href="#top" className="fixed bottom-4 right-4" title="Go to the top">
          <ArrowUp className="fill-current text-lime-500 hover:text-lime-400 w-12 h-12 drop-shadow" />
        </a>
      </div>
    </>
  )
}
