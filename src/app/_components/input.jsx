'use client'

// Custom Input Component
export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3f4ca0] focus:border-transparent transition-all duration-200 ${className}`}
      {...props}
    />
  )
}

// Custom Textarea Component
export function Textarea({ className = '', rows = 4, ...props }) {
  return (
    <textarea
      rows={rows}
      className={`w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#3f4ca0] focus:border-transparent transition-all duration-200 ${className}`}
      {...props}
    />
  )
}