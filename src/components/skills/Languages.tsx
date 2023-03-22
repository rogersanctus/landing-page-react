import { SkillItem } from './SkillItem'

export function Languages() {
  return (
    <div className="">
      <span className="text-2xl text-accent font-bold border-b-2 border-b-accent p-1">
        Linguagens
      </span>
      <ul className="flex flex-wrap text-xl mt-4 gap-4">
        <SkillItem url="/icons/javascript-original.svg" name="Javascript" />
        <SkillItem url="/icons/typescript-original.svg" name="Typescript" />
        <SkillItem url="/icons/elixir-original.svg" name="Elixir" />
        <SkillItem url="/icons/php-plain.svg" name="Php" />
        <SkillItem url="/icons/java-original.svg" name="Java" />
        <SkillItem url="/icons/python-original.svg" name="Python" />
        <SkillItem url="/icons/cplusplus-original.svg" name="C/C++" />
        <SkillItem url="/icons/lua-original.svg" name="Lua" />
      </ul>
    </div>
  )
}
