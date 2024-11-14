import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'slow-pulse': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) 3',
      },
      backgroundImage: {
        'imgBackground': "url('/assets/pressurewasher.webp')",
        'imgBackground2': "url('/assets/lady.png')", 
        'imgBackground3': "url('/assets/What.svg')",
        'imgBackground4': "url('/assets/Contact.svg')" 
      },
      colors: {
      'light-gray': '#d3d3d3',
      'dark-blue': '#071156',
      'light-blue': '#29b0e7',
      'logo-blue' : '#003594',
      'black': '#000000',
      'gray': '#3f3f3f',
      'white': '#FFFFFF'
    },
  },
},
  plugins: [],
};
export default config;
