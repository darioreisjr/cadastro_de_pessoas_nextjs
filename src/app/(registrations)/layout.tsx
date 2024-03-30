import { Header } from '@/components/header'
import { ReactNode } from 'React'

export default function RegistrationLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
