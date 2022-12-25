module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    screens:{
      'xl':'1370px',
      'lg':'1200px'
    },
    fontSize: {
      sm: '0.9rem',
      base: '1.0rem',
      f17: '1.062rem',
      f18: '1.125rem',
      f19: '1.187rem',
      f20: '1.25rem',
      f21: '1.312rem',
      f22: '1.375rem',
      f23: '1.437rem',
      f24: '1.50rem',
      f26: '1.625rem',
      f28: '1.750rem',
      f30: '1.875rem',
    },
    extend: {
      fontFamily: {
         'kumbh':'Kumbh Sans, Arial'
      },
      colors:{
        orange:' hsl(26, 100%, 55%)',
        pale_orange:'hsl(25, 100%, 94%)',
        very_dark_blue: 'hsl(220, 13%, 13%)',
        dark_grayish_blue: 'hsl(219, 9%, 45%)',
        grayish_blue: 'hsl(220, 14%, 75%)',
        light_grayish_blue: 'hsl(223, 64%, 98%)',
      }
    },
  },
  plugins: [
    //  require('@tailwindcss/forms')({
    //    strategy: 'base', // only generate global styles
    //  }),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio')
  ]
}
