"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyGalleryProps {
  images: string[]
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="aspect-[16/9] relative overflow-hidden rounded-lg">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`Property image ${currentImage + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <Button variant="outline" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2" onClick={prevImage}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2" onClick={nextImage}>
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <Button
            key={index}
            variant={index === currentImage ? "default" : "outline"}
            size="sm"
            onClick={() => setCurrentImage(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}

