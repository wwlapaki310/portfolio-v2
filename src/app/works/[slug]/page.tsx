import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { StaticButton } from '@/components/ui/Button'
import { Glass } from '@/components/ui/Glass'

interface WorkData {
  id: string
  title: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  year: string
  status: 'completed' | 'in-progress' | 'concept'
  technologies: string[]
  links?: {
    demo?: string
    github?: string
    blog?: string
    presentation?: string
  }
  images?: string[]
  achievements?: string[]
  teamSize?: number
  duration?: string
}

// プロジェクトデータ（後でJSONファイルに移行予定）
const projectsData: Record<string, WorkData> = {
  'biomod-2015': {
    id: 'biomod-2015',
    title: 'BIOMOD 2015 - DNA分子ロボット設計',
    description: 'ハーバード大学主催の国際生体分子設計コンテストで世界1位を獲得',
    longDescription: `ハーバード大学で開催されたDNAを用いた面白い生体分子を創るコンテスト「BIOMOD」に参加し、TeamSendaiとして統合優勝（the grand prize）を獲得しました。

DNAを用いた合成分子ロボットの設計・開発を行い、分子レベルでの動作機構を実現。プロジェクトではWebページ作成、シミュレーション、実験データ解析などを担当しました。

このプロジェクトを通じて、分子生物学とナノテクノロジーの融合分野での研究経験を積み、国際的な研究チームでの協働を学びました。`,
    category: 'Research',
    tags: ['DNA', 'Molecular Biology', 'Nanotechnology', 'Research', 'Competition'],
    year: '2015',
    status: 'completed',
    technologies: ['DNA Design', 'Molecular Simulation', 'Web Development', 'Data Analysis'],
    links: {
      blog: '/blog/3'
    },
    achievements: [
      '国際生体分子設計コンテスト（BIOMOD 2015）統合優勝',
      'ハーバード大学での研究発表',
      '分子ロボット設計の成功'
    ],
    teamSize: 6,
    duration: '6ヶ月'
  },
  'nasa-hackathon': {
    id: 'nasa-hackathon',
    title: 'NASA Space Apps Challenge - AI災害予測システム',
    description: 'NASA主催ハッカソンで深層学習を用いたハザードマップ自動生成AIを開発。東京予選優勝。',
    longDescription: `NASA主催の宇宙データを活用するハッカソン「NASA Space Apps Challenge」に参加し、深層学習技術を用いてハザードマップを自動生成するAIシステムを開発しました。

衛星データと機械学習を組み合わせることで、災害リスクを可視化し、防災対策の効率化を目指したプロジェクトです。東京予選で優勝を獲得しました。

このプロジェクトを通じて、宇宙データの活用方法と深層学習の実用的な応用について深く学ぶことができました。`,
    category: 'AI/ML',
    tags: ['NASA', 'Deep Learning', 'Disaster Prevention', 'Geospatial', 'Hackathon'],
    year: '2018',
    status: 'completed',
    technologies: ['Python', 'TensorFlow', 'Geospatial Analysis', 'Satellite Data'],
    achievements: [
      'NASA Space Apps Challenge 東京予選優勝',
      'AI災害予測システムの開発',
      '衛星データ活用の実証'
    ],
    teamSize: 4,
    duration: '48時間'
  },
  'unity-game': {
    id: 'unity-game',
    title: 'Unity Fall Guys風アクションゲーム',
    description: 'Photonでネットワーク同期された5ステージのアクションゲーム。ゼルダの祠世界のような神秘的な世界観を実現。',
    longDescription: `Fall GuysにインスパイアされたマルチプレイヤーアクションゲームをUnityで開発しました。

合計5つのステージがあり、各ステージの奥にあるワープゲートを全て潜ることでクリアとなります。Photonを使用したネットワーク同期により、他プレイヤーとの同時プレイが可能です。

ゼルダの祠世界のような神秘的かつ無機質な世界観を目指し、衝突判定と移動処理を重点的に最適化しました。物理演算とネットワーク同期の両立が技術的なチャレンジでした。`,
    category: 'Game Development',
    tags: ['Unity', 'C#', 'Photon', 'Multiplayer', 'Game Design'],
    year: '2020',
    status: 'completed',
    technologies: ['Unity', 'C#', 'Photon PUN2', 'Physics', '3D Modeling'],
    links: {
      demo: 'https://example.com/unity-game-demo'
    },
    achievements: [
      'マルチプレイヤーゲームの完成',
      'ネットワーク同期システムの実装',
      '5つの独創的なステージデザイン'
    ],
    teamSize: 1,
    duration: '3ヶ月'
  }
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }))
}

interface PageProps {
  params: {
    slug: string
  }
}

export default function WorkDetailPage({ params }: PageProps) {
  const { slug } = params
  const project = projectsData[slug]

  if (!project) {
    notFound()
  }

  const statusColors = {
    completed: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    concept: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }

  const statusLabels = {
    completed: '完了',
    'in-progress': '進行中',
    concept: 'コンセプト'
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container-custom">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link 
            href="/works" 
            className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          >
            ← Works に戻る
          </Link>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {project.title}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[project.status]}`}>
              {statusLabels[project.status]}
            </span>
          </div>
          
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-6">
            {project.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <span className="font-medium">年:</span> {project.year}
            </div>
            {project.teamSize && (
              <div>
                <span className="font-medium">チームサイズ:</span> {project.teamSize}人
              </div>
            )}
            {project.duration && (
              <div>
                <span className="font-medium">期間:</span> {project.duration}
              </div>
            )}
            <div>
              <span className="font-medium">カテゴリ:</span> {project.category}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <Card variant="glass" className="mb-8">
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  📝 プロジェクト詳細
                </h2>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  {project.longDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 dark:text-gray-200 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            {project.achievements && (
              <Card variant="glass" className="mb-8">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    🏆 成果・実績
                  </h2>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-200"
                      >
                        <span className="text-teal-600 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <Card variant="glass">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  💻 技術スタック
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card variant="glass">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  🏷️ タグ
                </h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Links */}
            {project.links && (
              <Card variant="glass">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    🔗 関連リンク
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.links.demo && (
                      <StaticButton 
                        variant="primary" 
                        size="sm" 
                        href={project.links.demo}
                        className="w-full justify-center"
                      >
                        🎮 デモを見る
                      </StaticButton>
                    )}
                    {project.links.github && (
                      <StaticButton 
                        variant="ghost" 
                        size="sm" 
                        href={project.links.github}
                        className="w-full justify-center"
                      >
                        📁 GitHub
                      </StaticButton>
                    )}
                    {project.links.blog && (
                      <StaticButton 
                        variant="ghost" 
                        size="sm" 
                        href={project.links.blog}
                        className="w-full justify-center"
                      >
                        📝 ブログ記事
                      </StaticButton>
                    )}
                    {project.links.presentation && (
                      <StaticButton 
                        variant="ghost" 
                        size="sm" 
                        href={project.links.presentation}
                        className="w-full justify-center"
                      >
                        📊 発表資料
                      </StaticButton>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            他のプロジェクト
          </h2>
          <div className="text-center">
            <StaticButton variant="primary" size="lg" href="/works">
              全プロジェクトを見る
            </StaticButton>
          </div>
        </div>
      </div>
    </div>
  )
}
