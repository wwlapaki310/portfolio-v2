export default function Slides() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-foreground mb-8">Presentations & Slides</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">📊</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            SXSW 2018 Presentation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            AI-powered life log camera concept presentation at SXSW Hackathon
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">SXSW</span>
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">AI</span>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">🔬</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            BIOMOD 2015 Final Presentation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            World championship presentation on DNA molecular robot design
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">BIOMOD</span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded">Research</span>
          </div>
        </div>

        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-gray-500">🛡️</span>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Sechack365 Final Demo
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Cybersecurity project presentation and demonstration
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">Security</span>
            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs px-2 py-1 rounded">NICT</span>
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          🎯 Presentation slides will be embedded from Speaker Deck and SlideShare soon...
        </p>
      </div>
    </div>
  )
}
