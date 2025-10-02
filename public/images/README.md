# Profile Images Directory

This directory contains profile images and other static assets for the portfolio website.

## File Guidelines

### Profile Photos
- **Recommended format**: `.jpg`, `.jpeg`, or `.webp` for best compression
- **Recommended size**: 400x400px to 800x800px (square aspect ratio preferred)
- **File naming**: Use descriptive names like `profile.jpg`, `profile-avatar.jpg`
- **File size**: Keep under 500KB for optimal loading times

### Supported Formats
- `.jpg` / `.jpeg` - Best for photographs
- `.png` - Best for images with transparency
- `.webp` - Modern format with excellent compression
- `.svg` - For vector graphics and icons

## Current Profile Image Setup

The portfolio currently references profile images in the data configuration:
- Path in code: `/images/profile.jpg` (recommended)
- Alternative: `/profile.jpg` (current setup)

## How to Add/Update Profile Photo

1. **Add your photo**: Place your profile image in this directory
2. **Optimize the image**: Ensure it's properly sized and compressed
3. **Update data.ts**: Update the image path in `src/lib/data.ts` if needed
4. **Test**: Verify the image loads correctly on the website

## Next.js Image Optimization

When using the Next.js `Image` component, images in the `public` directory are automatically optimized:
- Automatic resizing for different screen sizes
- Modern format conversion (WebP when supported)
- Lazy loading by default
- Blur placeholder support

## Example Usage

```typescript
// In your component
import Image from 'next/image';

<Image
  src="/images/profile.jpg"
  alt="Profile photo"
  width={400}
  height={400}
  priority
  className="rounded-full"
/>
```
