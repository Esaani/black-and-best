import { notFound } from 'next/navigation'
import { getRateCard } from '@/lib/data/ratecards'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props) {
  const rateCard = getRateCard(params.slug)
  
  if (!rateCard) {
    return {
      title: 'Rate Card Not Found - Black & Best',
    }
  }

  return {
    title: `${rateCard.title} - Black & Best`,
    description: rateCard.description,
  }
}

export default function RateCardSlugPage({ params }: Props) {
  const rateCard = getRateCard(params.slug)

  if (!rateCard) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/ratecards"
          className="text-accent-100 hover:underline mb-6 inline-block"
        >
          ← Back to Rate Cards
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-center">{rateCard.title}</h1>
        <p className="text-center text-gray-600 mb-12">{rateCard.description}</p>
        
        {rateCard.packages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rateCard.packages.map((pkg) => (
              <div
                key={pkg.id}
                id={pkg.slug}
                className="border-2 border-accent-100/20 rounded-lg p-6 hover:border-accent-100 transition-all duration-300 hover:shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-3">{pkg.name}</h2>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <p className="text-accent-100 text-2xl font-bold mb-4">
                  {pkg.price}
                </p>
                
                {pkg.duration && (
                  <p className="text-sm text-gray-500 mb-4">
                    Duration: {pkg.duration}
                  </p>
                )}
                
                {pkg.features && pkg.features.length > 0 && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Features:</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {pkg.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {pkg.deliverables && pkg.deliverables.length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Deliverables:</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {pkg.deliverables.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No packages available. Please contact us for pricing.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

