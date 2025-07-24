export default function Works() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground mb-8">My Works</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Fall Guys風 Unity アクションゲーム
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Photonでネットワーク同期された5ステージのアクションゲーム。ゼルダの祠世界のような神秘的な世界観を実現。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Unity</span>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Photon</span>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">Networking</span>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            NASA宇宙データハッカソン - AI災害予測
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            NASA主催ハッカソンで深層学習を用いたハザードマップ自動生成AIを開発。東京予選優勝。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Deep Learning</span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">NASA</span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Computer Vision</span>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            BIOMOD 2015 - DNA分子ロボット
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            国際生体分子設計コンテストで世界1位。DNAを用いた合成分子ロボットを設計・開発。
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">DNA</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">Molecular Robotics</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">Biotechnology</span>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          More detailed project information will be added soon...
        </p>
      </div>
    </div>
  )
}
