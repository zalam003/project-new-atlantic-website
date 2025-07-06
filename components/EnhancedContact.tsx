'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  company: string
  title: string
  phone: string
  projectType: string
  orderVolume: string
  timeline: string
  budget: string
  message: string
}

export default function EnhancedContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    projectType: '',
    orderVolume: '',
    timeline: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement actual form submission to CRM/email service
    console.log('Enhanced form submitted:', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      title: '',
      phone: '',
      projectType: '',
      orderVolume: '',
      timeline: '',
      budget: '',
      message: ''
    })
    
    setIsSubmitting(false)
    alert('Thank you! We will contact you within 24 hours to discuss your project.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div id="contact" className="py-8 sm:py-10 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Get Your Quote</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Start Your Project Today
          </p>
          <p className="mt-3 text-lg leading-8 text-gray-600">
            Tell us about your garment sourcing needs and we'll provide a detailed quote within 24 hours.
          </p>
        </div>
        
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Value Proposition */}
          <div className="lg:pr-8">
            <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-6">
              Why Choose New Atlantic Global?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-gray-900">10+ Years Experience</h4>
                  <p className="text-gray-600">Established in 2014 with proven track record in garment sourcing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-gray-900">End-to-End Solutions</h4>
                  <p className="text-gray-600">From design concept to final delivery - complete supply chain management</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-gray-900">Quality Assurance</h4>
                  <p className="text-gray-600">Rigorous quality control and social compliance standards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-base font-semibold text-gray-900">Competitive Pricing</h4>
                  <p className="text-gray-600">Direct manufacturer relationships for optimal cost efficiency</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary-900 mb-2">Contact Information</h4>
              <div className="space-y-2 text-sm text-primary-700">
                <p><strong>Address:</strong> 195 Mattison Drive, Concord, MA 01742, USA</p>
                <p><strong>Phone:</strong> +1 978-505-6547</p>
                <p><strong>Email:</strong> zia@newatlantic.biz</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Enhanced Quote Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                    Company Name *
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
                
                <div>
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Job Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium leading-6 text-gray-900">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select project type...</option>
                  <option value="casual-wear">Casual Wear</option>
                  <option value="active-wear">Active Wear</option>
                  <option value="outerwear">Outerwear</option>
                  <option value="workwear">Workwear</option>
                  <option value="mixed">Mixed Categories</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="orderVolume" className="block text-sm font-medium leading-6 text-gray-900">
                    Expected Order Volume
                  </label>
                  <select
                    id="orderVolume"
                    name="orderVolume"
                    value={formData.orderVolume}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select volume...</option>
                    <option value="100-500">100-500 pieces</option>
                    <option value="500-1000">500-1,000 pieces</option>
                    <option value="1000-5000">1,000-5,000 pieces</option>
                    <option value="5000-10000">5,000-10,000 pieces</option>
                    <option value="10000+">10,000+ pieces</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium leading-6 text-gray-900">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP (Rush Order)</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6+-months">6+ months</option>
                    <option value="ongoing">Ongoing Partnership</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium leading-6 text-gray-900">
                  Budget Range (Optional)
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Select budget range...</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k+">$500,000+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="Please describe your project requirements, specific garment types, materials, quantities, and any special specifications..."
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending Request...' : 'Get Free Quote'}
                </button>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Your information will only be used to provide your quote and will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
