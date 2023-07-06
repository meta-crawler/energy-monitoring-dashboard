import { ICellInfo } from './cell';

export type IModuleState = {
  isLoading: boolean;
  error: Error | string | null;
  selectedModule: IModuleInfo | null;
  modules: IModuleInfo[] | null;
};

export type IModuleInfo = {
  id: string;
  cells: ICellInfo[];
};
