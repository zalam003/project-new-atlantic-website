export default function BusinessImpact() {
  const metrics = [
    {
      title: "Cost Savings",
      value: "30-50%",
      description: "Typical reduction in sourcing costs",
      icon: "💰"
    },
    {
      title: "Time to Market",
      value: "40%",
      description: "Faster product delivery",
      icon: "⚡"
    },
    {
      title: "Quality Control",
      value: "99.5%",
      description: "Defect-free delivery rate",
      icon: "✅"
    },
    {
      title: "Client Retention",
      value: "95%+",
      description: "Long-term partnerships",
      icon: "🤝"
    }
  ]

  const advantages = [
    {
      title: "Direct Manufacturer Access",
      description: "Skip middlemen and reduce costs by working directly with vetted manufacturers",
      impact: "Save 20-30% on production costs"
    },
    {
      title: "End-to-End Quality Control",
      description: "Complete oversight from design through delivery ensures consistent quality",
      impact: "Reduce defects by 85%"
    },
    {
      title: "Flexible Order Volumes",
      description: "From small batches to large orders, we scale with your business needs",
      impact: "No minimum order restrictions"
    },
    {
      title: "Social Compliance Guarantee",
      description: "All partners meet international labor and environmental standards",
      impact: "100% ethical sourcing"
    }
  ]

  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Business Impact</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Measurable Results for Your Business
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See why leading brands choose New Atlantic Global for their sourcing needs
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center text-center">
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
        <div className="mx-auto mt-24 max-w-7xl">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 text-center mb-12">
            Your Competitive Edge
          </h3>
          <div className="grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {advantage.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                  {advantage.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Calculator CTA */}
        <div className="mx-auto mt-16 max-w-2xl text-center">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-primary-900 mb-4">
              Calculate Your Potential Savings
            </h3>
            <p className="text-primary-700 mb-6">
              See how much you could save by switching to New Atlantic Global for your garment sourcing needs.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
            >
              Get Your Custom ROI Analysis
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
