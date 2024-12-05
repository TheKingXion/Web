'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-4 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">InnovateSell</Link>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 md:left-auto bg-background md:bg-transparent w-full md:w-auto p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 shadow-md md:shadow-none z-50`}>
          <Link href="#features" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Características</Link>
          <Link href="#showcase" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Proyectos</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Precios</Link>
          <Button variant="default" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(false)}>Contactar</Button>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="default" size="sm" className="hidden md:inline-flex">Contactar</Button>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

