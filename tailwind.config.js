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
        
        // Enhanced Brand Colors (Issue #12 Contrast Improvement)
        brand: {
          teal: '#0f766e',      // Darker teal for better contrast
          cyan: '#0e7490',      // Darker cyan for better contrast
          orange: '#dc2626',    // Red-leaning orange for better visibility
          amber: '#b45309',     // Darker amber for better contrast
          dark: '#0f172a',
        },
        
        // Enhanced Text Colors (Issue #12 Compliance)
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          accent: 'var(--text-accent)',
        },
        
        // Enhanced Gray Scale (Issue #12 specifications)
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',        // Enhanced medium gray
          800: '#1e293b',        // Enhanced charcoal
          900: '#0f172a',        // Deep dark
        },
        
        border: {
          DEFAULT: 'var(--color-border)',
        },
        
        // Category Colors with Better Contrast (Issue #12 Phase 2)
        category: {
          research: {
            bg: 'rgba(147, 51, 234, 0.9)',
            text: '#f3e8ff',
            border: 'rgba(196, 181, 253, 0.3)',
          },
          ai: {
            bg: 'rgba(5, 150, 105, 0.9)',
            text: '#d1fae5',
            border: 'rgba(110, 231, 183, 0.3)',
          },
          game: {
            bg: 'rgba(37, 99, 235, 0.9)',
            text: '#dbeafe',
            border: 'rgba(147, 197, 253, 0.3)',
          },
          mobile: {
            bg: 'rgba(234, 88, 12, 0.9)',
            text: '#fed7aa',
            border: 'rgba(251, 146, 60, 0.3)',
          },
          iot: {
            bg: 'rgba(13, 148, 136, 0.9)',
            text: '#ccfbf1',
            border: 'rgba(94, 234, 212, 0.3)',
          },
          web: {
            bg: 'rgba(79, 70, 229, 0.9)',
            text: '#e0e7ff',
            border: 'rgba(165, 180, 252, 0.3)',
          },
          engineering: {
            bg: 'rgba(220, 38, 38, 0.9)',
            text: '#fecaca',
            border: 'rgba(248, 113, 113, 0.3)',
          },
        },
      },
      
      // Enhanced Typography Scale (Issue #12 Readability)
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }],     // Stronger small text
        'sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600' }], // Stronger small text
        'base': ['1rem', { lineHeight: '1.6rem', fontWeight: '500' }],    // Improved line height
        'lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '500' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '600' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '800' }], // Stronger headings
        '4xl': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '900' }],   // Stronger headings
        '5xl': ['3rem', { lineHeight: '1.2', fontWeight: '900' }],
      },
      
      // Enhanced Shadows (Issue #12 Glass Effects)
      boxShadow: {
        'glass': '0 4px 6px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.4)',      // Stronger shadows
        'glass-lg': '0 8px 12px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.45)',  // Stronger shadows
        'contrast': '0 4px 12px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.6)',   // High contrast shadow
      },
      
      // Accessibility Enhancements
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'focus-ring': 'focus-ring 0.2s ease-out',  // Focus animation
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },  // Less dramatic pulse for better readability
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
        'focus-ring': {
          '0%': { 
            transform: 'scale(0.8)',
            opacity: '0',
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      
      // Enhanced Backdrop Blur (Issue #12 reduced blur)
      backdropBlur: {
        'sm': '4px',
        'md': '8px',   // Reduced from default for better readability
        'lg': '12px',  // Reduced from default
        'xl': '16px',  // Reduced from 24px
        '2xl': '20px', // Reduced from 32px
      },
      
      // Enhanced Border Radius for consistency
      borderRadius: {
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      
      // Enhanced Spacing for better touch targets (44px minimum)
      spacing: {
        '18': '4.5rem',  // 72px
        '22': '5.5rem',  // 88px
        '26': '6.5rem',  // 104px
      },
    },
  },
  plugins: [],
}
