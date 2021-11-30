module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#35615A",
        secondary: "#D8810D",
        tertiary: "#EA9D13",
        quaternary: "#F4E4B0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
