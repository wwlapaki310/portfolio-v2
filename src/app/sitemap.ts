import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wwlapaki310.github.io/portfolio-v2'
  
  // Get all blog posts
  const posts = getAllPosts()
  
  // Generate blog post URLs with date validation
  const blogUrls = posts.map((post) => {
    let lastModified = new Date() // Default to current date
    
    try {
      const parsedDate = new Date(post.date)
      if (!isNaN(parsedDate.getTime())) {
        lastModified = parsedDate
      }
    } catch (error) {
      console.warn(`Invalid date for post ${post.slug}: ${post.date}, using current date`)
    }

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }
  })

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/slides`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // TODO: Add individual work project URLs when available
  // This would require getting all project slugs from the works data
  
  return [...staticPages, ...blogUrls]
}
