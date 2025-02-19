import { Hero } from "@/components/hero"
import { QuickSearch } from "@/components/quick-search"
import { WhyChooseUs } from "@/components/why-choose-us"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"

const properties = [
  {
    id: "1",
    title: "Casa moderna con vista al mar",
    price: "$1,250,000",
    imageUrl: "/casas/casa-1-1.webp",
    bedrooms: 3,
    bathrooms: 2,
    area: "200 m²",
  },
  {
    id: "2",
    title: "Apartamento céntrico",
    price: "$750,000",
    imageUrl: "/casas/casa-2-1.webp",
    bedrooms: 2,
    bathrooms: 1,
    area: "80 m²",
  },
  {
    id: "3",
    title: "Villa de lujo con piscina",
    price: "$450,000",
    imageUrl: "/casas/casa-3-1.webp",
    bedrooms: 5,
    bathrooms: 4,
    area: "350 m²",
  },
  // Añade más propiedades según sea necesario
]

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickSearch />
      <WhyChooseUs />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Propiedades Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg">Ver todas las propiedades</Button>
          </div>
        </div>
      </section>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para encontrar tu hogar ideal?</h2>
          <p className="mb-8 text-lg">Nuestros expertos están aquí para ayudarte en cada paso del camino.</p>
          <Button size="lg" variant="secondary">
            Contáctanos ahora
          </Button>
        </div>
      </section>
    </main>
  )
}

