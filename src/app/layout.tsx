import { Barlow } from 'next/font/google'
import './globals.css'
import Context from './Context'

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Dang Minh Ngo | Front-end Developer',
  description: 'Welcome to my blog',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable}`}>
      <body className="bg-gray-900 font-sans text-base text-gray-100">
        <Context>{children}</Context>
        <div id="mobile-nav"></div>
        <div id="search"></div>
      </body>
    </html>
  )
}
