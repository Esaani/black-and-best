# Black & Best Website

A Next.js website for Black & Best - Professional photography & video production company.

## Tech Stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Configure environment variables:
```bash
# Copy the example file and update with your Sanity credentials
cp env.example .env.local
```

Then edit `.env.local` and add your Sanity project details:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
# or
yarn build
```

### Start Production Server

```bash
npm start
# or
yarn start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── store/             # Store pages
│   ├── gallery/           # Gallery pages
│   ├── ratecards/         # Rate card pages
│   ├── bookme/            # Booking pages
│   └── support/           # Support pages
├── components/            # React components
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Global styles
```

## Features

- Gallery showcase
- Rate cards display
- Store/e-commerce
- Booking system
- Responsive design
- SEO optimized

## Notes

- The current `_next` folder contains the built/exported static files
- You'll need to create the source code in the `app` directory

