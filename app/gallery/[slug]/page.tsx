import { notFound } from 'next/navigation'
import { getGalleriesByCategory } from '@/lib/sanity/queries'
import OptimizedImage from '@/components/Image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

type Props = {
  params: Promise<any>
}

// Map slug to category value
const slugToCategory: Record<string, string> = {
  'wedding': 'wedding',
  'studioshoots': 'studioshoots',
  'beautyshoots': 'beautyshoots',
  'hairshoots': 'hairshoots',
  'maternityshoots': 'maternityshoots',
  'lifestyleshoots': 'lifestyleshoots',
  'prebirthdays': 'prebirthdays',
  'boudoir': 'boudoir',
  'productshoots': 'productshoots',
  'home': 'home',
  'location-shoot': 'location-shoot',
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const categoryValue = slugToCategory[slug]
  
  if (!categoryValue) {
    return {
      title: 'Gallery Not Found - Black & Best',
    }
  }

  const galleries = await getGalleriesByCategory(categoryValue)
  const firstGallery = galleries?.[0]

  return {
    title: `${firstGallery?.title || slug} - Gallery - Black & Best`,
    description: firstGallery?.description || `View our ${slug} gallery`,
  }
}

export default async function GallerySlugPage({ params }: Props) {
  const { slug } = await params
  const categoryValue = slugToCategory[slug]

  if (!categoryValue) {
    notFound()
  }

  const galleries = await getGalleriesByCategory(categoryValue)

  if (!galleries || galleries.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/gallery"
            className="text-accent-100 hover:underline mb-6 inline-block"
          >
            ← Back to Gallery
          </Link>
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
              No images available yet. Check back soon!
            </p>
            <p className="text-sm text-gray-400">
              Create a gallery in{' '}
              <Link href="/studio" className="text-accent-100 hover:underline">
                Sanity Studio
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Collect all images from all galleries in this category
  const allImages = galleries.flatMap((gallery) =>
    gallery.images?.map((img: any, idx: number) => ({
      id: `${gallery._id}-${idx}`,
      image: img.image,
      alt: img.alt || gallery.title,
      title: img.title,
    })) || []
  )

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/gallery"
          className="text-accent-100 hover:underline mb-6 inline-block"
        >
          ← Back to Gallery
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-center capitalize">
          {galleries[0]?.category || slug}
        </h1>
        {galleries[0]?.description && (
          <p className="text-center text-gray-600 mb-12">{galleries[0].description}</p>
        )}
        
        {allImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allImages.map((item) => (
              <div
                key={item.id}
                className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
              >
                {item.image && (
                  <OptimizedImage
                    src={urlFor(item.image).width(800).height(800).url()}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
              No images available yet. Check back soon!
            </p>
            <p className="text-sm text-gray-400">
              Add images in{' '}
              <Link href="/studio" className="text-accent-100 hover:underline">
                Sanity Studio
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

