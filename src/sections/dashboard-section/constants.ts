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

export type ICircularIndicatorGaugeOptions = {
  breakpoints: IBreakpoint[];
  title: string;
  formatter: string;
  border?: number;
  labelInner?: number;
  labelSize?: number;
  valueAnimation?: boolean;
  min: number;
  max: number;
  majorTicks: number;
  minorTicks: number;
};

export type IBreakpoint = [breakpoint: number, color: string];

export const VOLTAGE_GAUGE_OPTIONS = [
  [300.0 / 600, colors('error.main')],
  [480.0 / 600, colors('warning.main')],
  [540.0 / 600, colors('success.main')],
  [600.0 / 600, colors('error.dark')],
] as IBreakpoint[];

export const CURRENT_GAUGE_OPTIONS = [
  [20.0 / 180, colors('warning.main')],
  [40.0 / 180, colors('success.main')],
  [160.0 / 180, colors('warning.main')],
  [180.0 / 180, colors('error.main')],
] as IBreakpoint[];
