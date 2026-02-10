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
        'dark-bg': '#0a0e27',
        'dark-card': '#111827',
        'dark-lighter': '#1f2937',
        'text-primary': '#ffffff',
        'text-secondary': '#9ca3af',
        'text-muted': '#6b7280',
        'cyan-primary': '#06b6d4',
        'cyan-light': '#22d3ee',
        'cyan-dark': '#0891b2',
        'accent': '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'SF Mono', 'Monaco', 'Cascadia Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
