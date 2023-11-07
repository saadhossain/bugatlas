import Header from '@/app/components/common/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bug Atlas - Track Bug Report',
  description: 'Track Bug Report',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='text-gray-800 min-h-[83vh]'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
