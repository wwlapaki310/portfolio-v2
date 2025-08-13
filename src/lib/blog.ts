import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  author: string
  readTime: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Validate and normalize date
      let normalizedDate = new Date().toISOString().split('T')[0] // Default to today
      if (matterResult.data.date) {
        const parsedDate = new Date(matterResult.data.date)
        if (!isNaN(parsedDate.getTime())) {
          normalizedDate = parsedDate.toISOString().split('T')[0]
        }
      }

      // Ensure required fields with fallbacks
      const normalizedData = {
        title: matterResult.data.title || 'Untitled',
        date: normalizedDate,
        excerpt: matterResult.data.excerpt || matterResult.data.description || matterResult.content.substring(0, 150) + '...',
        tags: Array.isArray(matterResult.data.tags) ? matterResult.data.tags : [],
        author: matterResult.data.author || 'Satoru Akita',
        readTime: matterResult.data.readTime || '5 min read',
        content: matterResult.content,
      }

      // Combine the data with the slug
      return {
        slug,
        ...normalizedData,
      } as BlogPost
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    // Validate and normalize date
    let normalizedDate = new Date().toISOString().split('T')[0] // Default to today
    if (matterResult.data.date) {
      const parsedDate = new Date(matterResult.data.date)
      if (!isNaN(parsedDate.getTime())) {
        normalizedDate = parsedDate.toISOString().split('T')[0]
      }
    }

    // Ensure required fields with fallbacks
    const normalizedData = {
      title: matterResult.data.title || 'Untitled',
      date: normalizedDate,
      excerpt: matterResult.data.excerpt || matterResult.data.description || matterResult.content.substring(0, 150) + '...',
      tags: Array.isArray(matterResult.data.tags) ? matterResult.data.tags : [],
      author: matterResult.data.author || 'Satoru Akita',
      readTime: matterResult.data.readTime || '5 min read',
      content: matterResult.content,
    }
    
    return {
      slug,
      ...normalizedData,
    } as BlogPost
  } catch {
    return null
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tagSet = new Set<string>()
  
  posts.forEach(post => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach(tag => tagSet.add(tag))
    }
  })
  
  return Array.from(tagSet).sort()
}
