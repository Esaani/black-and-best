import { groq } from 'next-sanity'

// Basic query to get all posts with id and title
export const postsQuery = groq`*[_type == "post"]{ _id, title }`

// Extended query to get all posts with more fields
export const postsWithDetailsQuery = groq`*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body
}`

// Query to get a single post by slug
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  image,
  body
}`

// Query to get all posts ordered by published date (newest first)
export const postsOrderedQuery = groq`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  image
}`

// Query to get only published posts (if you add a published field later)
export const publishedPostsQuery = groq`*[_type == "post" && publishedAt <= now()] | order(publishedAt desc){
  _id,
  title,
  slug,
  publishedAt,
  image
}`

