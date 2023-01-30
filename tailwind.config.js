module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  mode: "jit",
  theme: {
    colors: {
      primary: "#000000",
      secondary: "#ffffff",
      accent: "#c81f46",
      neutral: "#B1D23B",
      info: "#19B4B9",
    },
    extend: {
      fontFamily: {
        body: ["Raleway", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      dropShadow: {
        "3xl": "3px 3px 3px rgba(75, 189, 164, 0.5)",
      },
      rotate: {
        127: "127deg",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eAFxNBriFW8k0jCNOTCe6gHaHs%26pid%3DApi&f=1')",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
          },
        },
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/typography"),
  ],
};
