import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export const metadata: Metadata = {
  title: 'Black & Best',
  description: 'Professional photography & video production Company.',
  keywords: 'photography, video production, studio, Ghana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="__className_f367f3">
      <body className="" suppressHydrationWarning>
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

