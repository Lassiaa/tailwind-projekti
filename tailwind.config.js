/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "raisin-black": "#161925",
        "delft-blue": "#3A405A",
        "falu-red": "#81171B",
        platinum: "#D9D9D9",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        'stream': "url('./images/puu.jpg')",
      },
    },
  },
  plugins: [],
};
