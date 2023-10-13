export const metadata = {
  title: 'Ethereum Resources',
  description: 'A list of resources to learn about and keep up with the development of Ethereum.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
