import { SkillItem } from './SkillItem'

export function Frameworks() {
  return (
    <div className="">
      <span className="text-2xl text-accent font-bold border-b-2 border-b-accent">
        Frameworks
      </span>
      <ul className="flex flex-wrap text-xl mt-4 gap-4">
        <SkillItem url="/icons/vuejs-original.svg" name="VueJS" />
        <SkillItem url="/icons/react-original.svg" name="React" />
        <SkillItem url="/icons/angularjs-original.svg" name="AngularJS" />
        <SkillItem url="/icons/phoenix-original.svg" name="Phoenix" />
      </ul>
    </div>
  )
}
