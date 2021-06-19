module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'title': ['"JetBrains Mono"'],
      'sans': ['"Noto Sans CJK KR"']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
