import Link from 'next/link'

const galleryCategories = [
  { slug: 'wedding', name: 'Wedding' },
  { slug: 'studioshoots', name: 'Studio Shoots' },
  { slug: 'beautyshoots', name: 'Beauty Shoots' },
  { slug: 'hairshoots', name: 'Hair Shoots' },
  { slug: 'maternityshoots', name: 'Maternity Shoots' },
  { slug: 'lifestyleshoots', name: 'Lifestyle Shoots' },
  { slug: 'prebirthdays', name: 'Pre-Birthdays' },
  { slug: 'boudoir', name: 'Boudoir' },
  { slug: 'productshoots', name: 'Product Shoots' },
  { slug: 'home', name: 'Home' },
  { slug: 'location-shoot', name: 'Location Shoot' },
]

export const metadata = {
  title: 'Gallery - Black & Best',
  description: 'View our photography and video portfolio',
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Explore our portfolio of work
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/gallery/${category.slug}`}
              className="aspect-square border-2 border-accent-100/20 rounded-lg p-6 flex items-center justify-center hover:border-accent-100 transition-colors hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-center capitalize">
                {category.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

