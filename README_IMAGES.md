# Adding Images to Your Website

## Directory Structure

Create the following directories in the `public` folder:

```
public/
├── images/
│   ├── products/
│   │   ├── wedding-preset.jpg
│   │   ├── melanin-luts.jpg
│   │   ├── light-skin-luts.jpg
│   │   └── one-on-one-class.jpg
│   └── gallery/
│       ├── wedding/
│       │   ├── wedding-1.jpg
│       │   ├── wedding-2.jpg
│       │   └── ...
│       ├── studioshoots/
│       ├── beautyshoots/
│       └── ...
```

## Adding Product Images

1. Add product images to `public/images/products/`
2. Update product data in `lib/data/products.ts` with correct image paths
3. Image paths should start with `/images/` (not `/public/`)

Example:
```typescript
{
  image: '/images/products/wedding-preset.jpg',
}
```

## Adding Gallery Images

1. Add gallery images to `public/images/gallery/[category-name]/`
2. Update gallery data in `lib/data/gallery.ts`:

```typescript
wedding: {
  slug: 'wedding',
  name: 'Wedding',
  images: [
    { 
      id: '1', 
      src: '/images/gallery/wedding/wedding-1.jpg', 
      alt: 'Wedding photo 1' 
    },
    { 
      id: '2', 
      src: '/images/gallery/wedding/wedding-2.jpg', 
      alt: 'Wedding photo 2' 
    },
  ],
},
```

## Image Optimization Tips

- Use JPEG for photos (smaller file size)
- Use PNG for graphics/logos with transparency
- Recommended sizes:
  - Product images: 800x800px or larger (square)
  - Gallery images: 1200x1200px or larger (square)
  - Hero images: 1920x1080px (16:9 ratio)

## Using External Images

If you want to use external images (e.g., from a CDN), update the image paths directly in the data files:

```typescript
{
  src: 'https://example.com/image.jpg',
}
```

The `OptimizedImage` component will handle both local and external images automatically.

