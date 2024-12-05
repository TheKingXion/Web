import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CTA() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para Impulsar tu Negocio?</h2>
        <p className="text-xl mb-8">Únete a nuestra lista de espera y sé el primero en conocer nuestras ofertas exclusivas</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="max-w-xs bg-primary-foreground text-primary"
          />
          <Button variant="secondary">Unirme Ahora</Button>
        </form>
      </div>
    </section>
  )
}

