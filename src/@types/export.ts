export type IExportState = {
  isLoading: boolean;
  error: Error | string | null;
  data: IExportData[] | null;
};

export type IExportData = {
  string: number;
  module: number;
  time: string;
  alarm: number;
  chargeStatus: number;
  overT: number;
  overCharge: number;
  overDischarge: number;
  voltage: number;
  current: number;
};
