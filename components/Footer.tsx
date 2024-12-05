import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 lg:px-8 bg-muted">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">InnovateSell</h3>
          <p className="text-sm text-muted-foreground">Transformando ideas en soluciones digitales innovadoras.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2">
            <li><Link href="#features" className="text-sm hover:text-primary">Características</Link></li>
            <li><Link href="#showcase" className="text-sm hover:text-primary">Proyectos</Link></li>
            <li><Link href="#pricing" className="text-sm hover:text-primary">Precios</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <p className="text-sm text-muted-foreground">info@innovatesell.com</p>
          <p className="text-sm text-muted-foreground">+34 123 456 789</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></Link>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} InnovateSell. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

