import Link from 'next/link'

export default function Hero() {
  return (
    <section className="text-center py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Satoru Akita
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          AI Camera & Edge Sensing Platform Engineer
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Engaged in the design, development, and deployment of systems utilizing AI cameras. 
          Experienced in both semiconductor processes and software engineering. 
          Currently focused on expanding edge AI sensing platforms and creating impactful technical solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/works"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View My Works
          </Link>
          <Link
            href="/about"
            className="border border-gray-300 dark:border-gray-600 text-foreground px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
          >
            About Me
          </Link>
        </div>
      </div>
    </section>
  )
}
