export type IModuleInfo = {
  voltage: number;
  t_01: number;
  t_02: number;
};

export type IModuleState = {
  isLoading: boolean;
  error: Error | string | null;
  selectedModule: IModuleInfo | null;
  modules: IModuleInfo[] | null;
};
