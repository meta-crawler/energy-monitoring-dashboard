import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { ISystemState } from 'src/@types/system';
import { AxiosResponse } from 'axios';
import { getSystemInfoApi, getSystemInfosApi } from 'src/lib/apis/system-info-api';

const initialState: ISystemState = {
  isLoading: false,
  error: null,
  activeSystem: null,
  systemFields: null,
  systemList: null,
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

    setActiveSystemSuccess(state, action) {
      state.activeSystem = action.payload;
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
  setActiveSystemSuccess,
  getSelectedSystemSuccess,
  getSystemsSuccess,
} = slice.actions;

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

export function setActiveSystem(systemId: string) {
  return async (dispatch: Dispatch) => dispatch(setActiveSystemSuccess(systemId));
}
