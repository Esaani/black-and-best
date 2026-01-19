import Link from 'next/link'

export const metadata = {
  title: 'Support - Black & Best',
  description: 'Get help and support',
}

export default function SupportPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Support</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/support/faqs"
            className="border-2 border-accent-100/20 rounded-lg p-8 hover:border-accent-100 transition-all duration-300 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <p className="text-gray-600">Frequently asked questions</p>
          </Link>
          <Link
            href="/support/terms"
            className="border-2 border-accent-100/20 rounded-lg p-8 hover:border-accent-100 transition-all duration-300 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>
            <p className="text-gray-600">Read our terms and conditions</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

