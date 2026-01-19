import { notFound } from 'next/navigation'
import { getGalleryCategory } from '@/lib/data/gallery'
import OptimizedImage from '@/components/Image'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props) {
  const category = getGalleryCategory(params.slug)
  
  if (!category) {
    return {
      title: 'Gallery Not Found - Black & Best',
    }
  }

  return {
    title: `${category.name} - Gallery - Black & Best`,
    description: category.description || `View our ${category.name} gallery`,
  }
}

export default function GallerySlugPage({ params }: Props) {
  const category = getGalleryCategory(params.slug)

  if (!category) {
    notFound()
  }

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
          {category.name}
        </h1>
        {category.description && (
          <p className="text-center text-gray-600 mb-12">{category.description}</p>
        )}
        
        {category.images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.images.map((image) => (
              <div
                key={image.id}
                className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden group cursor-pointer"
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
              No images available yet. Check back soon!
            </p>
            <p className="text-sm text-gray-400">
              To add images, edit the gallery data in{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">lib/data/gallery.ts</code>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

