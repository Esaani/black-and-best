import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/sanity/queries'
import OptimizedImage from '@/components/Image'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

type Props = {
  params: Promise<any>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found - Black & Best',
    }
  }

  return {
    title: `${post.title} - Posts - Black & Best`,
    description: post.body ? 'Read our latest post' : '',
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/posts"
          className="text-accent-100 hover:underline mb-6 inline-block"
        >
          ← Back to Posts
        </Link>

        <article>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

          {post.publishedAt && (
            <p className="text-gray-500 mb-8">
              Published on {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          )}

          {post.image && (
            <div className="aspect-video relative bg-gray-200 rounded-lg overflow-hidden mb-8">
              <OptimizedImage
                src={urlFor(post.image).width(1200).height(675).url()}
                alt={post.title || 'Post image'}
                fill
                className="object-cover"
              />
            </div>
          )}

          {post.body && (
            <div className="prose max-w-none">
              <PortableText value={post.body} />
            </div>
          )}
        </article>
      </div>
    </div>
  )
}

