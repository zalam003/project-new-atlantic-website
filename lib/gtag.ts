// Google Analytics tracking utility
export const GA_TRACKING_ID = 'G-JGQSY5C95L'

// Type definitions for gtag events
interface GtagEvent {
  action: string
  category: string
  label?: string
  value?: number
}

interface ConversionEvent {
  event_name: string
  event_parameters?: {
    transaction_id?: string
    value?: number
    currency?: string
    project_type?: string
    order_volume?: string
    timeline?: string
    budget?: string
    [key: string]: any
  }
}

// Check if gtag is available
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId?: string | Date,
      config?: any
    ) => void
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
      page_title: title,
    })
  }
}

// Track custom events
export const trackEvent = ({ action, category, label, value }: GtagEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formType: string, projectType?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submit', {
      event_category: 'engagement',
      event_label: formType,
      custom_parameters: {
        project_type: projectType,
        form_type: formType
      }
    })
  }
}

// Track quote requests with detailed data
export const trackQuoteRequest = (formData: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'conversion',
      event_label: 'quote_request',
      value: 1,
      currency: 'USD',
      custom_parameters: {
        project_type: formData.projectType,
        order_volume: formData.orderVolume,
        timeline: formData.timeline,
        budget: formData.budget,
        company: formData.company,
        lead_source: 'website_form'
      }
    })

    // Also track as a conversion event
    window.gtag('event', 'conversion', {
      send_to: GA_TRACKING_ID,
      value: 1,
      currency: 'USD',
      event_category: 'lead_generation',
      event_label: formData.projectType || 'unknown'
    })
  }
}

// Track service card interactions
export const trackServiceCardClick = (serviceName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'engagement',
      event_label: `service_card_${serviceName.toLowerCase().replace(' ', '_')}`,
      custom_parameters: {
        service_name: serviceName,
        action_type: 'get_quote_click'
      }
    })
  }
}

// Track email clicks
export const trackEmailClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'engagement',
      event_label: 'email_contact',
      custom_parameters: {
        contact_method: 'email'
      }
    })
  }
}

// Track phone clicks
export const trackPhoneClick = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'engagement',
      event_label: 'phone_contact',
      custom_parameters: {
        contact_method: 'phone'
      }
    })
  }
}

// Track page section views (scroll-based)
export const trackSectionView = (sectionName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll', {
      event_category: 'engagement',
      event_label: `section_view_${sectionName}`,
      custom_parameters: {
        section_name: sectionName
      }
    })
  }
}

// Track CTA button clicks
export const trackCTAClick = (ctaText: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'engagement',
      event_label: `cta_${ctaText.toLowerCase().replace(/\s+/g, '_')}`,
      custom_parameters: {
        cta_text: ctaText,
        cta_location: location
      }
    })
  }
}

// Track file downloads (if any)
export const trackDownload = (fileName: string, fileType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'file_download', {
      event_category: 'engagement',
      event_label: fileName,
      custom_parameters: {
        file_name: fileName,
        file_type: fileType
      }
    })
  }
}

// Track organic search performance
export const trackOrganicLanding = (landingPage: string, searchTerm?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'organic_landing', {
      event_category: 'seo',
      event_label: landingPage,
      custom_parameters: {
        landing_page: landingPage,
        search_term: searchTerm || 'unknown',
        traffic_source: 'organic_search'
      }
    })
  }
}

// Track keyword ranking improvements (when keywords start ranking)
export const trackKeywordRanking = (keyword: string, position: number, page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'keyword_ranking', {
      event_category: 'seo_performance',
      event_label: keyword,
      value: position,
      custom_parameters: {
        keyword: keyword,
        ranking_position: position,
        target_page: page,
        ranking_improvement: position <= 10 ? 'top_10' : position <= 20 ? 'top_20' : 'beyond_20'
      }
    })
  }
}

// Track local search visibility
export const trackLocalSearchView = (searchType: string, location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'local_search_view', {
      event_category: 'local_seo',
      event_label: `${searchType}_${location}`,
      custom_parameters: {
        search_type: searchType, // e.g., 'garment_sourcing_near_me'
        location: location,
        business_type: 'garment_sourcing'
      }
    })
  }
}
