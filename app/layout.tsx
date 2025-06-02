import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});


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
  generator: "v0.dev",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark">
        <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
