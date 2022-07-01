const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/components/**/*.{rb,erb,haml,html,slim}',
    './config/initializers/simple_form_tailwind.rb',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        black: {
          1000: '#12253F',
          900: '#1D3049',
          700: '#556C8B',
          500: '#6F7F94',
          300: '#ADBACD',
          200: '#D0D7E2',
          50: '#F1F4F8'
        } ,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'fade-out': {
          '0%, 70%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      },
      animation: {
        'fade-out': 'fade-out 3s linear 1'
      }
    },
  },
  safelist: [
    "text-amber-500",
    "text-amber-700",
    "text-slate-500",
    "text-emerald-500",
    "text-orange-700",
    "text-sky-700",
    "text-rose-700",
    "text-blue-500",
    "text-teal-500",
    "text-teal-700",
    "text-indigo-500",
    "text-cyan-700",
    "text-green-700",
    "bg-cyan-50",
    "bg-cyan-100",
    "bg-rose-50",
    "bg-rose-100",
    "bg-amber-100",
    "bg-amber-50",
    "bg-slate-100",
    "bg-slate-50",
    "bg-green-100",
    "bg-green-50",
    "bg-green-300",
    "bg-emerald-100",
    "bg-emerald-50",
    "bg-orange-100",
    "bg-orange-50",
    "bg-orange-300",
    "bg-blue-100",
    "bg-blue-50",
    "bg-sky-100",
    "bg-sky-50",
    "bg-teal-100",
    "bg-teal-50",
    "bg-indigo-100",
    "bg-indigo-50",
    "bg-red-300",
    "bg-red-700",
    "peer-checked:ring-green-500",
    "peer-checked:ring-orange-500",
    "peer-checked:ring-red-500",
    "peer-checked:border-green-500",
    "peer-checked:border-orange-500",
    "peer-checked:border-red-500",
    "peer"
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ]
}
