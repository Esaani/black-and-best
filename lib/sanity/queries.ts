import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'

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

