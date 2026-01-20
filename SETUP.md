# Setup Instructions

## Quick Start Guide

### 1. Install Dependencies

```bash
npm install
```

or

```bash
yarn install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will be available at http://localhost:3000

## Project Structure

```
black-and-best/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Nav, Footer
│   ├── page.tsx           # Home page with posts
│   ├── globals.css        # Global Tailwind styles
│   ├── api/               # API routes
│   │   └── book/          # Booking form API
│   ├── store/             # Store/product pages
│   │   ├── page.tsx       # Store listing
│   │   └── [slug]/        # Individual product pages
│   ├── gallery/           # Gallery pages
│   │   ├── page.tsx       # Gallery listing
│   │   └── [slug]/        # Category gallery pages
│   ├── ratecards/         # Rate card pages
│   │   ├── page.tsx       # Rate cards listing
│   │   └── [slug]/        # Individual rate card pages
│   ├── posts/             # Blog posts (from Sanity)
│   │   ├── page.tsx       # Posts listing
│   │   └── [slug]/        # Individual post pages
│   ├── bookme/            # Booking pages
│   ├── studio/             # Sanity Studio (CMS)
│   │   └── [[...tool]]/   # Studio routes
│   └── support/           # Support pages
│       ├── page.tsx       # Support hub
│       ├── faqs/          # FAQs page
│       └── terms/         # Terms & Conditions
├── components/            # React components
│   ├── Nav.tsx            # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── Image.tsx          # Optimized image component
│   └── ScrollToTop.tsx    # Scroll to top button
├── lib/                   # Utility functions and data
│   ├── utils.ts           # Helper functions (cn, etc.)
│   ├── data/              # Static data files
│   │   ├── products.ts    # Product data
│   │   ├── gallery.ts     # Gallery data
│   │   └── ratecards.ts   # Rate card data
│   └── sanity/            # Sanity CMS utilities
│       ├── client.ts       # Sanity client
│       └── queries.ts     # GROQ queries
├── sanity/                # Sanity Studio configuration
│   ├── schemaTypes/       # Content schemas
│   │   ├── index.ts       # Schema exports
│   │   └── postType.ts    # Post schema
│   ├── lib/               # Sanity utilities
│   │   ├── client.ts      # Studio client
│   │   ├── image.ts       # Image URL builder
│   │   └── queries.ts    # Studio queries
│   ├── env.ts             # Environment variables
│   ├── structure.ts       # Studio structure
│   ├── sanity.config.ts   # Studio configuration
│   └── sanity.cli.ts      # CLI configuration
├── public/                # Static assets
│   └── images/            # Image assets
│       ├── products/      # Product images
│       └── gallery/       # Gallery images
├── .gitignore            # Git ignore rules
├── .npmrc                # npm configuration
├── env.example           # Environment variables template
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── postcss.config.js     # PostCSS configuration
├── README.md             # Main documentation
├── SETUP.md              # Setup instructions (this file)
├── UPDATE_CONTENT.md     # Content update guide
├── GROQ_QUERIES.md       # GROQ query examples
└── README_IMAGES.md      # Image upload guide
```

## Environment Variables

1. Copy the example file:
```bash
cp env.example .env.local
```

2. Add your Sanity credentials to `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Next Steps

1. **Configure Sanity**: Set up your Sanity project and add credentials
2. **Add Content**: 
   - Update products in `lib/data/products.ts`
   - Update gallery in `lib/data/gallery.ts`
   - Update rate cards in `lib/data/ratecards.ts`
   - Create posts via Sanity Studio at `/studio`
3. **Add Images**: Place images in `public/images/` directories
4. **Customize**: Edit components and pages to match your brand

## Content Management

- **Static Content**: Edit data files in `lib/data/`
- **Dynamic Content**: Use Sanity Studio at `/studio` route
- **Images**: Add to `public/images/` or upload via Sanity
- See `UPDATE_CONTENT.md` for detailed instructions

## Components Available

- ✅ **Navigation Component** (`components/Nav.tsx`) - Desktop & mobile navigation
- ✅ **Footer Component** (`components/Footer.tsx`) - Footer with social links
- ✅ **Image Component** (`components/Image.tsx`) - Optimized image component
- ✅ **ScrollToTop Component** (`components/ScrollToTop.tsx`) - Scroll button

## Important Notes

- The `_next` folder contains **built/exported** static files - don't edit these
- All source code is in the `app/` and `components/` directories
- Add images to `public/images/` or use Sanity CMS for image hosting
- Sanity Studio is accessible at `/studio` route when running the app
- Use `UPDATE_CONTENT.md` for detailed content update instructions

## Troubleshooting

### Port Already in Use
If port 3000 is busy, use:
```bash
npm run dev -- -p 3001
```

### Module Not Found
Make sure all dependencies are installed:
```bash
npm install
```


