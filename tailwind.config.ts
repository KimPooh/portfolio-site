import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101012",
        paper: "#f7f4ee",
        ember: "#ff6b4a",
        mint: "#43d9ad",
        signal: "#f6c85f",
        electric: "#5cc8ff"
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        lift: "0 18px 60px rgba(0, 0, 0, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
