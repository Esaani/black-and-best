# Gallery Images Directory

Add your gallery images here, organized by category.

## Directory Structure

```
public/images/gallery/
├── wedding/
│   ├── wedding-1.jpg
│   ├── wedding-2.jpg
│   └── wedding-3.jpg
├── studioshoots/
│   ├── studio-1.jpg
│   └── studio-2.jpg
├── beautyshoots/
│   ├── beauty-1.jpg
│   └── beauty-2.jpg
├── hairshoots/
├── maternityshoots/
├── lifestyleshoots/
├── prebirthdays/
├── boudoir/
├── productshoots/
├── home/
└── location-shoot/
    ├── location-1.jpg
    └── location-2.jpg
```

## How to Add Images

1. **Create category folder** (if it doesn't exist)
   - Example: `public/images/gallery/wedding/`

2. **Add your images** to the folder
   - Use descriptive names: `wedding-1.jpg`, `wedding-2.jpg`, etc.
   - Recommended format: JPEG for photos
   - Recommended size: 1200x1200px or larger

3. **Update gallery data** in `lib/data/gallery.ts`:
   ```typescript
   wedding: {
     slug: 'wedding',
     name: 'Wedding',
     images: [
       { id: '1', src: '/images/gallery/wedding/wedding-1.jpg', alt: 'Wedding photo 1' },
       { id: '2', src: '/images/gallery/wedding/wedding-2.jpg', alt: 'Wedding photo 2' },
     ],
   }
   ```

4. **Image paths** should start with `/images/gallery/` (not `/public/`)

## Using External Images

You can also use images from external URLs (CDN, etc.):

```typescript
images: [
  { 
    id: '1', 
    src: 'https://example.com/image.jpg', 
    alt: 'Description' 
  },
]
```

## Image Optimization Tips

- Use JPEG format for photos (smaller file size)
- Use PNG for graphics with transparency
- Recommended sizes:
  - Gallery images: 1200x1200px or larger
  - Keep file sizes under 2MB for faster loading
- The `OptimizedImage` component will handle optimization automatically

