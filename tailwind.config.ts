import type { Config } from "tailwindcss";
const blueTheme = {
  colors: {
    background: '#FAF9F6',
    text: '#3D3D3D',
    headerBg: '#2A2A72',
    accent: '#9C27B0',
    border: '#D4D4D4',
  },
};


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
        selectedItemColor : "var(--selectedItemColor)",
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
        primaryUpperNavbarLine: "var(--primaryUpperNavbarLine)",
        hoverColor: "var(--hoverColor)",
        primaryLowerNavbarLine : "var(--primaryLowerNavbarLine)",
        ...blueTheme.colors,
      },
      fontFamily: {
        primary: ["var(--primary-font)"],
        secondary: ["var(--secondary-font)"],
      },
      fontSize: {
        base: "16px",
        sm: "14px",
        lg: "18px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
} satisfies Config;