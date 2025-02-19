import { PropertyGallery } from "@/components/property-gallery"
import { PropertyFeatures } from "@/components/property-features"
import { AgentInfo } from "@/components/agent-info"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"
import { notFound } from "next/navigation"

// Datos de ejemplo para tres propiedades
const propertiesData = {
  "1": {
    id: "1",
    title: "Villa de lujo con vistas al mar",
    price: "$1,250,000",
    description:
      "Espectacular villa de lujo con impresionantes vistas al mar Mediterráneo. Esta propiedad ofrece un estilo de vida exclusivo con acabados de alta calidad, amplios espacios y una ubicación privilegiada.",
    images: [
      "/casas/casa-1-1.webp",
      "/casas/casa-1-2.webp",
      "/casas/casa-1-3.webp",
      "/casas/casa-1-4.webp",
    ],
    bedrooms: 5,
    bathrooms: 4,
    area: "450 m²",
    location: "Costa del Sol, Málaga",
    features: [
      "Piscina infinita",
      "Terraza con vistas panorámicas",
      "Cocina de diseño italiano",
      "Gimnasio privado",
      "Bodega climatizada",
      "Sistema de domótica",
      "Garaje para 3 coches",
      "Jardín tropical",
    ],
    agent: {
      name: "María García",
      image: "/agente.jpg",
      phone: "+34 123 456 789",
      email: "maria@demoinmobiliaria.com",
    },
  },
  "2": {
    id: "2",
    title: "Casa moderna en el centro de la ciudad",
    price: "$750,000",
    description:
      "Espectacular ático de diseño moderno ubicado en el corazón de la ciudad. Disfrute de impresionantes vistas urbanas desde su amplia terraza privada. Acabados de lujo y comodidades de primera clase.",
    images: [
      "/casas/casa-2-1.webp",
      "/casas/casa-2-2.webp",
      "/casas/casa-2-3.webp",
      "/casas/casa-2-4.webp",
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: "200 m²",
    location: "Centro, Madrid",
    features: [
      "Terraza privada con jacuzzi",
      "Vistas panorámicas de la ciudad",
      "Cocina de concepto abierto",
      "Suelos de madera noble",
      "Sistema de sonido integrado",
      "Acceso directo con ascensor",
      "Plaza de garaje incluida",
      "Zona de barbacoa",
    ],
    agent: {
      name: "María García",
      image: "/agente.jpg",
      phone: "+34 123 456 789",
      email: "maria@demoinmobiliaria.com",
    },
  },
  "3": {
    id: "3",
    title: "Casa rural con encanto",
    price: "$495,000",
    description:
      "Encantadora casa rural completamente restaurada que combina el encanto tradicional con comodidades modernas. Rodeada de naturaleza, ofrece un refugio perfecto para los amantes de la tranquilidad.",
    images: [
      "/casas/casa-3-1.webp",
      "/casas/casa-3-2.webp",
      "/casas/casa-3-3.webp",
      "/casas/casa-3-4.webp",
    ],
    bedrooms: 4,
    bathrooms: 3,
    area: "300 m²",
    location: "Sierra de Gredos, Ávila",
    features: [
      "Chimenea de leña",
      "Vigas de madera originales",
      "Huerto ecológico",
      "Pozo de agua natural",
      "Paneles solares",
      "Bodega subterránea",
      "Horno de leña exterior",
      "Vistas a la montaña",
    ],
    agent: {
      name: "María García",
      image: "/agente.jpg",
      phone: "+34 123 456 789",
      email: "maria@demoinmobiliaria.com",
    },
  },
}

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const property = propertiesData[params.id as keyof typeof propertiesData]

  if (!property) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{property.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <PropertyGallery images={property.images} />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
            <p className="text-muted-foreground">{property.description}</p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Características</h2>
            <PropertyFeatures features={property.features} />
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{property.price}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <span>{property.bedrooms} habitaciones</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <span>{property.bathrooms} baños</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="h-5 w-5 text-muted-foreground" />
                  <span>{property.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>{property.location}</span>
                </div>
              </div>
              <Button className="w-full mb-4">Solicitar visita</Button>
              <AgentInfo {...property.agent} />
            </CardContent>
          </Card>
        </div>
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Propiedades similares</h2>
        {/* Aquí puedes añadir un componente que muestre propiedades similares */}
      </section>
      <section className="mt-12 bg-muted p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">¿Interesado en esta propiedad?</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Nombre" className="p-2 rounded border" />
          <input type="email" placeholder="Email" className="p-2 rounded border" />
          <input type="tel" placeholder="Teléfono" className="p-2 rounded border" />
          <input type="text" placeholder="Asunto" className="p-2 rounded border" />
          <textarea placeholder="Mensaje" className="p-2 rounded border md:col-span-2" rows={4}></textarea>
          <Button className="md:col-span-2">Enviar mensaje</Button>
        </form>
      </section>
    </main>
  )
}

