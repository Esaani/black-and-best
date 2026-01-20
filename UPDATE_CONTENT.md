# How to Update Content in Your Website

This guide explains how to update pictures and information in your Black & Best website.

## 📸 Updating Images

### Method 1: Add Images to Public Folder (Recommended for Static Content)

1. **Add Product Images:**
   - Put images in `public/images/products/`
   - Update `lib/data/products.ts` with image paths
   - Example:
   ```typescript
   {
     id: '1',
     name: 'Wedding Preset',
     image: '/images/products/wedding-preset.jpg', // Add your image path here
     // ... other fields
   }
   ```

2. **Add Gallery Images:**
   - Put images in `public/images/gallery/[category-name]/`
   - Update `lib/data/gallery.ts`:
   ```typescript
   wedding: {
     slug: 'wedding',
     name: 'Wedding',
     images: [
       { 
         id: '1', 
         src: '/images/gallery/wedding/wedding-1.jpg', // Add your image
         alt: 'Wedding photo 1' 
       },
       { 
         id: '2', 
         src: '/images/gallery/wedding/wedding-2.jpg', 
         alt: 'Wedding photo 2' 
       },
     ],
   }
   ```

3. **Image Path Rules:**
   - ✅ Use: `/images/products/image.jpg` (starts with `/images/`)
   - ❌ Don't use: `/public/images/products/image.jpg` (don't include `/public/`)

### Method 2: Use Sanity CMS (Recommended for Dynamic Content)

1. **Upload images to Sanity:**
   - Go to `/studio` in your browser
   - Create a new document (e.g., Product or Gallery item)
   - Upload images through Sanity's image field
   - Images are automatically hosted on Sanity CDN

2. **Query images from Sanity:**
   - Images from Sanity are automatically optimized
   - Use `urlFor()` helper to generate image URLs

## 📝 Updating Information

### 1. Update Products (`lib/data/products.ts`)

Edit the products array to add, remove, or modify products:

```typescript
export const products: Product[] = [
  {
    id: '1',
    name: 'Wedding Preset',           // ← Update name
    description: 'Professional...',    // ← Update description
    price: '200.00',                   // ← Update price
    currency: 'GHS',                   // ← Update currency
    image: '/images/products/wedding-preset.jpg',
    category: 'preset',
    slug: 'wedding-preset',
    // Add variants if needed
    variants: [
      { name: 'Option 1', price: '200.00' },
      { name: 'Option 2', price: '250.00' },
    ],
  },
  // Add more products here
]
```

### 2. Update Gallery (`lib/data/gallery.ts`)

Edit gallery categories and images:

```typescript
export const galleryCategories: Record<string, GalleryCategory> = {
  wedding: {
    slug: 'wedding',
    name: 'Wedding',                              // ← Update name
    description: 'Beautiful wedding photography', // ← Update description
    images: [
      { 
        id: '1', 
        src: '/images/gallery/wedding/wedding-1.jpg', 
        alt: 'Wedding photo 1',                   // ← Update alt text
        title: 'Wedding Title'                    // ← Optional title
      },
      // Add more images
    ],
  },
  // Add new categories or edit existing ones
}
```

### 3. Update Rate Cards (`lib/data/ratecards.ts`)

Edit pricing information:

```typescript
export const rateCards: Record<string, RateCard> = {
  ghanaratecard: {
    id: 'ghana',
    slug: 'ghanaratecard',
    title: 'Ghana Rate Card',                    // ← Update title
    description: 'Pricing for services...',      // ← Update description
    packages: [
      {
        id: 'diamond',
        name: 'Diamond',                          // ← Update package name
        price: '5,000.00',                        // ← Update price
        currency: 'GHS',
        features: [                               // ← Update features
          'Full day coverage',
          'Multiple locations',
          // Add or remove features
        ],
        duration: 'Full day',                     // ← Update duration
        deliverables: [                           // ← Update deliverables
          'High-resolution images',
          'Online gallery',
        ],
      },
    ],
  },
}
```

### 4. Update Posts (Using Sanity CMS)

1. Go to `http://localhost:3000/studio` (or your deployed URL)
2. Click "Create" → "Post"
3. Fill in:
   - Title
   - Slug (auto-generated from title)
   - Published date
   - Image (upload)
   - Body content (rich text editor)
4. Click "Publish"
5. Post appears automatically on `/posts` page

### 5. Update Site Metadata (`app/layout.tsx`)

Update global site information:

```typescript
export const metadata = {
  title: 'Black & Best',                          // ← Update site title
  description: 'Professional photography...',     // ← Update description
  // ... other metadata
}
```

### 6. Update Footer/Contact Info (`components/Footer.tsx`)

Update social media links and email:

```typescript
const socialLinks = [
  {
    id: 2,
    name: 'Instagram',
    link: 'https://www.instagram.com/your-instagram/', // ← Update link
  },
  {
    id: 5,
    name: 'Mail',
    link: 'mailto:your-email@gmail.com',               // ← Update email
  },
]
```

## 🚀 After Making Changes

1. **Save your files**
2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update content: [describe changes]"
   git push origin main
   ```

3. **If using Vercel:**
   - Changes auto-deploy when pushed to GitHub
   - Wait for deployment to complete
   - Visit your live site to see changes

4. **If running locally:**
   - Changes appear immediately in development mode
   - For production, run: `npm run build`

## 📁 File Locations Summary

| Content Type | File Location |
|--------------|--------------|
| Products | `lib/data/products.ts` |
| Gallery | `lib/data/gallery.ts` |
| Rate Cards | `lib/data/ratecards.ts` |
| Product Images | `public/images/products/` |
| Gallery Images | `public/images/gallery/[category]/` |
| Posts | Sanity CMS (via `/studio`) |
| Site Metadata | `app/layout.tsx` |
| Footer/Contact | `components/Footer.tsx` |
| Navigation | `components/Nav.tsx` |

## 💡 Tips

1. **Image Optimization:**
   - Use JPEG for photos (smaller file size)
   - Use PNG for graphics with transparency
   - Recommended sizes:
     - Products: 800x800px or larger
     - Gallery: 1200x1200px or larger

2. **Testing Changes:**
   - Always test locally first: `npm run dev`
   - Check all pages that use updated content
   - Verify images load correctly

3. **Version Control:**
   - Commit changes frequently
   - Use descriptive commit messages
   - Keep images under reasonable file sizes

4. **Sanity CMS:**
   - Use Sanity for frequently changing content (posts, dynamic products)
   - Use data files for static content (pricing, basic info)
   - Sanity images are automatically optimized and hosted

## 🔄 Quick Update Examples

### Add a New Product:
```typescript
// In lib/data/products.ts
{
  id: '5',
  name: 'New Product Name',
  description: 'Product description',
  price: '300.00',
  currency: 'GHS',
  image: '/images/products/new-product.jpg',
  category: 'preset',
  slug: 'new-product',
}
```

### Add a Gallery Image:
```typescript
// In lib/data/gallery.ts
wedding: {
  // ... existing fields
  images: [
    ...existingImages,
    { 
      id: 'new-image-id', 
      src: '/images/gallery/wedding/new-wedding-photo.jpg', 
      alt: 'New wedding photo' 
    },
  ],
}
```

### Update Pricing:
```typescript
// In lib/data/ratecards.ts
packages: [
  {
    name: 'Diamond',
    price: '10,000.00',  // ← Change price here
    // ... rest of package
  },
]
```

## Need Help?

- Check `README_IMAGES.md` for detailed image instructions
- Check `GROQ_QUERIES.md` for Sanity query examples
- Sanity Studio at `/studio` for CMS content management

