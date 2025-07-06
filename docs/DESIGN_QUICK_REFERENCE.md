# New Atlantic Global - Quick Design Reference

## 🎨 **Color Quick Reference**

### Backgrounds
```css
.bg-primary-section     /* Light blue gradient - Trust sections */
.bg-secondary-section   /* Neutral gradient - Data/metrics */
.bg-accent-section      /* Clean gradient - Hero/content */
.bg-neutral-section     /* Warm gradient - Process/workflow */
```

### Patterns
```css
.textile-pattern        /* Dot pattern - Even sections */
.textile-pattern-alt    /* Diagonal pattern - Odd sections */
```

### Section Pattern
```html
Hero:     bg-accent-section textile-pattern
About:    bg-primary-section textile-pattern-alt
Services: bg-accent-section textile-pattern
Impact:   bg-secondary-section textile-pattern-alt
Process:  bg-neutral-section textile-pattern
Contact:  bg-primary-section textile-pattern-alt
```

## 📝 **Typography Quick Guide**

```css
/* Headers */
h1: text-4xl sm:text-6xl font-bold      /* Main titles */
h2: text-3xl sm:text-4xl font-bold      /* Section titles */
h3: text-xl font-bold                   /* Subsections */

/* Body */
text-lg    /* Hero descriptions */
text-base  /* Standard body */
text-sm    /* Secondary text */
text-xs    /* Captions, footer */
```

## 🧩 **Common Components**

### Buttons
```html
<button class="btn-primary">Primary Action</button>
<button class="btn-secondary">Secondary Action</button>
```

### Text Overlays
```html
<span class="text-overlay-primary">Main Text</span>
<span class="text-overlay-secondary">Subtitle</span>
```

### Image Gradients
```html
<div class="absolute inset-0 image-overlay-gradient"></div>
```

## 📱 **Spacing System**

```css
/* Sections */
py-8 sm:py-10    /* Standard section padding */

/* Content */
mt-3    /* Small gap */
mt-6    /* Medium gap */
mt-8    /* Large gap */

/* Components */
gap-6   /* Component spacing */
```

## 🎯 **Brand Colors**

```css
Primary Blue:  #2563eb  (primary-600)
Primary Hover: #1d4ed8  (primary-700)
Text Dark:     #111827  (gray-900)
Text Body:     #4b5563  (gray-600)
Text Light:    #9ca3af  (gray-400)
```

---

*For complete documentation, see: `/docs/DESIGN_SYSTEM.md`*