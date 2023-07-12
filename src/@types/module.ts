import { IAlarmLevel } from 'src/@types/alarm';

export type IModuleState = {
  isLoading: boolean;
  error: Error | string | null;
  selectedModule: IModuleInfo | null;
  modules: IModuleInfo[] | null;
};

export type IModuleInfo = {
  string: number;
  module: number;
  time: string;
  tempStatus: IAlarmLevel;
  vStatus: IAlarmLevel;
  voltage: number;
  current: number;
  temp_01: number;
  temp_02: number;
  soc: number;
};
