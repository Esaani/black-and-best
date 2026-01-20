import Link from 'next/link'
import { getAllGalleries } from '@/lib/sanity/queries'
import { urlFor } from '@/sanity/lib/image'
import OptimizedImage from '@/components/Image'

const galleryCategories = [
  { slug: 'wedding', name: 'Wedding', category: 'wedding' },
  { slug: 'studioshoots', name: 'Studio Shoots', category: 'studioshoots' },
  { slug: 'beautyshoots', name: 'Beauty Shoots', category: 'beautyshoots' },
  { slug: 'hairshoots', name: 'Hair Shoots', category: 'hairshoots' },
  { slug: 'maternityshoots', name: 'Maternity Shoots', category: 'maternityshoots' },
  { slug: 'lifestyleshoots', name: 'Lifestyle Shoots', category: 'lifestyleshoots' },
  { slug: 'prebirthdays', name: 'Pre-Birthdays', category: 'prebirthdays' },
  { slug: 'boudoir', name: 'Boudoir', category: 'boudoir' },
  { slug: 'productshoots', name: 'Product Shoots', category: 'productshoots' },
  { slug: 'home', name: 'Home', category: 'home' },
  { slug: 'location-shoot', name: 'Location Shoot', category: 'location-shoot' },
]

export const metadata = {
  title: 'Gallery - Black & Best',
  description: 'View our photography and video portfolio',
}

export default async function GalleryPage() {
  const allGalleries = await getAllGalleries()

  // Get featured image for each category
  const categoriesWithImages = galleryCategories.map((cat) => {
    const categoryGalleries = allGalleries?.filter((g: any) => g.category === cat.category) || []
    const firstImage = categoryGalleries[0]?.images?.[0]?.image
    
    return {
      ...cat,
      featuredImage: firstImage,
      hasImages: categoryGalleries.length > 0 && categoryGalleries[0].images?.length > 0,
    }
  })

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Explore our portfolio of work
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categoriesWithImages.map((category) => (
            <Link
              key={category.slug}
              href={`/gallery/${category.slug}`}
              className="aspect-square border-2 border-accent-100/20 rounded-lg overflow-hidden hover:border-accent-100 transition-colors hover:shadow-lg group relative"
            >
              {category.featuredImage ? (
                <div className="w-full h-full relative">
                  <OptimizedImage
                    src={urlFor(category.featuredImage).width(400).height(400).url()}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <h2 className="text-lg font-semibold text-white text-center capitalize px-4">
                      {category.name}
                    </h2>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <h2 className="text-lg font-semibold text-center capitalize px-4">
                    {category.name}
                  </h2>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

