import Link from 'next/link'

// Temporary data - will be replaced with dynamic data later
const featuredWorks = [
  {
    id: 1,
    title: 'Fall Guys風 Unity アクションゲーム',
    description: 'Photonでネットワーク同期された5ステージのアクションゲーム。ゼルダの祠世界のような神秘的な世界観を実現。',
    tags: ['Unity', 'Photon', 'Networking', 'Game Development'],
    image: '/placeholder-game.jpg'
  },
  {
    id: 2,
    title: 'NASA宇宙データハッカソン - AI災害予測',
    description: 'NASA主催ハッカソンで深層学習を用いたハザードマップ自動生成AIを開発。東京予選優勝。',
    tags: ['Deep Learning', 'NASA', 'Computer Vision', 'Disaster Prevention'],
    image: '/placeholder-nasa.jpg'
  },
  {
    id: 3,
    title: 'BIOMOD 2015 - DNA分子ロボット',
    description: '国際生体分子設計コンテストで世界1位。DNAを用いた合成分子ロボットを設計・開発。',
    tags: ['DNA', 'Molecular Robotics', 'Biotechnology', 'Research'],
    image: '/placeholder-biomod.jpg'
  }
]

export default function WorksPreview() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-foreground">Featured Works</h2>
        <Link
          href="/works"
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          View All Works →
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredWorks.map((work) => (
          <div
            key={work.id}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {work.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
