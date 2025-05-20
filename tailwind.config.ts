import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "15rem",
        "2xl": "22rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        typing: {
          from: { width: '0' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
        move: {
          '0%': {
            textShadow: `
              4px -4px 0 hsla(0, 100%, 50%, 1),
              3px -3px 0 hsla(0, 100%, 50%, 1),
              2px -2px 0 hsla(0, 100%, 50%, 1),
              1px -1px 0 hsla(0, 100%, 50%, 1),
              -4px 4px 0 hsla(180, 100%, 50%, 1),
              -3px 3px 0 hsla(180, 100%, 50%, 1),
              -2px 2px 0 hsla(180, 100%, 50%, 1),
              -1px 1px 0 hsla(180, 100%, 50%, 1)
            `,
          },
          '25%': {
            textShadow: `
              -4px -4px 0 hsla(180, 100%, 50%, 1),
              -3px -3px 0 hsla(180, 100%, 50%, 1),
              -2px -2px 0 hsla(180, 100%, 50%, 1),
              -1px -1px 0 hsla(180, 100%, 50%, 1),
              4px 4px 0 hsla(0, 100%, 50%, 1),
              3px 3px 0 hsla(0, 100%, 50%, 1),
              2px 2px 0 hsla(0, 100%, 50%, 1),
              1px 1px 0 hsla(0, 100%, 50%, 1)
            `,
          },
          '50%': {
            textShadow: `
              -4px 4px 0 hsla(0, 100%, 50%, 1),
              -3px 3px 0 hsla(0, 100%, 50%, 1),
              -2px 2px 0 hsla(0, 100%, 50%, 1),
              -1px 1px 0 hsla(0, 100%, 50%, 1),
              4px -4px 0 hsla(180, 100%, 50%, 1),
              3px -3px 0 hsla(180, 100%, 50%, 1),
              2px -2px 0 hsla(180, 100%, 50%, 1),
              1px -1px 0 hsla(180, 100%, 50%, 1)
            `,
          },
          '75%': {
            textShadow: `
              4px 4px 0 hsla(180, 100%, 50%, 1),
              3px 3px 0 hsla(180, 100%, 50%, 1),
              2px 2px 0 hsla(180, 100%, 50%, 1),
              1px 1px 0 hsla(180, 100%, 50%, 1),
              -4px -4px 0 hsla(0, 100%, 50%, 1),
              -3px -3px 0 hsla(0, 100%, 50%, 1),
              -2px -2px 0 hsla(0, 100%, 50%, 1),
              -1px -1px 0 hsla(0, 100%, 50%, 1)
            `,
          },
          '100%': {
            textShadow: `
              4px -4px 0 hsla(0, 100%, 50%, 1),
              3px -3px 0 hsla(0, 100%, 50%, 1),
              2px -2px 0 hsla(0, 100%, 50%, 1),
              1px -1px 0 hsla(0, 100%, 50%, 1),
              -4px 4px 0 hsla(180, 100%, 50%, 1),
              -3px 3px 0 hsla(180, 100%, 50%, 1),
              -2px 2px 0 hsla(180, 100%, 50%, 1),
              -1px 1px 0 hsla(180, 100%, 50%, 1)
            `,
          },
        },
        glow: {
          from: {
            textShadow: "0px 0px 5px #fff, 0px 0px 5px #614ad3",
          },
          to: {
            textShadow: "0px 0px 20px #fff, 0px 0px 20px #614ad3",
          },
        },
      },
      animation: {
        move: 'move 2s linear infinite',
        glow: "glow 1s infinite alternate",
        typing: 'typing 1s steps(30)',
        blink: 'blink 0.2s step-end infinite alternate'
      },
    },
  },
  plugins: [],
};
export default config;
