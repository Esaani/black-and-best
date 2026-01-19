import { getAllPosts } from '@/lib/sanity/queries'
import Link from 'next/link'
import OptimizedImage from '@/components/Image'
import { urlFor } from '@/sanity/lib/image'

export const metadata = {
  title: 'Posts - Black & Best',
  description: 'View all our posts',
}

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Posts</h1>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: any) => (
              <Link
                key={post._id}
                href={`/posts/${post.slug?.current || post._id}`}
                className="group border-2 border-accent-100/20 rounded-lg overflow-hidden hover:border-accent-100 transition-all duration-300 hover:shadow-lg"
              >
                {post.image && (
                  <div className="aspect-video relative bg-gray-200">
                    <OptimizedImage
                      src={urlFor(post.image).width(800).height(450).url()}
                      alt={post.title || 'Post image'}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  {post.publishedAt && (
                    <p className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No posts found. Create your first post in Sanity Studio!
            </p>
            <Link
              href="/studio"
              className="text-accent-100 hover:underline mt-4 inline-block"
            >
              Go to Sanity Studio →
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

