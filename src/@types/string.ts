export type IStringState = {
  isLoading: boolean;
  error: Error | string | null;
  activeString: string | null;
  stringFields: IStringFields | null;
  selectedString: IStringInfo | null;
  strings: IStringInfo[] | null;
};

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

export type IStringFields = [
  {
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
