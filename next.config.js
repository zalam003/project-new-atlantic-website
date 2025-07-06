/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router configuration
  experimental: {
    appDir: true,
  },
  
  // Image optimization for Vercel
  images: {
    domains: ['newatlantic.biz'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  
  // Cache control for static assets
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/images/:path*',
      },
    ]
  },
  
  // Bundle analyzer support
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../analyze/client.html',
          })
        )
      }
      return config
    },
  }),
  
  // Optimization for production builds
  swcMinify: true,
  
  // Configure trailing slash behavior
  trailingSlash: false,
  
  // Custom webpack config for optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': require('path').resolve(__dirname),
      }
    }
    
    return config
  },
  
  // Environment variables for client-side
  env: {
    SITE_NAME: 'New Atlantic Global',
    SITE_URL: process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000',
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      // Add any necessary redirects here
      // Example: old URLs to new URLs
    ]
  },
  
  // Output configuration for Vercel
  output: 'standalone',
  
  // Disable source maps in production for security
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
