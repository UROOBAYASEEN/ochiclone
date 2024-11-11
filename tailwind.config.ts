import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "Eyeimage":"url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')"
      }
      ,
    fontFamily:{
      mont:[ "Roboto Condensed", 'sans-serif'],
      grot:["Hanken Grotesk", 'sans-serif'],
      letest:["Schibsted Grotesk", 'sans-serif'],
    }
    },
  },
  plugins: [],
};
export default config;
