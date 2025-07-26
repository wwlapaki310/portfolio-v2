import Link from 'next/link'

interface WorkProject {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  year: string
  status: 'completed' | 'in-progress' | 'concept'
  featured?: boolean
}

// 現在実装済みのプロジェクト（詳細ページと同期）
const projectsData: WorkProject[] = [
  {
    id: 'biomod-2015',
    title: 'BIOMOD 2015 - DNA分子ロボット設計',
    description: 'ハーバード大学主催の国際生体分子設計コンテストで世界1位を獲得。DNAを用いた合成分子ロボットを設計・開発。',
    category: 'Research',
    tags: ['DNA', 'Molecular Biology', 'Nanotechnology'],
    year: '2015',
    status: 'completed',
    featured: true
  },
  {
    id: 'nasa-hackathon',
    title: 'NASA Space Apps Challenge - AI災害予測',
    description: 'NASA主催ハッカソンで深層学習を用いたハザードマップ自動生成AIを開発。東京予選優勝。',
    category: 'AI/ML',
    tags: ['NASA', 'Deep Learning', 'Disaster Prevention'],
    year: '2018',
    status: 'completed',
    featured: true
  },
  {
    id: 'unity-game',
    title: 'Unity Fall Guys風アクションゲーム',
    description: 'Photonでネットワーク同期された5ステージのアクションゲーム。ゼルダの祠世界のような神秘的な世界観を実現。',
    category: 'Game Development',
    tags: ['Unity', 'Photon', 'Networking'],
    year: '2020',
    status: 'completed',
    featured: true
  },
  {
    id: 'color-music-app',
    title: '物体認識音楽生成アプリ',
    description: '認識した物体のHSV色彩情報から音楽を生成するアプリ。Sechack365海外派遣チームで企業賞受賞。',
    category: 'AI/ML',
    tags: ['Sechack365', 'Computer Vision', 'Music Generation'],
    year: '2019',
    status: 'completed'
  },
  {
    id: 'face-swap-app',
    title: '顔入れ替え権利売買アプリ',
    description: '写真の顔を入れ替える権利を売買するアプリ。旅行先の映える写真を顔を入れ替えて自分のものにできる。',
    category: 'Mobile App',
    tags: ['SPAJAM', 'Face Recognition', 'Image Processing'],
    year: '2019',
    status: 'completed'
  },
  {
    id: 'iot-bookshelf',
    title: 'IoT本棚地震対策仕切り',
    description: '地震の時に本棚から本が落ちるのを守るIoT仕切り。普段は邪魔にならず、震度4以上の揺れを感知したらモーターで仕切りが上がる。',
    category: 'IoT',
    tags: ['IoT', 'Arduino', 'Sensor'],
    year: '2014',
    status: 'completed'
  },
  {
    id: 'souvenir-app',
    title: '仙台お土産判定アプリ',
    description: '外国人観光客向けに仙台のお土産の名前を判定してくれるスマホアプリ。SPAJAM2018仙台予選で優秀賞受賞。',
    category: 'Mobile App',
    tags: ['SPAJAM', 'Image Recognition', 'Tourism'],
    year: '2018',
    status: 'completed'
  },
  {
    id: 'dj-motion-app',
    title: 'モーションDJアプリ',
    description: 'スマホでDJ体験ができるアプリ。スマホ端末の加速度、角速度からモーションを把握し、曲を選択、変調を加える。',
    category: 'Mobile App',
    tags: ['JPhacks', 'Motion Recognition', 'Audio Processing'],
    year: '2017',
    status: 'completed'
  }
]

const categoryColors = {
  'Research': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'AI/ML': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'Game Development': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Mobile App': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  'IoT': 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
  'Web Development': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200'
}

export default function Works() {
  const featuredProjects = projectsData.filter(project => project.featured)
  const otherProjects = projectsData.filter(project => !project.featured)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">My Works</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          過去に取り組んだプロジェクトや研究、ハッカソンでの成果物を紹介しています。
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-foreground mb-6">🌟 注目プロジェクト</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/works/${project.id}`}
              className="group block"
            >
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300 group-hover:scale-[1.02]">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    プロジェクト画像
                  </span>
                </div>
                
                <div className="mb-3 flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded ${categoryColors[project.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800'}`}>
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6">📁 その他のプロジェクト</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {otherProjects.map((project) => (
            <Link
              key={project.id}
              href={`/works/${project.id}`}
              className="group block"
            >
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 ml-4">
                    <span className={`text-xs px-2 py-1 rounded ${categoryColors[project.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-800'}`}>
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <h2 className="text-2xl font-semibold text-foreground mb-4">🚀 さらに追加予定</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          現在、過去のプロジェクトを順次移行中です。近日中に20+件のプロジェクトを追加予定です。
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>React映画検索サイト</span> •
          <span>顔隠しLinebot</span> •
          <span>絵描き過程動画サービス</span> •
          <span>Twitter感情値判定</span> •
          <span>睡眠アドバイスAI</span> •
          <span>その他多数...</span>
        </div>
      </section>
    </div>
  )
}
