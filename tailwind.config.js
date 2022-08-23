module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  mode: "jit",
  theme: {
    colors: {},
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        fred: ["ZnikomitSC", "serif"],
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
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        light: {
          primary: "#000000",
          secondary: "#f7f7f7",
          accent: "#c81f46",
          neutral: "#B1D23B",
          info: "#19B4B9",
          "base-100": "#f7f7f7",
        },
      },
      {
        dark: {
          primary: "#000000",
          secondary: "#f7f7f7",
          accent: "#c81f46",
          neutral: "#B1D23B",
          info: "#19B4B9",
          "base-100": "#f7f7f7",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
