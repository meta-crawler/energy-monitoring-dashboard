export type ISystemState = {
  isLoading: boolean;
  error: Error | string | null;
  activeSystem: string | null;
  systemFields: ISystemFields | null;
  systemList: ISystemListItem[] | null;
  selectedSystem: ISystemInfo | null;
  systems: ISystemInfo[] | null;
};

export type ISystemFields = [
  {
    chargingStatus: string;
    temperatureStatus: string;
    overChargeStatus: string;
    overDisChargeStatus: string;
    i485Status: string;
    dryContactStatus: string;
    irfStatus: string;
  },
  {
    onlineDays: string;
    chargingTime: string;
    overChargingWarning: string;
    overTemperatureWarning: string;
    maxV: string;
    minV: string;
    maxT: string;
    min: string;
    voltage: string;
    current: string;
  },
  {
    soc: string;
    dod: string;
    soh: string;
  },
];

export type ISystemInfo = [
  {
    chargingStatus: string;
    temperatureStatus: string;
    overChargeStatus: string;
    overDisChargeStatus: string;
    i485Status: string;
    dryContactStatus: string;
    irfStatus: string;
  },
  {
    onlineDays: number;
    chargingTime: number;
    overChargingWarning: number;
    overTemperatureWarning: number;
    maxV: number;
    minV: number;
    maxT: number;
    minT: number;
    voltage: number;
    current: number;
  },
  {
    soc: number;
    dod: number;
    soh: number;
  },
];

export type ISystemListItem = {
  id: string;
  status: string;
  strings: {
    id: string;
    status: string;
  }[];
};
