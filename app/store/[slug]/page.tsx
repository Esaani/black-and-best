import { notFound } from 'next/navigation'
import { getProductBySlug } from '@/lib/data/products'
import OptimizedImage from '@/components/Image'
import Link from 'next/link'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  
  if (!product) {
    return {
      title: 'Product Not Found - Black & Best',
    }
  }

  return {
    title: `${product.name} - Store - Black & Best`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/store"
          className="text-accent-100 hover:underline mb-6 inline-block"
        >
          ← Back to Store
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square relative bg-gray-200 rounded-lg overflow-hidden">
            {product.image ? (
              <OptimizedImage
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No image available
              </div>
            )}
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl text-accent-100 font-bold mb-6">
              {product.currency} {product.price}
            </p>
            <p className="text-gray-600 mb-8">{product.description}</p>
            
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Available Options</h2>
                <div className="space-y-3">
                  {product.variants.map((variant, index) => (
                    <div
                      key={index}
                      className="border-2 border-accent-100/20 rounded-lg p-4"
                    >
                      <h3 className="font-semibold mb-1">{variant.name}</h3>
                      <p className="text-accent-100 font-bold">
                        {product.currency} {variant.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button className="w-full bg-accent-100 text-white py-3 rounded-lg font-semibold hover:bg-accent-200 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

