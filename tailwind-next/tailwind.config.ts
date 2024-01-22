import type { Config } from "tailwindcss";

const config: Config = {
  content: [ // Content é a única configuração obrigatória (pelo menos na época do curso, que ainda tinha module.exports em vez de const config tipado)
    "./src/**/*.tsx",
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // É melhor criar estas configurações por aqui do que valores arbitrários com [] nos estilos
      maxWidth: {
        app: '700px',
      },

      colors: {
        teste: '#333',
      }
    },
  },
  plugins: [],
};
export default config;
