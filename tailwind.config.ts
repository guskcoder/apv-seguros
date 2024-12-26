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
        sans: ["var(--font-poppins)"],
      },
      colors: {
        primary: {
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
        },
        secondary: {
          DEFAULT: "#fbfb00",
          dark: "#e6e600",
        },
      },
    },
  },
  plugins: [],
};
export default config;
