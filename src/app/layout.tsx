import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Satoru Akita - Portfolio',
  description: 'AI Camera & Edge Sensing Platform Engineer at Sony. Experienced in both semiconductor processes and software engineering.',
  authors: [{ name: 'Satoru Akita' }],
  keywords: ['AI Camera', 'Edge AI', 'Semiconductor', 'Software Engineering', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
