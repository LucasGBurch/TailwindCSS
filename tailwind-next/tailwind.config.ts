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

        error: {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
        },
      },

      maxWidth: {
        app: '700px',
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        // slideUpAndFade: {
        //   from: { opacity: '1' },
        //   to: { opacity: '0' },
        // },
      },

      animation: {
        slideDownAndFade: 'slideDownAndFade 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        // slideUpAndFade: 'slideUpAndFade 0.3s linear',
      },
    },
  },
  plugins: [],
}
export default config
