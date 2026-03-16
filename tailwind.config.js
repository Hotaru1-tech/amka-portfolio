/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Share Tech Mono"', 'monospace'],
        sans: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        bg:     '#070b14',
        panel:  '#0c1220',
        border: '#1a3050',
        cyan:   '#00d4ff',
        green:  '#00ff88',
        orange: '#ff6b35',
        purple: '#bf5fff',
        dim:    '#4a7a9b',
        light:  '#c8e6ff',
      },
      animation: {
        blink:  'blink 2s infinite',
        cursor: 'cursor 0.8s step-end infinite',
        pulse2: 'pulse2 1s ease-in-out infinite',
      },
      keyframes: {
        blink:  { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } },
        cursor: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        pulse2: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.35 } },
      },
    },
  },
  plugins: [],
}