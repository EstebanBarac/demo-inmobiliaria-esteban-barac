import Image from "next/image"
import { Button } from "@/components/ui/button"

interface AgentInfoProps {
  name: string
  image: string
  phone: string
  email: string
}

export function AgentInfo({ name, image, phone, email }: AgentInfoProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
      <Image src={image || "/placeholder.svg"} alt={name} width={80} height={80} className="rounded-full" />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-muted-foreground">{phone}</p>
        <p className="text-muted-foreground">{email}</p>
        <Button className="mt-2" variant="outline">
          Contactar agente
        </Button>
      </div>
    </div>
  )
}

