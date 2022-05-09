module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        banner1: "url('/images/banner_1.jpg')",
        banner2: "url('/images/banner_2.jpg')",
        cloud2: "url('/images/cloud1.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
