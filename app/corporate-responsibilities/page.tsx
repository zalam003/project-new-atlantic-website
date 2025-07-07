import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Corporate Responsibilities | Social Compliance & Worker Welfare',
  description: 'New Atlantic Global\'s commitment to social compliance, worker safety, and ethical manufacturing practices in the garment industry.',
  keywords: 'social compliance, worker safety, ethical manufacturing, corporate responsibility, garment industry compliance, worker welfare',
}

const commitments = [
  {
    title: 'Worker Health & Safety',
    description: 'We prioritize the health, security and social aspects of labor as one of our paramount concerns.',
    icon: '🛡️',
    details: [
      'Safe working environment standards',
      'Regular health and safety training',
      'Proper protective equipment provision',
      'Emergency response procedures',
      'Regular facility safety audits'
    ]
  },
  {
    title: 'Social Compliance',
    description: 'Following up with social compliance throughout our supply chain and manufacturing partners.',
    icon: '✅',
    details: [
      'Fair labor practices enforcement',
      'No child labor policies',
      'Fair wage standards',
      'Reasonable working hours',
      'Freedom of association rights'
    ]
  },
  {
    title: 'Workforce Development',
    description: 'We believe our working force is our assets and our main concern is to develop their skills.',
    icon: '🎓',
    details: [
      'Continuous skills training programs',
      'Career advancement opportunities',
      'Technical skills development',
      'Leadership training initiatives',
      'Performance recognition programs'
    ]
  },
  {
    title: 'Quality Assurance',
    description: 'Maintaining the quality of products without compromising our commitment to ethical practices.',
    icon: '⭐',
    details: [
      'Rigorous quality control standards',
      'Regular factory inspections',
      'Compliance with international standards',
      'Continuous improvement processes',
      'Customer satisfaction guarantee'
    ]
  }
]

const complianceStandards = [
  {
    standard: 'WRAP (Worldwide Responsible Accredited Production)',
    description: 'Committed to safe, lawful, humane and ethical manufacturing',
    status: 'Certified'
  },
  {
    standard: 'OEKO-TEX Standard 100',
    description: 'Textile products tested for harmful substances',
    status: 'Compliant'
  },
  {
    standard: 'BSCI (Business Social Compliance Initiative)',
    description: 'Improving working conditions in global supply chains',
    status: 'Monitored'
  },
  {
    standard: 'Fair Labor Association (FLA)',
    description: 'Promoting adherence to international labor standards',
    status: 'Aligned'
  }
]

const socialWelfarePrograms = [
  {
    program: 'Health Care Access',
    description: 'Providing comprehensive healthcare support for all workers',
    benefits: ['Medical insurance coverage', 'Regular health check-ups', 'Emergency medical assistance', 'Mental health support']
  },
  {
    program: 'Education & Training',
    description: 'Investing in continuous education and skill development',
    benefits: ['Technical skills training', 'Language learning programs', 'Safety training certification', 'Leadership development']
  },
  {
    program: 'Financial Wellness',
    description: 'Supporting workers\' financial stability and growth',
    benefits: ['Fair wage policies', 'Performance bonuses', 'Financial literacy programs', 'Emergency financial assistance']
  },
  {
    program: 'Work-Life Balance',
    description: 'Promoting healthy work-life balance for all employees',
    benefits: ['Reasonable working hours', 'Paid time off', 'Family support programs', 'Recreation facilities']
  }
]

export default function CorporateResponsibilities() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/misc/moisture_control_room-1.jpg"
            alt="Quality Control and Worker Safety"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Corporate
              <span className="text-blue-400 block">Responsibilities</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-blue-100">
              Our commitment to social compliance, worker welfare, and ethical manufacturing 
              practices that prioritize people and quality in everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Our Commitments Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Commitments
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that supplying garments involves significant backward linkages and supply chain 
              responsibility, including social compliance, health and safety of workers, and quality maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-4 text-center">{commitment.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{commitment.title}</h3>
                <p className="text-gray-600 mb-4 text-sm text-center">{commitment.description}</p>
                <ul className="space-y-2">
                  {commitment.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="text-green-500 mr-2 text-xs mt-1">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Compliance Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Compliance Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We adhere to international standards and maintain certifications that ensure 
              ethical manufacturing and quality production processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{item.standard}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === 'Certified' ? 'bg-green-100 text-green-800' :
                    item.status === 'Compliant' ? 'bg-blue-100 text-blue-800' :
                    item.status === 'Monitored' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-600 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Improvement Commitment
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              We are committed to continuous improvement of our business and production processes, 
              minimizing costs while maximizing worker welfare and product quality.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Request Compliance Documentation
            </Link>
          </div>
        </div>
      </div>

      {/* Social Welfare Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Social Welfare Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Considering the present global socio-economic situation, we have established a very balanced 
              supply chain that addresses health, security and social aspects of labor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialWelfarePrograms.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.program}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">Key Benefits:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2 text-xs">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workforce Development */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
                Workforce Development Initiative
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                "We believe our working force is our assets and our main concern is to develop the skills of our working force."
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Skills Assessment & Training</h3>
                    <p className="text-gray-600 text-sm">Regular evaluation and targeted training programs to enhance worker capabilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Career Advancement Opportunities</h3>
                    <p className="text-gray-600 text-sm">Clear pathways for professional growth and leadership development.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Performance Recognition</h3>
                    <p className="text-gray-600 text-sm">Acknowledging and rewarding excellence in work performance and dedication.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/misc/cutting-1.jpg"
                alt="Skilled Workers in Training"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-semibold text-lg">Skilled Workforce Development</p>
                <p className="text-sm opacity-90">Investing in our people's growth and success</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <blockquote className="text-xl text-gray-600 italic mb-8 leading-relaxed">
            "Our Mission is to provide a complete solution for our clients beginning from sample making 
            to manufacturing and shipping the garments to our clients warehouse without compromising with quality."
          </blockquote>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ethical Partnership</h3>
              <p className="text-gray-600 text-sm">Building trust through transparent and ethical business practices</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sustainable Growth</h3>
              <p className="text-gray-600 text-sm">Promoting sustainable practices for long-term success</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Excellence</h3>
              <p className="text-gray-600 text-sm">Never compromising on quality while maintaining ethical standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Partner with a Responsible Manufacturer
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose New Atlantic Global for garment manufacturing that prioritizes worker welfare, 
            social compliance, and quality excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Start Partnership Discussion
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}