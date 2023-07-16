import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { getDynamicGaugeInfoApi, getAlertListApi } from 'src/lib/apis/dashboard-info-api';
import { getAlarmListApi } from 'src/lib/apis/alarm-info-api';
import { IDashboardState } from 'src/@types/dashboard';

const initialState: IDashboardState = {
  isLoading: false,
  error: null,
  gauge: null,
  alarmList: null,
  alertList: null,
};

const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getDynamicGaugeInfoSuccess(state, action) {
      state.isLoading = false;
      state.gauge = action.payload;
    },

    getAlarmListSuccess(state, action) {
      state.isLoading = false;
      state.alarmList = action.payload;
    },

    getAlertListSuccess(state, action) {
      state.isLoading = false;
      state.alertList = action.payload;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------
const {
  startLoading,
  hasError,
  getDynamicGaugeInfoSuccess,
  getAlarmListSuccess,
  getAlertListSuccess,
} = slice.actions;

export const getDynamicGaugeInfo = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getDynamicGaugeInfoApi();
      dispatch(getDynamicGaugeInfoSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
};

export const getAlertList = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getAlertListApi();
      dispatch(getAlertListSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
};

export const getAlarmList = (total?: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getAlarmListApi(total);
      dispatch(getAlarmListSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
};

export const getDashboardInfo = () => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const gaugeRes = await getDynamicGaugeInfoApi();
      dispatch(getDynamicGaugeInfoSuccess(gaugeRes.data.data));

      const alertsRes = await getAlertListApi();
      dispatch(getAlertListSuccess(alertsRes.data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
};
