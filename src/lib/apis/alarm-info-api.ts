import axiosInstance from 'src/utils/axios';

export const getAlarmListApi = (total?: number) =>
  axiosInstance.get('/api/get-alarm-list', {
    params: {
      total,
    },
  });
