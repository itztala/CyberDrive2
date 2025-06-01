import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberDrive - Automotive Cybersecurity Training Platform",
  description:
    "Master automotive cybersecurity through immersive simulations. Learn to defend connected vehicles against real-world cyber threats in a safe, browser-based environment.",
  keywords: "automotive cybersecurity, vehicle security, simulation training, connected cars, cyber defense",
  authors: [{ name: "CyberDrive Team" }],
  openGraph: {
    title: "CyberDrive - Green Light to Learn, Red Light to Threats",
    description: "Simulation-based learning platform for automotive cybersecurity experts",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
