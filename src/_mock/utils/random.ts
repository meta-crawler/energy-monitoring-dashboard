import { addDays, addHours, addMinutes, addSeconds, format } from 'date-fns';

export const getRandomValue = (m: number, sigma: number) => m + sigma * Math.random();

export const getRoundedValue = (x: number, drop: number | null = null) =>
  drop !== null ? Number(x.toFixed(drop)) : Number(x.toFixed(2));

export const getRandomTime = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  const randomDays = Math.floor(Math.random() * 31);
  const randomDate = addDays(startDate, randomDays);

  const startHour = 9;
  const endHour = 18;
  const randomHours = Math.floor(Math.random() * (endHour - startHour + 1)) + startHour;
  let randomDateTime = addHours(randomDate, randomHours);

  const startMinute = 0;
  const endMinute = 60;
  const randomMinutes = Math.floor(Math.random() * (endMinute - startMinute + 1)) + startMinute;
  randomDateTime = addMinutes(randomDateTime, randomMinutes);

  const startSecond = 0;
  const endSecond = 60;
  const randomSeconds = Math.floor(Math.random() * (endSecond - startSecond + 1)) + startSecond;
  randomDateTime = addSeconds(randomDateTime, randomSeconds);

  return format(randomDateTime, 'yyyy-MM-dd HH:mm:ss');
};
