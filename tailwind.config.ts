import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-pt-serif)", "serif"],
      },
      colors: {
        bg: "#030303",
        card: "#070708",
        panel: "#0B0B0C",
        mockup: "#0E1013",
        ink: "#FFECE6",
        muted: "#B8ADA8",
        dim: "#7A7270",
        faint: "#726B67",
        accent: "#EC6229",
      },
    },
  },
  plugins: [],
};

export default config;
