import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      cssBreak: {'max': '768px'},
    },
    extend: {
      colors: {
        primary: "",
      },
      
    },
  },
  variants: {
    extend: {
      scale: ["hover"],
    },
  },
  plugins: [],
};

export default config;
