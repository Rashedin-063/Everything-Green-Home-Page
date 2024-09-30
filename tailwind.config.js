/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
       monospace: "'Space Mono', monospace;"
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right, #035762,  #0C716A, #13826F,  #23AF7D, #38C8B6)',
      },
      colors: {
        'primary-green': '#1b9876',
      },
    },
  },
  plugins: [require('daisyui')],
};
