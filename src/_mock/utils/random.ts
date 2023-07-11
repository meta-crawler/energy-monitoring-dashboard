export const getRandomValue = (m: number, sigma: number) => m + sigma * Math.random();

export const getRoundedValue = (x: number, drop: number | null = null) =>
  drop !== null ? Number(x.toFixed(drop)) : Number(x.toFixed(2));
