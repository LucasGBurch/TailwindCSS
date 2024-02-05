import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // Content é a única configuração obrigatória (pelo menos na época do curso, que ainda tinha module.exports em vez de const config tipado)
    './src/**/*.tsx',
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // É melhor criar estas configurações por aqui do que valores arbitrários com [] nos estilos
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'max-content 1fr min-content', // min-content = colunas que ocupam o mínimo possível; só a 1fr poderá crescer
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },

      borderWidth: {
        6: '6px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        },
      },

      maxWidth: {
        app: '700px',
      },
    },
  },
  plugins: [],
}
export default config
