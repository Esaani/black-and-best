export interface RateCardPackage {
  id: string
  name: string
  slug: string
  description: string
  price: string
  currency: 'GHS' | 'USD'
  features: string[]
  duration?: string
  deliverables?: string[]
}

export interface RateCard {
  id: string
  slug: string
  title: string
  description: string
  packages: RateCardPackage[]
}

export const rateCards: Record<string, RateCard> = {
  ghanaratecard: {
    id: 'ghana',
    slug: 'ghanaratecard',
    title: 'Ghana Rate Card',
    description: 'Pricing for services in Ghana (GHS)',
    packages: [
      {
        id: 'diamond',
        name: 'Diamond',
        slug: 'diamondghs',
        description: 'Premium package with full coverage',
        price: 'Contact for pricing',
        currency: 'GHS',
        features: [
          'Full day coverage',
          'Multiple locations',
          'Professional editing',
          'All digital files',
          'Online gallery',
        ],
        duration: 'Full day',
        deliverables: ['High-resolution images', 'Online gallery', 'Print release'],
      },
      {
        id: 'platinum',
        name: 'Platinum',
        slug: 'platinumghs',
        description: 'Standard premium package',
        price: 'Contact for pricing',
        currency: 'GHS',
        features: [
          'Half day coverage',
          'Professional editing',
          'Digital files',
          'Online gallery',
        ],
        duration: 'Half day',
        deliverables: ['High-resolution images', 'Online gallery'],
      },
      {
        id: 'golden',
        name: 'Golden',
        slug: 'goldenghs',
        description: 'Basic package',
        price: 'Contact for pricing',
        currency: 'GHS',
        features: [
          'Basic coverage',
          'Standard editing',
          'Digital files',
        ],
        duration: '2-3 hours',
        deliverables: ['Digital files'],
      },
      // Add more packages as needed
    ],
  },
  usaratecard: {
    id: 'usa',
    slug: 'usaratecard',
    title: 'USA Rate Card',
    description: 'Pricing for services in USA (USD)',
    packages: [
      {
        id: '7stars',
        name: '7 Stars Platinum',
        slug: '7goldenplatinumusd',
        description: 'Premium package',
        price: 'Contact for pricing',
        currency: 'USD',
        features: [
          'Full day coverage',
          'Multiple locations',
          'Professional editing',
          'All digital files',
        ],
        duration: 'Full day',
        deliverables: ['High-resolution images', 'Online gallery'],
      },
      {
        id: '5stars',
        name: '5 Stars Platinum',
        slug: '5goldenplatinumusd',
        description: 'Standard package',
        price: 'Contact for pricing',
        currency: 'USD',
        features: [
          'Half day coverage',
          'Professional editing',
          'Digital files',
        ],
        duration: 'Half day',
        deliverables: ['Digital files'],
      },
      // Add more packages as needed
    ],
  },
  videoratecard: {
    id: 'video',
    slug: 'videoratecard',
    title: 'Video Rate Card',
    description: 'Pricing for video production services',
    packages: [
      {
        id: 'video-premium',
        name: 'Premium Video Package',
        slug: 'premium-video',
        description: 'Full video production service',
        price: 'Contact for pricing',
        currency: 'GHS',
        features: [
          'Full day shooting',
          'Professional editing',
          'Color grading',
          'Music licensing',
          'Multiple formats',
        ],
        duration: 'Full day',
        deliverables: ['4K video', '1080p versions', 'Social media clips'],
      },
      {
        id: 'video-standard',
        name: 'Standard Video Package',
        slug: 'standard-video',
        description: 'Standard video production',
        price: 'Contact for pricing',
        currency: 'GHS',
        features: [
          'Half day shooting',
          'Professional editing',
          'Color grading',
        ],
        duration: 'Half day',
        deliverables: ['1080p video', 'Social media clips'],
      },
      // Add more packages as needed
    ],
  },
}

export function getRateCard(slug: string): RateCard | undefined {
  return rateCards[slug]
}

export function getAllRateCards(): RateCard[] {
  return Object.values(rateCards)
}

