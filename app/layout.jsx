import "./globals.css"
import Header from "@/components/Header"
import Provider from "@/components/Provider"
import Tabs from "@/components/Tabs"

export const metadata = {
  title: {
    template: "%s | MovieApp",
    default: "MovieApp - Discover Movies",
  },
  description: "Discover the latest and greatest movies with MovieApp",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <Provider>
          <Header />
          <Tabs />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  )
}



import './globals.css'