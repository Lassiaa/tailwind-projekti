/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      borderRadius: {
        more: "4rem",
      },
      rotate: {
        20: "20deg",
      },
      width: {
        large: "1024px",
        extralarge: "1280px",
      },
      colors: {
        "raisin-black": "#161925",
        "delft-blue": "#3A405A",
        "falu-red": "#81171B",
        platinum: "#D9D9D9",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      backgroundImage: {
        puu: "url('./images/puu.jpg')",
        stream: "url('./images/shell.jpg')",
        porsche: "url('./images/porsche992gt3.jpg')",
      },
    },
  },
  plugins: [],
};
