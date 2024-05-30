import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'

const sans = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UOC Interview',
  description: 'Interview Tasks',
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
