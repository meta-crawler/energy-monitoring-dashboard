import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { getAlarmListApi } from 'src/lib/apis/alarm-info-api';
import { IAlarmLevel, IAlarmState, IAlarmType } from 'src/@types/alarm';

const initialState: IAlarmState = {
  isLoading: false,
  error: null,
  alarmType: null,
  alarmLevel: null,
  alarmList: null,
};

const slice = createSlice({
  name: 'alarm',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    setAlarmTypeSuccess(state, action) {
      state.isLoading = false;
      state.alarmType = action.payload;
    },

    setAlarmLevelSuccess(state, action) {
      state.isLoading = false;
      state.alarmLevel = action.payload;
    },

    getAlarmListSuccess(state, action) {
      state.isLoading = false;
      state.alarmList = action.payload;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------
const { startLoading, hasError, setAlarmTypeSuccess, setAlarmLevelSuccess, getAlarmListSuccess } =
  slice.actions;

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

export const setAlarmType = (type: IAlarmType) => {
  return async (dispatch: Dispatch) => dispatch(setAlarmTypeSuccess(type));
};

export const setAlarmLevel = (level: IAlarmLevel) => {
  return async (dispatch: Dispatch) => dispatch(setAlarmLevelSuccess(level));
};
