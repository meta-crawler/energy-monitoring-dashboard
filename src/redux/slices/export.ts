import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IExportState } from 'src/@types/export';
import { getExportDataApi } from 'src/lib/apis/export-info-api';

const initialState: IExportState = {
  isLoading: false,
  error: null,
  data: null,
};

const slice = createSlice({
  name: 'export',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getExportDataSuccess(state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------
const { startLoading, hasError, getExportDataSuccess } = slice.actions;

export const getExportData = (
  string: number,
  module: number,
  startDate: string,
  endDate: string,
  period?: number,
) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getExportDataApi(
        string,
        module,
        startDate,
        endDate,
        period,
      );
      dispatch(getExportDataSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
};
