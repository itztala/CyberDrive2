"use client"

import { useEffect, useState } from "react"

export function CyberCarAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <svg
        width="400"
        height="300"
        viewBox="0 0 400 300"
        className="w-full h-full max-w-md"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Car Body */}
        <g className={`transition-all duration-1000 ${isAnimating ? "translate-x-0" : "translate-x-10"}`}>
          <rect x="80" y="180" width="240" height="60" rx="8" fill="#2563eb" />
          <rect x="100" y="160" width="200" height="40" rx="6" fill="#1d4ed8" />

          {/* Windows */}
          <rect x="110" y="170" width="60" height="20" rx="2" fill="#93c5fd" opacity="0.8" />
          <rect x="180" y="170" width="60" height="20" rx="2" fill="#93c5fd" opacity="0.8" />
          <rect x="250" y="170" width="40" height="20" rx="2" fill="#93c5fd" opacity="0.8" />

          {/* Wheels */}
          <circle cx="120" cy="250" r="20" fill="#374151" />
          <circle cx="280" cy="250" r="20" fill="#374151" />
          <circle cx="120" cy="250" r="12" fill="#6b7280" />
          <circle cx="280" cy="250" r="12" fill="#6b7280" />
        </g>

        {/* Cyber Attack Indicators */}
        <g className={`transition-all duration-1000 delay-500 ${isAnimating ? "opacity-100" : "opacity-0"}`}>
          {/* Warning signals */}
          <circle cx="150" cy="140" r="3" fill="#ef4444" className="animate-pulse" />
          <circle cx="200" cy="135" r="3" fill="#f59e0b" className="animate-pulse" />
          <circle cx="250" cy="140" r="3" fill="#ef4444" className="animate-pulse" />

          {/* Data streams */}
          <path
            d="M50 100 Q100 80 150 100 T250 100"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
          <path
            d="M350 120 Q300 100 250 120 T150 120"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        </g>

        {/* Shield Protection */}
        <g
          className={`transition-all duration-1000 delay-1000 ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        >
          <path d="M200 50 L220 70 L200 90 L180 70 Z" fill="#10b981" opacity="0.9" />
          <path d="M200 60 L210 70 L200 80 L190 70 Z" fill="#ffffff" />
        </g>

        {/* Network nodes */}
        <g className={`transition-all duration-1000 delay-700 ${isAnimating ? "opacity-100" : "opacity-0"}`}>
          <circle cx="60" cy="80" r="4" fill="#8b5cf6" />
          <circle cx="340" cy="90" r="4" fill="#8b5cf6" />
          <circle cx="80" cy="120" r="4" fill="#8b5cf6" />
          <circle cx="320" cy="130" r="4" fill="#8b5cf6" />

          {/* Connection lines */}
          <line
            x1="60"
            y1="80"
            x2="150"
            y2="140"
            stroke="#8b5cf6"
            strokeWidth="1"
            opacity="0.6"
            strokeDasharray="2,2"
          />
          <line
            x1="340"
            y1="90"
            x2="250"
            y2="140"
            stroke="#8b5cf6"
            strokeWidth="1"
            opacity="0.6"
            strokeDasharray="2,2"
          />
        </g>
      </svg>
    </div>
  )
}
