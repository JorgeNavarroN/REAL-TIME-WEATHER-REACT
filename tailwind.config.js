/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-gradient-to-t',
    'bg-gradient-to-tr',
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    'bg-gradient-to-b',
    'bg-gradient-to-bl',
    'bg-gradient-to-l',
    'bg-gradient-to-tl',
    'bg-opacity-0',
    'bg-opacity-100'
  ],
  theme: {
    extend: {}
  },
  plugins: [],
}

