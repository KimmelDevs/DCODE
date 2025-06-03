'use client'
import React, { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import {
  Home,
  Utensils,
  PlusCircle,
  X,
  Wrench,
  Brain,
  Lightbulb,
  Menu,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

function DashboardLayout({ children }) {
  const router = useRouter()
  const path = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsStandalone(true)
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const menuList = [
    {
      id: 1,
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Tools",
      icon: Wrench,
      path: "/dashboard/tool",
    },
  ]

  return (
    <div className={`flex ${isStandalone ? 'h-[100dvh]' : 'min-h-screen'} bg-[#3f4ca0]`}>
      {/* Desktop Sidebar - Now with overflow-hidden to prevent flash */}
      <div className={`hidden md:block ${sidebarCollapsed ? 'w-24' : 'w-64'} overflow-hidden`}>
        <nav className={`bg-[#3f4ca0] border-r border-white/20 transition-all duration-300 ease-in-out 
          ${sidebarCollapsed ? 'w-24' : 'w-64'} 
          ${isStandalone ? 'pt-safe' : ''}
          fixed h-full left-0 top-0 bottom-0 flex flex-col`}>

          <div className="p-4 flex items-center justify-between border-b border-white/20">
            {!sidebarCollapsed ? (
              <div className="flex items-center gap-2">
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  width={32} 
                  height={32} 
                  className="rounded-full object-contain" 
                />
                <span className="text-xl font-extrabold text-white">DCODE</span>
              </div>
            ) : (
              <div className="w-6"></div> 
            )}
            <button 
              onClick={toggleSidebar}
              className="text-white hover:text-white p-1 rounded hover:bg-white/20"
            >
              <ChevronRight className={`transition-transform ${sidebarCollapsed ? '' : 'rotate-180'}`} />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto py-4">
            {menuList.map(menu => {
              const isActive = path === menu.path
              return (
                <li key={menu.id} className={`mx-2 mb-1 ${isActive ? 'bg-white/20' : 'hover:bg-white/10'}`}>
                  <Link
                    href={menu.path}
                    className={`flex items-center p-3 rounded-lg transition
                      ${sidebarCollapsed ? 'justify-center' : ''}`}
                  >
                    <menu.icon className="w-5 h-5 text-white" />
                    {!sidebarCollapsed && (
                      <span className={`ml-3 ${isActive ? 'text-white font-medium' : 'text-white'}`}>
                        {menu.name}
                      </span>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content Area - Removed bg-blue-50 to allow image background */}
      <div className={`flex-1 flex flex-col overflow-hidden`}>
        {/* Mobile Hamburger Button */}
        <div className="md:hidden fixed top-4 left-4 z-40">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-white bg-[#3f4ca0] p-2 rounded-lg shadow-lg"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-[#3f4ca0]/90 backdrop-blur-sm md:hidden">
            <div className={`h-full w-full flex flex-col p-6 ${isStandalone ? 'pt-safe' : ''}`}>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    width={40} 
                    height={40} 
                    className="rounded-full object-contain" 
                  />
                  <span className="text-2xl font-extrabold text-white">DCODE</span>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-2 rounded-full hover:bg-white/20 transition"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col space-y-4 mt-8">
                {menuList.map(menu => {
                  const isActive = path === menu.path
                  return (
                    <Link
                      href={menu.path}
                      key={menu.id}
                      className={`flex items-center p-4 rounded-lg text-lg font-medium transition
                        ${isActive ? "bg-white/20 text-white" : "text-white hover:bg-white/10"}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <menu.icon size={24} />
                      <span className="ml-4">{menu.name}</span>
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        )}

        {/* Main Content - Added transition for smooth background changes */}
        <main className={`flex-1 overflow-y-auto ${isStandalone ? 'h-[100dvh]' : ''} pt-4 md:pt-0 transition-colors duration-300`}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout