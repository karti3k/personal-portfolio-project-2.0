import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', 
  theme: {
    extend: {
      boxShadow: {
        'white-lg': '0 4px 8px rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-blue': '#5890b5',
        'custom-light-blue': '#88b7cb',
        'custom-blue-40': 'rgba(198, 224, 255, 0.4)',
        'custom-black': '#1e2635',
        'custom-light-black': '#263045',
        'custom-very-light-black': '#363f53',
        'custom-blue-green': '#66d5e3',
        'custom-green': '#89a789',
        'custom-sky-blue': '#b0d8f9',
      }
    },
  },
  plugins: [],
};
export default config;
