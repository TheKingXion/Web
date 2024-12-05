import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    { 
      name: "Básico", 
      price: "99€", 
      description: "Perfecto para pequeños negocios",
      features: ["Diseño Responsivo", "Hasta 5 páginas", "Formulario de Contacto", "SEO Básico"]
    },
    { 
      name: "Profesional", 
      price: "199€", 
      description: "Ideal para empresas en crecimiento",
      features: ["Todo lo del plan Básico", "Hasta 10 páginas", "Blog integrado", "Análisis Avanzado", "Soporte Premium"]
    },
    { 
      name: "Empresarial", 
      price: "Personalizado", 
      description: "Soluciones a medida para grandes empresas",
      features: ["Todo lo del plan Profesional", "Páginas ilimitadas", "Integración de APIs", "Consultoría Estratégica", "Soporte 24/7"]
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 md:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-10 text-center">Planes y Precios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className={`flex flex-col ${index === 1 ? 'border-primary shadow-lg scale-105' : ''}`}>
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant={index === 1 ? "default" : "outline"} className="w-full">
                Elegir Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

