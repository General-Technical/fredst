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
        body: ["Roboto Slab", "serif"],
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
          primary: "#f7f7f7",
          secondary: "#c81f46",
          accent: "#000000",
          neutral: "#3d4451",
          "base-100": "#ffffff",
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
