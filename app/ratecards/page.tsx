import Link from 'next/link'

const rateCardTypes = [
  { slug: 'ghanaratecard', title: 'GHANA RATECARD' },
  { slug: 'usaratecard', title: 'USA RATECARD' },
  { slug: 'videoratecard', title: 'VIDEO RATECARD' },
]

export const metadata = {
  title: 'Rate Cards - Black & Best',
  description: 'View our pricing and rate cards',
}

export default function RateCardsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Rate Cards</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Choose a rate card to view pricing
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rateCardTypes.map((type) => (
            <Link
              key={type.slug}
              href={`/ratecards/${type.slug}`}
              className="border-2 border-accent-100/20 rounded-lg p-8 hover:border-accent-100 transition-all duration-300 hover:shadow-lg text-center"
            >
              <h2 className="text-2xl font-semibold mb-4">{type.title}</h2>
              <p className="text-gray-600">View pricing details</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

