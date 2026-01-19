import Link from 'next/link'
import { products } from '@/lib/data/products'
import OptimizedImage from '@/components/Image'

export const metadata = {
  title: 'Store - Black & Best',
  description: 'Browse our products and services',
}

export default function StorePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Store</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Browse our products and services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/store/${product.slug}`}
              className="group border-2 border-accent-100/20 rounded-lg overflow-hidden hover:border-accent-100 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-square relative bg-gray-200">
                {product.image ? (
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                  {product.description}
                </p>
                <p className="text-accent-100 font-bold">
                  {product.currency} {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

