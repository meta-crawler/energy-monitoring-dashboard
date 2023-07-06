import axiosInstance from 'src/utils/axios';

export const getDynamicGaugeInfoApi = () => axiosInstance.get('/api/get-gauges-info');
export const getAlarmListApi = () => axiosInstance.get('/api/get-alarm-list');
export const getAlertListApi = () => axiosInstance.get('/api/get-alert-list');
