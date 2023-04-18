import { SkillItem } from './SkillItem'

export function Frameworks() {
  return (
    <article className="">
      <h3 className="xxs:text-2xl text-lg text-accent font-bold border-b-2 border-b-accent">
        Frameworks
      </h3>
      <ul className="flex flex-wrap text-xl mt-4 gap-4">
        <SkillItem url="/icons/vuejs-original.svg" name="VueJS" />
        <SkillItem url="/icons/react-original.svg" name="React" />
        <SkillItem url="/icons/angularjs-original.svg" name="AngularJS" />
        <SkillItem url="/icons/phoenix-original.svg" name="Phoenix" />
      </ul>
    </article>
  )
}
