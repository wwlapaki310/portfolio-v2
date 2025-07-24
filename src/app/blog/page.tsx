export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground mb-8">Blog</h1>
      
      <div className="space-y-6">
        <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              2019年4月7日
            </time>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              5 min read
            </span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            SXSW 2018での体験談とAI搭載ライフログカメラの開発
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            SXSW hackathonでの体験とAI-powered life log camera conceptの発表について
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">SXSW</span>
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">AI</span>
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">Camera</span>
          </div>
        </article>

        <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              2018年3月15日
            </time>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              8 min read
            </span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Sechack365での学びと成果発表
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            NICTが主催するサイバーセキュリティ人材育成プログラムでの1年間の体験
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">Cybersecurity</span>
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">NICT</span>
          </div>
        </article>

        <article className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              2016年1月20日
            </time>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              10 min read
            </span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            BIOMOD 2015 世界優勝への道のり
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            DNA分子ロボット設計で世界1位を獲得した国際コンテストの体験記
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">BIOMOD</span>
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">DNA</span>
            <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded">Research</span>
          </div>
        </article>
      </div>
      
      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          📝 Blog posts are currently being migrated from Hatena Blog...
        </p>
      </div>
    </div>
  )
}
