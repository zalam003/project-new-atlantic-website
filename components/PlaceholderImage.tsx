import Image from 'next/image'

interface PlaceholderImageProps {
  width: number
  height: number
  category: 'products' | 'logos' | 'hero' | 'process' | 'team'
  text?: string
  className?: string
}

export default function PlaceholderImage({ 
  width, 
  height, 
  category, 
  text, 
  className = '' 
}: PlaceholderImageProps) {
  const bgColor = {
    products: 'bg-blue-100',
    logos: 'bg-gray-100', 
    hero: 'bg-gradient-to-r from-primary-100 to-blue-100',
    process: 'bg-green-100',
    team: 'bg-purple-100'
  }[category]

  const textColor = {
    products: 'text-blue-600',
    logos: 'text-gray-600',
    hero: 'text-primary-600', 
    process: 'text-green-600',
    team: 'text-purple-600'
  }[category]

  const defaultText = {
    products: 'Product Image',
    logos: 'Logo',
    hero: 'Hero Image',
    process: 'Process Image', 
    team: 'Team Photo'
  }[category]

  return (
    <div 
      className={`${bgColor} ${textColor} flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      <div className="text-center">
        <div className="text-lg font-medium mb-1">
          {text || defaultText}
        </div>
        <div className="text-sm opacity-75">
          {width} × {height}
        </div>
        <div className="text-xs opacity-50 mt-1">
          Placeholder - {category}
        </div>
      </div>
    </div>
  )
}

// Usage examples:
// <PlaceholderImage width={400} height={300} category="products" text="Casual Wear Sample" />
// <PlaceholderImage width={1920} height={1080} category="hero" text="Manufacturing Facility" />
// <PlaceholderImage width={200} height={200} category="logos" />
