
import type { Config } from "tailwindcss"



const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	], theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      scx: {
        default: "#31859b",
        accent: "#225c6a",
        darker: "#1a454f",
        text: "#f0f0f0",
      }
    },
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
    keyframes: {
      spotlight: {
        "0%": {
          opacity: "0",
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: "1",
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
    },
  },
  plugins: [
  ],
},
} satisfies Config


export default config