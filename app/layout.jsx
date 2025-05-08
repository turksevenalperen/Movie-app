import "./globals.css";
import Header from "@/components/Header";
import Provider from "@/components/Provider";
import Tabss from "@/components/Tabs";
import { Suspense } from "react";

export const metadata = {
  title: {
    template: "%s | MovieApp",
    default: "MovieApp - Discover Movies",
  },
  description: "Discover the latest and greatest movies with MovieApp",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <Provider>
          <Header />
          <Suspense fallback={<div>Yükleniyor...</div>}>
            <Tabss />
          </Suspense>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
