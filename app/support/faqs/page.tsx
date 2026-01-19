export const metadata = {
  title: 'FAQs - Black & Best',
  description: 'Frequently asked questions',
}

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer professional photography and video production services.',
  },
  {
    question: 'How do I book a session?',
    answer: 'You can book a session through our Book Me page or contact us directly.',
  },
  {
    question: 'What are your rates?',
    answer: 'Please check our Rate Cards page for detailed pricing information.',
  },
]

export default function FAQsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-accent-100/20 rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

