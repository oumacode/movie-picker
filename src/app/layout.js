export const metadata = {
  title: 'Movie Picker',
  description: 'Made by Oumayma',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
