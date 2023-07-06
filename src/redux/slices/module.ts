import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { IModuleState } from 'src/@types/module';
import { AxiosResponse } from 'axios';
import { getModuleInfoApi, getModuleInfosApi } from 'src/lib/apis/module-info-api';

const initialState: IModuleState = {
  isLoading: false,
  error: null,
  selectedModule: null,
  modules: null,
};

const slice = createSlice({
  name: 'module',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getSelectedModuleSuccess(state, action) {
      state.isLoading = false;
      state.selectedModule = action.payload;
    },

    getModulesSuccess(state, action) {
      state.isLoading = false;
      state.modules = action.payload;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------
const { startLoading, hasError, getSelectedModuleSuccess, getModulesSuccess } = slice.actions;

export function getSelectedModule(systemId: string, stringId: string, moduleId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getModuleInfoApi(systemId, stringId, moduleId);
      dispatch(getSelectedModuleSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
}

export function getModules(systemId: string, stringId: string) {
  return async (dispatch: Dispatch) => {
    dispatch(startLoading());
    try {
      const { data }: AxiosResponse = await getModuleInfosApi(systemId, stringId);
      dispatch(getModulesSuccess(data.data));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
}
