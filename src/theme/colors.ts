/**
 * ln -s ../tailwind.config.js node_modules/tailwind.config.js
 * */

export const COLORS = {
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
    contrastText: '#ffffff',
  },
  secondary: {
    lighter: '#D6E4FF',
    light: '#84A9FF',
    main: '#3366FF',
    dark: '#1939B7',
    darker: '#091A7A',
    contrastText: '#ffffff',
  },
  info: {
    lighter: '#CAFDF5',
    light: '#61F3F3',
    main: '#00B8D9',
    dark: '#006C9C',
    darker: '#003768',
    contrastText: '#ffffff',
  },
  success: {
    lighter: '#D8FBDE',
    light: '#86E8AB',
    main: '#36B37E',
    dark: '#1B806A',
    darker: '#0A5554',
    contrastText: '#ffffff',
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
    contrastText: '#ffffff',
  },
  text: {
    primary: '#212B36',
    secondary: '#637381',
    disabled: '#919EAB',
  },
  background: {
    paper: '#F4F6F8',
    default: '#ffffff',
    neutral: '#F4F6F8',
  },
};

const colors = (colorPath: string) => {
  const color = colorPath.split('.');

  if (!!color[0] && !color[1]) return (COLORS as any)[color[0]];
  if (!!color[0] && !!color[1]) return (COLORS as any)[color[0]][color[1]];
  else return '#000000';
};

export default colors;
