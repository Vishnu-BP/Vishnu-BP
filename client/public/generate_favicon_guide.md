# Favicon Generation Guide

I've created a new SVG favicon (`favicon.svg`) with a modern design that matches your portfolio theme.

## Current Favicon Design

- **Gradient Background**: Blue → Purple → Cyan (matching portfolio colors)
- **Monogram**: Bold "VB" initials in white
- **Rounded Corners**: Modern 7px radius
- **Optimized**: Simple design that's readable at small sizes

## To Generate PNG Version (Optional)

If you want to generate a PNG version from the SVG, you can:

### Option 1: Online Converter (Easiest)
1. Visit [favicon.io](https://favicon.io/favicon-converter/) or [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload `favicon.svg`
3. Download the PNG versions
4. Replace `favicon.png` in the `public` folder

### Option 2: Use Image Editor
1. Open `favicon.svg` in any image editor (Photoshop, GIMP, etc.)
2. Export as PNG at 32x32, 64x64, and other sizes
3. Save as `favicon.png`

### Option 3: Command Line (if ImageMagick is installed)
```bash
cd client/public
magick favicon.svg -resize 32x32 favicon.png
```

## Current Setup

The layout.tsx is configured to use:
- **SVG favicon** (primary - modern browsers)
- **PNG fallback** (for older browsers)

The SVG favicon will automatically scale perfectly at any size!

