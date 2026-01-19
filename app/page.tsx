import Link from 'next/link'
import { type SanityDocument } from 'next-sanity'
import { client } from '@/lib/sanity/client'

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`

const options = { next: { revalidate: 30 } }

export default async function Home() {
  let posts: SanityDocument[] = []
  
  try {
    posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
  } catch (error) {
    console.error('Error fetching posts:', error)
  }

  return (
    <main className="container mx-auto min-h-screen max-w-7xl p-8">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center overflow-hidden px-4 py-20 mb-12">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Black & Best</h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Professional photography & video production Company.
          </p>
        </div>
      </section>

      {/* Posts Section */}
      {posts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8">Posts</h2>
          <ul className="flex flex-col gap-y-4">
            {posts.map((post) => (
              <li className="hover:underline" key={post._id}>
                <Link href={`/posts/${post.slug?.current || post._id}`}>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  {post.publishedAt && (
                    <p className="text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Quick Links Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Link
          href="/store"
          className="p-6 border-2 border-accent-100/20 rounded-lg hover:border-accent-100 transition-all duration-300 hover:shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Store</h2>
          <p className="text-gray-600">View our products and services</p>
        </Link>
        <Link
          href="/gallery"
          className="p-6 border-2 border-accent-100/20 rounded-lg hover:border-accent-100 transition-all duration-300 hover:shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Gallery</h2>
          <p className="text-gray-600">Explore our portfolio</p>
        </Link>
        <Link
          href="/ratecards"
          className="p-6 border-2 border-accent-100/20 rounded-lg hover:border-accent-100 transition-all duration-300 hover:shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">Rate Cards</h2>
          <p className="text-gray-600">View our pricing</p>
        </Link>
      </section>
    </main>
  )
}

