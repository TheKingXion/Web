'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Showcase() {
  const [activeProject, setActiveProject] = useState(0)
  const projects = [
    { title: "E-commerce Innovador", description: "Plataforma de compras en línea con IA integrada" },
    { title: "App de Productividad", description: "Gestión de tareas con análisis predictivo" },
    { title: "Portal Educativo", description: "Aprendizaje personalizado con realidad aumentada" },
  ]

  return (
    <section id="showcase" className="py-20 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-10 text-center">Nuestros Proyectos Destacados</h2>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="lg:w-1/2">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={`/placeholder.svg?height=400&width=600`}
                alt={projects[activeProject].title}
                width={600}
                height={400}
                className="w-full h-auto transition-opacity duration-500"
              />
            </CardContent>
          </Card>
        </div>
        <div className="lg:w-1/2 space-y-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`cursor-pointer transition-all duration-300 ${activeProject === index ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
              onClick={() => setActiveProject(index)}
            >
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
          <Button variant="outline" className="w-full">Ver Todos los Proyectos</Button>
        </div>
      </div>
    </section>
  )
}

