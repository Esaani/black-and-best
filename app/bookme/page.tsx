'use client'

import { useState } from 'react'

export default function BookMePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Booking request sent successfully!',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send booking request. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Book a Session</h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Fill out the form below to book your photography or video session
        </p>
        
        {submitStatus.type && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success'
                ? 'bg-green-100 text-green-800 border border-green-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 border-2 border-accent-100/20 rounded-lg p-8">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-accent-100/20 rounded-lg focus:outline-none focus:border-accent-100"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-accent-100/20 rounded-lg focus:outline-none focus:border-accent-100"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-accent-100/20 rounded-lg focus:outline-none focus:border-accent-100"
              required
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2">
              Service Type *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-accent-100/20 rounded-lg focus:outline-none focus:border-accent-100"
              required
            >
              <option value="">Select a service</option>
              <option value="photography">Photography</option>
              <option value="videography">Videography</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-accent-100/20 rounded-lg focus:outline-none focus:border-accent-100"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent-100 text-white py-3 rounded-lg font-semibold hover:bg-accent-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
          </button>
        </form>
      </div>
    </div>
  )
}
