import axiosInstance from 'src/utils/axios';

export const getDynamicGaugeInfoApi = () => axiosInstance.get('/api/get-gauges-info');
export const getAlertListApi = () => axiosInstance.get('/api/get-alert-list');
