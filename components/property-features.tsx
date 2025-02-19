import { Check } from "lucide-react"

interface PropertyFeaturesProps {
  features: string[]
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check className="h-5 w-5 text-primary" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  )
}

