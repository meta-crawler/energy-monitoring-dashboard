import {
  addDays,
  addHours,
  addMinutes,
  addSeconds,
  sub,
  format,
  eachHourOfInterval,
} from 'date-fns';

export const getRandomValue = (m: number, sigma: number) => m + sigma * Math.random();

export const getLinearRandomValue = (min: number, max: number) => Math.random() * (max - min) + min;

export const getRoundedValue = (x: number, drop: number | null = null) =>
  drop !== null ? Number(x.toFixed(drop)) : Number(x.toFixed(1));

export const getRandomTime = () => {
  const startDate = sub(new Date(), { weeks: 1 });

  const randomDays = Math.floor(Math.random() * 7);
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

export const getRandomSamplingTime = (startDate: string, endDate: string, period?: number) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const hours = eachHourOfInterval({ start, end }, { step: period ? period : 1 });

  return hours.map((hour) => format(hour, 'yyyy-MM-dd HH:mm'));
};
