export type IAlarmState = {
  isLoading: boolean;
  error: Error | string | null;
  alarmType: IAlarmType | null;
  alarmLevel: IAlarmLevel | null;
  alarmList: IAlarmInfo[] | null;
};

export enum IAlarmType {
  OVER_TEMPERATURE = 'overT',
  OVER_CHARGE = 'overCharging',
  OVER_DISCHARGE = 'overDisCharging',
  RS485_FAIL = 'rs485',
}

export enum IAlarmLevel {
  NORMAL = 'Normal',
  WARNING = 'Warning',
  ABNORMAL = 'Abnormal',
}

export type IAlarmInfo = {
  time: string;
  type: string;
  level: string;
  message: string;
  status: number;
  target: ITargetType;
};

export type ITargetType = {
  system: string;
  string: string;
  module: string;
  cell?: string;
};
