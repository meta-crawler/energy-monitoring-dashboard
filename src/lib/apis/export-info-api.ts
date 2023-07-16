import axiosInstance from 'src/utils/axios';

export const getExportDataApi = (
  string: number,
  module: number,
  startDate: string,
  endDate: string,
  period?: number,
) =>
  axiosInstance.get('/api/get-export-infos', {
    params: {
      string,
      module,
      startDate,
      endDate,
      period,
    },
  });
