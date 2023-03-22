import { About } from '@/components/About'
import { AboutJobs } from '@/components/AboutJobs'
import { Contacts } from '@/components/Contacts'
import { PageHeader } from '@/components/PageHeader'
import { Portfolio } from '@/components/Portfolio'
import { Skills } from '@/components/Skills'

export default function Home() {
  return (
    <main className="bg-slate-50 antialiased">
      <PageHeader />
      <div className="flex flex-col fixed-bg gap-6 z-0">
        <About />
        <div className="flex flex-col lg:px-0 px-8 gap-12 my-12 items-center">
          <Skills />
          <AboutJobs />
          <Portfolio />
        </div>
        <Contacts />
      </div>
    </main>
  )
}
