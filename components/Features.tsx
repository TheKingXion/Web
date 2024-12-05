import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Smartphone, Globe } from 'lucide-react'

export default function Features() {
  const features = [
    { icon: <Zap className="h-8 w-8 text-primary" />, title: "Rápido y Eficiente", description: "Soluciones optimizadas para un rendimiento excepcional" },
    { icon: <Shield className="h-8 w-8 text-primary" />, title: "Seguro y Confiable", description: "Implementamos las mejores prácticas de seguridad" },
    { icon: <Smartphone className="h-8 w-8 text-primary" />, title: "Diseño Responsivo", description: "Experiencias perfectas en todos los dispositivos" },
    { icon: <Globe className="h-8 w-8 text-primary" />, title: "Alcance Global", description: "Soluciones preparadas para un mercado internacional" },
  ]

  return (
    <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/50">
      <h2 className="text-3xl font-bold mb-10 text-center">Nuestras Características</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                {feature.icon}
                <span className="ml-2">{feature.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

