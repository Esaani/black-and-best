import { groq } from 'next-sanity'
import { client } from '@/lib/sanity/client'

// Re-export queries from sanity/lib/queries
export * from '@/sanity/lib/queries'

// Helper function to fetch all posts
export async function getAllPosts() {
  return await client.fetch(groq`*[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    image,
    body
  }`)
}

// Helper function to get a single post by slug
export async function getPostBySlug(slug: string) {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      publishedAt,
      image,
      body
    }`,
    { slug }
  )
}

// Helper function to get posts ordered by date
export async function getPostsOrdered() {
  return await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      image
    }`
  )
}

// Gallery queries
export async function getAllGalleries() {
  return await client.fetch(
    groq`*[_type == "gallery"]{
      _id,
      title,
      slug,
      category,
      description,
      images,
      featured,
      publishedAt
    }`
  )
}

export async function getGalleryBySlug(slug: string) {
  return await client.fetch(
    groq`*[_type == "gallery" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      category,
      description,
      images[]{
        image,
        alt,
        title
      },
      featured,
      publishedAt
    }`,
    { slug }
  )
}

export async function getGalleriesByCategory(category: string) {
  return await client.fetch(
    groq`*[_type == "gallery" && category == $category]{
      _id,
      title,
      slug,
      category,
      description,
      images[]{
        image,
        alt,
        title
      },
      featured,
      publishedAt
    }`,
    { category }
  )
}

// Product queries
export async function getAllProducts() {
  return await client.fetch(
    groq`*[_type == "product"]{
      _id,
      name,
      slug,
      description,
      price,
      currency,
      image,
      category,
      variants,
      featured,
      publishedAt
    }`
  )
}

export async function getProductBySlug(slug: string) {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      slug,
      description,
      price,
      currency,
      image,
      category,
      variants,
      featured,
      publishedAt
    }`,
    { slug }
  )
}

// Rate Card queries
export async function getAllRateCards() {
  return await client.fetch(
    groq`*[_type == "rateCard"]{
      _id,
      title,
      slug,
      description,
      currency,
      packages,
      publishedAt
    }`
  )
}

export async function getRateCardBySlug(slug: string) {
  return await client.fetch(
    groq`*[_type == "rateCard" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      currency,
      packages,
      publishedAt
    }`,
    { slug }
  )
}
