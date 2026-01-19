export interface Product {
  id: string
  name: string
  description: string
  price: string
  currency: 'GHS' | 'USD'
  image: string
  category: 'preset' | 'luts' | 'class' | 'other'
  slug: string
  variants?: {
    name: string
    price: string
  }[]
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wedding Preset',
    description: 'Professional wedding photography presets',
    price: '200.00',
    currency: 'GHS',
    image: '/images/products/wedding-preset.jpg',
    category: 'preset',
    slug: 'wedding-preset',
  },
  {
    id: '2',
    name: 'Melanin Retouching Luts',
    description: 'Professional LUTs for melanin skin retouching',
    price: '280.00',
    currency: 'GHS',
    image: '/images/products/melanin-luts.jpg',
    category: 'luts',
    slug: 'melanin-retouching-luts',
  },
  {
    id: '3',
    name: 'Light Skin Retouching Luts',
    description: 'Professional LUTs for light skin retouching',
    price: '240.00',
    currency: 'GHS',
    image: '/images/products/light-skin-luts.jpg',
    category: 'luts',
    slug: 'light-skin-retouching-luts',
  },
  {
    id: '4',
    name: 'One on One Class',
    description: 'Personalized photography and video production classes',
    price: '5,000.00',
    currency: 'GHS',
    image: '/images/products/one-on-one-class.jpg',
    category: 'class',
    slug: 'one-on-one-class-course',
    variants: [
      { name: 'One on One Class - 3 weeks', price: '5,000.00' },
      { name: 'One on One Class - 1 month', price: '7,000.00' },
      { name: 'One on One Class - 2 months', price: '10,000.00' },
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((product) => product.category === category)
}

