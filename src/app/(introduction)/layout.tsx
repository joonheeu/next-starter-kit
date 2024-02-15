import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { global } from '@/app/config/global'

export const metadata: Metadata = {
  title: `소개 | ${global.companyName.en}`,
  description: `${global.description}`,
}

interface IntroLayoutProps {
  children: ReactNode
}

export default function IntroLayout({ children }: Readonly<IntroLayoutProps>) {
  return <div className={''}>{children}</div>
}
