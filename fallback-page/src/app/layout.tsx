import './globals.css'
import { Sono } from 'next/font/google'

export const metadata = {
  title: 'Rogério Santos • Desenvolvedor Front-end',
  description: 'Desenvolvedor Front-end',
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
  ]
}

const sono = Sono({
  subsets: ['latin'],
  variable: '--sono-font',
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sono.variable}`}>
      <body className="bg-slate-50 antialiased h-screen">{children}</body>
    </html>
  )
}
