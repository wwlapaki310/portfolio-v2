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
        // Base colors
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        
        // Enhanced brand colors with better contrast
        brand: {
          teal: '#0f766e',      // Deeper teal
          cyan: '#0e7490',      // Deeper cyan 
          orange: '#dc2626',    // More red-orange
          amber: '#b45309',     // Much darker amber
        },
        
        // Enhanced text colors
        text: {
          primary: 'var(--text-primary)',     // #111827
          secondary: 'var(--text-secondary)', // #374151
          tertiary: 'var(--text-tertiary)',   // #4b5563
          accent: 'var(--text-accent)',       // #0f766e
        },
        
        // Enhanced gray scale
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',  // text-tertiary
          700: '#374151',  // text-secondary
          800: '#1e293b',  // charcoal/slate
          900: '#111827',  // text-primary
        },
        
        // Enhanced borders
        border: {
          DEFAULT: 'var(--color-border)',  // #d1d5db
          light: '#e5e7eb',
          dark: '#374151',
        },
        
        // Category colors with better contrast
        category: {
          research: {
            bg: '#faf5ff',
            text: '#581c87',
            border: '#c4b5fd',
          },
          ai: {
            bg: '#ecfdf5', 
            text: '#065f46',
            border: '#a7f3d0',
          },
          game: {
            bg: '#eff6ff',
            text: '#1e3a8a', 
            border: '#93c5fd',
          },
          mobile: {
            bg: '#fff7ed',
            text: '#9a3412',
            border: '#fed7aa',
          },
          iot: {
            bg: '#f0fdfa',
            text: '#134e4a',
            border: '#5eead4',
          },
          web: {
            bg: '#eef2ff',
            text: '#312e81',
            border: '#a5b4fc',
          },
          engineering: {
            bg: '#fef2f2',
            text: '#991b1b',
            border: '#fca5a5',
          },
          creative: {
            bg: '#fdf2f8',
            text: '#be185d',
            border: '#f9a8d4',
          },
        },
      },
      
      // Enhanced typography with better contrast
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        'base': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        '5xl': ['3rem', { lineHeight: '1.2', fontWeight: '800' }],
      },
      
      // Enhanced box shadows
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.08)',
        'DEFAULT': '0 4px 6px rgba(0,0,0,0.1)',
        'md': '0 4px 6px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px rgba(0,0,0,0.12)',
        'xl': '0 20px 25px rgba(0,0,0,0.15)',
        '2xl': '0 25px 50px rgba(0,0,0,0.2)',
        'glass': '0 4px 6px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)',
      },
      
      // Enhanced border radius
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem', 
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      
      // Enhanced animations
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
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
      },
      
      // Enhanced backdrop blur
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      
      // Better spacing scale
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
