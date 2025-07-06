#!/usr/bin/env node

/**
 * New Atlantic Image Downloader Script (Node.js)
 * Downloads all images from the New Atlantic website and organizes them
 * Alternative to wget-based scripts using pure Node.js
 */

const fs = require('fs').promises;
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const CONFIG = {
  WEBSITE_URL: 'https://newatlantic.biz',
  WEBSITE_ALT: 'https://www.newatlantic.biz',
  BASE_DIR: path.join(process.cwd(), 'public', 'images'),
  TEMP_DIR: path.join(process.cwd(), 'temp_download'),
  LOG_FILE: path.join(process.cwd(), 'image_download.log'),
  MAX_CONCURRENT: 5,
  TIMEOUT: 30000,
  USER_AGENT: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
};

// Color console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

function log(level, message) {
  const timestamp = new Date().toISOString();
  const colorCode = colors[level] || colors.reset;
  console.log(`${colorCode}[${level.toUpperCase()}]${colors.reset} ${message}`);
  
  // Also log to file
  fs.appendFile(CONFIG.LOG_FILE, `${timestamp} [${level.toUpperCase()}] ${message}\n`)
    .catch(() => {}); // Ignore file write errors
}

function logInfo(message) { log('blue', message); }
function logSuccess(message) { log('green', message); }
function logWarning(message) { log('yellow', message); }
function logError(message) { log('red', message); }

// Check dependencies and setup
async function checkEnvironment() {
  logInfo('Checking environment...');
  
  // Check if we're in the right directory
  try {
    await fs.access('package.json');
    await fs.access('public');
  } catch (error) {
    logError('Please run this script from the project root directory (where package.json is located)');
    process.exit(1);
  }
  
  logSuccess('Environment check passed');
}

// Create directory structure
async function setupDirectories() {
  logInfo('Setting up directory structure...');
  
  const directories = [
    CONFIG.BASE_DIR,
    path.join(CONFIG.BASE_DIR, 'products'),
    path.join(CONFIG.BASE_DIR, 'logos'),
    path.join(CONFIG.BASE_DIR, 'hero'),
    path.join(CONFIG.BASE_DIR, 'process'),
    path.join(CONFIG.BASE_DIR, 'team'),
    path.join(CONFIG.BASE_DIR, 'misc'),
    CONFIG.TEMP_DIR
  ];
  
  for (const dir of directories) {
    await fs.mkdir(dir, { recursive: true });
  }
  
  logSuccess('Directories created');
}

// Download a single file
function downloadFile(url, filePath) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const request = client.get(url, {
      headers: { 'User-Agent': CONFIG.USER_AGENT },
      timeout: CONFIG.TIMEOUT
    }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        return;
      }
      
      const fileStream = require('fs').createWriteStream(filePath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      
      fileStream.on('error', reject);
    });
    
    request.on('error', reject);
    request.on('timeout', () => {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Extract images from HTML content
function extractImageUrls(html, baseUrl) {
  const imageUrls = new Set();
  const imageRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const backgroundRegex = /background-image:\s*url\(["']?([^"')]+)["']?\)/gi;
  const cssImageRegex = /url\(["']?([^"')]+\.(jpg|jpeg|png|gif|svg|webp|ico))["']?\)/gi;
  
  let match;
  
  // Extract img src attributes
  while ((match = imageRegex.exec(html)) !== null) {
    const url = new URL(match[1], baseUrl).href;
    if (isImageUrl(url)) {
      imageUrls.add(url);
    }
  }
  
  // Extract CSS background images
  while ((match = backgroundRegex.exec(html)) !== null) {
    try {
      const url = new URL(match[1], baseUrl).href;
      if (isImageUrl(url)) {
        imageUrls.add(url);
      }
    } catch (e) {
      // Invalid URL, skip
    }
  }
  
  // Extract other CSS images
  while ((match = cssImageRegex.exec(html)) !== null) {
    try {
      const url = new URL(match[1], baseUrl).href;
      if (isImageUrl(url)) {
        imageUrls.add(url);
      }
    } catch (e) {
      // Invalid URL, skip
    }
  }
  
  return Array.from(imageUrls);
}

// Check if URL is an image
function isImageUrl(url) {
  const imageExtensions = /\.(jpg|jpeg|png|gif|svg|webp|ico)(\?.*)?$/i;
  return imageExtensions.test(url);
}

// Fetch HTML content
async function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const request = client.get(url, {
      headers: { 'User-Agent': CONFIG.USER_AGENT },
      timeout: CONFIG.TIMEOUT
    }, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        return;
      }
      
      let html = '';
      response.on('data', chunk => html += chunk);
      response.on('end', () => resolve(html));
      response.on('error', reject);
    });
    
    request.on('error', reject);
    request.on('timeout', () => {
      request.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Download website content and extract images
async function downloadWebsiteImages() {
  logInfo('Downloading website content and extracting images...');
  
  const pages = [
    '',
    'about-us/',
    'category/fashion/',
    'contact-us/',
    'avant_products/msk-01-w-ab/'
  ];
  
  const allImageUrls = new Set();
  
  for (const page of pages) {
    const url = `${CONFIG.WEBSITE_URL}/${page}`;
    logInfo(`Fetching: ${url}`);
    
    try {
      const html = await fetchHtml(url);
      const imageUrls = extractImageUrls(html, url);
      
      logInfo(`Found ${imageUrls.length} images on ${page || 'home page'}`);
      imageUrls.forEach(imgUrl => allImageUrls.add(imgUrl));
    } catch (error) {
      logWarning(`Failed to fetch ${url}: ${error.message}`);
    }
  }
  
  // Try alternative domain
  for (const page of pages) {
    const url = `${CONFIG.WEBSITE_ALT}/${page}`;
    
    try {
      const html = await fetchHtml(url);
      const imageUrls = extractImageUrls(html, url);
      imageUrls.forEach(imgUrl => allImageUrls.add(imgUrl));
    } catch (error) {
      // Ignore errors for alternative domain
    }
  }
  
  logInfo(`Total unique images found: ${allImageUrls.size}`);
  
  // Download images with concurrency control
  const imageList = Array.from(allImageUrls);
  const downloadedImages = [];
  
  for (let i = 0; i < imageList.length; i += CONFIG.MAX_CONCURRENT) {
    const batch = imageList.slice(i, i + CONFIG.MAX_CONCURRENT);
    const promises = batch.map(async (imageUrl) => {
      try {
        const urlObj = new URL(imageUrl);
        const filename = path.basename(urlObj.pathname) || `image_${Date.now()}.jpg`;
        const filePath = path.join(CONFIG.TEMP_DIR, filename);
        
        await downloadFile(imageUrl, filePath);
        logSuccess(`Downloaded: ${filename}`);
        
        return { url: imageUrl, path: filePath, filename };
      } catch (error) {
        logWarning(`Failed to download ${imageUrl}: ${error.message}`);
        return null;
      }
    });
    
    const results = await Promise.all(promises);
    downloadedImages.push(...results.filter(Boolean));
  }
  
  logSuccess(`Downloaded ${downloadedImages.length} images`);
  return downloadedImages;
}

// Categorize image based on filename and URL
function categorizeImage(filename, url) {
  const name = path.parse(filename).name;
  const ext = path.parse(filename).ext;
  
  let category = 'misc';
  let newName = filename;
  
  // Logo detection
  if (/logo|brand|icon|favicon/i.test(filename) || /logo|brand|icon|favicon/i.test(url)) {
    category = 'logos';
    newName = `logo-${name}${ext}`;
  }
  // Product detection
  else if (/product|garment|shirt|pant|jacket|coat|wear|apparel|cloth|fabric|mask|msk/i.test(filename) || 
           /product|garment|fashion|wear|apparel/i.test(url)) {
    category = 'products';
    newName = `product-${name}${ext}`;
  }
  // Hero detection
  else if (/hero|banner|header|slide|main|background|bg/i.test(filename) || 
           /hero|banner|slide/i.test(url)) {
    category = 'hero';
    newName = `hero-${name}${ext}`;
  }
  // Process detection
  else if (/process|manufacturing|factory|production|quality|compliance/i.test(filename) || 
           /process|manufacturing|production/i.test(url)) {
    category = 'process';
    newName = `process-${name}${ext}`;
  }
  // Team detection
  else if (/team|staff|employee|about|people|person/i.test(filename) || 
           /team|about|people/i.test(url)) {
    category = 'team';
    newName = `team-${name}${ext}`;
  }
  
  // Special case for favicon
  if (/favicon/i.test(filename)) {
    category = 'logos';
    newName = `favicon${ext}`;
  }
  
  return { category, newName };
}

// Organize downloaded images
async function organizeImages(downloadedImages) {
  logInfo('Organizing images into categories...');
  
  let processed = 0;
  
  for (const image of downloadedImages) {
    const { category, newName } = categorizeImage(image.filename, image.url);
    const targetDir = path.join(CONFIG.BASE_DIR, category);
    let targetPath = path.join(targetDir, newName);
    
    // Handle duplicates
    let counter = 1;
    while (await fs.access(targetPath).then(() => true).catch(() => false)) {
      const parsed = path.parse(newName);
      targetPath = path.join(targetDir, `${parsed.name}-${counter}${parsed.ext}`);
      counter++;
    }
    
    // Copy file to target location
    await fs.copyFile(image.path, targetPath);
    logSuccess(`Organized: ${category}/${path.basename(targetPath)}`);
    processed++;
  }
  
  logSuccess(`Organized ${processed} images`);
}

// Generate inventory file
async function generateInventory() {
  logInfo('Generating image inventory...');
  
  const inventoryPath = path.join(CONFIG.BASE_DIR, '..', 'lib', 'imageInventory.ts');
  const categories = ['products', 'logos', 'hero', 'process', 'team', 'misc'];
  
  let inventoryContent = `// Image inventory - Auto-generated by Node.js download script
// This file tracks all images collected from the New Atlantic website

export interface ImageAsset {
  filename: string;
  category: 'products' | 'logos' | 'hero' | 'process' | 'team' | 'misc';
  description: string;
  altText: string;
  usage: string[];
  optimized: boolean;
  fileSize?: string;
  downloadDate: string;
}

export const imageInventory: ImageAsset[] = [
`;

  for (const category of categories) {
    const categoryDir = path.join(CONFIG.BASE_DIR, category);
    
    try {
      const files = await fs.readdir(categoryDir);
      
      for (const file of files) {
        const filePath = path.join(categoryDir, file);
        const stats = await fs.stat(filePath);
        const fileSize = `${Math.round(stats.size / 1024)} KB`;
        
        inventoryContent += `  {
    filename: '${file}',
    category: '${category}',
    description: '${file} from ${category} category',
    altText: '${file}',
    usage: [],
    optimized: false,
    fileSize: '${fileSize}',
    downloadDate: '${new Date().toISOString().split('T')[0]}'
  },
`;
      }
    } catch (error) {
      // Directory doesn't exist or is empty
    }
  }
  
  inventoryContent += `];

// Helper functions
export const getImagesByCategory = (category: ImageAsset['category']) => {
  return imageInventory.filter(image => image.category === category);
};

export const getUnoptimizedImages = () => {
  return imageInventory.filter(image => !image.optimized);
};

export const getImagePath = (filename: string, category: string) => {
  return \`/images/\${category}/\${filename}\`;
};

export const getTotalImages = () => imageInventory.length;

export const getCategoryCounts = () => {
  const counts: Record<string, number> = {};
  imageInventory.forEach(img => {
    counts[img.category] = (counts[img.category] || 0) + 1;
  });
  return counts;
};
`;

  await fs.writeFile(inventoryPath, inventoryContent, 'utf8');
  logSuccess(`Inventory generated: ${inventoryPath}`);
}

// Cleanup temporary files
async function cleanup() {
  logInfo('Cleaning up temporary files...');
  
  try {
    await fs.rmdir(CONFIG.TEMP_DIR, { recursive: true });
    logSuccess('Temporary directory removed');
  } catch (error) {
    logWarning('Failed to remove temporary directory');
  }
}

// Generate summary report
async function generateReport() {
  logInfo('Generating download report...');
  
  const reportPath = path.join(process.cwd(), 'image_download_report.txt');
  const categories = ['products', 'logos', 'hero', 'process', 'team', 'misc'];
  
  let report = `New Atlantic Image Download Report (Node.js)
Generated: ${new Date().toLocaleString()}

SUMMARY:
`;

  for (const category of categories) {
    const categoryDir = path.join(CONFIG.BASE_DIR, category);
    let count = 0;
    
    try {
      const files = await fs.readdir(categoryDir);
      count = files.length;
    } catch (error) {
      // Directory doesn't exist
    }
    
    report += `${category}: ${count} images\n`;
  }
  
  report += `
DETAILS:
Base directory: ${CONFIG.BASE_DIR}
Download log: ${CONFIG.LOG_FILE}
Inventory file: ${path.join(CONFIG.BASE_DIR, '..', 'lib', 'imageInventory.ts')}

NEXT STEPS:
1. Review downloaded images for quality and relevance
2. Optimize images for web use (compress, resize)
3. Update image descriptions and alt text in inventory
4. Replace placeholder images in React components
5. Test image loading in development environment
`;

  await fs.writeFile(reportPath, report, 'utf8');
  logSuccess(`Report generated: ${reportPath}`);
  
  console.log('\n' + '='.repeat(50));
  logSuccess('DOWNLOAD COMPLETE');
  console.log('='.repeat(50));
  console.log(report);
}

// Main execution
async function main() {
  console.log('New Atlantic Image Downloader (Node.js)');
  console.log('======================================');
  console.log('');
  
  try {
    await checkEnvironment();
    await setupDirectories();
    
    const downloadedImages = await downloadWebsiteImages();
    if (downloadedImages.length > 0) {
      await organizeImages(downloadedImages);
      await generateInventory();
    } else {
      logWarning('No images were downloaded');
    }
    
    await cleanup();
    await generateReport();
    
    logSuccess('Image download and organization complete!');
  } catch (error) {
    logError(`Script failed: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, downloadWebsiteImages, organizeImages };
