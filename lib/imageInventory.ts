// Image inventory tracking for New Atlantic website
// This file tracks all images collected and their usage

export interface ImageAsset {
  filename: string;
  category: 'products' | 'logos' | 'hero' | 'process' | 'team';
  originalUrl?: string;
  dimensions?: {
    width: number;
    height: number;
  };
  fileSize?: string;
  description: string;
  altText: string;
  usage: string[]; // Where the image is used in the site
  optimized: boolean;
  copyright?: string;
}

// Current image inventory - update as images are collected
export const imageInventory: ImageAsset[] = [
  // Example entries - replace with actual collected images
  {
    filename: 'logo-new-atlantic.png',
    category: 'logos',
    description: 'Main company logo',
    altText: 'New Atlantic Global logo',
    usage: ['header', 'footer'],
    optimized: false
  },
  {
    filename: 'hero-manufacturing.jpg',
    category: 'hero',
    description: 'Main hero background image',
    altText: 'Garment manufacturing facility',
    usage: ['home-hero'],
    optimized: false
  }
  // Add more entries as images are collected
];

// Helper function to get images by category
export const getImagesByCategory = (category: ImageAsset['category']) => {
  return imageInventory.filter(image => image.category === category);
};

// Helper function to check if image is optimized
export const getUnoptimizedImages = () => {
  return imageInventory.filter(image => !image.optimized);
};

// Helper function to get image path for Next.js
export const getImagePath = (filename: string, category: string) => {
  return `/images/${category}/${filename}`;
};
