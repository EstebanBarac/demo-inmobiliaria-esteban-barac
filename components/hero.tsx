import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center">
      <Image src="/hero.jpg" alt="Luxury home" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Encuentra tu hogar ideal</h1>
        <p className="text-xl mb-8">Descubre las mejores propiedades en las ubicaciones más exclusivas</p>
        <Button size="lg">Explorar propiedades</Button>
      </div>
    </div>
  )
}

