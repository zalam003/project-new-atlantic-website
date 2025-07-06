'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div id="contact" className="py-8 sm:py-10 bg-primary-section textile-pattern-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get Started Today
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Ready to discuss your garment sourcing needs? Our team is here to help you bring your vision to life.
          </p>
        </div>
        
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold leading-8 text-gray-900">Contact Information</h3>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="text-base leading-7 text-gray-600">
                  <strong>Address:</strong><br />
                  195 Mattison Drive<br />
                  Concord, MA 01742, USA
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd className="text-base leading-7 text-gray-600">
                  <strong>Email:</strong><br />
                  ziaulhasan1966@icloud.com<br />
                  zia@newatlantic.biz
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd className="text-base leading-7 text-gray-600">
                  <strong>Phone:</strong><br />
                  +1 978-505-6547 (USA)
                </dd>
              </div>
            </dl>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                Company
              </label>
              <div className="mt-2">
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
