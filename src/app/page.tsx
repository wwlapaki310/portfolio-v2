import Hero from '@/components/Hero'
import WorksPreview from '@/components/WorksPreview'
import BlogPreview from '@/components/BlogPreview'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />
      <WorksPreview />
      <BlogPreview />
    </div>
  )
}
