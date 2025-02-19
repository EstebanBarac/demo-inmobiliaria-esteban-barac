import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Demo Inmobiliaria",
  description: "Una demo visual de propiedades inmobiliarias",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Demo Inmobiliaria
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:text-primary">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Propiedades
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
            <Button>Iniciar sesión</Button>
          </div>
        </header>
        {children}
        <footer className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Demo Inmobiliaria</h3>
                <p className="text-muted-foreground">Encontrando hogares perfectos desde 2024</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Propiedades
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Agentes
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Ubicaciones
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-primary">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                <p className="text-muted-foreground">123 Calle Principal, Ciudad, País</p>
                <p className="text-muted-foreground">+1 234 567 890</p>
                <p className="text-muted-foreground">info@demoinmobiliaria.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-primary">
                    Facebook
                  </a>
                  <a href="#" className="hover:text-primary">
                    Twitter
                  </a>
                  <a href="#" className="hover:text-primary">
                    Instagram
                  </a>
                  <a href="#" className="hover:text-primary">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
              <p>&copy; 2024 Demo Inmobiliaria. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

