/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        
        brand: {
          teal: '#22d3ee',
          cyan: '#67e8f9',
          orange: '#fb7185',
          amber: '#fbbf24',
          dark: '#0f172a',
        },
        
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          accent: 'var(--text-accent)',
        },
        
        border: {
          DEFAULT: 'var(--color-border)',
        },
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '600' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500' }],
        'base': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '800' }],
        '5xl': ['3rem', { lineHeight: '1.2', fontWeight: '900' }],
      },
      
      boxShadow: {
        'glass': '0 4px 6px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.3)',
        'glass-lg': '0 8px 12px rgba(0,0,0,0.25), 0 2px 4px rgba(0,0,0,0.35)',
      },
      
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
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
      
      backdropBlur: {
        'xl': '24px',
        '2xl': '32px',
      },
    },
  },
  plugins: [],
}
