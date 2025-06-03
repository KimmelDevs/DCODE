'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from './button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Header() {
  const router = useRouter()

  return (
    <header 
      className="sticky top-0 z-50 shadow-sm"
      style={{
        backgroundImage: "url('/backgroundmain.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center bg-blue-500 bg-opacity-50">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <Image 
              src="/mlkt.jpg" 
              alt="Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-white">DCODE</span>
        </Link>

        {/* Navigation Button */}
        <div className="flex items-center space-x-4">
          <Button className="bg-white text-black hover:bg-gray-200" onClick={() => router.push('/')}>
            Website
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header