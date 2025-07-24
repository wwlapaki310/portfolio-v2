import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground mb-8">Blog</h1>
      
      {posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString('ja-JP')}
                </time>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
            📝 Blog posts are currently being prepared...
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Check back soon for technical insights and project experiences!
          </p>
        </div>
      )}
    </div>
  )
}
