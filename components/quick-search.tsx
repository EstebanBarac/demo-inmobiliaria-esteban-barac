import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function QuickSearch() {
  return (
    <div className="bg-muted py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Búsqueda rápida</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Input className="w-full md:w-64" placeholder="Ubicación" />
          <Select>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">Casa</SelectItem>
              <SelectItem value="apartment">Apartamento</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full md:w-40">
              <SelectValue placeholder="Precio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-100000">$0 - $100,000</SelectItem>
              <SelectItem value="100000-250000">$100,000 - $250,000</SelectItem>
              <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
              <SelectItem value="500000+">$500,000+</SelectItem>
            </SelectContent>
          </Select>
          <Button>Buscar</Button>
        </div>
      </div>
    </div>
  )
}

