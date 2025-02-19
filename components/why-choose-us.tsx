import { CheckCircle, ThumbsUp, Clock, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Propiedades verificadas",
    description: "Todas nuestras propiedades son cuidadosamente verificadas para garantizar la mejor calidad.",
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: "Servicio de calidad",
    description: "Nuestro equipo de expertos está dedicado a proporcionar un servicio excepcional.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Disponibilidad 24/7",
    description: "Estamos disponibles en todo momento para atender tus necesidades inmobiliarias.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Satisfacción garantizada",
    description: "Tu satisfacción es nuestra prioridad número uno en cada transacción.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

