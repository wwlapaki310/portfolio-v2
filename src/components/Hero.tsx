import { Glass } from '@/components/ui/Glass'
import { StaticButton } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-teal rounded-full opacity-20 float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-orange rounded-full opacity-20 float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-teal rounded-full opacity-10 float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              <span className="text-gradient-teal">Satoru</span> Akita
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-200 mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards] font-medium">
              AI Camera & Edge Sensing Platform Engineer at Sony Semiconductor Solutions Corporation
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-10 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards] leading-relaxed">
              Engaged in the design, development, and deployment of systems utilizing AI cameras.
              Experienced in both semiconductor processes and software engineering.
              Currently focused on expanding edge AI sensing platforms and creating impactful technical solutions.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
            <StaticButton variant="primary" size="lg" href="/works">
              View My Work
            </StaticButton>
            <StaticButton variant="ghost" size="lg" href="/about">
              Learn More About Me
            </StaticButton>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_1s_forwards]">
            <Glass variant="light" className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">🏆</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">World Champion DNA Robot Design</p>
            </Glass>
            
            <Glass variant="light" className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">🚀</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">NASA Space Apps Winner</p>
            </Glass>
            
            <Glass variant="light" className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">🤖</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200 font-medium">AI Platform Engineer at Sony</p>
            </Glass>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]">
        <div className="flex flex-col items-center text-gray-600 dark:text-gray-400">
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
