import { Frameworks } from './skills/Frameworks'
import { Languages } from './skills/Languages'
import { Stacks } from './skills/Stacks'
import { Tools } from './skills/Tools'

export function Skills() {
  return (
    <section
      id="skills"
      className="xxs:rounded-2xl rounded-none xxs:border-0 border-y border-stone-300 bg-surface p-6 w-full lg:w-4/6"
    >
      <span className="xxs:text-3xl text-xl text-secondary font-semibold uppercase">
        Minhas Habilidades
      </span>
      <ul className="flex flex-col gap-6 mt-4">
        <li>
          <Languages />
        </li>
        <li className="mt-6">
          <Frameworks />
        </li>
        <li className="mt-6">
          <Stacks />
        </li>
        <li className="mt-6">
          <Tools />
        </li>
      </ul>
    </section>
  )
}
