

import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-bg)",
        secondary: "var(--secondary-bg)",
        accent: "var(--accent)",
        avocado100: "var(--color-avocado-100)",
        avocado200: "var(--color-avocado-200)",
        avocado300: "var(--color-avocado-300)",
        avocado400: "var(--color-avocado-400)",
        avocado500: "var(--color-avocado-500)",
        avocado600: "var(--color-avocado-600)",
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
        hoverColor: "var(--hoverColor)",
        selectedItemColor: "var(--selectedItemColor)",
      },
      fontFamily: {
        primary: ["var(--primary-font)"],
        secondary: ["var(--secondary-font)"],
        display: ["Satoshi", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      fontSize: {
        xxsm: "11px",
        xsm: "13px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "24px",
        xls: "26px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "70px",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      screens: {
        xs: "480px",
        md: "780px",
        custom: "1114px",
        "custom-lg": "1100px",
        "3xl": "1920px",
        "below-lg": { max: "1266px" },
        sm: "640px",
        lg: "1024px",
        xl: "1280px",
      },
      padding: {
        "50": "12.5rem",
        "58": "14.5rem",
        "48px": "48px",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
