/**
 * ln -s ../tailwind.config.js node_modules/tailwind.config.js
 * */
import tailwindConfig from 'tailwind.config';

const colors = (colorPath: string) => {
  const customColors = tailwindConfig.theme.extend.colors;
  const color = colorPath.split('.');

  if (!!color[0] && !color[1]) return (customColors as any)[color[0]];
  if (!!color[0] && !!color[1]) return (customColors as any)[color[0]][color[1]];
  else return '#000000';
};

export default colors;
