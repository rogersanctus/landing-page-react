import './globals.css'
import { Sono, Josefin_Slab, Poppins } from 'next/font/google'
import { MenuContextWrapper } from './MenuContextWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rogério Santos • Desenvolvedor Front-end',
  description:
    'Desenvolvedor Front-end com vasta experiência em projetos e aplicações variadas. Como Web Apps SPA (Single Page Applications), aplicações SSR (Server Side Rendenring). Atuo como prestador de serviços e freelancer.',
  applicationName: 'Front-end developer portfolio',
  authors: { name: 'Rogério Santos' },
  keywords: [
    'desenvolvedor',
    'developer',
    'desenvolvimento',
    'programador',
    'engenheiro de software',
    'software engineer',
    'front-end',
    'frontend',
    'web',
    'web applications',
    'web app',
    'aplicação web',
    'website',
    'sites',
    'portfolio',
    'portfólio',
    'freelancer',
    'freela',
    'rogério santos'
  ],
  robots: { index: true, follow: false }
}

const sono = Sono({
  subsets: ['latin'],
  variable: '--sono-font',
  display: 'swap'
})

const josefinSlab = Josefin_Slab({
  subsets: ['latin'],
  variable: '--josefin-slab-font',
  display: 'swap'
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--poppins-font',
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sono.variable} ${josefinSlab.variable} ${poppins.variable}`}
    >
      <body className="antialiased bg-slate-50">
        <MenuContextWrapper>{children}</MenuContextWrapper>
      </body>
    </html>
  )
}
