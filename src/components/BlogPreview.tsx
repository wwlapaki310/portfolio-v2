import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { StaticButton } from '@/components/ui/Button'
import { Glass } from '@/components/ui/Glass'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  date: string
  readingTime: string
  tags: string[]
  category: string
  featured?: boolean
}

const featuredPosts: BlogPost[] = [
  {
    id: '1',
    title: 'SXSW 2018での体験談とAI搭載ライフログカメラの開発',
    excerpt: 'SXSW hackathonでの体験とAI-powered life log camera conceptの発表について',
    slug: '1',
    date: '2024-07-24',
    readingTime: '5 min read',
    tags: ['SXSW', 'AI', 'Camera', 'Hackathon'],
    category: 'Innovation',
    featured: true
  },
  {
    id: '2', 
    title: 'SecHack365での学びと成果発表',
    excerpt: 'NICTが主催するサイバーセキュリティ人材育成プログラムでの1年間の体験',
    slug: '2',
    date: '2024-07-24',
    readingTime: '8 min read',
    tags: ['SecHack365', 'Security', 'NICT'],
    category: 'Education'
  },
  {
    id: '3',
    title: 'DNA分子ロボット設計で世界1位を獲得した体験記',
    excerpt: 'BIOMOD 2015で世界チャンピオンになるまでの道のりと学んだこと',
    slug: '3',
    date: '2024-07-24', 
    readingTime: '12 min read',
    tags: ['BIOMOD', 'DNA', 'Research', 'Competition'],
    category: 'Research'
  }
]

const categoryColors: Record<string, string> = {
  'Innovation': 'bg-gradient-orange text-white',
  'Education': 'bg-gradient-teal text-white', 
  'Research': 'bg-purple-600 text-white',
  'Technology': 'bg-blue-600 text-white'
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const isFeatured = post.featured
  const isLarge = index === 0
  
  return (
    <Card 
      variant="glass" 
      effect="hover"
      className={`group h-full ${
        isLarge ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            categoryColors[post.category] || 'bg-gray-600 text-white'
          }`}>
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300 font-medium">
            <span>⏱</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h3 className={`font-bold text-gray-900 dark:text-white group-hover:text-gradient-teal transition-all duration-300 ${
            isLarge ? 'text-2xl leading-tight' : 'text-lg'
          }`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
          {new Date(post.date).toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long', 
            day: 'numeric'
          })}
        </p>
      </CardHeader>
      
      <CardContent className="pt-0 flex flex-col h-full">
        <p className={`text-gray-700 dark:text-gray-200 mb-4 flex-1 ${
          isLarge ? 'text-base leading-relaxed' : 'text-sm'
        }`}>
          {post.excerpt}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, isLarge ? 4 : 3).map((tag, tagIndex) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs rounded-md hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors font-medium"
              style={{ animationDelay: `${tagIndex * 0.1}s` }}
            >
              #{tag}
            </span>
          ))}
        </div>
        
        <StaticButton 
          variant="ghost" 
          size={isLarge ? 'md' : 'sm'}
          className="self-start mt-auto"
          href={`/blog/${post.slug}`}
        >
          <span>Read More</span>
          <span className="ml-2">📖</span>
        </StaticButton>
      </CardContent>
    </Card>
  )
}

export function BlogPreview() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest <span className="text-gradient-orange">Insights</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            Sharing experiences from hackathons, research breakthroughs, and the journey 
            of building AI-powered innovations in the real world.
          </p>
        </div>

        {/* Blog Grid - Magazine Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <div
              key={post.id}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <BlogCard post={post} index={index} />
            </div>
          ))}
        </div>

        {/* Newsletter Signup & View All */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Newsletter */}
          <Glass variant="teal" className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">
              📬 Stay Updated
            </h3>
            <p className="text-teal-50 mb-6 font-medium">
              Get notified when I publish new insights about AI, innovation, and technology.
            </p>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 border border-white/40 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 font-medium"
              />
              <StaticButton variant="glass" size="md">
                Subscribe
              </StaticButton>
            </div>
          </Glass>

          {/* View All */}
          <Glass variant="light" className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              📚 Explore All Posts
            </h3>
            <p className="text-gray-700 dark:text-gray-200 mb-6 font-medium">
              Dive deeper into my complete collection of articles, tutorials, and project stories.
            </p>
            <StaticButton variant="primary" size="lg" href="/blog">
              View All Articles
            </StaticButton>
          </Glass>
        </div>
      </div>
    </section>
  )
}
