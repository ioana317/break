/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'black': '#0d0901',
        'grey': '#2e2c2a',
        'blue': '#0e2f44',
        'transparent-grey': '#2e2c2a39',
        'yellow': '#e5b768',
        'dark-yellow': '#c1a87e',
        'white': '#efe6d6',
        'p-white': '#efe6d6d5',
        'red': '#aa3f3f'
    },
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
      boogie: ["Boogie School Sans", "Boogie School Sans Middle 2nd Regular"]
    },
    container: {
      center: true,
    },
    extend: {
      btnShadow: {
        'btn': '-4px 3px #efe6d6',
      }
    },
  },
  plugins: [],
}