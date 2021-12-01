module.exports = {
  mode: "jit",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#35615A",
        tertiary: "#EA9D13",
        secondary: "#D8810D",
        quaternary: "#F4E4B0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
