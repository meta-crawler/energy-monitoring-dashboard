/** @type {import('tailwindcss').Config} */
const _ = require('lodash');
const flattenColorPalette = require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        grey: {
          0: '#FFFFFF',
          100: '#F9FAFB',
          200: '#F4F6F8',
          300: '#DFE3E8',
          400: '#C4CDD5',
          500: '#919EAB',
          600: '#637381',
          700: '#454F5B',
          800: '#212B36',
          900: '#161C24',
        },
        primary: {
          lighter: '#C8FACD',
          light: '#5BE584',
          main: '#00AB55',
          dark: '#007B55',
          darker: '#005249',
          contrastText: '#fff',
        },
        secondary: {
          lighter: '#D6E4FF',
          light: '#84A9FF',
          main: '#3366FF',
          dark: '#1939B7',
          darker: '#091A7A',
          contrastText: '#fff',
        },
        info: {
          lighter: '#CAFDF5',
          light: '#61F3F3',
          main: '#00B8D9',
          dark: '#006C9C',
          darker: '#003768',
          contrastText: '#fff',
        },
        success: {
          lighter: '#D8FBDE',
          light: '#86E8AB',
          main: '#36B37E',
          dark: '#1B806A',
          darker: '#0A5554',
          contrastText: '#fff',
        },
        warning: {
          lighter: '#FFF5CC',
          light: '#FFD666',
          main: '#FFAB00',
          dark: '#B76E00',
          darker: '#7A4100',
          contrastText: '#212B36',
        },
        error: {
          lighter: '#FFE9D5',
          light: '#FFAC82',
          main: '#FF5630',
          dark: '#B71D18',
          darker: '#7A0916',
          contrastText: '#fff',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, e, theme, variants }) {
      const colors = flattenColorPalette(theme('borderColor'));

      const utilities = _.flatMap(_.omit(colors, 'default'), (value, modifier) => ({
        [`.${e(`border-t-${modifier}`)}`]: { borderTopColor: `${value}` },
        [`.${e(`border-r-${modifier}`)}`]: { borderRightColor: `${value}` },
        [`.${e(`border-b-${modifier}`)}`]: { borderBottomColor: `${value}` },
        [`.${e(`border-l-${modifier}`)}`]: { borderLeftColor: `${value}` },
      }));

      addUtilities(utilities, variants('borderColor'));
    },
  ],
};
