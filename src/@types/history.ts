export type IHistoryState = {
  isLoading: boolean;
  error: Error | string | null;
  history: IHistory | null;
};

export type IHistory = {
  values: number[];
  times: string[];
};
