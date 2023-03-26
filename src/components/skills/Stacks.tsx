import { SkillItem } from './SkillItem'

export function Stacks() {
  return (
    <div className="">
      <span className="xxs:text-2xl text-lg text-accent font-bold border-b-2 border-b-accent">
        Stacks Frontend
      </span>
      <ul>
        <li className="mt-8">
          <span className="xxs:text-xl text-md text-orange font-semibold">
            Uso Geral
          </span>
          <ul className="flex flex-wrap mt-4 gap-4">
            <SkillItem url="/icons/html5-original.svg" name="HTML 5" />
            <SkillItem url="/icons/css3-original.svg" name="CSS 3" />
            <SkillItem url="/icons/sass-original.svg" name="Sass" />
            <SkillItem url="/icons/less-plain-wordmark.svg" name="Less" />
            <SkillItem url="/icons/tailwindcss-plain.svg" name="Tailwind CSS" />
            <SkillItem url="/icons/axios-logo.png" name="Axios" />
            <SkillItem url="/icons/jest-plain.svg" name="Jest" />
            <SkillItem
              url="/icons/testing-library-logo.png"
              name="Testing Library"
            />
            <SkillItem url="/icons/eslint-logo.svg" name="ESLint" />
            <SkillItem url="/icons/webpack-original.svg" name="Webpack" />
            <SkillItem url="/icons/rollup-logo.svg" name="RollupJS" />
          </ul>
        </li>
        <li className="mt-8">
          <span className="xxs:text-xl text-md text-orange font-semibold">
            VueJS
          </span>
          <ul className="flex flex-wrap mt-4 gap-4">
            <SkillItem url="/icons/nuxt.svg" name="Nuxt" />
            <SkillItem url="/icons/vite-logo.svg" name="Vite" />
            <SkillItem url="/icons/vuejs-original.svg" name="Vue Router" />
            <SkillItem url="/icons/vuejs-original.svg" name="Vuex" />
            <SkillItem url="/icons/pinia-logo.svg" name="Pinia" />
            <SkillItem url="/icons/vuetify-original.svg" name="Vuetify" />
            <SkillItem url="/icons/quasar-logo.svg" name="Quasar" />
            <SkillItem url="/icons/bootstrap-vue.svg" name="Bootstrap Vue" />
            <SkillItem url="/icons/bootstrap-original.svg" name="Bootstrap" />
          </ul>
        </li>
        <li className="mt-8">
          <span className="xxs:text-xl text-md text-orange font-semibold">
            React
          </span>
          <ul className="flex flex-wrap mt-4 gap-4">
            <SkillItem url="/icons/nextjs-original.svg" name="Next" />
            <SkillItem url="/icons/vite-logo.svg" name="Vite" />
            <SkillItem
              url="/icons/react-router-mark-color.svg"
              name="React Router"
            />
            <SkillItem url="/icons/react-original.svg" name="React Hooks" />
            <SkillItem url="/icons/zustand-logo.png" name="Zustand" />
            <SkillItem url="/icons/redux-logo.svg" name="Redux" />
            <SkillItem url="/icons/bootstrap-original.svg" name="Bootstrap" />
            <SkillItem url="/icons/zod-logo.svg" name="Zod" />
          </ul>
        </li>
      </ul>
    </div>
  )
}
