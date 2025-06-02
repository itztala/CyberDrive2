import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Centered logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold">CyberDrive</span>
          </Link>
        </div>

        {/* Divider and copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 CyberDrive. All rights reserved. Securing the future of connected vehicles.</p>
        </div>
      </div>
    </footer>
  )
}
