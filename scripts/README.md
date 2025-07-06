# Image Download Scripts

This directory contains multiple scripts to automatically download and organize images from the New Atlantic website. Choose the script that best fits your environment and preferences.

## Available Scripts

### 1. Bash Script (Linux/macOS/WSL) - `download_images.sh`
**Requirements:** bash, wget, basic Unix utilities  
**Best for:** Linux, macOS, Windows Subsystem for Linux (WSL)

```bash
# Make executable and run
chmod +x scripts/download_images.sh
./scripts/download_images.sh
```

**Features:**
- Full recursive website crawling
- Advanced image categorization with dimension analysis
- Comprehensive error handling and logging
- Colored output for better readability
- Automatic cleanup and reporting

### 2. Windows Batch Script - `download_images.bat`
**Requirements:** Windows, wget for Windows  
**Best for:** Native Windows command prompt

```cmd
# Run from project root
scripts\download_images.bat
```

**Features:**
- Windows-compatible path handling
- Native Windows command syntax
- Progress feedback and error handling
- Automatic inventory generation

### 3. PowerShell Script - `download_images.ps1`
**Requirements:** PowerShell 5.0+, wget for Windows  
**Best for:** Modern Windows environments with PowerShell

```powershell
# Run from project root (may require execution policy adjustment)
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
.\scripts\download_images.ps1
```

**Features:**
- Advanced PowerShell error handling
- Object-oriented file processing
- Detailed progress reporting
- Cross-platform PowerShell support

### 4. Node.js Script - `download_images.js`
**Requirements:** Node.js 12+, no external dependencies  
**Best for:** Any platform with Node.js, no wget required

```bash
# Run from project root
node scripts/download_images.js
```

**Features:**
- Pure JavaScript implementation
- No external dependencies beyond Node.js
- Cross-platform compatibility
- Built-in HTTP client with timeout handling
- HTML parsing for image extraction

## Installation Requirements

### For Bash/Batch/PowerShell Scripts

**Install wget:**

**Windows:**
```bash
# Using Chocolatey
choco install wget

# Using Scoop
scoop install wget

# Manual download
# Download from: https://eternallybored.org/misc/wget/
```

**macOS:**
```bash
# Using Homebrew
brew install wget
```

**Ubuntu/Debian:**
```bash
sudo apt install wget
```

### For Node.js Script
Node.js script uses only built-in modules, no additional installation required.

## Script Comparison

| Feature | Bash | Batch | PowerShell | Node.js |
|---------|------|-------|------------|---------|
| **Platform** | Linux/macOS/WSL | Windows | Windows/Cross-platform | Cross-platform |
| **Dependencies** | wget, bash | wget, cmd | wget, PowerShell | Node.js only |
| **Performance** | Excellent | Good | Excellent | Good |
| **Error Handling** | Advanced | Basic | Advanced | Advanced |
| **Customization** | High | Medium | High | Highest |
| **Maintenance** | Low | Low | Low | Medium |

## Output Structure

All scripts organize downloaded images into the same directory structure:

```
public/images/
├── products/        # Product photos, garment samples
├── logos/          # Company logos, brand assets
├── hero/           # Hero section backgrounds
├── process/        # Manufacturing process photos
├── team/           # Team and facility photos
└── misc/           # Uncategorized images
```

## Generated Files

Each script creates:

1. **Image Files:** Organized in appropriate directories
2. **Inventory File:** `lib/imageInventory.ts` - TypeScript inventory of all images
3. **Download Log:** `image_download.log` - Detailed download log
4. **Report File:** `image_download_report.txt` - Summary report

## Image Categorization Logic

Images are automatically categorized based on:

### Filename Patterns
- **logos:** logo, brand, icon, favicon
- **products:** product, garment, shirt, pant, jacket, coat, wear, apparel, cloth, fabric, mask
- **hero:** hero, banner, header, slide, main, background, bg
- **process:** process, manufacturing, factory, production, quality, compliance
- **team:** team, staff, employee, about, people, person

### URL Path Analysis
Scripts also analyze the URL path for additional context clues.

### Image Dimensions (Bash script only)
Large images (>1200px width or >800px height) are often categorized as hero images.

## Usage Examples

### Quick Start (Recommended)
```bash
# For Windows users (if Node.js is installed)
node scripts/download_images.js

# For Linux/macOS users
chmod +x scripts/download_images.sh && ./scripts/download_images.sh

# For Windows PowerShell users
.\scripts\download_images.ps1
```

### Advanced Usage

**Custom Configuration (Node.js):**
Edit the CONFIG object in `download_images.js` to modify:
- Timeout values
- Concurrent download limits
- User agent strings
- Output directories

**Verbose Output (PowerShell):**
```powershell
.\scripts\download_images.ps1 -Verbose
```

**Force Overwrite (PowerShell):**
```powershell
.\scripts\download_images.ps1 -Force
```

## Troubleshooting

### Common Issues

**1. wget not found**
```bash
# Install wget using your package manager
# Windows: choco install wget
# macOS: brew install wget
# Linux: sudo apt install wget
```

**2. Permission denied (Bash)**
```bash
chmod +x scripts/download_images.sh
```

**3. PowerShell execution policy**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**4. Node.js timeout errors**
Increase timeout values in the CONFIG object or check network connection.

**5. No images found**
- Check if the website is accessible
- Verify URL patterns in the script
- Review the download log for specific errors

### Debug Mode

**Enable verbose logging:**
- Bash: Set `set -x` at the top of the script
- PowerShell: Use `-Verbose` flag
- Node.js: Set `DEBUG=1` environment variable

## Script Maintenance

### Updating URL Patterns
If the website structure changes, update the page arrays in each script:

```javascript
// Node.js example
const pages = [
  '',
  'about-us/',
  'category/fashion/',
  'contact-us/',
  'new-page/'  // Add new pages here
];
```

### Adding New Categories
1. Create new directory in categorization logic
2. Add patterns for the new category
3. Update TypeScript interface if needed

### Customizing File Naming
Modify the categorization functions in each script to change how files are renamed and organized.

## Security Considerations

- Scripts use standard User-Agent strings to appear as regular browsers
- No authentication or cookies are handled
- All downloads are from public website content only
- Temporary files are cleaned up automatically

## Performance Optimization

### For Large Websites
- Adjust recursion levels in wget scripts
- Modify concurrent download limits in Node.js script
- Use specific page lists instead of full site crawling

### Network Optimization
- Increase timeout values for slow connections
- Reduce concurrent downloads for bandwidth-limited environments
- Implement retry logic for failed downloads

## Contributing

When modifying scripts:
1. Test on your target platform
2. Update this README with any new features
3. Maintain consistency across all script versions
4. Add error handling for new functionality

## Support

For issues or questions:
1. Check the generated log files for error details
2. Review the troubleshooting section above
3. Verify all requirements are installed
4. Test with a simpler script version (Node.js is often most reliable)

---

**Note:** These scripts are designed specifically for the New Atlantic website. For other websites, you may need to modify URL patterns, categorization logic, and parsing rules.
