'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Glass } from '@/components/ui/Glass'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg opacity-10"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-teal rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Card - 3D Interactive */}
          <div className="flex justify-center lg:justify-start">
            <Card 
              variant="glass" 
              effect="3d"
              className="w-80 h-96 relative group cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`
              }}
            >
              <CardContent className="p-0 h-full flex flex-col">
                {/* Profile Image Placeholder */}
                <div className="h-48 bg-gradient-teal rounded-t-xl flex items-center justify-center relative overflow-hidden">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-6xl">
                    🧠
                  </div>
                  
                  {/* Floating Icons */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm float">
                    AI
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm float" style={{ animationDelay: '1s' }}>
                    🔬
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="p-6 flex-1 flex flex-col justify-center text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Satoru Akita</h3>
                  <p className="text-white/80 text-sm mb-4">AI Engineer @ Sony</p>
                  
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                      AI/ML
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs text-white">
                      MEMS
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="text-center lg:text-left space-y-8">
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

            {/* Achievement Highlights */}
            <Glass variant="light" className="p-6 space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Recent Achievements</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-500">🏆</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    BIOMOD 2015 World Champion (DNA Robotics)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-500">🚀</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    NASA Space Apps Tokyo Winner
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-500">🎯</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    SXSW 2018 AI Innovation Award
                  </span>
                </div>
              </div>
            </Glass>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="primary" 
                size="lg"
                className="group"
              >
                <span>View My Work</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              
              <Button 
                variant="secondary" 
                size="lg"
                className="group"
              >
                <span>Download Resume</span>
                <span className="ml-2 group-hover:scale-110 transition-transform">📄</span>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: '💼', label: 'LinkedIn', href: '#' },
                { icon: '🐙', label: 'GitHub', href: '#' },
                { icon: '📧', label: 'Email', href: '#' }
              ].map((social) => (
                <button
                  key={social.label}
                  className="w-12 h-12 glass rounded-full flex items-center justify-center hover-lift text-lg transition-all duration-300 hover:bg-teal-500/20"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-teal rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
