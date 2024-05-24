import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const sans = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UOC Interview #1',
  description: 'Interview Task #1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>{children}</body>
    </html>
  )
}
