module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        accent: '#06b6d4',
        deep: '#060714',
        panel: '#0f1724'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glass-lg': '0 10px 30px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: []
}
