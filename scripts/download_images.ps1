# New Atlantic Image Downloader Script (PowerShell)
# Downloads all images from the New Atlantic website and organizes them

param(
    [switch]$Verbose,
    [switch]$Force
)

# Configuration
$WEBSITE_URL = "https://newatlantic.biz"
$WEBSITE_ALT = "https://www.newatlantic.biz"
$BASE_DIR = Join-Path $PWD "public\images"
$TEMP_DIR = Join-Path $PWD "temp_wget"
$LOG_FILE = Join-Path $PWD "image_download.log"

# Color functions
function Write-Info { param($Message) Write-Host "[INFO] $Message" -ForegroundColor Blue }
function Write-Success { param($Message) Write-Host "[SUCCESS] $Message" -ForegroundColor Green }
function Write-Warning { param($Message) Write-Host "[WARNING] $Message" -ForegroundColor Yellow }
function Write-Error { param($Message) Write-Host "[ERROR] $Message" -ForegroundColor Red }

function Test-Dependencies {
    Write-Info "Checking dependencies..."
    
    # Check for wget
    try {
        $null = Get-Command wget -ErrorAction Stop
        Write-Success "wget found"
    }
    catch {
        Write-Error "wget is not installed or not in PATH."
        Write-Host "Please install wget for Windows:"
        Write-Host "- Chocolatey: choco install wget"
        Write-Host "- Scoop: scoop install wget"
        Write-Host "- Manual: https://eternallybored.org/misc/wget/"
        exit 1
    }
    
    # Check project directory
    if (-not (Test-Path "package.json") -or -not (Test-Path "public")) {
        Write-Error "Please run this script from the project root directory (where package.json is located)"
        exit 1
    }
    
    Write-Success "Dependencies check passed"
}

function Initialize-Directories {
    Write-Info "Setting up directory structure..."
    
    $directories = @(
        $BASE_DIR,
        "$BASE_DIR\products",
        "$BASE_DIR\logos", 
        "$BASE_DIR\hero",
        "$BASE_DIR\process",
        "$BASE_DIR\team",
        "$BASE_DIR\misc",
        $TEMP_DIR
    )
    
    foreach ($dir in $directories) {
        if (-not (Test-Path $dir)) {
            New-Item -ItemType Directory -Path $dir -Force | Out-Null
        }
    }
    
    Write-Success "Directories created"
}

function Invoke-WebsiteDownload {
    Write-Info "Downloading website content..."
    
    # Create log entry
    "$(Get-Date): Starting wget download" | Out-File -FilePath $LOG_FILE -Encoding UTF8
    
    # Primary download
    $wgetArgs = @(
        "--recursive",
        "--level=3",
        "--no-clobber", 
        "--page-requisites",
        "--html-extension",
        "--convert-links",
        "--restrict-file-names=windows",
        "--domains=newatlantic.biz,www.newatlantic.biz",
        "--no-parent",
        "--accept=jpg,jpeg,png,gif,svg,webp,ico",
        "--directory-prefix=$TEMP_DIR",
        "--append-output=$LOG_FILE",
        "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "--tries=3",
        "--timeout=30",
        $WEBSITE_URL,
        $WEBSITE_ALT
    )
    
    try {
        & wget @wgetArgs
    }
    catch {
        Write-Warning "Primary download had issues. Trying specific pages..."
        
        $pages = @("", "about-us/", "category/fashion/", "contact-us/", "avant_products/")
        
        foreach ($page in $pages) {
            $url = "$WEBSITE_URL/$page"
            Write-Info "Downloading from: $url"
            
            $specificArgs = @(
                "--recursive",
                "--level=2",
                "--no-clobber",
                "--page-requisites", 
                "--accept=jpg,jpeg,png,gif,svg,webp,ico",
                "--directory-prefix=$TEMP_DIR",
                "--append-output=$LOG_FILE",
                "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                "--tries=2",
                "--timeout=20",
                $url
            )
            
            try {
                & wget @specificArgs 2>$null
            }
            catch {
                Write-Warning "Failed to download from $url"
            }
        }
    }
    
    Write-Success "Download completed"
}

function Get-ImageCategory {
    param([string]$FilePath, [string]$FileName)
    
    $category = "misc"
    $newName = $FileName
    $name = [System.IO.Path]::GetFileNameWithoutExtension($FileName)
    $extension = [System.IO.Path]::GetExtension($FileName).TrimStart('.')
    
    # Logo detection
    if ($FileName -match "(logo|brand|icon|favicon)" -or $FilePath -match "(logo|brand|icon|favicon)") {
        $category = "logos"
        $newName = "logo-$name.$extension"
    }
    # Product/garment detection
    elseif ($FileName -match "(product|garment|shirt|pant|jacket|coat|wear|apparel|cloth|fabric|mask|msk)" -or $FilePath -match "(product|garment|fashion|wear|apparel)") {
        $category = "products"  
        $newName = "product-$name.$extension"
    }
    # Hero/banner detection
    elseif ($FileName -match "(hero|banner|header|slide|main|background|bg)" -or $FilePath -match "(hero|banner|slide)") {
        $category = "hero"
        $newName = "hero-$name.$extension"
    }
    # Process/manufacturing detection
    elseif ($FileName -match "(process|manufacturing|factory|production|quality|compliance)" -or $FilePath -match "(process|manufacturing|production)") {
        $category = "process"
        $newName = "process-$name.$extension"
    }
    # Team/about detection
    elseif ($FileName -match "(team|staff|employee|about|people|person)" -or $FilePath -match "(team|about|people)") {
        $category = "team"
        $newName = "team-$name.$extension"
    }
    
    # Special case for favicon
    if ($FileName -match "favicon") {
        $category = "logos"
        $newName = "favicon.$extension"
    }
    
    return @{
        Category = $category
        NewName = $newName
    }
}

function Invoke-ImageCategorization {
    Write-Info "Categorizing and organizing images..."
    
    $imageExtensions = @("*.jpg", "*.jpeg", "*.png", "*.gif", "*.svg", "*.webp", "*.ico")
    $images = Get-ChildItem -Path $TEMP_DIR -Recurse -Include $imageExtensions
    
    $imagesProcessed = 0
    
    foreach ($image in $images) {
        $fileName = $image.Name
        Write-Info "Processing: $fileName"
        
        $categoryInfo = Get-ImageCategory -FilePath $image.FullName -FileName $fileName
        $category = $categoryInfo.Category
        $newName = $categoryInfo.NewName
        
        $targetDir = Join-Path $BASE_DIR $category
        $targetFile = Join-Path $targetDir $newName
        
        # Handle duplicates
        $counter = 1
        while (Test-Path $targetFile) {
            $baseName = [System.IO.Path]::GetFileNameWithoutExtension($newName)
            $extension = [System.IO.Path]::GetExtension($newName)
            $targetFile = Join-Path $targetDir "$baseName-$counter$extension"
            $counter++
        }
        
        # Copy the file
        Copy-Item -Path $image.FullName -Destination $targetFile -Force
        Write-Success "Copied to: $category/$(Split-Path $targetFile -Leaf)"
        
        $imagesProcessed++
    }
    
    Write-Success "Processed $imagesProcessed images"
}

function New-ImageInventory {
    Write-Info "Generating image inventory..."
    
    $inventoryFile = Join-Path $BASE_DIR "..\lib\imageInventory.ts"
    
    $inventoryContent = @"
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
"@

    $categories = @("products", "logos", "hero", "process", "team", "misc")
    
    foreach ($category in $categories) {
        $categoryDir = Join-Path $BASE_DIR $category
        if (Test-Path $categoryDir) {
            $images = Get-ChildItem -Path $categoryDir -File
            foreach ($image in $images) {
                $fileSize = [math]::Round($image.Length / 1KB, 2)
                $inventoryContent += @"

  {
    filename: '$($image.Name)',
    category: '$category',
    description: '$($image.Name) from $category category',
    altText: '$($image.Name)',
    usage: [],
    optimized: false,
    fileSize: '$fileSize KB',
    downloadDate: '$(Get-Date -Format "yyyy-MM-dd")'
  },
"@
            }
        }
    }
    
    $inventoryContent += @"

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
"@

    $inventoryContent | Out-File -FilePath $inventoryFile -Encoding UTF8
    Write-Success "Inventory generated at: $inventoryFile"
}

function Remove-TempFiles {
    Write-Info "Cleaning up temporary files..."
    
    if (Test-Path $TEMP_DIR) {
        Remove-Item -Path $TEMP_DIR -Recurse -Force
        Write-Success "Temporary directory removed"
    }
}

function New-DownloadReport {
    Write-Info "Generating download report..."
    
    $reportFile = Join-Path $PWD "image_download_report.txt"
    
    $reportContent = @"
New Atlantic Image Download Report
Generated: $(Get-Date)

SUMMARY:
"@

    $categories = @("products", "logos", "hero", "process", "team", "misc")
    foreach ($category in $categories) {
        $categoryDir = Join-Path $BASE_DIR $category
        $count = 0
        if (Test-Path $categoryDir) {
            $count = (Get-ChildItem -Path $categoryDir -File).Count
        }
        $reportContent += "`n$category`: $count images"
    }
    
    $reportContent += @"

DETAILS:
Base directory: $BASE_DIR
Download log: $LOG_FILE
Inventory file: $(Join-Path $BASE_DIR "..\lib\imageInventory.ts")

NEXT STEPS:
1. Review downloaded images for quality and relevance
2. Optimize images for web use (compress, resize)
3. Update image descriptions and alt text in inventory
4. Replace placeholder images in React components
5. Test image loading in development environment
"@

    $reportContent | Out-File -FilePath $reportFile -Encoding UTF8
    Write-Success "Report generated: $reportFile"
    
    Write-Host ""
    Write-Success "=== DOWNLOAD COMPLETE ==="
    Write-Host $reportContent
}

# Main execution
function Main {
    Write-Host "New Atlantic Image Downloader (PowerShell)" -ForegroundColor Cyan
    Write-Host "==========================================" -ForegroundColor Cyan
    Write-Host ""
    
    Test-Dependencies
    Initialize-Directories
    Invoke-WebsiteDownload
    Invoke-ImageCategorization
    New-ImageInventory
    Remove-TempFiles
    New-DownloadReport
    
    Write-Host ""
    Write-Success "Image download and organization complete!"
    Write-Info "Check the generated report for details and next steps."
}

# Run the main function
Main
