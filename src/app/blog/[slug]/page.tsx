import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Satoru Akita`,
    description: post.excerpt,
    keywords: post.tags,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back to blog link */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        ← Back to Blog
      </Link>

      {/* Article header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('ja-JP')}
          </time>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Article content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>

      {/* Article footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <Link 
            href="/blog" 
            className="text-blue-600 hover:text-blue-700"
          >
            ← Back to all posts
          </Link>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Published on {new Date(post.date).toLocaleDateString('ja-JP')}
          </div>
        </div>
      </footer>
    </article>
  )
}
