export interface GalleryImage {
  id: string
  src: string
  alt: string
  title?: string
}

export interface GalleryCategory {
  slug: string
  name: string
  description?: string
  images: GalleryImage[]
}

export const galleryCategories: Record<string, GalleryCategory> = {
  wedding: {
    slug: 'wedding',
    name: 'Wedding',
    description: 'Beautiful wedding photography',
    images: [
      { id: '1', src: '/images/gallery/wedding/wedding-1.jpg', alt: 'Wedding photo 1' },
      { id: '2', src: '/images/gallery/wedding/wedding-2.jpg', alt: 'Wedding photo 2' },
      { id: '3', src: '/images/gallery/wedding/wedding-3.jpg', alt: 'Wedding photo 3' },
    ],
  },
  studioshoots: {
    slug: 'studioshoots',
    name: 'Studio Shoots',
    description: 'Professional studio photography',
    images: [
      { id: '1', src: '/images/gallery/studioshoots/studio-1.jpg', alt: 'Studio shoot 1' },
      { id: '2', src: '/images/gallery/studioshoots/studio-2.jpg', alt: 'Studio shoot 2' },
    ],
  },
  beautyshoots: {
    slug: 'beautyshoots',
    name: 'Beauty Shoots',
    description: 'Beauty and portrait photography',
    images: [
      { id: '1', src: '/images/gallery/beautyshoots/beauty-1.jpg', alt: 'Beauty shoot 1' },
      { id: '2', src: '/images/gallery/beautyshoots/beauty-2.jpg', alt: 'Beauty shoot 2' },
    ],
  },
  hairshoots: {
    slug: 'hairshoots',
    name: 'Hair Shoots',
    description: 'Hair styling photography',
    images: [],
  },
  maternityshoots: {
    slug: 'maternityshoots',
    name: 'Maternity Shoots',
    description: 'Maternity photography',
    images: [],
  },
  lifestyleshoots: {
    slug: 'lifestyleshoots',
    name: 'Lifestyle Shoots',
    description: 'Lifestyle photography',
    images: [],
  },
  prebirthdays: {
    slug: 'prebirthdays',
    name: 'Pre-Birthdays',
    description: 'Pre-birthday celebration photography',
    images: [],
  },
  boudoir: {
    slug: 'boudoir',
    name: 'Boudoir',
    description: 'Boudoir photography',
    images: [],
  },
  productshoots: {
    slug: 'productshoots',
    name: 'Product Shoots',
    description: 'Product photography',
    images: [],
  },
  home: {
    slug: 'home',
    name: 'Home',
    description: 'Home photography',
    images: [],
  },
  'location-shoot': {
    slug: 'location-shoot',
    name: 'Location Shoot',
    description: 'On-location photography',
    images: [
      { id: '1', src: '/images/gallery/location-shoot/location-1.jpg', alt: 'Location shoot 1' },
      { id: '2', src: '/images/gallery/location-shoot/location-2.jpg', alt: 'Location shoot 2' },
    ],
  },
}

export function getGalleryCategory(slug: string): GalleryCategory | undefined {
  return galleryCategories[slug]
}

export function getAllGalleryCategories(): GalleryCategory[] {
  return Object.values(galleryCategories)
}

