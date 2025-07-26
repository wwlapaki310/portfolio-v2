export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-gradient-teal">Satoru</span>
              <br />
              <span className="text-foreground">Akita</span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 space-y-2">
              <p>
                <span className="text-gradient-orange font-semibold">AI Engineer</span> 
                {' '}at Sony Semiconductor
              </p>
              <p className="text-lg">
                Bridging the gap between 
                <span className="text-teal-600 dark:text-teal-400 font-medium"> cutting-edge AI </span>
                and real-world applications
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/works"
              className="btn btn-primary"
            >
              <span>View My Work</span>
              <span className="ml-2">→</span>
            </a>
            
            <a 
              href="/resume.pdf"
              className="btn btn-secondary"
            >
              <span>Download Resume</span>
              <span className="ml-2">📄</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a
              href="#"
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover-lift text-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              💼
            </a>
            <a
              href="#"
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover-lift text-lg transition-all duration-300"
              aria-label="GitHub"
            >
              🐙
            </a>
            <a
              href="#"
              className="w-12 h-12 glass rounded-full flex items-center justify-center hover-lift text-lg transition-all duration-300"
              aria-label="Email"
            >
              📧
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
