import type { Metadata, Viewport } from 'next'
import { Fraunces, Instrument_Sans, Caveat, Special_Elite } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

const specialElite = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-special-elite',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Giovanna Flora — Psicóloga Clínica e Psicanalista',
  description:
    'Um espaço para poder falar sem precisar ter tudo organizado. Psicoterapia online para adolescentes e adultos, orientada pela Psicanálise.',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#FAF5EF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`bg-background ${fraunces.variable} ${instrumentSans.variable} ${caveat.variable} ${specialElite.variable}`}
     suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
