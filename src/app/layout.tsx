import './globals.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { global } from '@/app/config/global'

export const metadata: Metadata = {
  title: `소개 | ${global.companyName.en}`,
  description: `${global.description}`,
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html>
      <body className={''}>
        {/* <Providers> */}
        {children}
        {/* <Portals /> */}
        {/* </Providers> */}
      </body>
    </html>
  )
}
