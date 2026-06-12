/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        term: {
          bg: "#0c1117",
          panel: "#11181f",
          bar: "#0a0f14",
          line: "#1f2a35",
          ink: "#c9d4dd",
          dim: "#7d8b99",
          faint: "#4a5a68",
          green: "#3fe081",
          amber: "#ffc66d",
          cyan: "#58d6ff",
          pink: "#ff7eb6",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
