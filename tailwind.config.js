/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-100': '#020202',
        'black-80': '#525252',
        'black-60': '#919191',
        'black-40': '#d1d1d1',
        'black-20': '#f2f2f2',
        'black-0': '#ffffff',
        primary: '#f18724',
        surface: '#f2efe7',
        body: '#1e1e1e',
      },
    },
  },
  plugins: [],
  prefix: 'jk-',
}
