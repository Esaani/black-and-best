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
├── app/                    # Next.js App Router (create your pages here)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── store/             # Store pages
│   ├── gallery/           # Gallery pages
│   ├── ratecards/         # Rate card pages
│   ├── bookme/            # Booking pages
│   └── support/           # Support pages
├── components/            # React components (create here)
├── lib/                   # Utility functions
│   └── utils.ts          # Helper functions
├── public/                # Static assets (images, fonts, etc.)
├── _next/                 # Built files (don't edit)
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Next Steps

1. **Create Components**: Start building your components in the `components/` directory
2. **Create Pages**: Add pages in the `app/` directory following Next.js App Router structure
3. **Add Styling**: Use Tailwind CSS classes or extend `tailwind.config.js`
4. **Add Content**: Add your content directly in components or use static data

## Building Components

Based on the built files, you'll need to create:

- **Navigation Component** (`components/Nav.tsx`)
- **Gallery Components** (`components/Gallery/`)
- **Rate Card Components** (`components/RateCards/`)
- **Store Components** (`components/Store/`)
- **Footer Component** (`components/Footer.tsx`)

## Important Notes

- The `_next` folder contains the **built/exported** static files - don't edit these
- You need to create the **source code** in the `app/` and `components/` directories
- Add your images to the `public/` directory or use external image URLs

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


