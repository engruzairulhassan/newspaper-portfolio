import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-bg)",
        secondary: "var(--secondary-bg)",
        accent: "var(--accent)",
        "meta-white-primary": "#f9f9f9",
        "meta-white-secondary": "#D8D8D8",
        "meta-light-black": "3a3c56",
        selectedItemColor: "var(--selectedItemColor)",
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
        primaryUpperNavbarLine: "var(--primaryUpperNavbarLine)",
        hoverColor: "var(--hoverColor)",
        primaryLowerNavbarLine: "var(--primaryLowerNavbarLine)",
      },
      fontFamily: {
        primary: ["var(--primary-font)"],
        secondary: ["var(--secondary-font)"],
        tertiary: ["Playfair Display", "serif"],
      },
      fontSize: {
        xxsm: '11px',
        xsm: '13px',
        base: "16px",
        sm: "14px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        custom: "50px",
        "4xl": "70px",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      screens: {
        xs: "480px", // Custom extra small breakpoint
        md: "780px", // Changing md breakpoint to 780px
        "custom-lg": "1100px", // Adding a new custom breakpoint
      },
    },
  },
  plugins: [],
} satisfies Config;