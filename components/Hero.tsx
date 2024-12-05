'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const words = ['Innovadoras', 'Efectivas', 'Únicas']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
        Creamos Soluciones Digitales
        <span className="text-primary block mt-2">
          {words[currentWord]}
        </span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
        Transformamos ideas en experiencias digitales que impulsan tu negocio al siguiente nivel.
      </p>
      <Button size="lg" className="animate-bounce">
        Descubre Cómo <ArrowRight className="ml-2" />
      </Button>
    </section>
  )
}

