/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'iphone': {'min':'0', 'max':'428px'},
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ['lofi','black',],
  },
}