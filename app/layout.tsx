import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Codan Web - Creative Digital Solutions",
  description:
    "We are a team of creatives specializing in website design and development using the latest AI-powered technologies. We help companies and startups build a strong online presence and achieve digital success.",
  keywords: "web design, web development, AI, digital solutions, Egypt, Mansoura, startup, company website",
  authors: [{ name: "Codan Web" }],
  creator: "Codan Web",
  publisher: "Codan Web",
  openGraph: {
    title: "Codan Web - Creative Digital Solutions",
    description: "Professional web design and development services with AI integration",
    url: "https://codanweb.com",
    siteName: "Codan Web",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codan Web - Creative Digital Solutions",
    description: "Professional web design and development services with AI integration",
    creator: "@codanweb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
