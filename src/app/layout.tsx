import { Barlow } from 'next/font/google'
import './globals.css'
import Header from './Header'

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Next App Router Template',
  description: 'The next template for your Next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable}`}>
      <body className="bg-gray-900 font-sans text-lg text-gray-100">
        <Header />
        {children}
      </body>
    </html>
  )
}
