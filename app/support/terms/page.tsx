export const metadata = {
  title: 'Terms & Conditions - Black & Best',
  description: 'Terms and conditions',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Service Agreement</h2>
            <p className="text-gray-600">
              By booking our services, you agree to these terms and conditions.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Payment Terms</h2>
            <p className="text-gray-600">
              Payment terms will be discussed during booking. A deposit may be required.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Cancellation Policy</h2>
            <p className="text-gray-600">
              Cancellations must be made at least 48 hours in advance for a full refund.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Image Rights</h2>
            <p className="text-gray-600">
              All images remain the property of Black & Best unless otherwise agreed.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

