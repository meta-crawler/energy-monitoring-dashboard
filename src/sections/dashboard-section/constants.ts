import colors from 'src/theme/colors';

export type IGaugeOptions = {
  unit: string;
  border?: number;
  breakpoints: IGaugeOption[];
};

type IGaugeOption = {
  start: number;
  end: number;
  color: string;
};

export const VOLTAGE_OPTIONS = [
  {
    start: 0,
    end: 180,
    color: colors('error.main'),
  },
  {
    start: 180,
    end: 220,
    color: colors('warning.main'),
  },
  {
    start: 220,
    end: 250,
    color: colors('success.main'),
  },
  {
    start: 250,
    end: 270,
    color: colors('warning.main'),
  },
  {
    start: 270,
    end: 300,
    color: colors('error.dark'),
  },
];

export const CURRENT_OPTIONS = [
  {
    start: 0,
    end: 120,
    color: colors('success.main'),
  },
  {
    start: 120,
    end: 150,
    color: colors('warning.main'),
  },
  {
    start: 150,
    end: 180,
    color: colors('error.main'),
  },
];
