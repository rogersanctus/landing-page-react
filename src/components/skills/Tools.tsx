import { SkillItem } from './SkillItem'

export function Tools() {
  return (
    <div className="mt-4">
      <span className="xxs:text-2xl text-lg text-accent font-bold border-b-2 border-b-accent">
        Ferramentas
      </span>
      <ul className="flex flex-wrap mt-4 gap-4">
        <SkillItem url="/icons/git-original.svg" name="Git" />
        <SkillItem url="/icons/docker-original.svg" name="Docker" />
        <SkillItem url="/icons/jenkins-original.svg" name="Jenkins (CI/CD)" />
      </ul>
    </div>
  )
}
