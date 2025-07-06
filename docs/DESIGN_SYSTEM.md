# New Atlantic Global Design System Documentation

## 🎨 **Overview**

This document outlines the complete design system for New Atlantic Global's website, including color schemes, typography, spacing, and component patterns. The design is specifically tailored for the garment manufacturing industry with textile-inspired elements and professional B2B aesthetics.

---

## 🌈 **Color Palette**

### Primary Colors

| Color Name | Hex Code | CSS Variable | Usage |
|------------|----------|--------------|-------|
| Primary Blue 600 | `#2563eb` | `primary-600` | CTAs, links, brand accents |
| Primary Blue 700 | `#1d4ed8` | `primary-700` | Hover states for primary elements |
| Primary Blue 500 | `#3b82f6` | `primary-500` | Secondary accents |

### Neutral Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| White | `#ffffff` | Card backgrounds, clean sections |
| Gray 50 | `#f9fafb` | Light backgrounds |
| Gray 100 | `#f3f4f6` | Subtle borders and dividers |
| Gray 400 | `#9ca3af` | Secondary text |
| Gray 600 | `#4b5563` | Body text |
| Gray 900 | `#111827` | Headings and dark text |

### Background Gradients

| Class Name | Gradient | Usage |
|------------|----------|-------|
| `.bg-primary-section` | `#f8faff → #f1f5ff` | Trust-building sections (About, Contact) |
| `.bg-secondary-section` | `#fafbfc → #f4f6f8` | Metrics and data sections |
| `.bg-accent-section` | `#ffffff → #f8fafc` | Clean content sections (Hero, Services) |
| `.bg-neutral-section` | `#f9fafb → #f3f4f6` | Process and workflow sections |

---

## 📝 **Typography**

### Font Family
- **Primary:** Inter (Google Fonts)
- **Fallback:** system-ui, sans-serif
- **Import:** `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap')`

### Font Weights
| Weight | CSS Class | Usage |
|--------|-----------|-------|
| 300 | `font-light` | Subtle text |
| 400 | `font-normal` | Body text |
| 500 | `font-medium` | Emphasized text |
| 600 | `font-semibold` | Subheadings |
| 700 | `font-bold` | Main headings |

### Typography Scale

#### Headings
```css
h1: text-4xl sm:text-6xl (36px → 60px)
h2: text-3xl sm:text-4xl (30px → 36px)
h3: text-xl sm:text-2xl (20px → 24px)
h4: text-lg (18px)
```

#### Body Text
```css
Large: text-lg (18px) - Hero descriptions, important content
Base: text-base (16px) - Standard body text
Small: text-sm (14px) - Secondary information
Extra Small: text-xs (12px) - Captions, footer text
```

### Text Colors
```css
.text-gray-900     /* #111827 - Main headings */
.text-gray-600     /* #4b5563 - Body text */
.text-gray-400     /* #9ca3af - Secondary text */
.text-primary-600  /* #2563eb - Brand text, links */
```

---

## 🏗️ **Spacing System**

### Vertical Spacing (Sections)
```css
py-8 sm:py-10     /* Small sections: 32px → 40px */
py-16 sm:py-20    /* Standard sections: 64px → 80px */
py-24 sm:py-32    /* Large sections: 96px → 128px */
```

### Content Spacing
```css
mt-2   /* 8px - Tight spacing */
mt-3   /* 12px - Small spacing */
mt-4   /* 16px - Standard spacing */
mt-6   /* 24px - Medium spacing */
mt-8   /* 32px - Large spacing */
mt-12  /* 48px - Extra large spacing */
```

### Component Gaps
```css
gap-4   /* 16px - Standard component gap */
gap-6   /* 24px - Medium component gap */
gap-8   /* 32px - Large component gap */
```

---

## 🎨 **Textile Patterns**

### Pattern Classes

#### Dot Pattern (Fabric Weave Inspired)
```css
.textile-pattern {
  background-image: radial-gradient(
    circle at 1px 1px, 
    rgba(37, 99, 235, 0.03) 1px, 
    transparent 0
  );
  background-size: 20px 20px;
}
```

#### Diagonal Pattern (Textile Construction Inspired)
```css
.textile-pattern-alt {
  background-image: 
    linear-gradient(45deg, rgba(37, 99, 235, 0.02) 25%, transparent 25%), 
    linear-gradient(-45deg, rgba(37, 99, 235, 0.02) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(37, 99, 235, 0.02) 75%), 
    linear-gradient(-45deg, transparent 75%, rgba(37, 99, 235, 0.02) 75%);
  background-size: 30px 30px;
  background-position: 0 0, 0 15px, 15px -15px, -15px 0px;
}
```

---

## 🧩 **Component Patterns**

### Button Styles

#### Primary Button
```css
.btn-primary {
  @apply bg-primary-600 hover:bg-primary-700 text-white 
         font-medium py-3 px-6 rounded-lg 
         transition-colors duration-200;
}
```

#### Secondary Button
```css
.btn-secondary {
  @apply bg-white hover:bg-gray-50 text-primary-600 
         font-medium py-3 px-6 rounded-lg 
         border border-primary-600 
         transition-colors duration-200;
}
```

### Text Overlays (For Images)

#### Primary Text Overlay
```css
.text-overlay-primary {
  color: white;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}
```

#### Secondary Text Overlay
```css
.text-overlay-secondary {
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}
```

### Image Gradients
```css
.image-overlay-gradient {
  background: linear-gradient(
    to top, 
    rgba(0, 0, 0, 0.8) 0%, 
    rgba(0, 0, 0, 0.2) 50%, 
    transparent 100%
  );
}
```

---

## 📱 **Responsive Design**

### Breakpoints (Tailwind CSS)
```css
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
```

### Logo Sizing
```css
Desktop: h-12 sm:h-16 lg:h-20  /* 48px → 64px → 80px */
Mobile:  h-12                   /* 48px */
```

### Section Containers
```css
.container-custom {
  @apply max-w-7xl mx-auto;  /* 1280px max width, centered */
}
```

---

## 🎯 **Section Background System**

### Implementation Pattern
Each section alternates between background types for visual rhythm:

```html
<!-- Hero Section -->
<section class="bg-accent-section textile-pattern">

<!-- About Section -->
<section class="bg-primary-section textile-pattern-alt">

<!-- Services Section -->
<section class="bg-accent-section textile-pattern">

<!-- Business Impact Section -->
<section class="bg-secondary-section textile-pattern-alt">

<!-- Process Section -->
<section class="bg-neutral-section textile-pattern">

<!-- Contact Section -->
<section class="bg-primary-section textile-pattern-alt">
```

### Visual Flow
```
Clean → Light Blue → Clean → Neutral → Warm → Light Blue
```

---

## 🖼️ **Image Guidelines**

### Image Overlays
Always use gradient overlays for text readability:
```html
<div class="absolute inset-0 image-overlay-gradient"></div>
<div class="absolute bottom-3 left-3 right-3">
  <span class="text-overlay-primary">Main Text</span>
  <span class="text-overlay-secondary">Secondary Text</span>
</div>
```

### Image Optimization
- Use Next.js Image component for automatic optimization
- WebP/AVIF format conversion enabled
- Lazy loading for non-critical images
- Priority loading for hero images

---

## 🎨 **Tailwind CSS Configuration**

### Custom Colors (tailwind.config.js)
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#f8fafc',
          500: '#64748b',
          700: '#334155',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
```

---

## 📋 **Usage Guidelines**

### Do's
✅ Use the defined background classes for sections  
✅ Maintain the alternating pattern for visual rhythm  
✅ Apply textile patterns consistently  
✅ Use proper text overlays for image content  
✅ Follow the typography scale  
✅ Maintain proper spacing ratios  

### Don'ts
❌ Mix different pattern types in adjacent sections  
❌ Use flat backgrounds instead of gradients  
❌ Skip text shadows on image overlays  
❌ Break the established color hierarchy  
❌ Use custom fonts outside the Inter family  
❌ Override spacing without system consideration  

---

## 🔧 **Development Implementation**

### CSS Structure
```
app/globals.css
├── @tailwind directives
├── Font imports
├── Base styles
└── Component classes
    ├── Buttons (.btn-primary, .btn-secondary)
    ├── Backgrounds (.bg-*-section)
    ├── Patterns (.textile-pattern, .textile-pattern-alt)
    ├── Text overlays (.text-overlay-*)
    └── Utility classes
```

### Adding New Sections
1. Choose appropriate background class
2. Apply corresponding textile pattern
3. Use established spacing system
4. Follow typography guidelines
5. Maintain responsive design principles

### Performance Considerations
- CSS gradients (no image files)
- Minimal pattern complexity
- Efficient Tailwind purging
- Optimized background rendering

---

## 🎯 **Brand Positioning**

### Industry Context
- **Target:** B2B garment sourcing clients
- **Aesthetic:** Professional manufacturing expertise
- **Differentiation:** Textile-inspired design elements
- **Global Appeal:** Professional across cultures

### Color Psychology
- **Blue:** Trust, reliability, professionalism
- **Gradients:** Sophistication, attention to detail
- **Patterns:** Industry knowledge, textile expertise
- **Neutrals:** Clean, modern, scalable

---

## 📊 **Accessibility Standards**

### Color Contrast
- All text meets WCAG AA standards
- Minimum 4.5:1 contrast ratio for body text
- Minimum 3:1 contrast ratio for large text

### Focus States
```css
focus:ring-2 focus:ring-inset focus:ring-primary-600
```

### Responsive Text
- Scalable font sizes across breakpoints
- Readable line heights (1.5-1.8)
- Adequate spacing for touch targets

---

## 🚀 **Future Enhancements**

### Potential Additions
- Dark mode variant with adjusted gradients
- Additional textile pattern variations
- Component-specific color themes
- Animation and transition refinements
- Enhanced accessibility features

### Maintenance Notes
- Review color scheme annually
- Monitor industry design trends
- Update patterns based on user feedback
- Optimize performance regularly

---

**Document Version:** 1.0  
**Last Updated:** July 2025  
**Created for:** New Atlantic Global Website Development Team  
**Framework:** Next.js 14 + Tailwind CSS  
**Design Philosophy:** Professional B2B Garment Manufacturing Industry