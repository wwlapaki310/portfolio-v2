import { getAllPosts } from '@/lib/blog'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const posts = getAllPosts()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wwlapaki310.github.io/portfolio-v2'
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Satoru Akita - AI Engineer Blog</title>
    <description>Sony AIエンジニア・秋田悟のブログ - 技術、ハッカソン、研究についての記事</description>
    <link>${siteUrl}</link>
    <language>ja-JP</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <webMaster>your-email@example.com (Satoru Akita)</webMaster>
    <managingEditor>your-email@example.com (Satoru Akita)</managingEditor>
    <generator>Next.js Portfolio Blog</generator>
    <image>
      <url>${siteUrl}/favicon.ico</url>
      <title>Satoru Akita - AI Engineer Blog</title>
      <link>${siteUrl}</link>
    </image>
    ${posts.map(post => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.excerpt || post.content.substring(0, 300) + '...')}</description>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>your-email@example.com (${escapeXml(post.author || 'Satoru Akita')})</author>
      ${post.tags?.map(tag => `<category>${escapeXml(tag)}</category>`).join('') || ''}
    </item>`).join('')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case '\'': return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}
