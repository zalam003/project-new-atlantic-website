'use client'

import { useState, useEffect } from 'react'

interface FormData {
  name: string
  email: string
  company: string
  title: string
  countryCode: string
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
    countryCode: '+1',
    phone: '',
    projectType: '',
    orderVolume: '',
    timeline: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')

  // Pre-populate project type based on URL parameter
  useEffect(() => {
    const checkForProjectType = () => {
      if (typeof window !== 'undefined') {
        console.log('Current URL:', window.location.href)
        console.log('Current hash:', window.location.hash)
        
        // Check both regular URL params and hash-based params
        let projectType = null
        
        // First try regular URL search params
        const urlParams = new URLSearchParams(window.location.search)
        projectType = urlParams.get('projectType')
        console.log('Project type from search params:', projectType)
        
        // If not found, try hash-based params (e.g., #contact?projectType=casual-wear)
        if (!projectType && window.location.hash) {
          const hashParts = window.location.hash.split('?')
          console.log('Hash parts:', hashParts)
          if (hashParts.length > 1) {
            const hashParams = new URLSearchParams(hashParts[1])
            projectType = hashParams.get('projectType')
            console.log('Project type from hash params:', projectType)
          }
        }
        
        if (projectType) {
          console.log('Setting project type from URL:', projectType)
          setFormData(prev => ({
            ...prev,
            projectType: projectType
          }))
        }
      }
    }

    // Check on initial load with a small delay to ensure component is mounted
    const timer = setTimeout(() => {
      checkForProjectType()
    }, 100)

    // Listen for hash changes (when user clicks different service cards)
    const handleHashChange = () => {
      checkForProjectType()
    }

    window.addEventListener('hashchange', handleHashChange)

    // Cleanup
    return () => {
      clearTimeout(timer)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email before submission
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email)) {
      setEmailError('Please enter a valid email address with "@" symbol')
      return
    }
    
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
      countryCode: '+1',
      phone: '',
      projectType: '',
      orderVolume: '',
      timeline: '',
      budget: '',
      message: ''
    })
    
    setIsSubmitting(false)
    setEmailError('')
    alert('Thank you! We will contact you within 24 hours to discuss your project.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    setFormData({
      ...formData,
      [name]: value
    })

    // Real-time email validation
    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (value && !emailRegex.test(value)) {
        setEmailError('Please enter a valid email address with "@" symbol')
      } else {
        setEmailError('')
      }
    }
  }

  return (
    <div id="contact" className="py-8 sm:py-10 bg-primary-section textile-pattern-alt">
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
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title="Please enter a valid email address (example: name@company.com)"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    className={`mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ${
                      emailError ? 'ring-red-300 focus:ring-red-600' : 'ring-gray-300 focus:ring-primary-600'
                    } placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-600">{emailError}</p>
                  )}
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
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2 flex">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="rounded-l-md border-0 bg-gray-50 py-2 pl-3 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+31">🇳🇱 +31</option>
                    <option value="+32">🇧🇪 +32</option>
                    <option value="+41">🇨🇭 +41</option>
                    <option value="+43">🇦🇹 +43</option>
                    <option value="+45">🇩🇰 +45</option>
                    <option value="+46">🇸🇪 +46</option>
                    <option value="+47">🇳🇴 +47</option>
                    <option value="+358">🇫🇮 +358</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+966">🇸🇦 +966</option>
                    <option value="+852">🇭🇰 +852</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+60">🇲🇾 +60</option>
                    <option value="+66">🇹🇭 +66</option>
                    <option value="+84">🇻🇳 +84</option>
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+92">🇵🇰 +92</option>
                    <option value="+94">🇱🇰 +94</option>
                    <option value="+62">🇮🇩 +62</option>
                    <option value="+63">🇵🇭 +63</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+64">🇳🇿 +64</option>
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+52">🇲🇽 +52</option>
                    <option value="+54">🇦🇷 +54</option>
                    <option value="+56">🇨🇱 +56</option>
                    <option value="+57">🇨🇴 +57</option>
                    <option value="+51">🇵🇪 +51</option>
                    <option value="+27">🇿🇦 +27</option>
                    <option value="+20">🇪🇬 +20</option>
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+254">🇰🇪 +254</option>
                    <option value="+212">🇲🇦 +212</option>
                    <option value="+216">🇹🇳 +216</option>
                    <option value="+213">🇩🇿 +213</option>
                    <option value="+90">🇹🇷 +90</option>
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    className="flex-1 rounded-r-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
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
