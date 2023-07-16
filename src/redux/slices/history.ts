import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IHistoryState } from 'src/@types/history';
import { getHistoryDataApi } from 'src/lib/apis/history-info-api';

const initialState: IHistoryState = {
  isLoading: false,
  error: null,
  history: null,
};

const slice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getHistoryDataSuccess(state, action) {
      state.isLoading = false;
      state.history = action.payload;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------
const { startLoading, hasError, getHistoryDataSuccess } = slice.actions;

export const getHistoryData = (startDate: string, endDate: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getHistoryDataApi(startDate, endDate);
      dispatch(getHistoryDataSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
};
