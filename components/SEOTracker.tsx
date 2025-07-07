'use client'

import { useEffect } from 'react'
import { trackOrganicLanding, trackPageView } from '../lib/gtag'

export default function SEOTracker() {
  useEffect(() => {
    // Track page views and detect organic search traffic
    const trackVisit = () => {
      const currentURL = window.location.href
      const currentPath = window.location.pathname
      const referrer = document.referrer
      const urlParams = new URLSearchParams(window.location.search)
      
      // Detect if this is organic search traffic
      const isOrganicSearch = () => {
        if (!referrer) return false
        
        const organicSources = [
          'google.com',
          'bing.com', 
          'yahoo.com',
          'duckduckgo.com',
          'search.yahoo.com',
          'yandex.com',
          'baidu.com'
        ]
        
        return organicSources.some(source => referrer.includes(source))
      }
      
      // Track organic search landings
      if (isOrganicSearch()) {
        // Try to extract search query from URL parameters
        const searchQuery = urlParams.get('q') || urlParams.get('query') || 'unknown'
        trackOrganicLanding(currentPath, searchQuery)
        
        // Track specific SEO landing pages
        if (currentPath.includes('/services')) {
          trackOrganicLanding('/services', `services_${searchQuery}`)
        } else if (currentPath.includes('/about')) {
          trackOrganicLanding('/about', `about_${searchQuery}`)
        } else if (currentPath === '/') {
          trackOrganicLanding('/', `homepage_${searchQuery}`)
        }
      }
      
      // Track all page views
      trackPageView(currentURL, document.title)
    }
    
    // Track initial page load
    trackVisit()
    
    // Track navigation changes (for SPA behavior)
    const handleRouteChange = () => {
      setTimeout(trackVisit, 100) // Small delay to ensure page title is updated
    }
    
    // Listen for browser navigation
    window.addEventListener('popstate', handleRouteChange)
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])

  // This component doesn't render anything visible
  return null
}
