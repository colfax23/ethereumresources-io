export const metadata = {
  title: 'Ethereum Resources',
  description: 'A list of resources to learn about Ethereum.',
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
