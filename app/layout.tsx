import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Box, Theme } from '@radix-ui/themes'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todos',
  description: 'The todos app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        <Theme accentColor='crimson' appearance='light' radius='full'>
          <Navbar />
          <div className='py-8 mt-8 md:mt-16 min-h-screen bg-gradient-to-br from-teal-50 via-yellow-50 to-purple-100'>
            {children}
          </div>
        </Theme>
      </body>
    </html>
  )
}
