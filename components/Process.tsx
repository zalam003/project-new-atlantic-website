const steps = [
  {
    id: '01',
    name: 'Research & Development',
    description: 'Product development, fabric selection, and trend analysis to meet market demands.'
  },
  {
    id: '02',
    name: 'Design & Sampling',
    description: 'Creating samples and size sets with attention to detail and client specifications.'
  },
  {
    id: '03',
    name: 'Factory Selection',
    description: 'Choosing the right manufacturing partners based on capability, quality, and compliance.'
  },
  {
    id: '04',
    name: 'Quality Control',
    description: 'Comprehensive quality assurance throughout the production process.'
  },
  {
    id: '05',
    name: 'Social Compliance',
    description: 'Ensuring worker health, safety, and ethical manufacturing practices.'
  },
  {
    id: '06',
    name: 'Timely Delivery',
    description: 'Coordinating shipping and logistics to meet your deadlines and requirements.'
  }
]

export default function Process() {
  return (
    <div id="process" className="py-8 sm:py-10 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Our Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Concept to Delivery
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            Our comprehensive approach ensures quality at every step of the manufacturing process.
          </p>
        </div>
        
        <div className="mx-auto mt-8 max-w-2xl sm:mt-10 lg:mt-12 lg:max-w-4xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
            {steps.map((step, stepIdx) => (
              <div key={step.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                    <span className="text-white font-bold text-sm">{step.id}</span>
                  </div>
                  {step.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Supporting Excellence Throughout
            </h3>
            <p className="text-gray-600 mb-4">
              We support our clients with a good set of sampling collection before starting every season. 
              Our sampling development team keeps a keen watch on the styles produced in the industry to 
              upgrade our clients accordingly.
            </p>
            <p className="text-gray-600">
              Our R&D team also strives for continuous improvement of business and production process for 
              minimizing costs while maintaining the highest quality standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
