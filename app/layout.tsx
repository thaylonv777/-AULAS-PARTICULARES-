import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thaylon | Aulas de Tráfego Pago - Do Zero ao Avançado',
  description: 'Aulas particulares de tráfego pago com Thaylon. Aprenda Meta Ads e Google Ads do zero ao avançado com metodologia própria e suporte individual.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
