/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,vue}',
    // './components/**/*.{js,ts,jsx,tsx,vue}',
    // './layouts/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
        fontFamily: {
            yeseva: ['Yeseva One',"cursive"],
            monstserrat: ['Montserrat',"sans-serif"]
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
