import type {  Metadata } from 'next'

import '@styles/globals.css'
import ReactQueryWrapper from '../react-query/ReactQueryWrapper'
import favicon from './favicon.ico'

export const metadata: Metadata = {
  title: 'Welcome to Home Page',
  description: 'Products',
    icons: [
        {
            rel: 'icon',
            type: 'image/ico',
            sizes: '32x32',
            url: '/favicon.ico'
        }
    ],
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
