import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "DM Serif Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      colors: {
        sage: {
          DEFAULT: "#4a7c59",
          light: "#e8f2eb",
          mid: "#8bb89a",
          dark: "#2d5038",
        },
        cream: "#f9f7f3",
        peach: {
          DEFAULT: "#f5e6dc",
          dark: "#b86a3a",
        },
        lilac: {
          DEFAULT: "#ede8f5",
          dark: "#6e52a8",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
