import './globals.css'

import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { neobrutalism } from '@clerk/themes'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      localization={ptBR}
      appearance={{
        baseTheme: neobrutalism,
        elements: {
          formButtonPrimary: 'bg-violet-500 hover:bg-violet-600',
        }
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <div className='h-screen flex justify-center items-center'>
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
