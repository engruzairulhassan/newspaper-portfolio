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

const defaultTheme = {
  colors: {
    background: "#F4F4F4",
    text: "#000000",
    headerBg: "#FFFFFF",
  },
};


const redTheme = {
  colors: {
    background: "#F5F5DC",
    text: "#3E2723",
    headerBg: "#795548",
    accent: "#8D6E63",
    border: "#D7CCC8",
  },
};

const greenTheme = {
  colors: {
    background: "#E8F5E9",
    text: "#1B5E20",
    headerBg: "#004D40",
    accent: "#FFEB3B",
    border: "#B2DFDB",
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
        "meta-white-primary": "#f9f9f9",
        "meta-white-secondary": "#D8D8D8",
        "meta-light-black": "3a3c56",
        selectedItemColor: "var(--selectedItemColor)",
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
        primaryUpperNavbarLine: "var(--primaryUpperNavbarLine)",
        hoverColor: "var(--hoverColor)",
        primaryLowerNavbarLine: "var(--primaryLowerNavbarLine)",
        ...blueTheme.colors,
        ...defaultTheme.colors,
        ...redTheme.colors,
        ...greenTheme.colors,
      },
      fontFamily: {
        primary: ["var(--primary-font)"],
        secondary: ["var(--secondary-font)"],
        tertiary: ["Playfair Display", "serif"],
      },
      fontSize: {
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