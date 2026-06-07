/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:       { DEFAULT: '#05050F', surface: '#0C0C1E', elevated: '#12122A' },
        brand:    { DEFAULT: '#3B82F6', bright: '#60A5FA', cyan: '#06B6D4' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #3B82F6, #06B6D4)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease forwards',
        'fade-in':   'fadeIn 0.6s ease forwards',
        'glow-pulse':'glowPulse 3s ease-in-out infinite',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp:   { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:   { from: { opacity: 0 }, to: { opacity: 1 } },
        glowPulse:{ '0%,100%': { opacity: 0.6 }, '50%': { opacity: 1 } },
        float:    { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(59,130,246,0.2)',
        'glow-blue-lg': '0 0 80px rgba(59,130,246,0.3)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
