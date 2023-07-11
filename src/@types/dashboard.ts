import { IAlarmInfo } from 'src/@types/alarm';

export type IDashboardState = {
  isLoading: boolean;
  error: Error | string | null;
  gauge: IGaugeInfo | null;
  alarmList: IAlarmInfo[] | null;
  alertList: IAlertInfo | null;
};

export type IGaugeInfo = {
  chargingStatus: boolean | null;
  soc: number | null;
  voltage: number | null;
  current: number | null;
  maxT: ITemperature | null;
  minT: ITemperature | null;
};

export type ITemperature = {
  value: number;
  string: number;
  module: number;
};

export const initGaugeInfo = {
  chargingStatus: false,
  soc: 0,
  voltage: 0,
  current: 0,
  maxT: {
    value: 0,
    string: 0,
    module: 0,
  },
  minT: {
    value: 0,
    string: 0,
    module: 0,
  },
};

export type IAlertInfo = {
  temperature: number;
  overCharge: number;
  overDisCharge: number;
};
