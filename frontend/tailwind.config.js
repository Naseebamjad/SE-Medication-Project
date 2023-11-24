/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        gradientColorStops: {
          custom1: "rgba(81, 217, 219, 1)",
          custom2: "rgba(1, 115, 153, 1)",
        },
        textColor: {
          custom: "rgba(23, 32, 72, 1)",
          customdim: "rgba(196, 196, 196, 1)",
          register: "rgba(51, 51, 51, 1)",
          articles: "rgba(21, 158, 236, 1)",
        },
        backgroundColor: {
          registerCustom: "rgba(80, 216, 219, 1)",
          doctorsCustom: "rgba(23, 32, 72, 1)",
          aboutUsCustom: "rgba(191, 210, 248, 1)",
        },
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
      },
    },
    plugins: [require("daisyui")],
  };  