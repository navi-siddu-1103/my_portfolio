# Profile Photo Setup Guide

This guide helps you add and manage profile photos for your portfolio website.

## Quick Start

1. **Add your photo** to `public/images/` directory
2. **Name it** `profile.jpg` (or update the path in `src/lib/data.ts`)
3. **Optimize the image** for web (recommended: 400x400px, under 500KB)

## Current Setup

- ✅ **Directory created**: `public/images/` (for additional images)
- ✅ **Profile photo location**: Your profile photo is at `src/profile.jpg`
- ✅ **Data updated**: Configuration in `src/lib/data.ts` imports the image properly
- ✅ **Component updated**: Profile image component uses the imported image

## File Specifications

### Current Implementation
- **Active photo**: `src/profile.jpg` (imported as module)
- **Import method**: ES6 import in `src/lib/data.ts`
- **Type-safe**: Uses Next.js StaticImageData type

### Recommended Settings
- **Format**: `.jpg` or `.webp` for best compression
- **Dimensions**: 400x400px to 800x800px (square preferred)
- **File size**: Under 500KB for fast loading
- **Quality**: 80-90% JPEG compression

### Naming Convention
- Primary photo: `profile.jpg`
- Avatar version: `profile-avatar.jpg` (smaller, for headers/cards)
- Hero version: `profile-hero.jpg` (larger, for landing section)

## How to Replace Your Photo

### Method 1: Direct Replacement (Recommended)
```powershell
# Replace the existing photo in src directory
Copy-Item "path\to\your\new\photo.jpg" "src\profile.jpg"
```

### Method 2: Use Different Filename
1. Add your new photo to `src/` directory
2. Update the import in `src/lib/data.ts`:
```typescript
import profileImage from './your-new-photo.jpg';
```

### Method 3: Use Public Directory
1. Add your photo to `public/images/`
2. Update the data.ts to use public path:
```typescript
export const ABOUT_ME = {
  image: '/images/your-photo.jpg',
  // ...
};
```

## Image Optimization Tips

### Before Adding
- Crop to square aspect ratio (1:1)
- Resize to 400x400px or 800x800px
- Compress to reduce file size
- Ensure good lighting and professional appearance

### Tools for Optimization
- **Online**: TinyPNG, Squoosh.app
- **Desktop**: GIMP, Photoshop, Paint.NET
- **Mobile**: Canva, Snapseed

## Testing Your Photo

1. Start the development server:
```bash
npm run dev
```

2. Navigate to `http://localhost:3000`
3. Check the About section for your profile photo
4. Verify it loads correctly and looks professional

## Troubleshooting

### Photo Not Showing
- Check file path is correct in `src/lib/data.ts`
- Ensure file is in `public/images/` directory
- Verify file extension matches (case-sensitive)
- Clear browser cache and refresh

### Photo Too Large/Slow Loading
- Compress the image file
- Reduce dimensions to 400x400px
- Convert to `.webp` format for better compression

### Poor Quality
- Use higher resolution source image
- Avoid over-compression
- Ensure good lighting in original photo

## Next Steps

1. **Replace** the current photo with your professional headshot
2. **Test** the website to ensure everything loads correctly
3. **Optimize** for different screen sizes if needed
4. **Consider** adding multiple versions (avatar, hero) for different sections

---

**Current Photo Path**: `src/profile.jpg` (imported as module)
**Data Configuration**: `src/lib/data.ts` → `import profileImage from '../profile.jpg'`
