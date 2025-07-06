const services = [
  {
    name: 'Casual Wear',
    description: 'Complete sourcing solutions for everyday clothing including t-shirts, jeans, shirts, and casual dresses.',
    features: ['Quality fabric selection', 'Modern styling', 'Competitive pricing', 'Fast turnaround']
  },
  {
    name: 'Active Wear',
    description: 'Performance clothing for sports and fitness including activewear, athleisure, and workout gear.',
    features: ['Moisture-wicking fabrics', 'Flexible designs', 'Durability testing', 'Size optimization']
  },
  {
    name: 'Outerwear',
    description: 'Protective and fashionable outer garments including jackets, coats, and weather-resistant clothing.',
    features: ['Weather protection', 'Insulation options', 'Style variety', 'Seasonal collections']
  },
  {
    name: 'Workwear',
    description: 'Professional and industrial clothing including uniforms, safety wear, and corporate apparel.',
    features: ['Safety compliance', 'Durability focus', 'Professional appearance', 'Custom branding']
  }
]

export default function Services() {
  return (
    <div id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Complete Garment Categories
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We specialize in four main categories of garment manufacturing, each with dedicated expertise 
            and quality standards to meet your specific needs.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary-600">
                    <div className="h-6 w-6 text-white font-bold">
                      {service.name.charAt(0)}
                    </div>
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 bg-primary-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
