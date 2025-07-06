import Image from 'next/image'

export default function BusinessImpact() {
  const metrics = [
    {
      title: "Cost Savings",
      value: "30-50%",
      description: "Typical reduction in sourcing costs",
      icon: "💰",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Time to Market",
      value: "40%",
      description: "Faster product delivery",
      icon: "⚡",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Quality Control",
      value: "99.5%",
      description: "Defect-free delivery rate",
      icon: "✅",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Client Retention",
      value: "95%+",
      description: "Long-term partnerships",
      icon: "🤝",
      color: "bg-orange-50 text-orange-600"
    }
  ]

  const advantages = [
    {
      title: "Direct Manufacturer Access",
      description: "Skip middlemen and reduce costs by working directly with vetted manufacturers",
      impact: "Save 20-30% on production costs",
      image: "/images/misc/cutting.jpg"
    },
    {
      title: "End-to-End Quality Control",
      description: "Complete oversight from design through delivery ensures consistent quality",
      impact: "Reduce defects by 85%",
      image: "/images/misc/moisture_control_room.jpg"
    },
    {
      title: "Flexible Order Volumes",
      description: "From small batches to large orders, we scale with your business needs",
      impact: "No minimum order restrictions",
      image: "/images/misc/store.jpg"
    },
    {
      title: "Social Compliance Guarantee",
      description: "All partners meet international labor and environmental standards",
      impact: "100% ethical sourcing",
      image: "/images/misc/IMG_5247-2.jpg"
    }
  ]

  return (
    <div className="py-8 sm:py-10 bg-secondary-section textile-pattern-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Business Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Measurable Results for Your Business
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            See why leading brands choose New Atlantic Global for their sourcing needs
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <dt className="text-4xl mb-4">{metric.icon}</dt>
                <dd className="text-3xl font-bold tracking-tight text-primary-600 sm:text-4xl">
                  {metric.value}
                </dd>
                <dt className="text-base font-semibold leading-7 text-gray-900 mt-2">
                  {metric.title}
                </dt>
                <dd className="text-sm text-gray-600 mt-1">
                  {metric.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Competitive Advantages */}
        <div className="mx-auto mt-10 max-w-7xl">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 text-center mb-6">
            Your Competitive Edge
          </h3>
          <div className="grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-44">
                  <Image
                    src={advantage.image}
                    alt={advantage.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-center">
                      <span className="text-overlay-primary text-sm block drop-shadow-lg">{advantage.title}</span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-600/90 text-white mt-1 drop-shadow-md">
                        {advantage.impact}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator CTA */}
        <div className="mx-auto mt-8 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-blue-600 p-6 shadow-xl">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/misc/section01-rz.jpg"
                alt="Manufacturing Background"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Calculate Your Potential Savings
              </h3>
              <p className="text-blue-100 mb-4 leading-relaxed max-w-2xl mx-auto text-sm">
                See how much you could save by switching to New Atlantic Global for your garment sourcing needs. 
                Our direct manufacturer relationships and efficient processes deliver measurable cost reductions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                >
                  Get Your Custom ROI Analysis
                </a>
                <a 
                  href="/services" 
                  className="inline-flex items-center px-5 py-2 border border-white/30 text-sm font-medium rounded-md text-white hover:bg-white/10 transition-colors duration-200"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
