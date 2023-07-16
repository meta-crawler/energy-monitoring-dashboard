import axiosInstance from 'src/utils/axios';

export const getHistoryDataApi = (startDate: string, endDate: string, period?: number) =>
  axiosInstance.get('/api/get-history-data', {
    params: {
      startDate,
      endDate,
      period,
    },
  });
