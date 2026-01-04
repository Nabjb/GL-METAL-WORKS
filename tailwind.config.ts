import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        steel: {
          DEFAULT: "#246783",
          dark: "#1a4d63",
          light: "#2d7a9a",
        },
        silver: {
          DEFAULT: "#c7c7c7",
          light: "#f2f2f2",
        },
      },
    },
  },
  plugins: [],
};
export default config;

