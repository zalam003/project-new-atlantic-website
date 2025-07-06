#!/bin/bash

# New Atlantic Image Downloader Script
# Downloads all images from the New Atlantic website and organizes them

set -e  # Exit on any error

# Configuration
WEBSITE_URL="https://newatlantic.biz"
WEBSITE_ALT="https://www.newatlantic.biz"
BASE_DIR="$(pwd)/public/images"
TEMP_DIR="./temp_wget"
LOG_FILE="./image_download.log"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if wget is installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v wget &> /dev/null; then
        print_error "wget is not installed. Please install wget first."
        echo "On Ubuntu/Debian: sudo apt install wget"
        echo "On macOS: brew install wget"
        echo "On Windows: Download from https://eternallybored.org/misc/wget/"
        exit 1
    fi
    
    if ! command -v file &> /dev/null; then
        print_warning "file command not found. Image type detection may be limited."
    fi
    
    print_success "Dependencies check passed"
}

# Create directory structure
setup_directories() {
    print_status "Setting up directory structure..."
    
    # Create main directories
    mkdir -p "$BASE_DIR"/{products,logos,hero,process,team,misc}
    mkdir -p "$TEMP_DIR"
    
    print_success "Directories created"
}

# Download website with images
download_website() {
    print_status "Downloading website content..."
    
    # Create wget log
    echo "$(date): Starting wget download" > "$LOG_FILE"
    
    # Download the website with images
    # --recursive: download recursively
    # --level=2: limit recursion depth
    # --no-clobber: don't overwrite existing files
    # --page-requisites: download images, CSS, etc.
    # --html-extension: save HTML files with .html extension
    # --convert-links: convert links for offline viewing
    # --restrict-file-names=windows: use Windows-safe filenames
    # --domains: limit to specified domains
    # --no-parent: don't ascend to parent directory
    # --accept: only download specified file types
    
    wget \
        --recursive \
        --level=3 \
        --no-clobber \
        --page-requisites \
        --html-extension \
        --convert-links \
        --restrict-file-names=windows \
        --domains=newatlantic.biz,www.newatlantic.biz \
        --no-parent \
        --accept=jpg,jpeg,png,gif,svg,webp,ico \
        --directory-prefix="$TEMP_DIR" \
        --append-output="$LOG_FILE" \
        --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
        "$WEBSITE_URL" "$WEBSITE_ALT" || {
        
        print_warning "Primary download completed with some errors. Trying alternative URLs..."
        
        # Try specific pages if main download had issues
        for page in "" "about-us/" "category/fashion/" "contact-us/"; do
            print_status "Downloading from: ${WEBSITE_URL}/${page}"
            wget \
                --recursive \
                --level=2 \
                --no-clobber \
                --page-requisites \
                --accept=jpg,jpeg,png,gif,svg,webp,ico \
                --directory-prefix="$TEMP_DIR" \
                --append-output="$LOG_FILE" \
                --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" \
                "${WEBSITE_URL}/${page}" || true
        done
    }
    
    print_success "Download completed"
}

# Categorize and organize images
categorize_images() {
    print_status "Categorizing and organizing images..."
    
    local images_found=0
    local images_processed=0
    
    # Find all downloaded images
    while IFS= read -r -d '' image; do
        ((images_found++))
        
        # Get filename and extension
        filename=$(basename "$image")
        extension="${filename##*.}"
        name="${filename%.*}"
        
        # Convert extension to lowercase
        extension=$(echo "$extension" | tr '[:upper:]' '[:lower:]')
        
        print_status "Processing: $filename"
        
        # Categorize based on filename patterns and path
        local category="misc"
        local new_name="$filename"
        
        # Logo detection
        if [[ "$filename" =~ (logo|brand|icon|favicon) ]] || [[ "$image" =~ (logo|brand|icon|favicon) ]]; then
            category="logos"
            new_name="logo-${name}.${extension}"
            
        # Product/garment detection
        elif [[ "$filename" =~ (product|garment|shirt|pant|jacket|coat|wear|apparel|cloth|fabric|mask|msk) ]] || [[ "$image" =~ (product|garment|fashion|wear|apparel) ]]; then
            category="products"
            new_name="product-${name}.${extension}"
            
        # Hero/banner detection  
        elif [[ "$filename" =~ (hero|banner|header|slide|main|background|bg) ]] || [[ "$image" =~ (hero|banner|slide) ]]; then
            category="hero"
            new_name="hero-${name}.${extension}"
            
        # Process/manufacturing detection
        elif [[ "$filename" =~ (process|manufacturing|factory|production|quality|compliance) ]] || [[ "$image" =~ (process|manufacturing|production) ]]; then
            category="process"
            new_name="process-${name}.${extension}"
            
        # Team/about detection
        elif [[ "$filename" =~ (team|staff|employee|about|people|person) ]] || [[ "$image" =~ (team|about|people) ]]; then
            category="team"
            new_name="team-${name}.${extension}"
            
        # Check image dimensions for hero images (large images likely backgrounds)
        elif command -v identify &> /dev/null; then
            # Use ImageMagick identify if available
            dimensions=$(identify -format "%wx%h" "$image" 2>/dev/null || echo "")
            if [[ "$dimensions" =~ ([0-9]+)x([0-9]+) ]]; then
                width=${BASH_REMATCH[1]}
                height=${BASH_REMATCH[2]}
                
                # Large images are likely hero/background images
                if [ "$width" -gt 1200 ] || [ "$height" -gt 800 ]; then
                    category="hero"
                    new_name="hero-${name}.${extension}"
                fi
            fi
        fi
        
        # Handle favicon specifically
        if [[ "$filename" =~ favicon ]]; then
            category="logos"
            new_name="favicon.${extension}"
        fi
        
        # Copy to appropriate directory
        target_dir="$BASE_DIR/$category"
        target_file="$target_dir/$new_name"
        
        # Handle duplicates
        counter=1
        original_target="$target_file"
        while [ -f "$target_file" ]; do
            name_part="${new_name%.*}"
            ext_part="${new_name##*.}"
            target_file="$target_dir/${name_part}-${counter}.${ext_part}"
            ((counter++))
        done
        
        # Copy the file
        cp "$image" "$target_file"
        print_success "Copied to: $category/$target_file"
        
        ((images_processed++))
        
    done < <(find "$TEMP_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.svg" -o -iname "*.webp" -o -iname "*.ico" \) -print0)
    
    print_success "Processed $images_processed of $images_found images found"
}

# Generate inventory file
generate_inventory() {
    print_status "Generating image inventory..."
    
    local inventory_file="$BASE_DIR/../lib/imageInventory.ts"
    local temp_inventory="/tmp/inventory_temp.ts"
    
    # Start building the inventory
    cat > "$temp_inventory" << 'EOF'
// Image inventory - Auto-generated by download script
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
EOF

    # Process each category
    for category in products logos hero process team misc; do
        category_dir="$BASE_DIR/$category"
        if [ -d "$category_dir" ] && [ "$(ls -A "$category_dir")" ]; then
            for image in "$category_dir"/*; do
                if [ -f "$image" ]; then
                    filename=$(basename "$image")
                    filesize=$(ls -lh "$image" | awk '{print $5}')
                    
                    # Generate description based on filename and category
                    description="$filename from $category category"
                    alt_text="$filename"
                    
                    cat >> "$temp_inventory" << EOF
  {
    filename: '$filename',
    category: '$category',
    description: '$description',
    altText: '$alt_text',
    usage: [],
    optimized: false,
    fileSize: '$filesize',
    downloadDate: '$(date -I)'
  },
EOF
                fi
            done
        fi
    done
    
    # Close the array and add helper functions
    cat >> "$temp_inventory" << 'EOF'
];

// Helper functions
export const getImagesByCategory = (category: ImageAsset['category']) => {
  return imageInventory.filter(image => image.category === category);
};

export const getUnoptimizedImages = () => {
  return imageInventory.filter(image => !image.optimized);
};

export const getImagePath = (filename: string, category: string) => {
  return `/images/${category}/${filename}`;
};

export const getTotalImages = () => imageInventory.length;

export const getCategoryCounts = () => {
  const counts: Record<string, number> = {};
  imageInventory.forEach(img => {
    counts[img.category] = (counts[img.category] || 0) + 1;
  });
  return counts;
};
EOF

    # Move to final location
    mv "$temp_inventory" "$inventory_file"
    print_success "Inventory generated at: $inventory_file"
}

# Cleanup temporary files
cleanup() {
    print_status "Cleaning up temporary files..."
    
    if [ -d "$TEMP_DIR" ]; then
        rm -rf "$TEMP_DIR"
        print_success "Temporary directory removed"
    fi
}

# Generate summary report
generate_report() {
    print_status "Generating download report..."
    
    local report_file="./image_download_report.txt"
    
    cat > "$report_file" << EOF
New Atlantic Image Download Report
Generated: $(date)

SUMMARY:
EOF

    # Count images in each category
    for category in products logos hero process team misc; do
        count=$(find "$BASE_DIR/$category" -type f 2>/dev/null | wc -l)
        echo "$category: $count images" >> "$report_file"
    done
    
    echo "" >> "$report_file"
    echo "DETAILS:" >> "$report_file"
    echo "Base directory: $BASE_DIR" >> "$report_file"
    echo "Download log: $LOG_FILE" >> "$report_file"
    echo "Inventory file: $BASE_DIR/../lib/imageInventory.ts" >> "$report_file"
    
    echo "" >> "$report_file"
    echo "NEXT STEPS:" >> "$report_file"
    echo "1. Review downloaded images for quality and relevance" >> "$report_file"
    echo "2. Optimize images for web use (compress, resize)" >> "$report_file"
    echo "3. Update image descriptions and alt text in inventory" >> "$report_file"
    echo "4. Replace placeholder images in React components" >> "$report_file"
    echo "5. Test image loading in development environment" >> "$report_file"
    
    print_success "Report generated: $report_file"
    
    # Display summary
    echo ""
    print_success "=== DOWNLOAD COMPLETE ==="
    cat "$report_file"
}

# Main execution
main() {
    echo "New Atlantic Image Downloader"
    echo "============================="
    echo ""
    
    # Check if we're in the right directory
    if [ ! -f "package.json" ] || [ ! -d "public" ]; then
        print_error "Please run this script from the project root directory (where package.json is located)"
        exit 1
    fi
    
    check_dependencies
    setup_directories
    download_website
    categorize_images
    generate_inventory
    cleanup
    generate_report
    
    echo ""
    print_success "Image download and organization complete!"
    print_status "Check the generated report for details and next steps."
}

# Run main function
main "$@"
