/**
 * ln -s ../tailwind.config.js node_modules/tailwind.config.js
 * */
import { useMemo } from 'react';
import tailwindConfig from 'tailwind.config';

export const useColor = (colorPath: string) => {
  const config = useMemo(() => tailwindConfig, []);
  const customColors = config.theme.extend.colors;
  const color = colorPath.split('.');

  if (!!color[0] && !color[1]) return (customColors as any)[color[0]];
  if (!!color[0] && !!color[1]) return (customColors as any)[color[0]][color[1]];
  else return '#000000';
};
