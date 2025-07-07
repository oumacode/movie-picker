
export const metadata = {
  title: "Movie Picker",
  description: "Get a movie suggestion instantly!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
