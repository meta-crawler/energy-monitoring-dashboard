import { ChargingStatus, OperationStatus } from 'src/lib/constants/status';

export default {
  1: [
    {
      chargingStatus: ChargingStatus.CHARGING,
      temperatureStatus: OperationStatus.NORMAL,
      overChargeStatus: OperationStatus.WARNING,
      overDisChargeStatus: OperationStatus.NORMAL,
      i485Status: OperationStatus.DANGER,
      dryContactStatus: OperationStatus.NORMAL,
      irfStatus: OperationStatus.WARNING,
    },
    {
      onlineDays: 195.76,
      chargingTime: 0,
      overChargingWarning: 0,
      overTemperatureWarning: 0,
      maxV: 3.36,
      minV: 3.29,
      maxT: 28.2,
      minT: 26.7,
      voltage: 534.91,
      current: 35.7,
    },
    {
      soc: 89.8,
      dod: 20.4,
      soh: 59.2,
    },
  ],
  2: [
    {
      chargingStatus: ChargingStatus.CHARGING,
      temperatureStatus: OperationStatus.WARNING,
      overChargeStatus: OperationStatus.WARNING,
      overDisChargeStatus: OperationStatus.NORMAL,
      i485Status: OperationStatus.DANGER,
      dryContactStatus: OperationStatus.NORMAL,
      irfStatus: OperationStatus.WARNING,
    },
    {
      onlineDays: 195.76,
      chargingTime: 0,
      overChargingWarning: 0,
      overTemperatureWarning: 0,
      maxV: 3.36,
      minV: 3.29,
      maxT: 28.2,
      minT: 26.7,
      voltage: 534.91,
      current: 35.7,
    },
    {
      soc: 90.8,
      dod: 10.4,
      soh: 34.2,
    },
  ],
  3: [
    {
      chargingStatus: ChargingStatus.DISCHARGING,
      temperatureStatus: OperationStatus.NORMAL,
      overChargeStatus: OperationStatus.NORMAL,
      overDisChargeStatus: OperationStatus.NORMAL,
      i485Status: OperationStatus.WARNING,
      dryContactStatus: OperationStatus.NORMAL,
      irfStatus: OperationStatus.WARNING,
    },
    {
      onlineDays: 195.76,
      chargingTime: 0,
      overChargingWarning: 0,
      overTemperatureWarning: 0,
      maxV: 3.36,
      minV: 3.29,
      maxT: 28.2,
      minT: 26.7,
      voltage: 534.91,
      current: 35.7,
    },
    {
      soc: 96.4,
      dod: 0.4,
      soh: 34.9,
    },
  ],
};

export const systemFields = [
  {
    chargingStatus: '充放電狀態',
    temperatureStatus: '溫度狀態',
    overChargeStatus: '過充監控',
    overDisChargeStatus: '過放監控',
    i485Status: '485狀態',
    dryContactStatus: '乾接點狀態',
    irfStatus: 'IRF狀態',
  },
  {
    onlineDays: '上線天數',
    chargingTime: '充放電次數',
    overChargingWarning: '過充告警',
    overTemperatureWarning: '過溫告警',
    maxV: 'Max V(V)',
    minV: 'Min V(V)',
    maxT: 'Max T(℃)',
    minT: 'Min T(℃)',
    voltage: 'Voltage(V)',
    current: 'Current(A)',
  },
  {
    soc: 'SoC(%)',
    dod: 'DoD(%)',
    soh: 'SoH(%)',
  },
];

export const systemList = [
  {
    id: '1',
    status: 'normal',
    strings: [
      {
        id: '1-1',
        status: 'normal',
      },
      {
        id: '1-2',
        status: 'normal',
      },
      {
        id: '1-3',
        status: 'normal',
      },
    ],
  },
  {
    id: '2',
    status: 'warning',
    strings: [
      {
        id: '2-1',
        status: 'normal',
      },
      {
        id: '2-2',
        status: 'warning',
      },
      {
        id: '2-3',
        status: 'normal',
      },
    ],
  },
  {
    id: '3',
    status: 'normal',
    strings: [
      {
        id: '3-1',
        status: 'normal',
      },
      {
        id: '3-2',
        status: 'normal',
      },
      {
        id: '3-3',
        status: 'normal',
      },
    ],
  },
];
