/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors - Dark-first approach
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        
        // Enhanced brand colors - Dark-optimized
        brand: {
          teal: '#22d3ee',      // Bright cyan for dark backgrounds
          cyan: '#67e8f9',      // Lighter cyan
          orange: '#fb7185',    // Pink-orange for dark mode
          amber: '#fbbf24',     // Bright amber
          dark: '#0f172a',      // Deep dark background
        },
        
        // Enhanced text colors - Dark-optimized
        text: {
          primary: 'var(--text-primary)',     // #f8fafc - Very light
          secondary: 'var(--text-secondary)', // #e2e8f0 - Light gray
          tertiary: 'var(--text-tertiary)',   // #cbd5e1 - Medium light
          accent: 'var(--text-accent)',       // #22d3ee - Bright cyan
        },
        
        // Enhanced gray scale - Dark-first
        gray: {
          50: '#0f172a',   // Darkest (was lightest)
          100: '#1e293b',  // Very dark
          200: '#334155',  // Dark
          300: '#475569',  // Medium dark (borders)
          400: '#64748b',  // Medium
          500: '#94a3b8',  // Medium light
          600: '#cbd5e1',  // Light (tertiary text)
          700: '#e2e8f0',  // Very light (secondary text)
          800: '#f1f5f9',  // Almost white
          900: '#f8fafc',  // Lightest (primary text)
        },
        
        // Enhanced borders - Dark theme
        border: {
          DEFAULT: 'var(--color-border)',  // #475569
          light: '#64748b',
          dark: '#334155',
          accent: '#22d3ee',
        },
        
        // Category colors - Dark-optimized with better contrast
        category: {
          research: {
            bg: 'rgba(139, 92, 246, 0.15)',   // Purple with transparency
            text: '#c4b5fd',                   // Light purple
            border: 'rgba(139, 92, 246, 0.3)',
          },
          ai: {
            bg: 'rgba(52, 211, 153, 0.15)',   // Emerald
            text: '#6ee7b7',
            border: 'rgba(52, 211, 153, 0.3)',
          },
          game: {
            bg: 'rgba(59, 130, 246, 0.15)',   // Blue
            text: '#93c5fd',
            border: 'rgba(59, 130, 246, 0.3)',
          },
          mobile: {
            bg: 'rgba(251, 113, 133, 0.15)',  // Pink-orange
            text: '#fda4af',
            border: 'rgba(251, 113, 133, 0.3)',
          },
          iot: {
            bg: 'rgba(34, 211, 238, 0.15)',   // Cyan
            text: '#67e8f9',
            border: 'rgba(34, 211, 238, 0.3)',
          },
          web: {
            bg: 'rgba(99, 102, 241, 0.15)',   // Indigo
            text: '#a5b4fc',
            border: 'rgba(99, 102, 241, 0.3)',
          },
          engineering: {
            bg: 'rgba(239, 68, 68, 0.15)',    // Red
            text: '#fca5a5',
            border: 'rgba(239, 68, 68, 0.3)',
          },
          creative: {
            bg: 'rgba(236, 72, 153, 0.15)',   // Pink
            text: '#f9a8d4',
            border: 'rgba(236, 72, 153, 0.3)',
          },
        },
      },
      
      // Enhanced typography with better contrast - Dark optimized
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '600' }],     // Bolder for dark
        'sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        'base': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '800' }],
        '5xl': ['3rem', { lineHeight: '1.2', fontWeight: '900' }],
      },
      
      // Enhanced box shadows - Dark theme optimized
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.4)',
        'DEFAULT': '0 4px 6px rgba(0,0,0,0.3)',
        'md': '0 4px 6px rgba(0,0,0,0.3)',
        'lg': '0 10px 15px rgba(0,0,0,0.25)',
        'xl': '0 20px 25px rgba(0,0,0,0.2)',
        '2xl': '0 25px 50px rgba(0,0,0,0.15)',
        'glass': '0 4px 6px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.3)',
        'glass-lg': '0 8px 12px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.35)',
        'glow-teal': '0 0 20px rgba(34, 211, 238, 0.3)',
        'glow-orange': '0 0 20px rgba(251, 113, 133, 0.3)',
      },
      
      // Enhanced border radius
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem', 
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      
      // Enhanced animations - Dark theme focused
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glow: {
          from: {
            boxShadow: '0 0 10px rgba(34, 211, 238, 0.2)',
          },
          to: {
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.4)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      
      // Enhanced backdrop blur - Better for dark glass effects
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
      },
      
      // Better spacing scale
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Dark-optimized gradient colors
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f172a, #1e293b)',
        'gradient-dark-to-light': 'linear-gradient(135deg, #1e293b, #334155)',
        'gradient-teal-cyan': 'linear-gradient(135deg, #0891b2, #22d3ee)',
        'gradient-orange-pink': 'linear-gradient(135deg, #f97316, #fb7185)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.2), transparent)',
      },
      
      // Enhanced opacity scale for dark theme
      opacity: {
        '2': '0.02',
        '3': '0.03',
        '15': '0.15',
        '85': '0.85',
        '97': '0.97',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable class-based dark mode
}
