import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgwhite: "var(--majorwhite)",
        foreblack: "var(--majorblack)",
        foregold: "var(--majorgold)",
        textgold: "var(--textgold)",
        hovergold: "var(--hovergold)",
        footerground: "var(--footerbg)",
      },
      borderColor:{
      customborder: "var(--brdcolor)"
      } ,
      fontSize:{
      largetext :"var(--largetext)",
      mainheading:"var(--mainheaading)", 
      subheading: "var(--subheading)",
      paragraph:"var(--paragraghtext)"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"]
  },
};
export default config;
