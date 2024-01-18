import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'ScarsOnline',
  description: 'The number one self-care and relaxation site. Helping individuals become the best version on themselves.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Header />
        <main className="min-h-screen px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
