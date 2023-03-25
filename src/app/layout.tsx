import './globals.css'
import { Sono, Josefin_Slab, Poppins } from 'next/font/google'
import { MenuContextWrapper } from './MenuContextWrapper'

export const metadata = {
  title: 'Rogério Santos • Desenvolvedor Front-end',
  description: 'Desenvolvedor Front-end'
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
