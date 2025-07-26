import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { StaticButton } from '@/components/ui/Button'
import { Glass } from '@/components/ui/Glass'

interface Work {
  id: string
  title: string
  description: string
  category: string
  tech: string[]
  featured?: boolean
  year: string
  link?: string
}

const featuredWorks: Work[] = [
  {
    id: 'biomod-2015',
    title: 'BIOMOD 2015',
    description: 'World Champion in DNA molecular robot design competition',
    category: 'Research',
    tech: ['DNA Design', 'Molecular Biology', 'CAD'],
    featured: true,
    year: '2015',
    link: '/works/biomod-2015'
  },
  {
    id: 'nasa-hackathon',
    title: 'NASA Space Apps',
    description: 'AI-powered hazard mapping system for disaster prediction',
    category: 'AI/ML',
    tech: ['Python', 'TensorFlow', 'Geospatial'],
    year: '2018',
    link: '/works/nasa-hackathon'
  },
  {
    id: 'sxsw-camera',
    title: 'SXSW Camera',
    description: 'AI-powered life log camera concept and prototype',
    category: 'Innovation',
    tech: ['AI', 'Computer Vision', 'IoT'],
    year: '2018',
    link: '/works/sxsw-camera'
  },
  {
    id: 'unity-game',
    title: 'Unity Action Game',
    description: 'Photon networked 5-stage action game with mystical world',
    category: 'Game Dev',
    tech: ['Unity', 'C#', 'Photon'],
    featured: true,
    year: '2020',
    link: '/works/unity-game'
  },
  {
    id: 'sechack365',
    title: 'SecHack365',
    description: 'NICT cybersecurity talent development program',
    category: 'Security',
    tech: ['Security', 'Machine Learning', 'Research'],
    year: '2017',
    link: '/works/sechack365'
  }
]

function WorkCard({ work }: { work: Work }) {
  const isFeatured = work.featured

  return (
    <Card 
      variant="glass" 
      effect="3d"
      className={`group h-full ${isFeatured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-3">
          <span className="px-3 py-1 bg-gradient-teal text-white text-xs font-medium rounded-full">
            {work.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {work.year}
          </span>
        </div>
        
        <h3 className={`font-bold text-gray-900 dark:text-white group-hover:text-gradient-teal transition-all duration-300 ${
          isFeatured ? 'text-2xl' : 'text-lg'
        }`}>
          {work.title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0 flex flex-col h-full">
        <p className={`text-gray-600 dark:text-gray-300 mb-4 flex-1 ${
          isFeatured ? 'text-base leading-relaxed' : 'text-sm'
        }`}>
          {work.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {work.tech.map((tech, index) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {work.link && (
          <StaticButton 
            variant="ghost" 
            size={isFeatured ? 'md' : 'sm'}
            className="self-start mt-auto"
            href={work.link}
          >
            <span>View Project</span>
            <span className="ml-2">→</span>
          </StaticButton>
        )}
      </CardContent>
    </Card>
  )
}

export function WorksPreview() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-gradient-teal">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From molecular robotics to AI-powered applications, explore the projects 
            that showcase innovation at the intersection of hardware and software.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredWorks.map((work, index) => (
            <div
              key={work.id}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <WorkCard work={work} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Glass variant="light" className="inline-block p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Interested in seeing more?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Explore my complete portfolio of projects, research, and innovations.
            </p>
            <StaticButton variant="primary" size="lg" href="/works">
              View All Projects
            </StaticButton>
          </Glass>
        </div>
      </div>
    </section>
  )
}
