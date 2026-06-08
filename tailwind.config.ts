import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        indigo: {
          500: "#6366f1",
        },
        amber: {
          500: "#f59e0b",
        },
        teal: {
          500: "#14b8a6",
        },
        rose: {
          500: "#f43f5e",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)"],
        dm: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
