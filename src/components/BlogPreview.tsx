import Link from 'next/link'

// Temporary data - will be replaced with dynamic data later
const recentPosts = [
  {
    id: 1,
    title: 'SXSW 2018での体験談とAI搭載ライフログカメラの開発',
    excerpt: 'SXSW hackathonでの体験とAI-powered life log camera conceptの発表について',
    date: '2019-04-07',
    readTime: '5 min read',
    tags: ['SXSW', 'AI', 'Camera', 'Hackathon']
  },
  {
    id: 2,
    title: 'Sechack365での学びと成果発表',
    excerpt: 'NICTが主催するサイバーセキュリティ人材育成プログラムでの1年間の体験',
    date: '2018-03-15',
    readTime: '8 min read',
    tags: ['Cybersecurity', 'NICT', 'Learning']
  },
  {
    id: 3,
    title: 'BIOMOD 2015 世界優勝への道のり',
    excerpt: 'DNA分子ロボット設計で世界1位を獲得した国際コンテストの体験記',
    date: '2016-01-20',
    readTime: '10 min read',
    tags: ['BIOMOD', 'DNA', 'Competition', 'Research']
  }
]

export default function BlogPreview() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-foreground">Recent Blog Posts</h2>
        <Link
          href="/blog"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          View All Posts →
        </Link>
      </div>
      
      <div className="space-y-6">
        {recentPosts.map((post) => (
          <article
            key={post.id}
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
            <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-blue-600 transition-colors">
              <Link href={`/blog/${post.id}`}>
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
    </section>
  )
}
