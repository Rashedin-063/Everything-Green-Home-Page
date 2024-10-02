/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        monospace: "'Space Mono', monospace;",
        roboto: " 'Roboto', sans-serif",
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right, #035762,  #0C716A, #13826F, #199474,  #23AF7D, #38C8B6)',
      },
      colors: {
        'primary-green': '#1b9876',
        hoverColor: '#a3c2c2',
        fontColor: '#233',
        secondaryColor: '#045863',
      },
      boxShadow: {
        custom: '4px 4px 24px 10px rgba(0, 0, 0, 0.25)',
        button: '0 0 7px 1px #23564a',
      },
      screens: {
        sm: '500px',
        md: '680px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1500px',
      },
    },
  },
  plugins: [require('daisyui')],
};
