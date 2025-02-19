import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PropertyCardProps {
  id: string
  title: string
  price: string
  imageUrl: string
  bedrooms: number
  bathrooms: number
  area: string
}

export function PropertyCard({ id, title, price, imageUrl, bedrooms, bathrooms, area }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{title}</CardTitle>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{bedrooms} hab.</span>
          <span>{bathrooms} baños</span>
          <span>{area}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <span className="text-lg font-bold">{price}</span>
        <Button asChild>
          <Link href={`/property/${id}`}>Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

