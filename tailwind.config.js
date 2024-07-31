/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      popfont: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          purple: "#58468c",
          blue: "#5480ff",
          orange: "#ff8a73",
        },
      },
      backgroundImage: {
        bgimage: "url('/images/pix.jpg')",
      },
      boxShadow: {
        orangeS: "-7px 6px 37px -1px rgba(255,138,115,0.78)",
        blueS: "-7px 6px 37px -1px rgba(84,128,255,0.78);",
        blue_h:"10px -3px 29px 4px rgba(88,184,253,0.75);"
      },
    },
  },
  plugins: [],
};
