import axiosInstance from 'src/utils/axios';

export const getDynamicGaugeInfoApi = () => axiosInstance.get('/api/get-gauges-info');
export const getAlarmListApi = (total?: number) =>
  axiosInstance.get('/api/get-alarm-list', {
    params: {
      total,
    },
  });
export const getAlertListApi = () => axiosInstance.get('/api/get-alert-list');
