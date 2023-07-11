import { ChargingStatus, OperationStatus } from 'src/lib/constants/status';

export default [
  [
    {
      chargingStatus: ChargingStatus.CHARGING,
      temperatureStatus: OperationStatus.WARNING,
      overChargeStatus: OperationStatus.NORMAL,
      overDisChargeStatus: OperationStatus.WARNING,
      i485Status: OperationStatus.WARNING,
      dryContactStatus: OperationStatus.NORMAL,
      irfStatus: OperationStatus.DANGER,
    },
    {
      onlineDays: 100.57,
      chargingTime: 79,
      overChargingWarning: 10,
      overTemperatureWarning: 10,
      maxV: 3.69,
      minV: 3.08,
      maxT: 27.52,
      minT: 28.37,
      voltage: 531.95,
      current: 34.3,
    },
    {
      soc: 92.7,
      dod: 8.8,
      soh: 45.06,
    },
  ],
  [
    {
      chargingStatus: ChargingStatus.DISCHARGING,
      temperatureStatus: OperationStatus.DANGER,
      overChargeStatus: OperationStatus.DANGER,
      overDisChargeStatus: OperationStatus.WARNING,
      i485Status: OperationStatus.NORMAL,
      dryContactStatus: OperationStatus.DANGER,
      irfStatus: OperationStatus.DANGER,
    },
    {
      onlineDays: 182.8,
      chargingTime: 73,
      overChargingWarning: 0,
      overTemperatureWarning: 1,
      maxV: 3.84,
      minV: 3.1,
      maxT: 25.26,
      minT: 26.58,
      voltage: 544.04,
      current: 36.59,
    },
    {
      soc: 87.34,
      dod: 3.16,
      soh: 40.1,
    },
  ],
  [
    {
      chargingStatus: ChargingStatus.CHARGING,
      temperatureStatus: OperationStatus.DANGER,
      overChargeStatus: OperationStatus.NORMAL,
      overDisChargeStatus: OperationStatus.NORMAL,
      i485Status: OperationStatus.NORMAL,
      dryContactStatus: OperationStatus.WARNING,
      irfStatus: OperationStatus.WARNING,
    },
    {
      onlineDays: 198.98,
      chargingTime: 94,
      overChargingWarning: 8,
      overTemperatureWarning: 3,
      maxV: 3.92,
      minV: 3.88,
      maxT: 28.21,
      minT: 25.96,
      voltage: 548.66,
      current: 33.87,
    },
    {
      soc: 87.07,
      dod: 6.52,
      soh: 49.91,
    },
  ],
];

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
        status: 'warning',
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
