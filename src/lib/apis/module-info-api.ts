import axiosInstance from 'src/utils/axios';

export const getModuleInfosApi = (systemId: string, stringId: string) =>
  axiosInstance.get('/api/get-module-infos', { params: { systemId, stringId } });

export const getModuleInfoApi = (systemId: string, stringId: string, moduleId: string) =>
  axiosInstance.get('/api/get-module-info', { params: { systemId, stringId, moduleId } });
