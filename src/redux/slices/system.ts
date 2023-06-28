import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { ISystemState } from 'src/@types/system';
import { AxiosResponse } from 'axios';
import {
  getSystemFieldsApi,
  getSystemInfoApi,
  getSystemInfosApi,
} from 'src/lib/apis/system-info-api';

const initialState: ISystemState = {
  isLoading: false,
  error: null,
  systemFields: null,
  systems: null,
  selectedSystem: null,
};

const slice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getSystemFieldsSuccess(state, action) {
      state.isLoading = false;
      state.systemFields = action.payload;
    },

    getSelectedSystemSuccess(state, action) {
      state.isLoading = false;
      state.selectedSystem = action.payload;
    },

    getSystemsSuccess(state, action) {
      state.isLoading = false;
      state.systems = action.payload;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------
const {
  startLoading,
  hasError,
  getSystemFieldsSuccess,
  getSelectedSystemSuccess,
  getSystemsSuccess,
} = slice.actions;

export function getSystemFields() {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getSystemFieldsApi();
      dispatch(getSystemFieldsSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
}

export function getSelectedSystem(systemId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getSystemInfoApi(systemId);
      dispatch(getSelectedSystemSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
}

export function getSystems() {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getSystemInfosApi();
      dispatch(getSystemsSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
}
