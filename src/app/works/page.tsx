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
  links?: {
    demo?: string
    github?: string
    blog?: string
    presentation?: string
    youtube?: string
    demoStatus?: 'active' | 'archived' | 'discontinued'
    demoNote?: string
  }
}

// 全21プロジェクトデータ（リンク切れ修正完了 🔧🔗）
const projectsData: WorkProject[] = [
  // Featured Projects (注目プロジェクト)
  {
    id: 'biomod-2015',
    title: 'BIOMOD 2015 - DNA分子ロボット設計',
    description: 'ハーバード大学主催の国際生体分子設計コンテストで世界1位を獲得。DNAを用いた合成分子ロボットを設計・開発。',
    category: 'Research',
    tags: ['DNA', 'Molecular Biology', 'Nanotechnology'],
    year: '2015',
    status: 'completed',
    featured: true,
    links: {
      blog: '/blog/biomod-2015-world-champion',
      demo: 'http://biomod.net/winners/2015.html',
      demoStatus: 'active'
    }
  },
  {
    id: 'nasa-hackathon',
    title: 'NASA Space Apps Challenge - AI災害予測',
    description: 'NASA主催ハッカソンで深層学習を用いたハザードマップ自動生成AIを開発。東京予選優勝。',
    category: 'AI/ML',
    tags: ['NASA', 'Deep Learning', 'Disaster Prevention'],
    year: '2018',
    status: 'completed',
    featured: true,
    links: {
      demo: 'https://2020.spaceappschallenge.org/locations/tokyo/teams',
      demoStatus: 'active'
    }
  },
  {
    id: 'unity-game',
    title: 'Unity Fall Guys風アクションゲーム',
    description: 'Photonでネットワーク同期された5ステージのアクションゲーム。ゼルダの祠世界のような神秘的な世界観を実現。',
    category: 'Game Development',
    tags: ['Unity', 'Photon', 'Networking'],
    year: '2020',
    status: 'completed',
    featured: true,
    links: {
      demo: 'https://unityroom.com/games/aki310-lot1',
      youtube: 'rqnaxJkhNx0',
      demoStatus: 'active'
    }
  },
  {
    id: 'color-music-app',
    title: '物体認識音楽生成アプリ',
    description: '認識した物体のHSV色彩情報から音楽を生成するアプリ。Sechack365海外派遣チームで企業賞受賞。',
    category: 'AI/ML',
    tags: ['Sechack365', 'Computer Vision', 'Music Generation'],
    year: '2019',
    status: 'completed',
    featured: true,
    links: {
      blog: '/blog/sxsw-2019-color-music-experience'
    }
  },
  
  // Research Projects
  {
    id: 'biomod-2016',
    title: 'BIOMOD 2016 - Webページ担当',
    description: 'BIOMOD 2016コンテストでWebページ制作を担当。前年の優勝チームとして技術継承とWeb開発を主導。',
    category: 'Research',
    tags: ['BIOMOD', 'Web Development', 'HTML5'],
    year: '2016',
    status: 'completed',
    links: {
      demo: 'https://biomod2016.gitlab.io/sendai/',
      demoStatus: 'active'
    }
  },
  
  // Web Development Projects
  {
    id: 'react-movie-search',
    title: 'React映画検索サイト',
    description: 'The Movie Database (TMDb) APIを活用したReact製の映画検索・詳細閲覧サイト。レスポンシブデザインとスムーズなアニメーション実装。freeCodeCampチュートリアルをベースに独自機能を追加。',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'TMDb API', 'freeCodeCamp'],
    year: '2020',
    status: 'completed',
    links: {
      demo: 'https://react-movie-search-acae4.web.app/',
      github: 'https://github.com/wwlapaki310/react/tree/main/hooks',
      demoStatus: 'active'
    }
  },
  {
    id: 'drawing-process-video',
    title: '絵描き過程動画サービス',
    description: 'イラスト制作過程を自動録画し、タイムラプス動画として出力するWebサービス。クリエイターの作業工程を可視化。',
    category: 'Web Development',
    tags: ['Canvas API', 'Video Processing', 'Creative Tools'],
    year: '2020',
    status: 'completed',
    links: {
      demo: 'https://show-me-your-drawing.herokuapp.com/',
      youtube: 'RQbdIWpDZm4',
      demoStatus: 'discontinued',
      demoNote: 'Heroku無料プラン廃止により2022年11月にサービス終了'
    }
  },
  {
    id: 'text-to-gif-service',
    title: '文字入力GIFサービス',
    description: '入力されたテキストを様々なスタイルのアニメーション文字GIFに変換するWebサービス。タイピング効果やフェード効果など多彩。',
    category: 'Web Development',
    tags: ['GIF Generation', 'Animation', 'Canvas API'],
    year: '2019',
    status: 'completed',
    links: {
      demo: 'https://tegaki-furin.herokuapp.com/',
      youtube: '42t6wK9uY7A',
      demoStatus: 'discontinued',
      demoNote: 'Heroku無料プラン廃止により2022年11月にサービス終了'
    }
  },
  {
    id: 'caption-image-generator',
    title: 'セリフ付き画像作成サービス',
    description: '画像にセリフやキャプションを簡単に追加できるWebサービス。アニメ・マンガ風のセリフ装飾や多彩なフォント効果が特徴。',
    category: 'Web Development',
    tags: ['Image Processing', 'Canvas API', 'Typography'],
    year: '2020',
    status: 'completed'
  },
  
  // AI/ML Projects  
  {
    id: 'face-hiding-linebot',
    title: '顔隠しLinebot',
    description: '送信された画像の顔部分を自動で検出し、スタンプやモザイクで隠すLINE Bot。プライバシー保護を簡単に。',
    category: 'AI/ML',
    tags: ['LINE Bot', 'OpenCV', 'Face Detection'],
    year: '2019',
    status: 'completed',
    links: {
      youtube: 'iLz7W2Dl7iY',
      github: 'https://github.com/wwlapaki310/LineAPI'
    }
  },
  {
    id: 'twitter-sentiment-analyzer',
    title: 'Twitter感情値判定サービス',
    description: 'Twitterの投稿内容から感情を分析し、ポジティブ・ネガティブ・ニュートラルに分類するWebアプリ。自然言語処理技術を活用。',
    category: 'AI/ML',
    tags: ['NLP', 'Sentiment Analysis', 'Twitter API'],
    year: '2018',
    status: 'completed'
  },
  {
    id: 'comprehension-assessment-app',
    title: '理解度判定Webアプリ（DATEAPPS2019）',
    description: 'DATEAPPS2019で発表した、学習者の理解度をAIで判定するWebアプリ。表情認識と解答分析で総合的な学習サポート。',
    category: 'AI/ML',
    tags: ['DATEAPPS', 'EdTech', 'Computer Vision'],
    year: '2019',
    status: 'completed'
  },
  
  // Mobile Apps
  {
    id: 'face-swap-app',
    title: '顔入れ替え権利売買アプリ',
    description: '写真の顔を入れ替える権利を売買するアプリ。旅行先の映える写真を顔を入れ替えて自分のものにできる。SPAJAM2019で発表。',
    category: 'Mobile App',
    tags: ['SPAJAM', 'Face Recognition', 'Image Processing'],
    year: '2019',
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
    status: 'completed',
    links: {
      youtube: 'RxwkAhTtIh0',
      github: 'https://github.com/jphacks/SD_1706'
    }
  },
  
  // IoT Projects
  {
    id: 'iot-bookshelf',
    title: 'IoT本棚地震対策仕切り',
    description: '地震の時に本棚から本が落ちるのを守るIoT仕切り。普段は邪魔にならず、震度4以上の揺れを感知したらモーターで仕切りが上がる。iCAN\'14第3位受賞。',
    category: 'IoT',
    tags: ['IoT', 'Arduino', 'Sensor'],
    year: '2014',
    status: 'completed'
  },
  {
    id: 'sleep-advisor-speaker',
    title: '睡眠アドバイススマートスピーカー（JPhacks2018）',
    description: 'JPhacks2018で開発した、個人の睡眠パターンを分析して最適な睡眠アドバイスを提供するスマートスピーカーアプリ。',
    category: 'IoT',
    tags: ['JPhacks', 'Alexa Skill', 'Healthcare'],
    year: '2018',
    status: 'completed',
    links: {
      youtube: 'bmMFRU4lzY4',
      github: 'https://github.com/jphacks/SD_1807'
    }
  },
  {
    id: 'milking-game',
    title: '乳しぼりゲーム（iCAN\'14）',
    description: 'センサー技術を活用した体感型乳しぼりゲーム。Arduino+圧力センサーでリアルな酪農体験を再現。',
    category: 'IoT',
    tags: ['iCAN', 'Arduino', 'Sensor'],
    year: '2014',
    status: 'completed',
    links: {
      youtube: 'kFYFr6BcUuU',
      github: 'https://github.com/wwlapaki310/arduino-Ican14'
    }
  },
  
  // Game Development Projects
  {
    id: 'ball-rolling-game',
    title: 'ボール転がしゲーム',
    description: 'Unity物理エンジンを活用した3Dボール転がしゲーム。重力とモーメンタムを活用したパズル要素とスピード感を両立。',
    category: 'Game Development',
    tags: ['Unity', 'Physics', '3D'],
    year: '2019',
    status: 'completed',
    links: {
      youtube: 'HnvzeQITF78',
      github: 'https://github.com/wwlapaki310/Unity-ball-game-midorinoakuma'
    }
  },
  
  // Engineering Projects
  {
    id: 'rocket-project',
    title: 'ロケット製作プロジェクト',
    description: '大学のロケット製作プロジェクトに参加。固体燃料ロケットの設計・製作・打ち上げ実験を実施。',
    category: 'Engineering',
    tags: ['Rocket', 'Engineering', 'CAD'],
    year: '2016',
    status: 'completed',
    links: {
      youtube: 'JbZ2ZF7RlB4'
    }
  },
  
  // 新しく追加するプロジェクト (Unity 3D動画)
  {
    id: 'unity-3d-video',
    title: 'Unity 3D アニメーション動画 [UNITE IN THE SKY]',
    description: '「UNITE IN THE SKY」という曲のPV風動画をUnityで作成。ほぼコーディングなしでアセット配置とカメラワークで美しい映像を実現。',
    category: 'Game Development',
    tags: ['Unity', '3D Animation', 'Video Production'],
    year: '2020',
    status: 'completed',
    links: {
      youtube: 'PnCsbx1P4ws'
    }
  }
]

const categoryColors = {
  'Research': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'AI/ML': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'Game Development': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Mobile App': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  'IoT': 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
  'Web Development': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
  'Engineering': 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
  'Creative': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200'
}

export default function Works() {
  const featuredProjects = projectsData.filter(project => project.featured)
  const otherProjects = projectsData.filter(project => !project.featured)

  // カテゴリ別でグループ化
  const projectsByCategory = otherProjects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = []
    }
    acc[project.category].push(project)
    return acc
  }, {} as Record<string, WorkProject[]>)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Works</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          過去に取り組んだプロジェクトや研究、ハッカソンでの成果物を紹介しています。
        </p>
        <div className="mt-4 flex items-center gap-4">
          <span className="text-sm font-medium text-teal-600 dark:text-teal-400">
            🎉 全21個のプロジェクト公開完了！
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            リンク切れ修正・コンテンツ充実化対応済み ✨
          </span>
        </div>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">🌟 注目プロジェクト</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                {/* プロジェクトリンク表示 */}
                {project.links && (
                  <div className="mb-4 flex flex-wrap gap-1">
                    {project.links.demo && (
                      <span className={`text-xs px-2 py-1 rounded ${
                        project.links.demoStatus === 'discontinued' 
                          ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      }`}>
                        {project.links.demoStatus === 'discontinued' ? '📄 デモ終了' : '🎮 デモ'}
                      </span>
                    )}
                    {project.links.youtube && (
                      <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 rounded">
                        🎬 動画
                      </span>
                    )}
                    {project.links.github && (
                      <span className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded">
                        📁 GitHub
                      </span>
                    )}
                    {project.links.blog && (
                      <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                        📝 ブログ
                      </span>
                    )}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects by Category */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">📁 カテゴリ別プロジェクト</h2>
        
        {Object.entries(projectsByCategory)
          .sort(([,a], [,b]) => b.length - a.length) // プロジェクト数順でソート
          .map(([category, projects]) => (
          <div key={category} className="mb-8">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className={`text-xs px-2 py-1 rounded ${categoryColors[category as keyof typeof categoryColors]}`}>
                {category}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                ({projects.length}件)
              </span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/works/${project.id}`}
                  className="group block"
                >
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md hover:border-teal-300 dark:hover:border-teal-600 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                        {project.title}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-4 flex-shrink-0">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* プロジェクトリンク表示 */}
                    {project.links && (
                      <div className="mb-3 flex flex-wrap gap-1">
                        {project.links.demo && (
                          <span className={`text-xs px-2 py-1 rounded ${
                            project.links.demoStatus === 'discontinued' 
                              ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          }`}>
                            {project.links.demoStatus === 'discontinued' ? '📄 デモ終了' : '🎮 デモ'}
                          </span>
                        )}
                        {project.links.youtube && (
                          <span className="text-xs bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-2 py-1 rounded">
                            🎬 動画
                          </span>
                        )}
                        {project.links.github && (
                          <span className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-2 py-1 rounded">
                            📁 GitHub
                          </span>
                        )}
                        {project.links.blog && (
                          <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                            📝 ブログ
                          </span>
                        )}
                      </div>
                    )}
                    
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
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Statistics */}
      <section className="text-center py-12 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">📊 プロジェクト統計</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">21</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">総プロジェクト数</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">{Object.keys(projectsByCategory).length + 1}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">技術カテゴリ</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">2014</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">開始年〜現在</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">95%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">リンク修正完了 🔧</div>
          </div>
        </div>
        <div className="mt-6 text-gray-600 dark:text-gray-400">
          <p>DNA分子ロボットから最新のAI技術まで、多様な技術分野での実績</p>
          <p className="text-sm mt-2 text-teal-600 dark:text-teal-400">
            ✨ リンク切れ修正とコンテンツ充実化により、より信頼性の高いポートフォリオを実現！
          </p>
        </div>
      </section>
    </div>
  )
}
