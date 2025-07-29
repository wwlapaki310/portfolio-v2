import { getAllPosts } from '@/lib/blog'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const posts = getAllPosts()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wwlapaki310.github.io/portfolio-v2'
  const currentDate = new Date().toISOString()
  
  const atomXml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Satoru Akita - AI Engineer Blog</title>
  <subtitle>Sony AIエンジニア・秋田悟のブログ - 技術、ハッカソン、研究についての記事</subtitle>
  <link href="${siteUrl}" rel="alternate" type="text/html"/>
  <link href="${siteUrl}/atom.xml" rel="self" type="application/atom+xml"/>
  <id>${siteUrl}/</id>
  <updated>${currentDate}</updated>
  <generator uri="https://nextjs.org/" version="14">Next.js</generator>
  <icon>${siteUrl}/favicon.ico</icon>
  <logo>${siteUrl}/favicon.ico</logo>
  <author>
    <name>Satoru Akita</name>
    <email>your-email@example.com</email>
    <uri>${siteUrl}</uri>
  </author>
  <rights>© 2025 Satoru Akita. All rights reserved.</rights>
  ${posts.map(post => `
  <entry>
    <title type="html">${escapeXml(post.title)}</title>
    <link href="${siteUrl}/blog/${post.slug}" rel="alternate" type="text/html"/>
    <id>${siteUrl}/blog/${post.slug}</id>
    <published>${new Date(post.date).toISOString()}</published>
    <updated>${new Date(post.date).toISOString()}</updated>
    <author>
      <name>${escapeXml(post.author || 'Satoru Akita')}</name>
      <email>your-email@example.com</email>
    </author>
    <summary type="html">${escapeXml(post.excerpt || post.content.substring(0, 300) + '...')}</summary>
    <content type="html">${escapeXml(post.content.substring(0, 1000) + (post.content.length > 1000 ? '...' : ''))}</content>
    ${post.tags?.map(tag => `<category term="${escapeXml(tag)}" label="${escapeXml(tag)}"/>`).join('') || ''}
  </entry>`).join('')}
</feed>`

  return new Response(atomXml, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
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
