import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nfl-navy": "#0A192F",
        "nfl-red": "#FF4D4D",
        "nfl-heading": "#E6F1FF",
        "nfl-text": "#8892B0",
        "cyber-blue": "#00F0FF",
        "cyber-purple": "#B026FF",
        "cyber-pink": "#FF2A6D",
        "cyber-yellow": "#FFD700",
        "cyber-dark": "#0D0221",
        "cyber-darker": "#070114",
        "cyber-light": "#05D9E8",
        "cyber-accent": "#7700FF",
      },
      fontFamily: {
        nfl: ["var(--font-nfl)"],
        "nfl-body": ["var(--font-nfl-body)"],
      },
      fontSize: {
        "nfl-heading": ["3.5rem", { lineHeight: "1.2" }],
        "nfl-subheading": ["2rem", { lineHeight: "1.3" }],
      },
      keyframes: {
        "slide": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        "neon-pulse": {
          "0%, 100%": { 
            textShadow: "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa" 
          },
          "50%": { 
            textShadow: "0 0 5px #fff, 0 0 7px #fff, 0 0 15px #fff, 0 0 30px #0fa, 0 0 60px #0fa, 0 0 70px #0fa, 0 0 80px #0fa, 0 0 120px #0fa" 
          }
        },
        "border-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px #0fa, 0 0 10px #0fa, 0 0 15px #0fa, inset 0 0 5px #0fa, inset 0 0 10px #0fa, inset 0 0 15px #0fa" 
          },
          "50%": { 
            boxShadow: "0 0 3px #0fa, 0 0 7px #0fa, 0 0 10px #0fa, inset 0 0 3px #0fa, inset 0 0 7px #0fa, inset 0 0 10px #0fa" 
          }
        }
      },
      animation: {
        "slide": "slide 20s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)",
        "cyber-glow": "radial-gradient(circle at center, rgba(0, 240, 255, 0.2) 0%, transparent 70%)",
      },
      boxShadow: {
        "cyber": "0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.3), 0 0 30px rgba(0, 240, 255, 0.1)",
        "cyber-red": "0 0 10px rgba(255, 77, 77, 0.5), 0 0 20px rgba(255, 77, 77, 0.3), 0 0 30px rgba(255, 77, 77, 0.1)",
      },
    },
  },
  plugins: [],
});

export default config;
