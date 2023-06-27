import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { IStringState } from 'src/@types/string';
import { AxiosResponse } from 'axios';
import { getStringInfoApi, getStringInfosApi } from 'src/lib/apis/string-info-api';

const initialState: IStringState = {
  isLoading: false,
  error: null,
  selectedString: null,
  strings: null,
};

const slice = createSlice({
  name: 'string',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getSelectedStringSuccess(state, action) {
      state.isLoading = false;
      state.selectedString = action.payload;
    },

    getStringsSuccess(state, action) {
      state.isLoading = false;
      state.strings = action.payload;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------
const { startLoading, hasError, getSelectedStringSuccess, getStringsSuccess } = slice.actions;

export function getSelectedString(systemId: string, stringId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getStringInfoApi(systemId, stringId);
      dispatch(getSelectedStringSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
}

export function getStrings(systemId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getStringInfosApi(systemId);
      dispatch(getStringsSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
}
