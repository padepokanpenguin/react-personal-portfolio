module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins"],
      },
      colors: {
        logo: "#002265",
        warna: "#0B9DBD",
        footer: "rgba(0, 34, 101, 0.8)",
      },
      backgroundImage: {
        contact: "url('/public/asset/contact/vector.png')",
      },
      screens: {
        'wide': { 'raw': '(min-width: 1537px)' },
      }
    },
  },
  plugins: [],
};
