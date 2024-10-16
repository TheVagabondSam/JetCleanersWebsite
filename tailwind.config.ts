import type { Config } from "tailwindcss";
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    },
    extend: {
      backgroundImage: {
        'imgBackground': "url('../assets/lady-background.png')",
      },
      colors: {
      'dark-blue': '#071156',
      'light-blue': '#29b0e7',
      'both-blue' : '#071156D9',
      'black': '#000000',
      'gray': '#3f3f3f',
      'white': '#e8e6e6'
  },
},
  plugins: [],
};

