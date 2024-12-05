'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const testimonials = [
    { name: "María García", role: "CEO, TechStart", content: "InnovateSell transformó nuestra presencia en línea. Nuestras ventas se han duplicado desde que lanzamos el nuevo sitio." },
    { name: "Carlos Rodríguez", role: "Fundador, EduFuture", content: "El equipo de InnovateSell entendió perfectamente nuestra visión. El resultado superó todas nuestras expectativas." },
    { name: "Ana Martínez", role: "Directora de Marketing, GreenEco", content: "La atención al detalle y la creatividad de InnovateSell nos ayudaron a destacar en un mercado muy competitivo." },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
      <h2 className="text-3xl font-bold mb-10 text-center">Lo Que Dicen Nuestros Clientes</h2>
      <div className="max-w-3xl mx-auto">
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`transition-opacity duration-500 ${currentTestimonial === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
              >
                <p className="text-lg mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Image
                    src={`/placeholder.svg?height=50&width=50`}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

