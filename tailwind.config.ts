import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true
    },
    fontWeight: {
      thin: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      colors: {
        'aviable-bg': '#D7FAEA',
        'green': '#088046',
        'icons-bg': '#999',
        'black': "#111111",
        'gray': '#666666'
      },
      keyframes: {
        borderPulse: {
          '0%': { 'box-shadow': '0 0 0 0 rgba(8, 128, 70, 0.7)' },
          '70%': { 'box-shadow': '0 0 7px 7px rgba(8, 128, 70, 0)' },
          '100%': { 'box-shadow': '0 0 0 0 rgba(8, 128, 70, 0)' },
        },
      },
      animation: {
        borderPulse: 'borderPulse 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
