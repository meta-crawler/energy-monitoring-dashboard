export type IStringInfo = [
  {
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

export type IStringState = {
  isLoading: boolean;
  error: Error | string | null;
  selectedString: IStringInfo | null;
  strings: IStringInfo[] | null;
};
