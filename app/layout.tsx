import type {  Metadata } from 'next'

import '@styles/globals.css'
import ReactQueryWrapper from '../react-query/ReactQueryWrapper'

export const metadata: Metadata = {
  title: 'Welcome to Home Page',
  description: 'Products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
      <ReactQueryWrapper>
          {children}
      </ReactQueryWrapper>
      </body>
    </html>
  )
}
